import "server-only";

import { get, del } from "@vercel/blob";
import type { NextRequest } from "next/server";
import { ConversionError } from "@/lib/convert";

export type IntakeFile = {
  buffer: Buffer;
  name: string;
  type: string;
};

export type Intake = {
  files: IntakeFile[];
  /** Reads an extra scalar field (e.g. "quality"). */
  field: (key: string) => string | null;
  /** Deletes any Blob-backed inputs. Safe to call for direct uploads too. */
  cleanup: () => Promise<void>;
};

type BlobRef = { pathname: string; filename: string; type?: string };

async function streamToBuffer(
  stream: ReadableStream<Uint8Array>,
): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) chunks.push(value);
  }
  return Buffer.concat(chunks);
}

/**
 * Normalizes an incoming request into a list of files plus extra fields,
 * regardless of whether the client sent a small multipart form (direct upload)
 * or a JSON body referencing files already uploaded to Vercel Blob.
 */
export async function readIntake(req: NextRequest): Promise<Intake> {
  const contentType = req.headers.get("content-type") ?? "";

  // Large files: JSON body referencing private blobs the client already uploaded.
  if (contentType.includes("application/json")) {
    const body = (await req.json()) as {
      blobs?: BlobRef[];
      pathname?: string;
      filename?: string;
      type?: string;
      fields?: Record<string, unknown>;
    };

    const refs: BlobRef[] = body.blobs
      ? body.blobs
      : body.pathname
        ? [{ pathname: body.pathname, filename: body.filename ?? "plik", type: body.type }]
        : [];

    if (refs.length === 0) {
      throw new ConversionError("Nie przesłano pliku.", 400);
    }

    const files = await Promise.all(
      refs.map(async (ref) => {
        const result = await get(ref.pathname, { access: "private" });
        if (!result || result.statusCode !== 200) {
          throw new ConversionError(
            "Nie znaleziono przesłanego pliku. Spróbuj ponownie.",
            404,
          );
        }
        const buffer = await streamToBuffer(result.stream);
        return {
          buffer,
          name: ref.filename,
          type: ref.type ?? result.blob.contentType,
        };
      }),
    );

    const fields = body.fields ?? {};
    return {
      files,
      field: (key) =>
        fields[key] != null ? String(fields[key]) : null,
      cleanup: async () => {
        await Promise.allSettled(refs.map((r) => del(r.pathname)));
      },
    };
  }

  // Small files: classic multipart form upload.
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    throw new ConversionError("Nieprawidłowe dane formularza.", 400);
  }

  const entries = formData
    .getAll("file")
    .filter((f): f is File => f instanceof File);

  const files = await Promise.all(
    entries.map(async (f) => ({
      buffer: Buffer.from(await f.arrayBuffer()),
      name: f.name,
      type: f.type,
    })),
  );

  return {
    files,
    field: (key) => {
      const v = formData.get(key);
      return typeof v === "string" ? v : null;
    },
    cleanup: async () => {},
  };
}
