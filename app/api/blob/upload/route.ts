import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse, type NextRequest } from "next/server";
import { MAX_UPLOAD_BYTES } from "@/lib/upload-limit";

export const runtime = "nodejs";

// Blob transfer counts toward Fast Origin Transfer, then the function
// reads the blob again. Keep the token ceiling at the direct-upload size
// so a stale client cannot stage a large file.

/**
 * Token endpoint kept for older clients. New uploads are multipart and
 * never call this. The token refuses anything above the 4 MB ceiling.
 */
export async function POST(req: NextRequest) {
  const body = (await req.json()) as HandleUploadBody;

  try {
    const result = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async () => ({
        // Any file type is allowed; individual converters validate the format.
        maximumSizeInBytes: MAX_UPLOAD_BYTES,
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
