import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";

// Upload ceiling for direct-to-Blob client uploads (500 MB).
const MAX_BYTES = 500 * 1024 * 1024;

/**
 * Issues short-lived client upload tokens so the browser can upload large files
 * straight to Vercel Blob, bypassing the 4.5 MB serverless request body limit.
 * The uploaded blob is read (and deleted) later by the conversion routes.
 */
export async function POST(req: NextRequest) {
  const body = (await req.json()) as HandleUploadBody;

  try {
    const result = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async () => ({
        // Any file type is allowed; individual converters validate the format.
        maximumSizeInBytes: MAX_BYTES,
        addRandomSuffix: true,
        // Token is only valid for a short window to start the upload.
        validUntil: Date.now() + 60 * 60 * 1000,
      }),
      // No-op: cleanup is handled by the conversion route and the cleanup cron.
      onUploadCompleted: async () => {},
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("[v0] blob upload token failed:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    );
  }
}
