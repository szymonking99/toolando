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
    "@ffmpeg-installer/ffmpeg",
    "ffmpeg-static",
    "ffprobe-static",
    "fluent-ffmpeg",
    "mupdf",
    "wawoff2",
    "ttf2woff",
    "pdf-lib",
  ],
  // These packages are marked external, so Next.js won't trace their binaries
  // into the serverless function on its own. Force-include the ffmpeg binaries
  // so `spawn(ffmpeg)` works in production (fixes "spawn .../ffmpeg ENOENT").
  // @ffmpeg-installer ships the binary as a plain package file (no postinstall
  // download), which is the reliable path; ffmpeg-static is a fallback.
  outputFileTracingIncludes: {
    "/api/convert": [
      "./node_modules/.pnpm/@ffmpeg-installer+*/node_modules/@ffmpeg-installer/**/ffmpeg",
      "./node_modules/@ffmpeg-installer/**/ffmpeg",
      "./node_modules/.pnpm/ffmpeg-static@*/node_modules/ffmpeg-static/ffmpeg",
      "./node_modules/ffmpeg-static/ffmpeg",
    ],
  },
}

export default nextConfig
