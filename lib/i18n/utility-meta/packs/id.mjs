export const idTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Konverter mata uang",
    "desc": "Konversi mata uang online dengan kurs referensi ECB terkini. PLN, EUR, USD dan puluhan pasangan lain — tanpa pendaftaran.",
    "steps": [
      "Masukkan jumlah dan mata uang sumber.",
      "Pilih mata uang tujuan.",
      "Lihat hasil dan kurs harian."
    ],
    "faq": [
      {
        "q": "Dari mana kurs berasal?",
        "a": "Kurs referensi Bank Sentral Eropa via Frankfurter API, diperbarui pada hari kerja."
      },
      {
        "q": "Apakah kurs real-time?",
        "a": "Ini kurs referensi ECB, bukan kurs bank atau money changer."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Kalkulator tanggal",
    "desc": "Hitung hari antara dua tanggal, hari kerja, dan hari dalam seminggu — berguna untuk kontrak dan tenggat.",
    "steps": [
      "Pilih tanggal mulai dan akhir.",
      "Lihat selisih dalam hari dan minggu.",
      "Opsional hanya hitung hari kerja."
    ],
    "faq": [
      {
        "q": "Apakah libur dikecualikan?",
        "a": "Secara default kami kecualikan Sabtu dan Minggu. Libur tergantung negara."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Selisih zona waktu",
    "desc": "Bandingkan waktu lokal antarkota, lihat selisih jam, dan temukan lokasi di peta sederhana.",
    "steps": [
      "Pilih kota asal dan tujuan.",
      "Bandingkan waktu lokal saat ini.",
      "Lihat offset dan penanda peta."
    ],
    "faq": [
      {
        "q": "Apakah DST dipertimbangkan?",
        "a": "Ya — kami gunakan zona IANA (mis. Europe/Warsaw) yang menerapkan DST otomatis."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Konverter satuan",
    "desc": "Konversi panjang, massa, suhu, dan volume: cm↔inci, kg↔lb, °C↔°F, dan lainnya.",
    "steps": [
      "Pilih kategori satuan.",
      "Masukkan nilai dan satuan.",
      "Dapatkan hasil segera."
    ],
    "faq": [
      {
        "q": "Apakah konversi akurat?",
        "a": "Ya — faktor SI standar. Suhu memakai rumus khusus, bukan perkalian sederhana."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "Kalkulator PPN dan persen",
    "desc": "Tambah atau kurangi PPN (23%, 8%, 5%), hitung netto/bruto, dan persentase sederhana.",
    "steps": [
      "Masukkan jumlah netto atau bruto.",
      "Pilih tarif PPN atau persen kustom.",
      "Lihat rincian netto, PPN, dan bruto."
    ],
    "faq": [
      {
        "q": "Tarif PPN apa di Polandia?",
        "a": "Standar 23%, reduksi 8% dan 5%. Anda juga bisa masukkan tarif kustom."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Kalkulator usia dan hitung mundur",
    "desc": "Hitung usia tepat dalam tahun, bulan, dan hari — atau berapa hari tersisa hingga tanggal.",
    "steps": [
      "Masukkan tanggal lahir atau tanggal target.",
      "Lihat usia atau hitung mundur.",
      "Periksa juga ulang tahun berikutnya."
    ],
    "faq": [
      {
        "q": "Bagaimana usia dihitung?",
        "a": "Dari tanggal lahir hingga hari ini, dengan tahun, bulan, dan hari — bukan hanya tahun kalender."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Generator kata sandi",
    "desc": "Buat kata sandi kuat secara lokal di browser. Atur panjang dan set karakter — tidak ada yang dikirim ke server.",
    "steps": [
      "Atur panjang dan opsi karakter.",
      "Klik Buat.",
      "Salin dengan satu klik."
    ],
    "faq": [
      {
        "q": "Apakah kata sandi diunggah?",
        "a": "Tidak — pembuatan sepenuhnya di browser Anda."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Penghitung karakter dan kata",
    "desc": "Hitung karakter, kata, kalimat, dan paragraf — praktis untuk SEO, media sosial, dan batas formulir.",
    "steps": [
      "Tempel atau ketik teks.",
      "Pantau statistik langsung.",
      "Periksa panjang tanpa spasi."
    ],
    "faq": [
      {
        "q": "Bagaimana kata dihitung?",
        "a": "Kata adalah urutan yang dipisah spasi atau baris baru."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "Generator kode QR",
    "desc": "Buat kode QR dari tautan atau teks dan unduh sebagai PNG. Berjalan lokal di browser.",
    "steps": [
      "Masukkan teks atau URL.",
      "Buat pratinjau QR.",
      "Unduh gambar PNG."
    ],
    "faq": [
      {
        "q": "Apakah konten QR diunggah?",
        "a": "Tidak — kode dibuat lokal. Kami tidak menyimpan konten."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Kalkulator ukuran file dan bitrate",
    "desc": "Perkirakan ukuran file audio/video pada bitrate dan durasi tertentu — atau bitrate yang muat dalam batas MB.",
    "steps": [
      "Pilih ukuran dari bitrate atau bitrate dari batas.",
      "Masukkan durasi dan nilai.",
      "Baca hasil dalam MB / kbps."
    ],
    "faq": [
      {
        "q": "Apakah termasuk container?",
        "a": "Memperkirakan stream mentah. Container dan trek tambahan biasanya menambah beberapa persen."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "Konverter warna HEX RGB HSL",
    "desc": "Konversi warna antara HEX, RGB, dan HSL serta periksa kontras WCAG terhadap latar.",
    "steps": [
      "Masukkan warna dalam format apa pun.",
      "Lihat setara HEX/RGB/HSL.",
      "Periksa kontras terhadap latar."
    ],
    "faq": [
      {
        "q": "Apa arti AA / AAA?",
        "a": "Tingkat aksesibilitas WCAG untuk kontras teks terhadap latar."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 enkode / dekode",
    "desc": "Enkode teks ke Base64 atau dekode Base64. Lokal, tanpa mengunggah data.",
    "steps": [
      "Tempel teks atau Base64.",
      "Pilih Enkode atau Dekode.",
      "Salin hasil."
    ],
    "faq": [
      {
        "q": "Apakah mendukung UTF-8?",
        "a": "Ya — karakter Unicode didukung."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix timestamp ↔ tanggal",
    "desc": "Konversi Unix timestamp (detik/ms) ke tanggal dan sebaliknya. Berguna untuk log dan API.",
    "steps": [
      "Tempel timestamp atau pilih tanggal.",
      "Lihat hasil ISO dan lokal.",
      "Salin nilai."
    ],
    "faq": [
      {
        "q": "Detik atau milidetik?",
        "a": "Kami deteksi otomatis dari panjang. Anda juga bisa paksa satuan."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "Generator UUID",
    "desc": "Buat UUID v4 (acak) dengan satu klik. Buat banyak sekaligus jika perlu.",
    "steps": [
      "Atur jumlah UUID.",
      "Klik Buat.",
      "Salin daftar."
    ],
    "faq": [
      {
        "q": "Versi UUID apa?",
        "a": "UUID v4 — acak, RFC 4122, dibuat di browser."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "Hash SHA / MD5",
    "desc": "Hitung SHA-1, SHA-256, SHA-512, atau MD5 teks. Lokal via Web Crypto.",
    "steps": [
      "Tempel teks.",
      "Pilih algoritma.",
      "Salin hex hash."
    ],
    "faq": [
      {
        "q": "Apakah MD5 aman?",
        "a": "MD5 bukan untuk kata sandi. Gunakan SHA-256+ untuk keamanan; MD5 hanya untuk checksum."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "Formatter JSON",
    "desc": "Format dan minify JSON di browser — tanpa unggah ke server.",
    "steps": [
      "Tempel JSON.",
      "Klik Format atau Minify.",
      "Salin hasil."
    ],
    "faq": [
      {
        "q": "Apakah data diunggah?",
        "a": "Tidak — pemrosesan terjadi lokal di browser Anda."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Diff teks",
    "desc": "Bandingkan dua cuplikan teks baris demi baris dan sorot perbedaan.",
    "steps": [
      "Tempel teks A dan B.",
      "Tinjau perbedaan yang disorot."
    ],
    "faq": [
      {
        "q": "Apakah ini diff penuh?",
        "a": "Perbandingan baris demi baris — ideal untuk cuplikan pendek dan daftar."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Konverter huruf besar/kecil",
    "desc": "Konversi teks ke huruf besar, kecil, Title Case, atau sentence case.",
    "steps": [
      "Tempel teks.",
      "Pilih mode.",
      "Salin hasil."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Hapus baris duplikat",
    "desc": "Hapus baris berulang dari daftar email, SKU, atau tag.",
    "steps": [
      "Tempel daftar.",
      "Atur opsi.",
      "Salin daftar bersih."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "Dekoder JWT",
    "desc": "Baca header dan payload JWT tanpa memverifikasi tanda tangan.",
    "steps": [
      "Tempel token.",
      "Periksa header dan payload."
    ],
    "faq": [
      {
        "q": "Apakah memverifikasi tanda tangan?",
        "a": "Tidak — hanya mendekode Base64URL token."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "Validator NIP / PESEL / REGON",
    "desc": "Validasi nomor pajak dan ID Polandia menurut aturan checksum.",
    "steps": [
      "Masukkan nomor.",
      "Lihat hasil validasi."
    ],
    "faq": [
      {
        "q": "Apakah menanyakan register GUS?",
        "a": "Tidak — hanya checksum dan panjang."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Kalkulator pinjaman",
    "desc": "Hitung anuitas, total pelunasan, dan biaya bunga.",
    "steps": [
      "Masukkan jumlah, suku bunga, dan tenor.",
      "Baca cicilan bulanan."
    ],
    "faq": [
      {
        "q": "Apakah termasuk biaya bank?",
        "a": "Simulasi sederhana tanpa biaya atau asuransi."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Pratinjau Markdown",
    "desc": "Tulis Markdown dan lihat pratinjau HTML langsung di browser.",
    "steps": [
      "Ketik Markdown.",
      "Pratinjau diperbarui otomatis."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Kekuatan kata sandi",
    "desc": "Nilai kekuatan kata sandi berdasarkan panjang, variasi karakter, dan pola umum.",
    "steps": [
      "Masukkan kata sandi.",
      "Lihat skor dan tips."
    ],
    "faq": [
      {
        "q": "Apakah kata sandi diunggah?",
        "a": "Tidak — penilaian terjadi lokal di browser Anda."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "Konverter subtitle SRT / VTT",
    "desc": "Konversi subtitle antara format SRT dan WebVTT.",
    "steps": [
      "Tempel subtitle.",
      "Pilih arah atau otomatis.",
      "Salin hasil."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Penamaan file massal",
    "desc": "Ganti nama file secara massal dengan pola {name}, {ext}, {index}.",
    "steps": [
      "Tempel daftar file.",
      "Atur pola.",
      "Salin nama baru."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "Validator IBAN",
    "desc": "Validasi checksum IBAN (mod 97) dan panjang spesifik negara.",
    "steps": [
      "Tempel IBAN.",
      "Lihat output terformat dan validasi."
    ],
    "faq": [
      {
        "q": "Apakah memverifikasi rekening bank?",
        "a": "Tidak — hanya format dan checksum."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "Kalkulator B2B vs pekerjaan",
    "desc": "Bandingkan gaji bersih pekerjaan dengan pendapatan faktur B2B (pajak flat atau linear).",
    "steps": [
      "Masukkan gaji kotor dan pendapatan B2B.",
      "Pilih bentuk pajak.",
      "Bandingkan hasil."
    ],
    "faq": [
      {
        "q": "Apakah ini saran pajak?",
        "a": "Tidak — simulasi sederhana untuk diskusi dengan akuntan."
      }
    ]
  }
};
