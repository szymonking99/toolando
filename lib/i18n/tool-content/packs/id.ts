import type { ToolContentTemplates } from "../locale-factory"

export const idToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Konverter online gratis ini mengubah file {fromName} ({FROM}) ke format {toName} ({TO}) tanpa perlu menginstal perangkat lunak. Unggah file Anda — Toolando.tech memprosesnya di server, lalu mengembalikan hasilnya untuk diunduh. File tidak pernah disimpan — dihapus segera setelah konversi.",
  whenToUseBase: [
    "Saat Anda membutuhkan file {TO} tetapi hanya memilikinya dalam format {FROM}.",
    "Saat perangkat atau aplikasi yang Anda gunakan tidak mendukung file {FROM}.",
  ],
  whenToUseCategory: {
    audio: "Saat Anda ingin memperkecil ukuran file audio atau meningkatkan kompatibilitas pemutar.",
    video: "Saat Anda perlu menerbitkan video di situs web atau media sosial dalam format berbeda.",
    image: "Saat Anda ingin mengoptimalkan gambar untuk web, email, atau cetak.",
    pdf: "Saat Anda perlu mengekstrak halaman PDF sebagai gambar atau mengonversi dokumen ke format yang dapat diedit.",
    doc: "Saat Anda bekerja dengan dokumen teks dan membutuhkan format berbeda untuk mengedit atau menerbitkan.",
    data: "Saat Anda memindahkan data antar sistem, API, atau spreadsheet dalam format berbeda.",
    font: "Saat Anda menyiapkan font web untuk diterapkan di situs web.",
    archive: "Saat Anda perlu mengubah format arsip agar dapat diekstrak di sistem lain.",
  },
  steps: [
    'Klik "Pilih file" atau seret file {FROM} Anda ke area unggah.',
    "Tunggu hingga unggahan dan konversi selesai — biasanya hanya beberapa detik.",
    "Unduh file {TO} yang sudah siap dengan satu klik.",
    "File sumber dihapus dari server segera setelah operasi selesai.",
  ],
  faq: [
    {
      q: "Apakah konversi {FROM} → {TO} gratis?",
      a: "Ya. Konverter ini sepenuhnya gratis dan tidak memerlukan akun. Anda dapat mengonversi file tanpa batas.",
    },
    {
      q: "Apakah file {FROM} saya aman?",
      a: "Ya. File Anda diproses hanya untuk konversi dan dihapus segera setelahnya. Kami tidak pernah menyimpan atau membagikan file Anda.",
    },
    {
      q: "Berapa ukuran file maksimum?",
      a: "Anda dapat mengunggah file hingga 500 MB. File yang lebih besar mungkin membutuhkan waktu pemrosesan lebih lama.",
    },
    {
      q: "Apakah kualitas {TO} akan bagus?",
      a: "Toolando.tech menggunakan pustaka profesional (FFmpeg, Sharp, MuPDF) untuk konversi. Kualitas bergantung pada format sumber dan target — mengonversi dari format dengan kehilangan ke format tanpa kehilangan tidak akan memulihkan data yang hilang, tetapi hasilnya akan benar secara teknis.",
    },
  ],
  extraFaq: [
    {
      q: "Di mana saya bisa mempelajari lebih lanjut tentang {FROM}?",
      a: "Baca panduan lengkap format {FROM} di ensiklopedia format Toolando.tech — kasus penggunaan, kelebihan, kekurangan, dan perbandingan.",
    },
    {
      q: "Bisakah saya mengonversi {TO} kembali ke {FROM}?",
      a: "Ya — pilih konverter {TO} → {FROM} di daftar alat. Mengonversi dari format dengan kehilangan tidak akan memulihkan kualitas yang hilang.",
    },
  ],
}
