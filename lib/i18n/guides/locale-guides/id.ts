import type { GuideArticle } from "../types"
import type { GuideSlug } from "../slugs"
import { guidesEn } from "../guides-en"

export const guidesId: Record<GuideSlug, GuideArticle> = {
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "Bitrate MP3 atau AAC mana yang dipilih?",
    description: "128 vs 192 vs 320 kbps — pilihan praktis untuk podcast, musik, dan video tanpa membuang ruang disk.",
    sections: [
      {
        paragraphs: [
          "Bitrate adalah jumlah data per detik audio. Bitrate lebih tinggi biasanya berarti suara lebih baik tetapi file lebih besar. Pada MP3, perbedaan antara 128 dan 320 kbps paling terdengar di speaker bagus dan musik padat.",
          "Untuk ucapan (podcast, wawancara) mono 96–128 kbps sering cukup. Untuk musik di headphone, stereo 192–256 kbps kompromi solid. 320 kbps adalah batas praktis MP3 — naik lebih tinggi jarang membantu karena format tetap lossy.",
        ],
      },
      {
        title: "MP3, AAC, dan Opus — perbandingan singkat",
        paragraphs: [
          "AAC (M4A) pada bitrate sama biasanya mengalahkan MP3 — itulah mengapa YouTube dan Apple Music memakainya.",
          "Opus unggul di VoIP dan streaming bitrate rendah (64–128 kbps).",
          "Untuk arsip studio simpan WAV atau FLAC — bitrate lossy tidak mengembalikan data yang hilang.",
        ],
      },
      {
        title: "Kesalahan umum",
        paragraphs: [
          "Menaikkan bitrate MP3 berkualitas rendah tidak memperbaiki suara — hanya ukuran file yang bertambah.",
          "Mengencode ulang trek yang sama berkali-kali (MP3 → AAC → MP3) menurunkan kualitas setiap putaran.",
          "Untuk proyek video ekstrak audio dari MP4 Anda sendiri, jangan unduh musik orang lain — hak cipta penting.",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    ...guidesEn["compress-images-without-quality-loss"],
    title: "Cara mengompresi gambar JPG dan PNG tanpa kehilangan kualitas terlihat",
    description: "Kapan memakai kompresor, level kualitas mana, dan kompresi vs konversi format.",
    sections: [
      {
        paragraphs: [
          "Mengompresi gambar mengecilkan ukuran file tanpa mengubah format — Anda tetap punya JPG atau PNG, hanya lebih ringan. Konversi JPG → WebP mengubah format dan sering lebih baik untuk web, tetapi alur cetak mungkin memerlukan JPG.",
          "Di Toolando.tech saya menguji kompresor gambar pada foto produk 2000×2000: pada kualitas 80%, ukuran turun 40–60% tanpa artefak terlihat di layar.",
        ],
      },
      {
        title: "Kapan kompres vs konversi",
        paragraphs: [
          "Kompres saat format sudah cocok (mis. toko memerlukan JPG) tetapi file terlalu berat untuk email atau CMS.",
          "Konversi ke WebP/AVIF saat publikasi di situs sendiri dengan fallback <picture>.",
          "Jangan pernah menyimpan ulang JPG yang sama berkali-kali — setiap pass menambah artefak.",
        ],
      },
      {
        title: "Skenario tipikal",
        paragraphs: [
          "Lampiran email: JPG kualitas ~75–85, lebar maks 1600 px.",
          "E-commerce: WebP dengan fallback JPG; thumbnail 800 px.",
          "Screenshot UI dengan teks: PNG atau WebP lossless — hindari JPG agresif.",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...guidesEn["convert-video-to-gif-properly"],
    title: "Cara membuat GIF bagus dari video — resolusi, FPS, durasi",
    description: "MP4/MOV ke GIF tanpa file raksasa: batas praktis dan alternatif.",
    sections: [
      {
        paragraphs: [
          "GIF tidak punya audio dan tidak memakai H.264 — setiap frame bitmap penuh (sering palet 256 warna). Jadi klip 1080p 10 detik sebagai GIF bisa lebih berat dari video asli. Target: pendek, kecil, resolusi rendah.",
          "Sebelum MP4 → GIF potong klip ke 2–4 detik di editor eksternal dan gunakan 10–15 FPS alih-alih 30 — GIF tetap tidak akan mengembalikan kelancaran film.",
        ],
      },
      {
        title: "Parameter awal",
        paragraphs: [
          "Lebar maks 480–640 px untuk meme dan reaksi.",
          "Durasi maks 5 d — di atas itu pertimbangkan MP4 loop.",
          "Latar sederhana (greenscreen) terkompresi lebih mudah dari gradien dan noise.",
        ],
      },
      {
        title: "Setelah konversi",
        paragraphs: [
          "Periksa ukuran file — GIF >5 MB jarang masuk akal di halaman.",
          "Jika GIF terlalu besar, GIF → MP4 dan embed <video> sering memperbaiki.",
          "Toolando memproses video Anda hanya selama konversi — tidak host GIF jadi secara publik.",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "DOCX → PDF untuk kantor — kapan dan cara konversi",
    description: "Mengirim CV, faktur, dan kontrak: mengapa PDF mengalahkan DOCX dan cara menghindari font rusak.",
    sections: [
      {
        paragraphs: [
          "DOCX untuk editing — bagus saat penerima punya Word dan perlu mengubah teks. PDF untuk membaca — tata letak, font, dan margin identik di Windows, Mac, dan ponsel.",
          "Sebelum mengirim CV, proposal, atau kontrak konversi DOCX → PDF. Penerima tidak akan mengedit konten secara tidak sengaja dan Anda hindari font pengganti yang merusak branding.",
        ],
      },
      {
        title: "Kapan JANGAN konversi PDF → DOCX",
        paragraphs: [
          "Faktur scan dan kontrak bertanda tangan — simpan PDF sebagai arsip; OCR langkah terpisah.",
          "Tata letak multi-halaman kompleks (katalog, brosur) — konversi DOCX sering merusak pagination.",
          "Jika hanya butuh cuplikan teks, salin dari PDF alih-alih mengonversi seluruh file.",
        ],
      },
      {
        title: "Keamanan dan privasi",
        paragraphs: [
          "Di Toolando.tech file DOCX dan PDF hanya dipakai untuk konversi dan dihapus setelah selesai.",
          "Untuk dokumen sensitif (ID, nomor bank) gunakan HTTPS dan jangan tinggalkan salinan di cloud publik tanpa enkripsi.",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "Mengekstrak audio dari video — alternatif legal",
    description: "Cara legal mengekstrak trek audio dari file video Anda sendiri (MP4, MOV, MKV).",
    sections: [
      {
        paragraphs: [
          "Terkadang Anda punya file video dan hanya butuh audionya. Toolando.tech mengekstrak audio dari MP4, MOV, AVI, MKV dan menyimpannya sebagai MP3, WAV, FLAC, atau AAC.",
          "Ini legal untuk file Anda sendiri — berbeda dengan mengunduh musik dari YouTube atau TikTok, yang sengaja tidak ditawarkan Toolando.tech.",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...guidesEn["extract-images-from-pdf-pages"],
    title: "Cara mengekstrak gambar dari halaman PDF (JPG, PNG, WebP)",
    description: "Slide, katalog, dan scan — kapan mengekspor halaman sebagai gambar masuk akal dan resolusi mana.",
    sections: [
      {
        paragraphs: [
          "PDF adalah container — di dalam bisa ada vektor, font, dan bitmap tersemat. PDF → JPG merender setiap halaman sebagai gambar raster. Ini berbeda dari mengekstrak logo tersemat tunggal (butuh editor PDF), tetapi untuk slide, poster, dan scan bekerja baik.",
          "Deck 16:9 diekspor ke PNG lebar 1920 px terlihat tajam di layar; untuk cetak A4 target ~2480×3508 px (300 DPI) jika alat mendukung resolusi tinggi.",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "Slide dengan latar foto → JPG atau WebP.",
          "Slide dengan grafik dan teks → PNG (tipografi lebih tajam).",
          "Thumbnail web → WebP dengan fallback JPG setelah konversi lanjutan.",
        ],
      },
      {
        title: "PDF multi-halaman",
        paragraphs: [
          "Ekspor halaman tunggal jika hanya butuh slide 5 dan 12.",
          "Untuk galeri semua halaman — konversi seluruh file dan urutkan berdasarkan nomor di nama file.",
          "Hormati hak cipta — PDF orang lain bukan milik Anda untuk publikasi bebas.",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...guidesEn["flac-music-archive-guide"],
    title: "FLAC sebagai arsip musik — kapan worth it vs MP3",
    description: "FLAC lossless vs MP3 320 kbps: cadangan, streaming rumah, dan pemutar mobil.",
    sections: [
      {
        paragraphs: [
          "FLAC (Free Lossless Audio Codec) adalah kompresi lossless — seperti ZIP untuk audio. Saat didekode Anda dapat sinyal sama dengan WAV, tetapi file sekitar setengah ukuran. MP3 menghapus data permanen; bahkan 320 kbps tidak identik bit dengan rip CD.",
          "Dalam praktik: jika Anda beli musik lossless atau rip disc sendiri, FLAC format arsip masuk akal. Di ponsel dengan headphone Bluetooth FLAC vs MP3 256 kbps sering tidak terdengar — konversi ke MP3 hemat gigabyte.",
        ],
      },
      {
        title: "Alur arsip",
        paragraphs: [
          "1) Master FLAC (atau WAV) di NAS / cadangan cloud.",
          "2) Salinan kerja MP3/AAC untuk ponsel dan mobil.",
          "3) Jangan pernah konversi MP3 → FLAC 「untuk kualitas」 — hanya membengkakkan file tanpa memulihkan data.",
          "Saya menguji konverter FLAC → MP3 di Toolando.tech pada album 40–60 menit; periksa metadata (judul, artis) di pemutar setelah konversi.",
        ],
      },
      {
        title: "Kompatibilitas",
        paragraphs: [
          "FLAC: VLC, Foobar2000, kebanyakan pemutar Android; lemah di Apple Music native (ALAC cocok untuk Apple).",
          "Stereo mobil sering hanya baca MP3/WMA/AAC dari USB — FLAC → MP3 diperlukan.",
          "Streaming rumah (Plex, Jellyfin) menangani FLAC dengan baik.",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...guidesEn["font-woff2-for-websites"],
    title: "TTF, OTF, WOFF, WOFF2 — font untuk web",
    description: "Mengonversi font untuk @font-face, lisensi, dan dampak kecepatan halaman.",
    sections: [
      {
        paragraphs: [
          "Browser memerlukan WOFF/WOFF2 di CSS (@font-face), bukan file font Windows mentah. WOFF2 memberi ukuran transfer terkecil.",
          "Konverter TTF/OTF → WOFF2 Toolando menyiapkan file siap web. Periksa lisensi font sebelum embed.",
        ],
      },
      {
        title: "Performa",
        paragraphs: [
          "Subset font ke glif yang dipakai di alat pro jika file besar.",
          "Preload WOFF2 kritis di <head> untuk teks above-the-fold.",
          "Gunakan font-display: swap agar teks tetap terbaca saat memuat.",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...guidesEn["gif-vs-mp4-for-animations"],
    title: "GIF vs MP4 — animasi di situs dan media sosial",
    description: "Kapan GIF klasik masuk akal dan kapan MP4 atau WebM pendek hemat megabyte.",
    sections: [
      {
        paragraphs: [
          "GIF diputar di mana-mana tetapi secara teknis urutan frame tanpa kompresi video modern — animasi 720p 5 detik bisa 10–20 MB. Yang sama di MP4 (H.264) sering muat 500 KB–1 MB dengan kualitas acceptable.",
          "MP4 → GIF di Toolando.tech masuk akal untuk loop pendek (loader, reaksi Slack) saat platform tidak mengizinkan embed video. Di situs sendiri prefer <video autoplay loop muted playsinline> dengan MP4 atau WebM.",
        ],
      },
      {
        title: "Kapan GIF",
        paragraphs: [
          "Loop pendek (<5 d), resolusi kecil (lebar ≤480 px).",
          "Persyaratan platform (beberapa forum hanya GIF).",
          "Grafis sederhana dengan sedikit warna — GIF bisa benar-benar ringan.",
        ],
      },
      {
        title: "Kapan MP4/WebM",
        paragraphs: [
          "Animasi dengan banyak warna, gradien, atau klip video.",
          "Situs web — LCP lebih baik dan bandwidth lebih sedikit.",
          "Instagram/TikTok memerlukan video, bukan GIF.",
        ],
      },
      {
        title: "Tips MP4 → GIF",
        paragraphs: [
          "Potong durasi — setiap detik puluhan frame.",
          "Turunkan resolusi sebelum konversi.",
          "Batasi palet warna jika alat menawarkannya (kurang banding).",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "HEIC dari iPhone — cara membuka dan mengonversi ke JPG",
    description: "Mengapa iPhone menyimpan HEIC, masalah kompatibilitas, dan cara konversi ke JPG atau PNG.",
    sections: [
      {
        paragraphs: [
          "Apple menyimpan foto dalam HEIC secara default — lebih kecil dari JPG dengan kualitas setara. Masalah: Windows tanpa ekstensi, aplikasi lama, dan banyak layanan tidak mendukung HEIC.",
          "Solusi: konversi HEIC → JPG atau HEIC → PNG di Toolando.tech sebelum email, unggah, atau cetak. Anda juga bisa set iPhone ke 「Most Compatible」(JPG) di Pengaturan.",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON, CSV, dan XML — mengonversi data antar format",
    description: "Kapan memakai JSON, CSV, TSV, dan XML serta cara konversi tanpa kehilangan struktur.",
    sections: [
      {
        paragraphs: [
          "JSON adalah standar REST API dan konfigurasi aplikasi. CSV dan TSV dipakai untuk impor Excel. XML dipakai di sistem enterprise lama dan RSS.",
          "JSON → CSV membuka respons API di Excel. CSV → JSON menyiapkan data untuk REST API. Toolando.tech mempertahankan struktur data saat konversi.",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesEn["jwt-decode-safely-guide"],
    title: "JWT — cara membaca token tanpa verifikasi tanda tangan",
    description: "Header, payload, dan Base64URL — kapan decode lokal dan apa yang tidak dilakukan.",
    sections: [
      {
        paragraphs: [
          "JSON Web Token punya tiga bagian dipisah titik: header, payload, dan signature. Decoder JWT di Toolando menampilkan header dan payload setelah decode Base64URL — tanpa mengirim token ke server (berjalan di browser).",
          "Ini tidak menggantikan verifikasi tanda tangan di backend. Decode untuk debugging (mis. `exp` kedaluwarsa, `aud` salah) — jangan anggap payload saja sebagai bukti identitas.",
        ],
      },
      {
        title: "Praktik aman",
        paragraphs: [
          "Jangan tempel token produksi dengan data pribadi di situs publik — gunakan decoder lokal atau lingkungan uji.",
          "Periksa `exp` dan `nbf` sebelum debug error 401.",
          "Setelah analisis, hapus token dari riwayat clipboard dan log.",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "Kompresi lossy vs lossless — panduan sederhana",
    description: "Perbedaan kompresi lossy dan lossless, serta cara menghindari kehilangan kualitas saat konversi.",
    sections: [
      {
        paragraphs: [
          "Format lossy (MP3, JPG, AAC, H.264) membuang data untuk mengecilkan file. Format lossless (FLAC, PNG, WAV, ZIP) menyimpan semua data tetapi file lebih besar.",
          "Aturan: hanya konversi lossy → lossless jika perlu — kualitas yang hilang tidak kembali. Konversi lossy → lossy hanya sekali — setiap konversi ulang menurunkan hasil.",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...guidesEn["markdown-to-pdf-workflow"],
    title: "Markdown ke PDF — dokumen, README, dan catatan",
    description: "MD → HTML → PDF/DOCX: kapan ekspor editor cukup dan kapan konverter online membantu.",
    sections: [
      {
        paragraphs: [
          "Markdown untuk menulis — judul, daftar, kode — tanpa tata letak WYSIWYG. Developer menyimpan README.md di repo; lalu butuh PDF untuk klien atau cetak. Jalur tipikal: MD → HTML (render) → PDF lewat Cetak ke PDF browser, atau MD → DOCX → PDF untuk header halaman lebih baik.",
          "Saya menguji konverter MD → HTML dan DOCX → PDF di Toolando.tech pada file 20–40 KB; karakter Indonesia dan blok kode baik jika file MD UTF-8.",
        ],
      },
      {
        title: "Jalur mana kapan",
        paragraphs: [
          "Pratinjau cepat: MD → HTML, buka di browser.",
          "Dokumen formal dengan nomor halaman: MD → DOCX (atau editor), gaya perusahaan, lalu DOCX → PDF.",
          "Catatan polos tanpa gaya: MD → TXT cukup.",
        ],
      },
      {
        title: "Kebiasaan MD yang baik",
        paragraphs: [
          "Satu file = satu topik; pisahkan dokumen panjang ke bab.",
          "Tautkan gambar relatif — periksa path setelah konversi.",
          "Tabel MD bisa rusak di PDF — pertimbangkan CSV atau DOCX untuk data tabular.",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...guidesEn["merge-pdf-online-guide"],
    title: "Menggabungkan beberapa PDF menjadi satu — kapan masuk akal",
    description: "Menggabungkan faktur, scan, dan lampiran — urutan halaman, kualitas, dan privasi.",
    sections: [
      {
        paragraphs: [
          "Menggabungkan PDF adalah pekerjaan kantor sehari-hari: faktur + kontrak + scan ID dalam satu lampiran. Toolando.tech menggabungkan file sesuai urutan yang Anda pilih.",
          "PDF mempertahankan teks vektor dan scan bitmap — penggabungan tidak menurunkan resolusi scan jika sumber tidak over-kompres.",
        ],
      },
      {
        title: "Sebelum mengirim",
        paragraphs: [
          "Urutkan file secara logis (sampul → isi → lampiran).",
          "Hapus halaman duplikat dari scan.",
          "Jika penerima di ponsel, target ≤10–15 MB atau bagikan lewat link cloud.",
        ],
      },
      {
        title: "Privasi",
        paragraphs: [
          "Perlakukan dokumen bisnis dan pribadi sebagai rahasia. Toolando menghapus file setelah pemrosesan; tetap ikuti kebijakan perusahaan untuk data sensitif.",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesEn["mortgage-loan-calculator-guide"],
    title: "Kalkulator pinjaman — cicilan, bunga, dan hal yang diperhatikan",
    description: "Anuitas, biaya, dan asuransi — cara membaca hasil kalkulator hipotek.",
    sections: [
      {
        paragraphs: [
          "Kalkulator pinjaman di Toolando menghitung cicilan anuitas: jumlah bulanan tetap pokok plus bunga. Jangka lebih panjang menurunkan cicilan — tetapi menaikkan total biaya bunga.",
          "Anggap ini titik awal percakapan dengan bank, bukan penawaran. Cicilan nyata bergantung suku acuan, margin, biaya, asuransi jiwa, dan uang muka.",
        ],
      },
      {
        title: "Yang ditambahkan di luar kalkulator",
        paragraphs: [
          "Biaya origination dan biaya pelunasan dipercepat (jika ada di kontrak).",
          "Asuransi properti dan jiwa — sering diwajibkan bank.",
          "Biaya notaris dan pajak peralihan saat beli rumah.",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 vs WAV — kapan mengonversi audio?",
    description: "Perbandingan MP3 vs WAV: kompresi lossy vs lossless, ukuran file, editing DAW, dan format mana yang dipilih.",
    sections: [
      {
        paragraphs: [
          "MP3 memakai kompresi lossy — file kecil, tetapi sebagian data audio hilang selamanya. WAV mempertahankan kualitas penuh (lossless atau tanpa kompresi), tetapi file bisa 10× lebih besar dari MP3.",
          "Dalam praktik: mendengarkan di ponsel → MP3 cukup. Mengedit podcast di Audacity atau mixing di FL Studio → gunakan WAV atau FLAC.",
        ],
      },
      {
        title: "Kapan mengonversi MP3 → WAV",
        paragraphs: [
          "Saat platform atau aplikasi memerlukan format lossless untuk editing lanjutan.",
          "Saat Anda berencana banyak potong, efek, dan mastering — setiap operasi pada MP3 menurunkan kualitas.",
          "Catatan: MP3 → WAV tidak mengembalikan kualitas yang hilang, tetapi mencegah degradasi lebih lanjut saat editing.",
        ],
      },
      {
        title: "Kapan mengonversi WAV → MP3",
        paragraphs: [
          "Mengirim rekaman lewat email atau chat — file lebih kecil = transfer lebih cepat.",
          "Menerbitkan podcast atau musik untuk didengar, bukan untuk diedit.",
          "Menghemat ruang disk di perpustakaan audio besar.",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "Keamanan file di alat online",
    description: "Bagaimana Toolando.tech memproses file, kapan alat berjalan lokal di browser, dan detail privasi.",
    sections: [
      {
        paragraphs: [
          "Mengunggah file ke alat online wajar menimbulkan kekhawatiran. Di Toolando.tech file hanya dipakai untuk operasi yang Anda minta — konversi, kompresi, atau pratinjau.",
          "Setelah pekerjaan selesai, file dihapus dari server. Beberapa alat (pembuka universal) berjalan sepenuhnya di browser — file tidak pernah meninggalkan komputer Anda. Koneksi dienkripsi (HTTPS).",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "Cara mengonversi PDF ke JPG untuk cetak dan web",
    description: "Kapan mengekspor halaman PDF sebagai JPG, resolusi yang dipakai, dan kapan PNG lebih baik.",
    sections: [
      {
        paragraphs: [
          "PDF mempertahankan tata letak halaman. Terkadang Anda perlu halaman individual sebagai gambar — untuk situs web, PowerPoint, atau mencetak satu halaman.",
          "Konverter PDF → JPG di Toolando.tech merender setiap halaman sebagai JPG terpisah. File tidak pernah disimpan — dihapus segera setelah konversi.",
        ],
      },
      {
        title: "JPG atau PNG dari PDF?",
        paragraphs: [
          "JPG — file lebih kecil, ideal untuk foto dan dokumen tanpa transparansi.",
          "PNG — lossless dengan transparansi; lebih baik untuk grafis dengan teks dan tepi tajam.",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF vs DOCX — format mana dan kapan?",
    description: "Perbedaan PDF vs DOCX: editing, cetak, arsip, dan arah konversi.",
    sections: [
      {
        paragraphs: [
          "DOCX (Word) untuk mengedit teks — konten, gaya, judul. PDF mengunci tata letak — identik di setiap perangkat, ideal untuk faktur, kontrak, dan CV.",
          "Konversi DOCX → PDF sebelum mengirim 「hanya untuk dibaca」. Konversi PDF → DOCX hanya jika perlu edit teks — tata letak bisa rusak. Untuk arsip dan cetak, selalu pilih PDF.",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...guidesEn["png-vs-jpg-photos-and-graphics"],
    title: "PNG vs JPG — foto vs grafis dengan teks",
    description: "Pilihan praktis: foto, screenshot, logo transparan, dan cetak.",
    sections: [
      {
        paragraphs: [
          "PNG dan JPG adalah dua format yang paling sering dicampuradukan. JPG mengompresi foto dengan baik — langit, kulit, lanskap — tetapi merusak tepi tajam dan teks. PNG mempertahankan setiap piksel persis, termasuk transparansi (alpha), tetapi file sering 5–10× lebih besar dari JPG pada resolusi sama.",
          "Aturan yang saya pakai di tes Toolando.tech: foto galeri atau sosial → JPG (atau WebP dengan fallback JPG). Ikon, logo, diagram, screenshot UI → PNG. Campuran foto + teks (mis. sampul penawaran) → sering PNG atau WebP lossless.",
        ],
      },
      {
        title: "Kapan pilih JPG",
        paragraphs: [
          "Foto kamera atau ponsel tanpa transparansi.",
          "Thumbnail produk saat latar solid dan tidak perlu alpha.",
          "Lampiran email — JPG kualitas 80–85 biasanya kompromi wajar.",
          "Cetak foto rumah — banyak toko menerima JPG resolusi tinggi (setara 300 DPI).",
        ],
      },
      {
        title: "Kapan pilih PNG",
        paragraphs: [
          "Logo web latar transparan — JPG selalu mengisi putih atau hitam.",
          "Screenshot UI, grafik, kode — teks tetap tajam.",
          "Grafis datar dengan sedikit warna (infografis, ikon aplikasi).",
          "Saat rencana editing berlapis — PNG lossless tidak menambah artefak setiap simpan (berbeda dengan JPG berulang).",
        ],
      },
      {
        title: "Kesalahan umum",
        paragraphs: [
          "Menyimpan logo sebagai JPG — tepi bergerigi dan tanpa transparansi.",
          "Menyimpan foto 4000×3000 sebagai PNG 「untuk kualitas」 — 15 MB tidak perlu alih-alih 2 MB JPG.",
          "Loop PNG → JPG → PNG — setiap pass JPG kehilangan kualitas; simpan master di PNG.",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...guidesEn["podcast-export-mp3-aac-settings"],
    title: "Ekspor podcast — MP3 atau AAC dan bitrate mana",
    description: "Pengaturan setelah rekaman di Audacity, Reaper, atau ponsel: mono, 44,1 kHz, kompresi wajar.",
    sections: [
      {
        paragraphs: [
          "Podcast sebagian besar ucapan — Anda tidak perlu stereo 320 kbps seperti musik studio. Kebanyakan platform (Spotify, Apple Podcasts, host RSS) tetap re-encode unggahan. Tetap kirim master layak: mono atau stereo, 44,1 atau 48 kHz, MP3 128–192 kbps atau AAC/M4A 128 kbps.",
          "Rekam di WAV atau FLAC? Ekspor final hampir selalu MP3 atau AAC — saya menguji WAV → MP3 di Toolando.tech pada episode 30–60 menit; ~30 MB WAV turun ke ~28 MB pada stereo 128 kbps (mono ucapan bisa ~15 MB).",
        ],
      },
      {
        title: "Pengaturan yang disarankan",
        paragraphs: [
          "Solo / wawancara satu suara: mono, MP3 96–128 kbps.",
          "Dua suara di trek terpisah: stereo 128 kbps.",
          "Intro/outro musik stereo, sisanya mono — ekspor semua stereo 128 kbps untuk kesederhanaan.",
          "Hindari 64 kbps — sibilance keras dan noise pada mic murah.",
        ],
      },
      {
        title: "MP3 vs AAC (M4A)",
        paragraphs: [
          "AAC pada bitrate sama biasanya mengalahkan MP3 — Apple prefer M4A.",
          "MP3 punya kompatibilitas terluas di pemutar dan mobil lama.",
          "Jangan unggah WAV mentah ke host podcast — unggah sangat lama.",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Cara menyiapkan gambar untuk web (JPG, WebP, AVIF)",
    description: "Resolusi, kompresi, dan format — percepat situs tanpa kehilangan kualitas terlihat.",
    sections: [
      {
        paragraphs: [
          "Foto kamera besar (4000×3000 px) memperlambat setiap halaman. Sebelum unggah ke blog atau toko, ubah ukuran ke ukuran tampilan nyata — mis. lebar 1600 px untuk banner hero.",
          "JPG tetap pilihan universal aman. WebP dan AVIF menghasilkan file lebih kecil dengan kualitas visual sama — gunakan di stack modern dengan fallback <picture> untuk browser lama.",
        ],
      },
      {
        title: "Kapan PNG alih-alih JPG",
        paragraphs: [
          "Logo, ikon, dan screenshot UI — PNG atau WebP lossless menjaga tepi tajam.",
          "Foto produk latar putih sering terkompresi baik di JPG kualitas 80–85.",
          "Hindari menyimpan banner yang sama sebagai JPG berulang kali — setiap pass menambah artefak.",
        ],
      },
      {
        title: "Checklist sebelum publikasi",
        paragraphs: [
          "1) Ubah ukuran ke lebar target px. 2) Pilih format (JPG/WebP/AVIF). 3) Periksa berat file (<200 KB thumb, <500 KB gambar blog besar). 4) Jalankan PageSpeed Insights dan bandingkan LCP sebelum/sesudah.",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesEn["remove-exif-privacy-guide"],
    title: "EXIF di foto — apa yang dihapus sebelum publikasi",
    description: "GPS, model kamera, dan tanggal dalam metadata EXIF — risiko privasi dan penghapusan.",
    sections: [
      {
        paragraphs: [
          "EXIF adalah metadata tersembunyi di JPEG, PNG, atau HEIC: lokasi GPS, model ponsel, orientasi, terkadang thumbnail pratinjau. Jejaring sosial sering menghapusnya, tetapi situs sendiri, newsletter, atau lampiran email belum tentu.",
          "Sebelum publikasi foto anak, interior rumah, atau dokumen di meja, hapus EXIF dengan alat khusus — di Toolando pemrosesan di server dan file tidak dikirim ke cloud AI eksternal.",
        ],
      },
      {
        title: "Apa yang tersisa setelah hapus EXIF",
        paragraphs: [
          "Piksel gambar tidak berubah. Hanya metadata yang dihapus — resolusi tidak terpengaruh.",
          "Setelah strip EXIF Anda masih bisa kompres file atau tambah watermark sebelum publikasi portofolio.",
        ],
      },
    ],
  },
  "split-pdf-pages-guide": {
    ...guidesEn["split-pdf-pages-guide"],
    title: "Cara memisahkan PDF menjadi halaman terpisah online",
    description: "Kapan memisah PDF, cara memilih rentang halaman, dan apa yang dilakukan dengan output ZIP.",
    sections: [
      {
        paragraphs: [
          "Memisah PDF umum setelah memindai kontrak atau faktur multi-halaman — Anda mungkin perlu email satu halaman atau lampirkan fragmen di tempat lain.",
          "Di Toolando.tech Anda bisa ekspor setiap halaman terpisah atau tentukan rentang (mis. 1-3,5). Hasilnya ZIP file PDF, masing-masing mempertahankan kualitas vektor atau scan asli.",
        ],
      },
      {
        title: "Kapan pisah vs gabung",
        paragraphs: [
          "Pisah — saat penerima hanya butuh fragmen (halaman tanda tangan, lampiran, sampul).",
          "Gabung — saat mengumpulkan scan menjadi satu arsip atau kiriman.",
          "Setelah pisah, pertimbangkan penomoran halaman atau kompres scan besar.",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...guidesEn["spreadsheet-csv-json-guide"],
    title: "CSV, JSON, dan Excel — memindahkan data antar sheet dan API",
    description: "Kapan pilih CSV vs JSON, dan cara menghindari desimal dan encoding rusak.",
    sections: [
      {
        paragraphs: [
          "CSV adalah teks biasa — terbuka di Excel, Google Sheets, dan alat BI. JSON menangani struktur bersarang (API, konfig). XLSX menambah tipe sel dan banyak sheet.",
          "Alur tipikal: ekspor API sebagai JSON → JSON ke CSV → analisis di Excel. Sebaliknya: daftar klien CSV → JSON → REST API.",
        ],
      },
      {
        title: "Encoding dan Excel",
        paragraphs: [
          "Gunakan CSV UTF-8 untuk karakter non-ASCII. Jika Excel merusak teks, impor lewat Data → Dari Teks dan pilih UTF-8.",
          "Pemisah CSV bervariasi menurut locale (koma vs titik koma). TSV (tab) lebih aman saat deskripsi berisi koma.",
        ],
      },
      {
        title: "Validasi setelah konversi",
        paragraphs: [
          "Bandingkan jumlah baris sebelum dan sesudah.",
          "Untuk JSON periksa kunci dan tipe — satu tanda kutip hilang merusak seluruh file.",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...guidesEn["svg-vs-png-logos-and-icons"],
    title: "SVG vs PNG — logo dan ikon untuk web",
    description: "Vektor vs raster: kapan kirim SVG dan kapan @2x PNG cukup.",
    sections: [
      {
        paragraphs: [
          "SVG adalah grafis vektor yang dijelaskan secara matematis — skala di layar apa pun tanpa pixelasi. PNG bitmap resolusi tetap; di retina sering perlu versi 2×. Untuk web, logo dan ikon sederhana hampir selalu SVG (atau icon font), kecuali file menyematkan foto.",
          "Konverter SVG → PNG di Toolando.tech membantu saat percetakan ingin PNG 300 DPI atau sistem menolak SVG.",
        ],
      },
      {
        title: "Keunggulan SVG",
        paragraphs: [
          "Satu file untuk mobile dan desktop — lebih sedikit CSS, tanpa srcset.",
          "Perubahan warna mudah lewat CSS fill pada ikon sederhana.",
          "Skor Lighthouse lebih baik dari hero PNG berat.",
        ],
      },
      {
        title: "Kapan PNG alih-alih SVG",
        paragraphs: [
          "Logo dengan gradien, bayangan, atau efek yang diekspor buruk dari vektor.",
          "Thumbnail Open Graph / pratinjau sosial — platform tetap rasterize.",
          "Aplikasi desktop tanpa mesin SVG.",
          "Ekspor @2x PNG (mis. 512×512) sebagai fallback di <img> di samping inline SVG.",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...guidesEn["tiff-and-png-for-document-scans"],
    title: "Scan dokumen — TIFF, PNG, atau JPG",
    description: "Faktur dan kontrak: penyimpanan lossless, multi-halaman, dan kapan PDF cukup.",
    sections: [
      {
        paragraphs: [
          "Memindai faktur atau kontrak berbeda dari foto liburan. Teks dan stempel butuh tepi tajam — JPG agresif memburamkan huruf. TIFF (sering LZW lossless) dan PNG lebih aman untuk arsip. Untuk kirim dan OCR Anda sering berakhir dengan PDF atau JPG kualitas moderat.",
          "TIFF multi-halaman bisa satu file dengan banyak lapisan — tidak setiap viewer menanganinya; untuk kantor dan klien PDF multi-halaman lebih jelas (gabung PDF di Toolando.tech).",
        ],
      },
      {
        title: "Alur kerja yang disarankan",
        paragraphs: [
          "Scanner → PNG atau TIFF per halaman (300 DPI untuk cetak, 150 DPI untuk pratinjau).",
          "Perbaiki rotasi/crop di editor.",
          "Gabung halaman menjadi satu PDF untuk pengiriman.",
          "JPG kualitas 90 opsional hanya jika penerima tidak menerima PDF.",
        ],
      },
      {
        title: "Yang dihindari",
        paragraphs: [
          "JPG kualitas 60 pada faktur — jumlah bisa tidak terbaca.",
          "Siklus TIFF → JPG → TIFF berulang.",
          "Scan warna 600 DPI 「jaga-jaga」 — gigabyte tanpa manfaat untuk teks A4.",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...guidesEn["toolando-editorial-standards"],
    title: "Standar editorial Toolando.tech — cara panduan ditulis",
    description: "Cara artikel, tes konverter, dan ensiklopedia format dibuat — transparansi untuk pembaca dan reviewer.",
    sections: [
      {
        paragraphs: [
          "Toolando.tech dibangun sendiri oleh Szymon. Panduan bukan hasil massal atau salinan Wikipedia — berdasarkan tes konversi nyata.",
          "Setiap artikel punya tanggal publikasi dan pembaruan. Saat persyaratan platform atau library berubah, saya revisi teks.",
        ],
      },
      {
        title: "Apa yang saya uji",
        paragraphs: [
          "Konverter audio/video: waktu, ukuran output, pemutaran di VLC dan ponsel.",
          "Gambar: perbandingan visual sebelum/sesudah, transparansi PNG, ukuran WebP vs JPG.",
          "Dokumen: tata letak setelah PDF ↔ DOCX, encoding di CSV/JSON.",
        ],
      },
      {
        title: "Apa yang tidak saya janjikan",
        paragraphs: [
          "Tidak ada 「100% kualitas」 saat konversi lossy → lossy.",
          "Tidak mengunduh video YouTube/TikTok orang lain — hanya operasi legal pada file Anda.",
          "Iklan Google mungkin muncul, tetapi konten editorial ditulis independen dari pengiklan.",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...guidesEn["video-compress-before-sharing"],
    title: "Perkecil video sebelum email atau WhatsApp",
    description: "MP4, resolusi, bitrate — batas ukuran praktis dan konversi container.",
    sections: [
      {
        paragraphs: [
          "Rekaman ponsel dalam MOV/MKV bisa ratusan MB. Banyak kotak mail memblokir lampiran >25 MB. Solusi: konversi ke MP4 (H.264 + AAC) dan turunkan resolusi jika perlu.",
          "720p sering cukup untuk pratinjau ponsel; pertahankan 1080p untuk TV.",
        ],
      },
      {
        title: "Langkah sebelum mengirim",
        paragraphs: [
          "1) Konversi MOV/MKV → MP4. 2) Periksa ukuran file. 3) Jika masih terlalu besar — potong intro/outro yang tidak perlu di editor video. 4) Gunakan link cloud jika >25 MB.",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "Video untuk media sosial — MP4, resolusi, dan bitrate",
    description: "Cara menyiapkan video untuk Instagram, TikTok, YouTube: format MP4, H.264, resolusi 1080p.",
    sections: [
      {
        paragraphs: [
          "Instagram, TikTok, YouTube, dan Facebook prefer MP4 dengan video H.264 dan audio AAC. Konversi MOV, AVI, atau MKV ke MP4 sebelum publikasi untuk menghindari error unggah.",
          "1080p (1920×1080) cukup untuk kebanyakan platform. Bitrate lebih tinggi = kualitas lebih baik tetapi file lebih besar. Lihat ensiklopedia format untuk detail MP4, WebM, dan MOV.",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP dan AVIF — format gambar modern untuk situs web",
    description: "WebP dan AVIF vs JPG/PNG: kompresi, dukungan browser, dan optimasi PageSpeed.",
    sections: [
      {
        paragraphs: [
          "JPG dan PNG telah mendominasi web selama bertahun-tahun, tetapi WebP menghasilkan file 25–35% lebih kecil dari JPG dengan kualitas visual sama. AVIF lebih jauh lagi — file bisa setengah ukuran WebP.",
          "Semua browser modern mendukung WebP. AVIF sedikit lebih lemah di versi Safari lama.",
        ],
      },
      {
        title: "Strategi penerapan",
        paragraphs: [
          "Konversi JPG → WebP untuk foto produk dan banner — mempercepat muat halaman.",
          "Pertahankan JPG sebagai fallback untuk browser lama (tag HTML <picture>).",
          "Untuk logo dengan transparansi: PNG → WebP, bukan JPG.",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...guidesEn["when-not-to-convert-files"],
    title: "Kapan JANGAN mengonversi file — 7 situasi yang merusak kualitas",
    description: "Hindari konversi tidak perlu: simpan asli, arsip lossless, dan cadangkan sebelum bereksperimen.",
    sections: [
      {
        paragraphs: [
          "Konverter online praktis, tetapi tidak setiap operasi membantu. Terkadang pertahankan asli atau gunakan arsip lossless (ZIP, FLAC).",
          "Aturan: jangan konversi lossy → lossless expecting magic — MP3 → WAV tidak mengembalikan data yang hilang.",
        ],
      },
      {
        title: "Biarkan apa adanya",
        paragraphs: [
          "Anda sudah punya PNG dengan transparansi — jangan konversi ke JPG tanpa alasan.",
          "Proyek desain — simpan sumber berlapis (PSD, SVG); ekspor JPG hanya di akhir.",
          "WAV/FLAC studio — jangan ratakan ke MP3 sebelum mix final.",
          "PDF bertanda tangan digital — konversi bisa membatalkan tanda tangan.",
        ],
      },
      {
        title: "Sebelum klik Konversi",
        paragraphs: [
          "Simpan salinan asli.",
          "Periksa apakah platform target sudah menerima format sumber Anda.",
          "Baca perbandingan format di ensiklopedia Toolando untuk melewati langkah tidak berguna.",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...guidesEn["zip-7z-rar-when-to-use"],
    title: "ZIP, 7z, dan RAR — arsip mana yang dikirim",
    description: "Ukuran, kompatibilitas, dan enkripsi — kapan ZIP cukup dan kapan 7z atau RAR membantu.",
    sections: [
      {
        paragraphs: [
          "Arsip membungkus banyak file menjadi satu — praktis untuk email, cloud, dan cadangan folder. ZIP standar universal: terbuka di Windows, macOS, dan Linux tanpa software tambahan. 7z biasanya hasil lebih kecil, tetapi penerima mungkin perlu 7-Zip. RAR muncul di alur legacy; membuat RAR online punya batas lisensi — lebih sering konversi RAR → ZIP daripada sebaliknya.",
        ],
      },
      {
        title: "Kapan ZIP",
        paragraphs: [
          "Kirim ke klien atau kantor — risiko 「tidak bisa dibuka」 minimal.",
          "Arsip kode, dokumen kantor, set foto JPG.",
          "Sistem yang hanya menerima unggahan .zip.",
        ],
      },
      {
        title: "Kapan 7z",
        paragraphs: [
          "Folder game besar, proyek video, cadangan sebelum drive eksternal — file lebih kecil = unggah lebih cepat.",
          "Saat penerima teknis dan punya 7-Zip.",
          "Konversi ZIP → 7z masuk akal sekali — jangan re-pack data yang sama berulang.",
        ],
      },
      {
        title: "Keamanan",
        paragraphs: [
          "Password arsip mencegah pembukaan sembarangan tetapi tidak menggantikan enkripsi end-to-end untuk dokumen sensitif.",
          "Jangan ekstrak arsip dari sumber tidak dikenal tanpa scan antivirus.",
          "Toolando memproses arsip hanya selama konversi container — konten harus legal dan milik Anda.",
        ],
      },
    ],
  },
}
