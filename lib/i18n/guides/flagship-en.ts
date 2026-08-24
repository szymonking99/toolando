import type { GuideArticle } from "./types"
import { flagshipPl } from "./flagship-pl"

const AUTHOR = "Szymon"
const UPDATED = "2026-08-24"

/** English long-form counterparts of the Polish flagship guides. */
export const flagshipEn: typeof flagshipPl = {
  "when-not-to-convert-files": {
    slug: "when-not-to-convert-files",
    title: "When NOT to convert a file — cases where the original wins",
    description:
      "Conversion is not always an upgrade. When to keep MP3, PNG, FLAC or a signed PDF, and why “converting up” does not restore quality.",
    published: "2026-07-10",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["flac", "png", "wav", "pdf", "mp3"],
    relatedTools: ["mp3-to-wav", "jpg-to-png"],
    sections: [
      {
        paragraphs: [
          "A converter is one click. In tests on my own files I wreck quality most often when I convert for no reason — “just in case”, because someone asked for another extension, or because I thought WAV made from MP3 would sound like a studio.",
          "The rule I use: conversion should fix a real problem (Explorer won’t open HEIC, mail rejects an 80 MB WAV, the print shop wants PDF). If there is no problem, keep the original.",
        ],
      },
      {
        title: "Do not “convert up” from a lossy file",
        paragraphs: [
          "MP3 → WAV or MP3 → FLAC does not bring back frequencies the encoder already threw away. You get a larger file with the same hole in the spectrum. I checked this on a 128 kbps podcast: the WAV was ~10× heavier and the spectrogram in Audacity still looked like the MP3.",
          "JPG → PNG does not recover detail either. PNG will faithfully store JPEG artifacts — only heavier. JPG → PNG is useful when you need transparency or further edits without another generation loss, and the source is already JPEG.",
        ],
      },
      {
        title: "Seven cases where I leave the original",
        paragraphs: [
          "PNG logo with transparency — JPEG will fill the background. Don’t flatten a logo into a photo.",
          "WAV or FLAC from a recording session — MP3 only at the end, when you ship a listen copy. Don’t flatten the archive.",
          "PDF with a qualified signature or seal — converting to DOCX or an image usually voids the signature.",
          "Video that is already H.264 in MP4 and plays everywhere — recoding to WebM “because it’s modern” costs quality and time.",
          "Scanned contracts in PDF — don’t drag them to DOCX just to email an attachment. Layout will break; the content is still a bitmap.",
          "SVG logo — rasterize to PNG at a specific size (favicon, social). Don’t replace the SVG source with a raster forever.",
          "A file the destination already accepts. Instagram, Gmail and most CMS stacks take JPG and MP4. Don’t convert preventively.",
        ],
      },
      {
        title: "Before you hit Convert",
        paragraphs: [
          "Keep a copy of the original. An online conversion does not undo a wrong format.",
          "Check the recipient’s size limit, not which format “looks nicer”. Same-format compression is often enough.",
          "If you don’t know whether the format is lossy, assume it is — and don’t run a second conversion on the same material.",
        ],
      },
    ],
  },
  "online-file-security": {
    slug: "online-file-security",
    title: "File security in an online tool — how Toolando actually handles uploads",
    description:
      "What happens after you upload, which tools never leave the browser, and what I deliberately do not do with your files.",
    published: "2026-03-01",
    updated: UPDATED,
    author: AUTHOR,
    sections: [
      {
        paragraphs: [
          "Uploading a CV, an invoice or a phone recording to a stranger’s site is a fair reason to worry. I build this service: I don’t want your files. I need them only for the job you asked for.",
          "There are two modes. Some tools (calculators, JWT decoder, the universal opener) run in the browser — the file never hits the server. Audio/video conversion and Word → PDF go to the server, because the browser will not run LibreOffice or FFmpeg on large files.",
        ],
      },
      {
        title: "What happens on the server",
        paragraphs: [
          "The connection is HTTPS. The file lands in a temp directory, the engine (FFmpeg, Sharp, LibreOffice) runs, the result comes back, source and output are deleted when the job ends.",
          "I don’t keep an “archive just in case”. I don’t resell uploads. I don’t add them to an AI training set — and I don’t send your PDF to someone else’s model to “help with layout”.",
          "A premium account may remember operation history (which converter, when), not the files themselves. Details are in the privacy policy.",
        ],
      },
      {
        title: "What this site will not do",
        paragraphs: [
          "I don’t download video or music from YouTube, TikTok, Instagram or Spotify. That is other people’s content and other people’s CDNs. You can upload a file you already have — an OBS export, a phone recording, a scan.",
          "I don’t ask for cloud passwords. There is no “connect Google Drive and vacuum the disk” shortcut.",
        ],
      },
      {
        title: "When you should not upload even here",
        paragraphs: [
          "ID scans, national ID numbers, recordings under a company NDA — if your employer forbids SaaS, use software on your machine (LibreOffice, local FFmpeg).",
          "If you must convert something sensitive online, check whether the tool is browser-only (address bar, no server progress bar). On Toolando, calculators and some utilities work that way.",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    slug: "heic-iphone-jpg",
    title: "iPhone HEIC on Windows — how to open it and when JPG is the right target",
    description:
      "Why iPhone photos don’t preview in Explorer, what HEIC → JPG actually loses, and how I test the conversion on Windows.",
    published: "2026-03-15",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["heic", "jpg", "png"],
    relatedTools: ["heic-to-jpg", "heic-to-png"],
    sections: [
      {
        paragraphs: [
          "Apple stores photos as HEIC because the file is clearly lighter than JPG at similar sharpness. The pain starts when you drop the gallery on Windows, into old Word, or a print shop that does not speak HEIC. Explorer shows an icon, not a thumbnail. Outlook is picky. The print shop emails you back.",
          "I test this on Windows because that is the usual ticket: “I got iPhone photos and nothing opens.” HEIC → JPG on Toolando is there to close that ticket, not to “improve” the picture.",
        ],
      },
      {
        title: "What you lose with HEIC → JPG",
        paragraphs: [
          "JPG has no transparency (phone photos usually don’t either). JPEG adds artifacts — around quality 85 they are usually invisible on a phone; at 60 skies and skin start to band.",
          "Some metadata (orientation, date) carries over; GPS in EXIF does too if it was in the HEIC. If you publish a photo of your house, strip EXIF first — changing the extension does not do that for you.",
          "Live Photo is two files (image + a short MOV). An image converter will not turn that into a “live” JPG. You keep a still.",
        ],
      },
      {
        title: "JPG or PNG from HEIC",
        paragraphs: [
          "Photos — JPG. PNG from a 12 MP phone shot is needlessly heavy.",
          "Screenshots or sharp text — PNG if edges matter.",
          "On the iPhone you can also kill the problem at the source: Settings → Camera → Formats → Most Compatible. New shots are JPG. It does not rewrite old HEIC.",
        ],
      },
      {
        title: "What not to do",
        paragraphs: [
          "Don’t round-trip HEIC → JPG → HEIC “to save space”. The second loss buys you nothing.",
          "Don’t send raw HEIC to a bank or government portal “because it’s smaller” — they want JPG or PDF, not Apple’s container.",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    slug: "mp3-vs-wav",
    title: "MP3 vs WAV — when to convert audio, and when not to",
    description:
      "WAV does not heal MP3. When to stay lossless, when to send MP3, and what I check after conversion (duration, bitrate, a normal player).",
    published: "2026-01-15",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["mp3", "wav", "flac"],
    relatedTools: ["mp3-to-wav", "wav-to-mp3"],
    sections: [
      {
        paragraphs: [
          "MP3 is small because the encoder throws away sounds you’re “not supposed to hear”. WAV keeps the samples — one minute of stereo 16-bit 44.1 kHz is about 10 MB; the same material at MP3 192 kbps is about 1.4 MB.",
          "On a phone, MP3 is enough. For cutting a podcast in Audacity or mixing further, I prefer WAV or FLAC so I don’t stack another generation of loss on every export.",
        ],
      },
      {
        title: "MP3 → WAV does not restore quality",
        paragraphs: [
          "I say this next to the tool on purpose. WAV-after-MP3 is a wrapper around the same damaged layer. The spectrogram above ~16 kHz stays empty if the source was 128 kbps.",
          "When I still convert MP3 → WAV: the editor won’t import MP3, or I want to stop further degradation (cuts, fades, normalization) on material that is already lossy. That is not analog mastering.",
        ],
      },
      {
        title: "When WAV → MP3 makes sense",
        paragraphs: [
          "Email, Messenger, WhatsApp — size limits.",
          "A podcast or demo for listening, not for further production.",
          "A headphone copy on the phone. Then I keep WAV/FLAC on disk and make MP3 as an export, not the other way around.",
        ],
      },
      {
        title: "How I check the result",
        paragraphs: [
          "Duration in seconds should match the source (a fraction of a second can be the encoder; several seconds is a bug).",
          "MP3 bitrate: speech 96–128 kbps, music 192–256, 320 is the practical ceiling of the format.",
          "I open the result in a normal Windows player, not only in the browser. If VLC won’t play it, the user will have the same problem.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    slug: "lossy-vs-lossless",
    title: "Lossy vs lossless compression — how not to eat quality while converting",
    description:
      "MP3, JPG, H.264 versus FLAC, PNG, WAV. One rule: don’t encode the same material lossy twice.",
    published: "2026-03-10",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["mp3", "flac", "jpg", "png", "wav"],
    sections: [
      {
        paragraphs: [
          "Lossy formats (MP3, AAC, JPG, HEIC, H.264) throw data away so the file is small. Lossless (FLAC, PNG, WAV, ZIP) pack or don’t pack, but after decoding you have the same bits.",
          "A container (MP4, MKV, PDF) is a box — it does not tell you whether the inside is lossy. MP4 with H.264 is lossy. A ZIP of PNGs is lossless relative to those PNGs.",
        ],
      },
      {
        title: "One loss, not a loop",
        paragraphs: [
          "Every extra lossy encode adds artifacts. A Messenger JPG uploaded to Facebook and compressed again for email looks like a watercolor. No converter fixes that.",
          "Audio is the same: MP3 → AAC → MP3. Don’t. If you only need another container, transcode only when the player truly cannot read the source.",
        ],
      },
      {
        title: "Examples from tests",
        paragraphs: [
          "Music: FLAC in the archive, MP3 on the phone. Never FLAC → MP3 → FLAC.",
          "Photos: camera JPG is already lossy — compress gently (quality 80+) or go to WebP once, for publish.",
          "UI screenshots: PNG. JPG on interface text smears the letters.",
          "Video: don’t recode 4K H.264 to H.264 “for compatibility” if it already plays. Compress before sending — once, with a bitrate you chose.",
        ],
      },
      {
        title: "A 10-second check",
        paragraphs: [
          "Will the recipient open the original? If yes — don’t convert.",
          "Are you going lossy → lossless and expecting a miracle? Don’t.",
          "Is this the second conversion of the same file this week? Stop and go back to the oldest copy.",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    slug: "compress-images-without-quality-loss",
    title: "Compressing JPG and PNG — cutting weight without obvious noise",
    description:
      "Compression is not a format change. Which quality I use on a 2000 px product shot, when WebP wins, and when to leave PNG text alone.",
    published: "2026-05-20",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["jpg", "png", "webp"],
    relatedTools: ["kompresor-obrazow", "jpg-to-webp", "png-to-webp"],
    sections: [
      {
        paragraphs: [
          "Compression keeps the extension: still JPG or PNG, just lighter. Converting to WebP is a format change — often smaller at the same sharpness, but print shops and some offices want JPG.",
          "On Toolando’s compressor I tested 2000×2000 product photos. Around quality 80%, size dropped 40–60% with no artifacts I could see on a monitor. At 50%, skies and backgrounds started to swim.",
        ],
      },
      {
        title: "Resolution first, then quality",
        paragraphs: [
          "A 4000 px photo on a blog that shows 800 px is waste. Resize to the real display width (e.g. 1600 px for a hero), then turn quality down.",
          "Shop thumbnail: 800 px, JPG 75–85 or WebP. Hero: 1600–1920 px. Don’t keep 12 MP “for sharpness” in the CMS — the browser will downscale it anyway, only slower.",
        ],
      },
      {
        title: "PNG with text hates aggression",
        paragraphs: [
          "Screenshots, charts, UI — PNG or lossless WebP. JPG on code and labels adds colored noise on edges.",
          "Logo with transparency: PNG. PNG compressors can cut weight without touching pixels. Don’t turn a logo into JPG and lose alpha.",
        ],
      },
      {
        title: "What not to do",
        paragraphs: [
          "Don’t compress the same JPG five times. Each save adds DCT.",
          "Don’t expect a compressor to repair a file that already went through Messenger. The source has to be close to the camera.",
          "If the CMS requires JPG, compress JPG. If you own the HTML — WebP with a JPG in <picture>.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    slug: "docx-pdf-workflow",
    title: "DOCX → PDF for office work — fonts, tables, and LibreOffice",
    description:
      "Why I send CVs and contracts as PDF, when PDF → DOCX wrecks layout, and why the server runs LibreOffice instead of a browser engine.",
    published: "2026-06-01",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["docx", "pdf", "odt"],
    relatedTools: ["docx-to-pdf", "pdf-to-docx", "odt-to-docx"],
    sections: [
      {
        paragraphs: [
          "DOCX is for editing. PDF is for reading: the same layout on Windows, a Mac and a phone. CVs, offers and contracts leave my desk as PDF. The recipient won’t nudge a paragraph by accident or get a fallback font I never chose.",
          "On Toolando, Word → PDF goes through LibreOffice on the server. I don’t leave that to pure JavaScript in the browser: tables, headers and non-English glyphs fall apart when the engine guesses layout. LibreOffice is boring and predictable — that’s the point.",
        ],
      },
      {
        title: "When DOCX → PDF",
        paragraphs: [
          "Sending to a recruiter, a client, an office.",
          "Print and archive. PDF/A is a separate story; ordinary PDF is enough for daily mail.",
          "When the document uses unusual fonts — they embed in PDF. In DOCX the other side must have the same face.",
        ],
      },
      {
        title: "When not to do PDF → DOCX",
        paragraphs: [
          "Scanned invoices and wet-ink contracts — images inside a PDF. Conversion will not magically produce editable Word. OCR is another job and another quality bar.",
          "Catalogues, brochures, multi-column layout. DOCX will try to reflow it and smash pagination. Copy a text excerpt or ask for the source.",
          "A digitally signed PDF — after conversion the signature is gone or invalid.",
        ],
      },
      {
        title: "How I check the result",
        paragraphs: [
          "I open the PDF and look at tables: do edges hold, did Polish (or other) characters become boxes.",
          "If the source was ODT from LibreOffice, ODT → PDF is often cleaner than ODT → DOCX → PDF (one less guessing step).",
          "Sensitive data: ID numbers, account numbers. Conversion does not encrypt them. HTTPS protects the transfer, not the copy on the recipient’s desktop.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    slug: "extract-audio-from-video",
    title: "Audio from your own video — legally, without YouTube downloaders",
    description:
      "MP4/MOV/MKV → MP3 or WAV from a file you already have. Why Toolando does not fetch videos from the internet.",
    published: "2026-02-10",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["mp4", "mp3", "wav", "flac"],
    relatedTools: ["mp4-to-mp3", "mp4-to-wav"],
    sections: [
      {
        paragraphs: [
          "You have a Zoom recording, a camera file, an OBS export or an MP4 presentation and you only need the sound — a podcast, a transcript, a bed. Extracting audio copies (or lightly transcodes) the audio stream out of the video container. That’s your copy of your file.",
          "I deliberately don’t ship a YouTube / TikTok / Spotify downloader. That’s other people’s content. AdSense would sink it anyway; more importantly I don’t want a site that pretends to be “convenient YouTube MP3”.",
        ],
      },
      {
        title: "MP3, WAV or FLAC from video",
        paragraphs: [
          "For listening and sending — MP3 128–192 kbps for speech, 192+ for music you recorded yourself.",
          "For further editing — WAV or FLAC. Extracting to MP3 and then “fixing” it in a DAW is a double loss if the source had a better track (AAC in MP4 is often decent; don’t downsample without a reason).",
          "If the MP4 already has AAC and you only want it out without a re-encode, that’s the ideal case. Re-encode to MP3 when the player or podcast host requires MPEG.",
        ],
      },
      {
        title: "Practical traps",
        paragraphs: [
          "Audio duration should follow the video. If the MP3 is a minute short, FFmpeg dropped the stream or the source file is damaged.",
          "Two languages / two tracks — converters usually take the default stream. If you need the director’s commentary, pick a tool that lets you choose the stream.",
          "Don’t upload someone else’s rip “because the link died”. Either you have the file or you don’t.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    slug: "remove-exif-privacy-guide",
    title: "EXIF in photos — GPS, the phone model, and what the thumbnail doesn’t show",
    description:
      "What sits in JPEG/HEIC besides pixels, when to keep it for a photographer, and how I strip metadata before publishing.",
    published: "2026-08-02",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["jpg", "png", "heic"],
    relatedTools: ["usun-exif", "kompresor-obrazow"],
    sections: [
      {
        paragraphs: [
          "A phone photo is more than pixels. EXIF may hold GPS (accurate to your house), camera model, time, sometimes a preview thumbnail. Instagram often strips it. Your own site, a newsletter and an email attachment often don’t.",
          "Before I publish photos of kids, a home interior or documents on a desk, I strip EXIF. On Toolando that’s a separate tool: pixels stay, metadata goes. Resolution does not change.",
        ],
      },
      {
        title: "When to keep EXIF",
        paragraphs: [
          "Your own archive, Lightroom, a client catalogue — date and lens are useful.",
          "Sending to a photographer for retouch, if that’s the agreement.",
          "Don’t leave GPS in a file on a public FTP or in a property listing that already has the address in the filename. That’s two copies of the same leak.",
        ],
      },
      {
        title: "HEIC and PNG",
        paragraphs: [
          "HEIC carries metadata too. HEIC → JPG may copy it. Strip EXIF after conversion or at the end of the pipeline, not “somewhere in the middle and forgotten”.",
          "PNG is often poorer in EXIF, but tEXt and other chunks exist. Don’t assume PNG = private.",
        ],
      },
      {
        title: "This is not anonymizing the person in the photo",
        paragraphs: [
          "Removing GPS does not blur faces or hide a house number in the frame. EXIF is a file layer, not image censorship.",
          "After stripping metadata you can still compress or watermark — order: crop/content first, then EXIF, then publish.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    slug: "prepare-images-for-web",
    title: "Images for the web — resolution, JPG, WebP and LCP",
    description:
      "How I prep photos for a blog or shop: width in px, file weight, WebP with a fallback, and why 12 MP doesn’t belong in WordPress.",
    published: "2026-05-15",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["jpg", "webp", "avif", "png"],
    relatedTools: ["jpg-to-webp", "png-to-webp", "png-to-avif"],
    sections: [
      {
        paragraphs: [
          "The usual reason a page feels slow is not “bad hosting” — it’s a 5 MB hero straight from the camera. The browser downloads megapixels the layout will never show.",
          "Before I convert anything I ask: how many pixels wide is this actually displayed? Full-width banner — 1600–1920 px. Product card — 800–1200. Thumbnail — 400–600. The rest is the photographer’s ego, not UX.",
        ],
      },
      {
        title: "Format",
        paragraphs: [
          "JPG is boring and works everywhere, including email and old CMS software.",
          "WebP is usually 25–35% lighter at similar sharpness. Modern browsers take it. I keep a JPG fallback in <picture> when I have to cover edge cases.",
          "AVIF can be smaller still; Safari support lagged for years — I don’t make a religion of it on a small site. WebP is enough.",
          "Logos and icons: SVG when you can, PNG when you must rasterize. Don’t put a logo in JPG.",
        ],
      },
      {
        title: "Publish checklist",
        paragraphs: [
          "Resize to the target width.",
          "Pick a format (JPG / WebP / PNG).",
          "Weight targets, not dogma: thumbnail < 100–200 KB, a large post image < 400–500 KB, unless it’s a lightbox original (then a separate file, not the grid asset).",
          "After upload I look at LCP in PageSpeed or at least the Network tab: is the hero one reasonable request, or three copies of the same picture.",
        ],
      },
      {
        title: "What not to do",
        paragraphs: [
          "Don’t re-save the banner as JPG in Photoshop “a bit smaller” on a loop. Go back to the source and export once.",
          "Don’t mix random color profiles the browser will misread — web goes out as sRGB.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    slug: "flac-music-archive-guide",
    title: "FLAC as a music archive — MP3 is a copy, not the source",
    description:
      "FLAC keeps the bits; MP3 is for the bus. How I lay out a library and why I never encode FLAC from MP3.",
    published: "2026-07-16",
    updated: UPDATED,
    author: AUTHOR,
    relatedFormats: ["flac", "mp3", "wav"],
    relatedTools: ["flac-to-mp3", "wav-to-flac"],
    sections: [
      {
        paragraphs: [
          "FLAC is lossless audio compression: smaller than WAV, the same PCM after decode. MP3 is for listening, not for the archive. If you buy or rip music you want in ten years, FLAC (or the original session WAV) is the source. MP3 is a derivative.",
          "I don’t encode FLAC from a finished MP3. That is not an upgrade. It’s a larger file with the same loss. FLAC makes sense from a CD, a DAW WAV, or a file that is already lossless.",
        ],
      },
      {
        title: "How I lay it out",
        paragraphs: [
          "Disk / NAS: FLAC or WAV. Tags (artist, album) in FLAC metadata, not in `track (1).mp3`.",
          "Phone: MP3 or AAC generated once from the archive. If the phone dies, the source stays.",
          "Sending to a friend: MP3. Nobody wants 400 MB for one album on WhatsApp.",
        ],
      },
      {
        title: "Players",
        paragraphs: [
          "A computer and a phone from 2020+ usually play FLAC. A 2012 car radio often doesn’t. That’s why an MP3 copy on a USB stick for the car — not instead of the archive.",
          "After FLAC → MP3 I check duration and whether tags (title) survived. Empty tags aren’t a sound bug, but they’re annoying in the car.",
        ],
      },
      {
        title: "What not to promise",
        paragraphs: [
          "FLAC will not make a bad mix sound like Abbey Road.",
          "“Hi-res” 24/96 from a YouTube rip does not exist. If the source was 16/44.1 from a stream, leave 16/44.1.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    slug: "toolando-editorial-standards",
    title: "Toolando editorial standards — where the guides and tests come from",
    description:
      "Who writes the guides, how I test converters on real files, and what I won’t publish even if it would rank.",
    published: "2026-07-01",
    updated: UPDATED,
    author: AUTHOR,
    sections: [
      {
        paragraphs: [
          "I write and code Toolando myself. There is no five-freelancer newsroom and no article mill. If a guide has a concrete claim (“LibreOffice on the server”, “HEIC on Windows”, “MP3 → WAV doesn’t come back”), it’s because I ran it on my own files or on the pipeline I maintain.",
          "SEO does not get to pick the conclusion. If a conversion is a dumb idea, I say so — even when the query “mp3 to wav” brings traffic.",
        ],
      },
      {
        title: "How I test",
        paragraphs: [
          "Audio: duration, bitrate, whether the result opens in a normal player.",
          "Images: PNG transparency, JPEG artifacts, whether WebP/AVIF even opens where the user needs it.",
          "Documents: tables and non-English glyphs after DOCX → PDF through LibreOffice, not “close enough” in the browser.",
          "HEIC: Windows without Apple codecs — because that’s the scenario, not a Mac preview.",
        ],
      },
      {
        title: "What I don’t publish",
        paragraphs: [
          "Guides on “how to download a YouTube video”.",
          "A promise of 100% quality when transcoding lossy-to-lossy.",
          "A ghost page for every extension with nothing but the format name swapped. Some converters stay in the catalogue because people need them; not all of them go into Google’s index.",
        ],
      },
      {
        title: "Corrections and contact",
        paragraphs: [
          "If you find a fact that aged (Safari support, an engine quirk), write via the contact page. I fix the source rather than stapling a disclaimer at the bottom.",
          "Ads, when they exist, do not edit the guides. The copy is not commissioned by a format advertiser.",
        ],
      },
    ],
  },
}
