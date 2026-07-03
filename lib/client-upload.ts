"use client";

import { upload } from "@vercel/blob/client";

// Files at or below this size are sent directly as multipart form data.
// Anything larger is uploaded straight to Vercel Blob first, bypassing the
// 4.5 MB serverless request-body limit.
const DIRECT_LIMIT = 4 * 1024 * 1024;

export type ProcessOptions = {
  file: File;
  endpoint: string;
  id: string;
  /** Extra scalar fields (e.g. { quality: "80" }). */
  fields?: Record<string, string>;
  /** Called with 0-100 while a large file uploads to Blob. */
  onUploadProgress?: (percentage: number) => void;
};

/**
 * Uploads a single file and calls the processing endpoint. Small files go
 * through a normal multipart POST; large files are streamed to Vercel Blob and
 * the endpoint is then called with a JSON reference to the uploaded blob.
 */
export async function uploadAndProcess({
  file,
  endpoint,
  id,
  fields,
  onUploadProgress,
}: ProcessOptions): Promise<Response> {
  if (file.size <= DIRECT_LIMIT) {
    const body = new FormData();
    body.append("file", file);
    for (const [k, v] of Object.entries(fields ?? {})) body.append(k, v);
    return fetch(`${endpoint}?id=${id}`, { method: "POST", body });
  }

  const blob = await upload(file.name, file, {
    access: "private",
    handleUploadUrl: "/api/blob/upload",
    multipart: true,
    onUploadProgress: (p) => onUploadProgress?.(p.percentage),
  });

  return fetch(`${endpoint}?id=${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pathname: blob.pathname,
      filename: file.name,
      type: file.type,
      fields: fields ?? {},
    }),
  });
}

/**
 * Uploads multiple files (used by merge-style tools) and calls the endpoint.
 * Large files are uploaded to Blob in parallel; the endpoint receives a JSON
 * array of blob references. If every file is small, a single multipart POST
 * is used instead.
 */
export async function uploadManyAndProcess({
  files,
  endpoint,
  id,
  fields,
  onUploadProgress,
}: {
  files: File[];
  endpoint: string;
  id: string;
  fields?: Record<string, string>;
  onUploadProgress?: (percentage: number) => void;
}): Promise<Response> {
  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);

  if (totalBytes <= DIRECT_LIMIT) {
    const body = new FormData();
    for (const f of files) body.append("file", f);
    for (const [k, v] of Object.entries(fields ?? {})) body.append(k, v);
    return fetch(`${endpoint}?id=${id}`, { method: "POST", body });
  }

  let uploaded = 0;
  const blobs = await Promise.all(
    files.map(async (file) => {
      const blob = await upload(file.name, file, {
        access: "private",
        handleUploadUrl: "/api/blob/upload",
        multipart: true,
        onUploadProgress: (p) => {
          // Approximate combined progress across all files.
          const done = uploaded + (p.loaded ?? 0);
          onUploadProgress?.(Math.min(100, Math.round((done / totalBytes) * 100)));
        },
      });
      uploaded += file.size;
      return { pathname: blob.pathname, filename: file.name, type: file.type };
    }),
  );

  return fetch(`${endpoint}?id=${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ blobs, fields: fields ?? {} }),
  });
}
