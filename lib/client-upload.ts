"use client";

import {
  MAX_UPLOAD_BYTES,
  uploadTooLargeMessage,
} from "@/lib/upload-limit";

export type ProcessOptions = {
  file: File;
  endpoint: string;
  id: string;
  /** Extra scalar fields (e.g. { quality: "80" }). */
  fields?: Record<string, string>;
  /** Kept for callers. Direct uploads have no separate progress events. */
  onUploadProgress?: (percentage: number) => void;
};

function tooLarge(): Response {
  return new Response(JSON.stringify({ error: uploadTooLargeMessage() }), {
    status: 413,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * Sends a file to a processing endpoint as multipart form data.
 * Files above {@link MAX_UPLOAD_BYTES} are rejected in the browser so they
 * never reach Vercel Blob or a Function.
 */
export async function uploadAndProcess({
  file,
  endpoint,
  id,
  fields,
}: ProcessOptions): Promise<Response> {
  if (file.size > MAX_UPLOAD_BYTES) return tooLarge();

  const body = new FormData();
  body.append("file", file);
  for (const [k, v] of Object.entries(fields ?? {})) body.append(k, v);
  return fetch(`${endpoint}?id=${id}`, { method: "POST", body });
}

/**
 * Sends several files (merge-style tools) in one multipart POST.
 * The combined size has the same ceiling as a single file.
 */
export async function uploadManyAndProcess({
  files,
  endpoint,
  id,
  fields,
}: {
  files: File[];
  endpoint: string;
  id: string;
  fields?: Record<string, string>;
  onUploadProgress?: (percentage: number) => void;
}): Promise<Response> {
  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  if (totalBytes > MAX_UPLOAD_BYTES) return tooLarge();

  const body = new FormData();
  for (const f of files) body.append("file", f);
  for (const [k, v] of Object.entries(fields ?? {})) body.append(k, v);
  return fetch(`${endpoint}?id=${id}`, { method: "POST", body });
}
