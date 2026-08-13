import type { ToolContentTemplates } from "./locale-factory"

/** English template — translate placeholders {fromName}, {from}, {to}, {FROM}, {TO} stay as-is. */
export const enToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "This free online converter turns {fromName} ({FROM}) files into {toName} ({TO}) format with no software to install. Upload your file and Toolando.tech processes it on the server, then returns the result for download. Files are never stored — they are deleted immediately after conversion.",
  whenToUseBase: [
    "When you need a {TO} file but only have it in {FROM} format.",
    "When the device or app you use doesn't support {FROM} files.",
  ],
  whenToUseCategory: {
    audio: "When you want to reduce audio file size or improve player compatibility.",
    video: "When you need to publish video on a website or social media in a different format.",
    image: "When you want to optimize an image for the web, email, or print.",
    pdf: "When you need to extract PDF pages as images or convert a document to an editable format.",
    doc: "When you work with text documents and need a different format for editing or publishing.",
    data: "When you move data between systems, APIs, or spreadsheets in a different format.",
    font: "When you prepare web fonts for deployment on a website.",
    archive: "When you need to change archive format to extract it on another system.",
  },
  steps: [
    'Click "Choose a file" or drag your {FROM} file into the upload area.',
    "Wait for the upload and conversion to finish — this usually takes a few seconds.",
    "Download the ready {TO} file with one click.",
    "The source file is deleted from the server immediately after the operation completes.",
  ],
  faq: [
    {
      q: "Is {FROM} → {TO} conversion free?",
      a: "Yes. This converter is completely free and requires no account. You can convert files without limits.",
    },
    {
      q: "Is my {FROM} file safe?",
      a: "Yes. Your file is processed solely for conversion and deleted immediately afterward. We never store or share your files.",
    },
    {
      q: "What is the maximum file size?",
      a: "You can upload files up to 500 MB. Larger files may take longer to process.",
    },
    {
      q: "Will the {TO} quality be good?",
      a: "Toolando.tech uses professional libraries (FFmpeg, Sharp, MuPDF) for conversion. Quality depends on source and target formats — converting from lossy to lossless won't recover lost data, but the output will be technically correct.",
    },
  ],
  extraFaq: [
    {
      q: "Where can I learn more about {FROM}?",
      a: "Read the full {FROM} format guide in the Toolando.tech formats encyclopedia — use cases, pros, cons, and comparisons.",
    },
    {
      q: "Can I convert {TO} back to {FROM}?",
      a: "Yes — pick the {TO} → {FROM} converter in the tools list. Converting from a lossy format won't restore lost quality.",
    },
  ],
}
