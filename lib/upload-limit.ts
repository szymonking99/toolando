/**
 * Ceiling for a file that still travels through a Vercel Function.
 *
 * Hobby Fast Origin Transfer is 10 GB per rolling 30 days, counted on the
 * way in and the way out. Anything above the 4.5 MB function body limit used
 * to be staged in Vercel Blob and then read back by the function, so one
 * video was billed three times. Stay on a direct multipart upload.
 */
export const MAX_UPLOAD_BYTES = 4 * 1024 * 1024

export function uploadTooLargeMessage(): string {
  return "Plik jest za duży (limit 4 MB)."
}
