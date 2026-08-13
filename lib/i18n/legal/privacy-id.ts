import type { LegalDocumentData } from "@/components/legal-document"

export const privacyId: LegalDocumentData = {
  eyebrow: "Kebijakan Privasi",
  title: "Kebijakan Privasi Toolando.tech",
  intro:
    "Kebijakan Privasi ini menjelaskan data apa yang diproses di Toolando.tech, untuk tujuan apa, atas dasar hukum apa, dan hak apa yang Anda miliki. Saya memproses data pribadi sesuai Peraturan (EU) 2016/679 (GDPR) dan hukum perlindungan data Polandia yang berlaku.",
  lastUpdated: "Terakhir diperbarui: 23 Juli 2026",
  sections: [
    {
      title: "§1. Pengendali data",
      paragraphs: [
        "1.1. Pengendali pemrosesan data («Pengendali») adalah Szymon Badyl, pemilik Toolando.tech, yang mengoperasikan layanan alat daring.",
        "1.2. Kontak privasi: {{email}}.",
        "1.3. Pengendali belum menunjuk Petugas Perlindungan Data karena tidak diwajibkan untuk kegiatan ini menurut GDPR.",
      ],
    },
    {
      title: "§2. Data yang kami proses",
      paragraphs: ["2.1. Bergantung pada cara Anda menggunakan Layanan, kami memproses kategori berikut:"],
      list: [
        "Data teknis dan penggunaan: alamat IP, jenis dan versi peramban, sistem operasi, bahasa, tanggal/waktu permintaan, halaman yang dikunjungi, sumber lalu lintas, pengidentifikasi cookie (setelah persetujuan).",
        "Data akun: alamat email, kata sandi (hash), ID pengguna, tanggal pendaftaran, status Premium, ID pelanggan Stripe (jika berlaku).",
        "Data pembayaran: diproses oleh Stripe — Pengendali tidak menyimpan nomor kartu pembayaran lengkap.",
        "Data korespondensi: alamat email, isi pesan, tanggal kontak — saat Anda menulis ke {{email}} atau menggunakan formulir kontak.",
        "File pengguna: diproses sementara hanya untuk menjalankan operasi alat — tidak disimpan setelah konversi selesai.",
      ],
    },
    {
      title: "§3. Tujuan dan dasar hukum",
      paragraphs: ["3.1. Kami memproses data untuk tujuan berikut:"],
      definitions: [
        {
          term: "Menyediakan Layanan",
          description:
            "Konversi file, operasi alat, pengelolaan Akun — dasar hukum: Pasal 6(1)(b) GDPR (kontrak) atau (f) (kepentingan sah: mengoperasikan Layanan).",
        },
        {
          term: "Langganan Premium",
          description:
            "Penanganan pembayaran dan langganan — dasar hukum: Pasal 6(1)(b) GDPR; akuntansi: Pasal 6(1)(c) (kewajiban hukum).",
        },
        {
          term: "Analitik lalu lintas",
          description:
            "Google Analytics — hanya setelah persetujuan cookie analitik — dasar hukum: Pasal 6(1)(a) GDPR (persetujuan).",
        },
        {
          term: "Periklanan",
          description:
            "Google AdSense — hanya setelah persetujuan cookie iklan — dasar hukum: Pasal 6(1)(a) GDPR (persetujuan).",
        },
        {
          term: "Keamanan",
          description:
            "Pencegahan penyalahgunaan, log server — dasar hukum: Pasal 6(1)(f) GDPR (kepentingan sah).",
        },
        {
          term: "Kontak dan keluhan",
          description:
            "Menjawab pesan — dasar hukum: Pasal 6(1)(f) GDPR atau (b) (jika terkait kontrak).",
        },
      ],
    },
    {
      title: "§4. Cookie dan teknologi serupa",
      paragraphs: [
        "4.1. Layanan menggunakan cookie dan teknologi serupa. Saat kunjungan pertama, kami menampilkan banner persetujuan di mana Anda dapat menerima semua cookie atau hanya yang esensial.",
        "4.2. Jenis cookie:",
      ],
      list: [
        "Esensial — diperlukan agar Layanan berfungsi (mis. bahasa, sesi, pengaturan cookie). Tidak perlu persetujuan.",
        "Analitik — Google Analytics, statistik kunjungan agregat. Perlu persetujuan.",
        "Periklanan — Google AdSense, personalisasi iklan. Perlu persetujuan.",
      ],
      afterList: [
        "4.3. Anda dapat mengubah preferensi cookie kapan saja melalui banner atau pengaturan peramban.",
      ],
    },
    {
      title: "§5. Penerima dan pemroses",
      paragraphs: ["5.1. Data dapat dibagikan dengan pemroses tepercaya yang bertindak atas nama Pengendali:"],
      list: [
        "Vercel Inc. — hosting dan infrastruktur (AS, Klausul Kontrak Standar UE).",
        "Stripe, Inc. — pemrosesan pembayaran Premium (AS/Irlandia, PCI DSS).",
        "Google LLC — Analytics dan AdSense (setelah persetujuan; kebijakan mitra: https://policies.google.com/technologies/partner-sites).",
        "Resend — email transaksional (mis. email selamat datang setelah pendaftaran), jika dikonfigurasi.",
        "Penyedia model AI — memproses prompt dan file hanya dalam alat AI Premium, tanpa penyimpanan setelah selesai.",
      ],
      afterList: ["5.2. Pengendali tidak menjual data pribadi kepada pihak ketiga."],
    },
    {
      title: "§6. File yang diunggah ke alat",
      paragraphs: [
        "6.1. File yang diunggah ke konverter dan alat lain tidak disimpan setelah operasi selesai.",
        "6.2. File tidak digunakan untuk pelatihan model AI, profiling, atau pemasaran.",
        "6.3. Beberapa alat (mis. pembuka file universal) memproses file sepenuhnya secara lokal di peramban — file tidak pernah meninggalkan perangkat Anda.",
        "6.4. Jangan unggah file dengan data sensitif (mis. data kesehatan, nomor identitas) kecuali sangat diperlukan — risiko Anda sendiri.",
      ],
    },
    {
      title: "§7. Periode retensi",
      paragraphs: ["7.1. Kami menyimpan data untuk periode berikut:"],
      list: [
        "Data akun — hingga penghapusan akun atau permintaan penghapusan.",
        "Log server — hingga 90 hari, kecuali retensi lebih lama diperlukan untuk menegaskan hak.",
        "Korespondensi — hingga 3 tahun setelah penutupan kasus.",
        "Data penagihan (Stripe) — menurut hukum pajak (biasanya 5 tahun).",
        "File pengguna — dihapus segera setelah pemrosesan (biasanya detik hingga menit).",
        "Pengaturan cookie — hingga 12 bulan atau hingga persetujuan dicabut.",
      ],
    },
    {
      title: "§8. Hak Anda (GDPR)",
      paragraphs: ["8.1. Anda memiliki hak berikut:"],
      list: [
        "Hak akses (Pasal 15 GDPR).",
        "Hak perbaikan (Pasal 16 GDPR).",
        "Hak penghapusan — «hak untuk dilupakan» (Pasal 17 GDPR).",
        "Hak pembatasan pemrosesan (Pasal 18 GDPR).",
        "Hak portabilitas data (Pasal 20 GDPR).",
        "Hak keberatan terhadap pemrosesan berdasarkan Pasal 6(1)(f) GDPR (Pasal 21 GDPR).",
        "Hak mencabut persetujuan kapan saja — tanpa mempengaruhi legalitas pemrosesan sebelum pencabutan (Pasal 7(3) GDPR).",
        "Hak mengajukan keluhan ke otoritas pengawas (di Polandia: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Untuk menggunakan hak Anda, tulis ke {{email}}. Saya akan merespons tanpa penundaan, paling lambat 30 hari.",
      ],
    },
    {
      title: "§9. Keamanan data",
      paragraphs: [
        "9.1. Saya menerapkan langkah teknis dan organisasi yang sesuai dengan risiko, termasuk enkripsi HTTPS, akses sistem terbatas, dan penghapusan file setelah pemrosesan.",
        "9.2. Tidak ada sistem yang 100% aman. Jika pelanggaran data pribadi kemungkinan menimbulkan risiko tinggi bagi hak Anda, saya akan memberi tahu sesuai Pasal 34 GDPR.",
      ],
    },
    {
      title: "§10. Anak-anak",
      paragraphs: [
        "10.1. Layanan tidak ditujukan untuk anak di bawah 16 tahun. Saya tidak dengan sengaja memproses data anak di bawah 16 tahun tanpa persetujuan orang tua/wali.",
        "10.2. Jika Anda yakin anak memberikan data tanpa persetujuan wali, hubungi {{email}} — data akan dihapus.",
      ],
    },
    {
      title: "§11. Perubahan kebijakan ini",
      paragraphs: [
        "11.1. Kebijakan ini dapat diperbarui untuk mencerminkan perubahan Layanan, teknologi, atau hukum.",
        "11.2. Perubahan material akan diberitahukan melalui pemberitahuan di Layanan atau email (untuk pengguna dengan akun).",
        "11.3. Versi terkini selalu tersedia di /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Pertanyaan privasi: {{email}}. Ketentuan penggunaan tersedia di /regulamin.",
}
