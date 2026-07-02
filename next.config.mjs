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
}

export default nextConfig
