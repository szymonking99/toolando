/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Keep native/binary-backed packages out of the bundle so their internal
  // path resolution works at runtime.
  serverExternalPackages: [
    "sharp",
    "@ffmpeg-installer/ffmpeg",
    "mupdf",
    "wawoff2",
    "ttf2woff",
    "pdf-lib",
    "@pdf-lib/fontkit",
    "mammoth",
  ],
  // Force-include ffmpeg binaries and PDF fonts in the serverless bundle.
  outputFileTracingIncludes: {
    "/api/convert": [
      "./node_modules/@ffmpeg-installer/**/ffmpeg*",
      "./lib/fonts/*.ttf",
    ],
  },
}

export default nextConfig
