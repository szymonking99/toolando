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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },
  // Force-include ffmpeg binaries and PDF fonts in the serverless bundle.
  outputFileTracingIncludes: {
    "/api/convert": [
      "./node_modules/@ffmpeg-installer/**/ffmpeg*",
      "./lib/fonts/*.ttf",
    ],
    "/api/tools": [
      "./node_modules/@ffmpeg-installer/**/ffmpeg*",
    ],
  },
}

export default nextConfig
