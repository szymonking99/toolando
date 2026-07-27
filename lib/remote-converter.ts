import "server-only";

/** POST file to the VPS doc-converter service (LibreOffice + archives). */
export async function convertViaRemoteService(
  input: Buffer,
  fromExt: string,
  toExt: string,
): Promise<Buffer> {
  const baseUrl = process.env.DOC_CONVERTER_URL!.trim().replace(/\/$/, "");
  const secret = process.env.DOC_CONVERTER_SECRET?.trim();

  const form = new FormData();
  form.append(
    "file",
    new Blob([new Uint8Array(input)]),
    `input.${fromExt.toLowerCase()}`,
  );

  const url = `${baseUrl}/v1/convert?from=${encodeURIComponent(fromExt)}&to=${encodeURIComponent(toExt)}`;
  const headers: Record<string, string> = {};
  if (secret) headers.Authorization = `Bearer ${secret}`;

  const timeoutMs = Number(process.env.DOC_CONVERTER_TIMEOUT_MS || 120_000);
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: form,
    signal: AbortSignal.timeout(timeoutMs),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(
      `Remote converter ${res.status}: ${detail.slice(0, 400)}`,
    );
  }

  return Buffer.from(await res.arrayBuffer());
}

export function hasRemoteConverter(): boolean {
  return Boolean(process.env.DOC_CONVERTER_URL?.trim());
}
