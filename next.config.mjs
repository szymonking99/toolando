/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Keep native/binary-backed packages out of the bundle so their internal
  // path resolution (e.g. ffmpeg-static's binary path) works at runtime.
  serverExternalPackages: [
    "sharp",
    "ffmpeg-static",
    "ffprobe-static",
    "fluent-ffmpeg",
    "mupdf",
    "wawoff2",
    "ttf2woff",
    "pdf-lib",
    "@imgly/background-removal-node",
    "onnxruntime-node",
  ],
  // Because ffmpeg-static is external, Next.js won't trace its downloaded
  // binary into the serverless function. Force-include it so `spawn(ffmpeg)`
  // works in production (fixes "spawn .../ffmpeg-static/ffmpeg ENOENT").
  outputFileTracingIncludes: {
    "/api/convert": [
      "./node_modules/.pnpm/ffmpeg-static@*/node_modules/ffmpeg-static/ffmpeg",
      "./node_modules/ffmpeg-static/ffmpeg",
    ],
  },
}

export default nextConfig
