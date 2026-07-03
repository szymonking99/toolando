import { NextRequest } from "next/server";
import { getTool, normalizeFormat } from "@/lib/tools";
import { convertFile, ConversionError } from "@/lib/convert";
import { readIntake } from "@/lib/upload-intake";

export const runtime = "nodejs";
export const maxDuration = 300;

// 500 MB upload ceiling (large files arrive via Vercel Blob).
const MAX_BYTES = 500 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const id = new URL(req.url).searchParams.get("id");
  const tool = getTool(id ?? "");

  if (!tool) {
    return json({ error: "Nieznane narzędzie." }, 404);
  }

  if (!tool.supported) {
    return json(
      { error: tool.unsupportedReason ?? "Ta konwersja jest niedostępna." },
      501,
    );
  }

  let cleanup: (() => Promise<void>) | null = null;

  try {
    const intake = await readIntake(req);
    cleanup = intake.cleanup;

    const file = intake.files[0];
    if (!file) {
      return json({ error: "Nie przesłano pliku." }, 400);
    }

    if (file.buffer.length === 0) {
      return json({ error: "Przesłany plik jest pusty." }, 400);
    }

    if (file.buffer.length > MAX_BYTES) {
      return json({ error: "Plik jest za duży (limit 500 MB)." }, 413);
    }

    // Light extension check so users get a friendly message early.
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (ext && normalizeFormat(ext) !== tool.from) {
      return json(
        {
          error: `Ten konwerter przyjmuje pliki .${tool.from}, a przesłano .${ext}.`,
        },
        400,
      );
    }

    const result = await convertFile(tool, file.buffer, file.name);

    return new Response(new Uint8Array(result.buffer), {
      status: 200,
      headers: {
        "Content-Type": result.contentType,
        "Content-Disposition": `attachment; filename="${encodeURIComponent(
          result.filename,
        )}"`,
        "Content-Length": String(result.buffer.length),
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    if (err instanceof ConversionError) {
      return json({ error: err.message }, err.status);
    }
    console.error("[v0] conversion failed:", err);
    return json(
      { error: "Wystąpił nieoczekiwany błąd podczas konwersji." },
      500,
    );
  } finally {
    // Always remove the uploaded Blob input, whether conversion succeeded or not.
    if (cleanup) {
      await cleanup().catch((e) =>
        console.error("[v0] blob cleanup failed:", e),
      );
    }
  }
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
