import { NextRequest } from "next/server";
import { getTool, normalizeFormat } from "@/lib/tools";
import { convertFile, ConversionError } from "@/lib/convert";

export const runtime = "nodejs";
export const maxDuration = 300;

// 100 MB upload ceiling.
const MAX_BYTES = 100 * 1024 * 1024;

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

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return json({ error: "Nieprawidłowe dane formularza." }, 400);
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return json({ error: "Nie przesłano pliku." }, 400);
  }

  if (file.size === 0) {
    return json({ error: "Przesłany plik jest pusty." }, 400);
  }

  if (file.size > MAX_BYTES) {
    return json({ error: "Plik jest za duży (limit 100 MB)." }, 413);
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

  try {
    const input = Buffer.from(await file.arrayBuffer());
    const result = await convertFile(tool, input, file.name);

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
      {
        error: "Wystąpił nieoczekiwany błąd podczas konwersji.",
        // TEMP DEBUG — remove after diagnosing native-binary failure.
        debug:
          err instanceof Error
            ? { message: err.message, stack: err.stack?.split("\n").slice(0, 6) }
            : String(err),
      },
      500,
    );
  }
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
