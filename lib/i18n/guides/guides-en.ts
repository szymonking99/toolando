import type { GuideArticle } from "./types"
import type { GuideSlug } from "./slugs"
import { guidesPl } from "./guides-pl"
import { guidesBatch2En } from "./batch-2"
import { guidesBatch3En } from "./batch-3"
import { guidesBatch4En } from "./batch-4"

export const guidesEn: Record<GuideSlug, GuideArticle> = {
  "mp3-vs-wav": {
    ...guidesPl["mp3-vs-wav"],
    title: "MP3 vs WAV — when to convert audio?",
    description:
      "MP3 vs WAV compared: lossy vs lossless compression, file size, DAW editing, and which format to pick.",
    sections: [
      {
        paragraphs: [
          "MP3 uses lossy compression — files are small but some audio data is lost forever. WAV preserves full quality (lossless or uncompressed) but files can be 10× larger than MP3.",
          "In practice: listening on your phone → MP3 is fine. Editing a podcast in Audacity or mixing in FL Studio → work with WAV or FLAC.",
        ],
      },
      {
        title: "When to convert MP3 → WAV",
        paragraphs: [
          "When a platform or app requires a lossless format for further editing.",
          "When you plan multiple cuts, effects, and mastering — every operation on MP3 degrades quality.",
          "Note: MP3 → WAV won't recover lost quality but stops further degradation during editing.",
        ],
      },
      {
        title: "When to convert WAV → MP3",
        paragraphs: [
          "Sending a recording by email or chat — smaller file = faster transfer.",
          "Publishing a podcast or music for listening, not editing.",
          "Saving disk space in a large audio library.",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesPl["pdf-to-jpg"],
    title: "How to convert PDF to JPG for print and the web",
    description:
      "When to export PDF pages as JPG, what resolution to use, and when PNG is better.",
    sections: [
      {
        paragraphs: [
          "PDF preserves page layout. Sometimes you need individual pages as images — for a website, PowerPoint, or printing a single page.",
          "The PDF → JPG converter in Toolando.tech renders each page as a separate JPG. Files are never stored — deleted immediately after conversion.",
        ],
      },
      {
        title: "JPG or PNG from PDF?",
        paragraphs: [
          "JPG — smaller files, ideal for photos and documents without transparency.",
          "PNG — lossless with transparency; better for graphics with text and sharp edges.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesPl["webp-avif-images"],
    title: "WebP and AVIF — modern image formats for websites",
    description:
      "WebP and AVIF vs JPG/PNG: compression, browser support, and PageSpeed optimization.",
    sections: [
      {
        paragraphs: [
          "JPG and PNG have dominated the web for years, but WebP produces files 25–35% smaller than JPG at the same visual quality. AVIF goes further — files can be half the size of WebP.",
          "All modern browsers support WebP. AVIF has slightly weaker support in older Safari versions.",
        ],
      },
      {
        title: "Deployment strategy",
        paragraphs: [
          "Convert JPG → WebP for product photos and banners — speeds up page load.",
          "Keep JPG as fallback for older browsers (HTML <picture> tag).",
          "For logos with transparency: PNG → WebP instead of JPG.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesPl["extract-audio-from-video"],
    title: "Extracting audio from video — the legal alternative",
    description:
      "How to legally extract an audio track from your own video file (MP4, MOV, MKV).",
    sections: [
      {
        paragraphs: [
          "Sometimes you have a video file and only need the audio. Toolando.tech extracts audio from MP4, MOV, AVI, MKV and saves it as MP3, WAV, FLAC, or AAC.",
          "This is legal on your own file — unlike downloading music from YouTube or TikTok, which Toolando.tech deliberately does not offer.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesPl["json-csv-xml"],
    title: "JSON, CSV, and XML — converting data between formats",
    description:
      "When to use JSON, CSV, TSV, and XML and how to convert between them without losing structure.",
    sections: [
      {
        paragraphs: [
          "JSON is the REST API and app config standard. CSV and TSV are used for Excel import. XML is used in older enterprise systems and RSS.",
          "JSON → CSV opens an API response in Excel. CSV → JSON prepares data for a REST API. Toolando.tech preserves data structure during conversion.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesPl["online-file-security"],
    title: "File security in online tools",
    description:
      "How Toolando.tech processes files, when tools run locally in the browser, and privacy details.",
    sections: [
      {
        paragraphs: [
          "Uploading files to online tools raises natural concerns. At Toolando.tech files are used solely for the operation you request — conversion, compression, or preview.",
          "After the job completes, files are deleted from the server. Some tools (universal opener) run entirely in your browser — the file never leaves your computer. Connection is encrypted (HTTPS).",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesPl["lossy-vs-lossless"],
    title: "Lossy vs lossless compression — a simple guide",
    description:
      "How lossy and lossless compression differ and how to avoid quality loss when converting.",
    sections: [
      {
        paragraphs: [
          "Lossy formats (MP3, JPG, AAC, H.264) discard data to shrink files. Lossless formats (FLAC, PNG, WAV, ZIP) keep all data but produce larger files.",
          "Rule: only convert lossy → lossless when you must — you won't recover lost quality. Convert lossy → lossy only once — each re-conversion degrades the result.",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesPl["heic-iphone-jpg"],
    title: "HEIC from iPhone — how to open and convert to JPG",
    description:
      "Why iPhone saves HEIC, compatibility issues, and how to convert to JPG or PNG.",
    sections: [
      {
        paragraphs: [
          "Apple saves photos in HEIC by default — smaller than JPG at the same quality. Problem: Windows without an extension, older apps, and many services don't support HEIC.",
          "Solution: convert HEIC → JPG or HEIC → PNG in Toolando.tech before emailing, uploading, or printing. You can also set iPhone to \"Most Compatible\" (JPG) in Settings.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesPl["pdf-vs-docx"],
    title: "PDF vs DOCX — which format when?",
    description:
      "PDF vs DOCX differences: editing, print, archiving, and when to convert which way.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) is for editing text — content, styles, headings. PDF locks layout — identical on every device, ideal for invoices, contracts, and CVs.",
          "Convert DOCX → PDF before sending \"for reading only.\" Convert PDF → DOCX only when you need to edit text — layout may break. For archiving and print, always choose PDF.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesPl["video-social-media"],
    title: "Video for social media — MP4, resolution, and bitrate",
    description:
      "How to prepare video for Instagram, TikTok, YouTube: MP4 format, H.264, 1080p resolution.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube, and Facebook prefer MP4 with H.264 video and AAC audio. Convert MOV, AVI, or MKV to MP4 before publishing to avoid upload errors.",
          "1080p (1920×1080) is enough for most platforms. Higher bitrate = better quality but larger file. See the format encyclopedia for MP4, WebM, and MOV details.",
        ],
      },
    ],
  },
  "choose-audio-bitrate": {
    ...guidesPl["choose-audio-bitrate"],
    title: "Which MP3 or AAC bitrate should you choose?",
    description:
      "128 vs 192 vs 320 kbps — practical picks for podcasts, music, and video without wasting disk space.",
    sections: [
      {
        paragraphs: [
          "Bitrate is the amount of data per second of audio. Higher bitrate usually means better sound but larger files. With MP3, the gap between 128 and 320 kbps is most audible on good speakers and dense music.",
          "For speech (podcasts, interviews) 96–128 kbps mono is often enough. For music in headphones, 192–256 kbps stereo is a solid compromise. 320 kbps is the practical MP3 ceiling — going higher rarely helps because the format is still lossy.",
        ],
      },
      {
        title: "MP3, AAC, and Opus — quick comparison",
        paragraphs: [
          "AAC (M4A) at the same bitrate usually beats MP3 — that's why YouTube and Apple Music use it.",
          "Opus shines in VoIP and streaming at low bitrates (64–128 kbps).",
          "For studio archives keep WAV or FLAC — a lossy bitrate won't restore missing data.",
        ],
      },
      {
        title: "Common mistakes",
        paragraphs: [
          "Upscaling a low-quality MP3 to a higher bitrate does not improve sound — only file size grows.",
          "Re-encoding the same track multiple times (MP3 → AAC → MP3) degrades quality each round.",
          "For video projects extract audio from your own MP4 instead of downloading someone else's music — copyright matters.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesPl["prepare-images-for-web"],
    title: "How to prepare images for the web (JPG, WebP, AVIF)",
    description:
      "Resolution, compression, and format — speed up your site without visible quality loss.",
    sections: [
      {
        paragraphs: [
          "Huge camera photos (4000×3000 px) slow every page. Before uploading to a blog or store, resize to the real display size — e.g. 1600 px width for a hero banner.",
          "JPG remains the safe universal choice. WebP and AVIF produce smaller files at the same visual quality — use them in modern stacks with a <picture> fallback for older browsers.",
        ],
      },
      {
        title: "When PNG instead of JPG",
        paragraphs: [
          "Logos, icons, and UI screenshots — PNG or lossless WebP keep sharp edges.",
          "Product photos on white backgrounds often compress fine as JPG quality 80–85.",
          "Avoid re-saving the same banner as JPG repeatedly — each pass adds artifacts.",
        ],
      },
      {
        title: "Pre-publish checklist",
        paragraphs: [
          "1) Resize to target width in px. 2) Pick format (JPG/WebP/AVIF). 3) Check file weight (<200 KB thumbs, <500 KB large blog images). 4) Run PageSpeed Insights and compare LCP before/after.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesPl["docx-pdf-workflow"],
    title: "DOCX → PDF for office work — when and how to convert",
    description:
      "Sending CVs, invoices, and contracts: why PDF beats DOCX and how to avoid broken fonts.",
    sections: [
      {
        paragraphs: [
          "DOCX is for editing — great when the recipient has Word and needs to change text. PDF is for reading — layout, fonts, and margins look identical on Windows, Mac, and phone.",
          "Before sending a CV, proposal, or contract convert DOCX → PDF. Recipients won't accidentally edit content and you avoid substitute fonts breaking your branding.",
        ],
      },
      {
        title: "When NOT to convert PDF → DOCX",
        paragraphs: [
          "Scanned invoices and signed contracts — keep PDF as the archive; OCR is a separate step.",
          "Complex multi-page layouts (catalogs, brochures) — DOCX conversion often breaks pagination.",
          "If you only need a text snippet, copy from PDF instead of converting the whole file.",
        ],
      },
      {
        title: "Security and privacy",
        paragraphs: [
          "At Toolando.tech DOCX and PDF files are used only for conversion and deleted when the job finishes.",
          "For sensitive documents (IDs, bank numbers) use HTTPS and don't leave copies on public cloud drives without encryption.",
        ],
      },
    ],
  },
  ...guidesBatch2En,
  ...guidesBatch3En,
  ...guidesBatch4En,
}
