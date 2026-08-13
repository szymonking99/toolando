export const trTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "Döviz çevirici",
    "desc": "Güncel ECB referans kurlarıyla online döviz çevirin. PLN, EUR, USD ve onlarca başka çift — kayıt gerekmez.",
    "steps": [
      "Tutar ve kaynak para birimini girin.",
      "Hedef para birimini seçin.",
      "Sonucu ve günlük kuru okuyun."
    ],
    "faq": [
      {
        "q": "Kurlar nereden geliyor?",
        "a": "Frankfurter API üzerinden Avrupa Merkez Bankası referans kurları, iş günlerinde güncellenir."
      },
      {
        "q": "Kurlar gerçek zamanlı mı?",
        "a": "Bunlar ECB referans kurlarıdır, banka veya döviz bürosu kurları değildir."
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "Tarih hesaplayıcı",
    "desc": "İki tarih arasındaki günleri, iş günlerini ve haftanın gününü hesaplayın — sözleşmeler ve son tarihler için kullanışlı.",
    "steps": [
      "Başlangıç ve bitiş tarihlerini seçin.",
      "Gün ve hafta farkını görün.",
      "İsteğe bağlı yalnızca iş günlerini sayın."
    ],
    "faq": [
      {
        "q": "Resmi tatiller hariç mi?",
        "a": "Varsayılan olarak Cumartesi ve Pazar hariç tutulur. Tatiller ülkeye göre değişir."
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "Saat dilimi farkı",
    "desc": "Şehirler arasında yerel saatleri karşılaştırın, saat farkını görün ve konumları basit bir haritada bulun.",
    "steps": [
      "Kaynak ve hedef şehirleri seçin.",
      "Güncel yerel saatleri karşılaştırın.",
      "Farkı ve harita işaretlerini görün."
    ],
    "faq": [
      {
        "q": "Yaz saati uygulaması dikkate alınıyor mu?",
        "a": "Evet — DST'yi otomatik uygulayan IANA bölgeleri (ör. Europe/Warsaw) kullanıyoruz."
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "Birim dönüştürücü",
    "desc": "Uzunluk, kütle, sıcaklık ve hacim dönüştürün: cm↔inç, kg↔lb, °C↔°F ve daha fazlası.",
    "steps": [
      "Birim kategorisi seçin.",
      "Değer ve birimleri girin.",
      "Sonucu anında alın."
    ],
    "faq": [
      {
        "q": "Dönüşümler doğru mu?",
        "a": "Evet — standart SI katsayıları. Sıcaklık basit çarpma değil, özel formüller kullanır."
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "KDV ve yüzde hesaplayıcı",
    "desc": "KDV ekleyin veya çıkarın (23%, 8%, 5%), net/brüt hesaplayın ve basit yüzdeleri bulun.",
    "steps": [
      "Net veya brüt tutar girin.",
      "KDV oranı veya özel yüzde seçin.",
      "Net, KDV ve brüt dökümünü görün."
    ],
    "faq": [
      {
        "q": "Polonya'da hangi KDV oranları var?",
        "a": "Standart 23%, indirimli 8% ve 5%. Özel oran da girebilirsiniz."
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "Yaş ve geri sayım hesaplayıcı",
    "desc": "Tam yaşı yıl, ay ve gün olarak hesaplayın — veya bir tarihe kaç gün kaldığını bulun.",
    "steps": [
      "Doğum veya hedef tarihi girin.",
      "Yaşı veya geri sayımı görün.",
      "Bir sonraki doğum gününü de kontrol edin."
    ],
    "faq": [
      {
        "q": "Yaş nasıl hesaplanır?",
        "a": "Doğum tarihinden bugüne, yıl, ay ve gün sayarak — yalnızca takvim yılı değil."
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "Parola oluşturucu",
    "desc": "Tarayıcınızda yerel olarak güçlü parola oluşturun. Uzunluk ve karakter kümelerini ayarlayın — sunucuya hiçbir şey gönderilmez.",
    "steps": [
      "Uzunluk ve karakter seçeneklerini ayarlayın.",
      "Oluştur'a tıklayın.",
      "Tek tıkla kopyalayın."
    ],
    "faq": [
      {
        "q": "Parola yükleniyor mu?",
        "a": "Hayır — oluşturma tamamen tarayıcınızda gerçekleşir."
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "Karakter ve kelime sayacı",
    "desc": "Karakter, kelime, cümle ve paragraf sayın — SEO, sosyal medya ve form limitleri için pratik.",
    "steps": [
      "Metin yapıştırın veya yazın.",
      "Canlı istatistikleri izleyin.",
      "Boşluksuz uzunluğu kontrol edin."
    ],
    "faq": [
      {
        "q": "Kelimeler nasıl sayılır?",
        "a": "Kelimeler boşluk veya satır sonuyla ayrılmış dizilerdir."
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "QR kod oluşturucu",
    "desc": "Bağlantı veya metinden QR kod oluşturun ve PNG olarak indirin. Tarayıcıda yerel çalışır.",
    "steps": [
      "Metin veya URL girin.",
      "QR önizlemesini oluşturun.",
      "PNG görseli indirin."
    ],
    "faq": [
      {
        "q": "QR içeriği yükleniyor mu?",
        "a": "Hayır — kod yerel oluşturulur. İçeriği saklamıyoruz."
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "Dosya boyutu ve bitrate hesaplayıcı",
    "desc": "Verilen bitrate ve sürede ses/video dosyasının ne kadar büyük olacağını — veya MB limitine sığacak bitrate'i tahmin edin.",
    "steps": [
      "Bitrate'ten boyut veya limitten bitrate seçin.",
      "Süre ve değerleri girin.",
      "Sonucu MB / kbps olarak okuyun."
    ],
    "faq": [
      {
        "q": "Konteyner dahil mi?",
        "a": "Ham akışı tahmin eder. Konteynerler ve ek parçalar genelde birkaç yüzde ekler."
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "HEX RGB HSL renk dönüştürücü",
    "desc": "HEX, RGB ve HSL arasında renk dönüştürün ve arka plana karşı WCAG kontrastını kontrol edin.",
    "steps": [
      "Herhangi bir formatta renk girin.",
      "HEX/RGB/HSL eşdeğerlerini görün.",
      "Arka plana karşı kontrastı kontrol edin."
    ],
    "faq": [
      {
        "q": "AA / AAA ne anlama gelir?",
        "a": "Metin kontrastı için WCAG erişilebilirlik seviyeleri."
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 kodlama / çözme",
    "desc": "Metni Base64'e kodlayın veya Base64'ü çözün. Yerel, veri yüklemeden.",
    "steps": [
      "Metin veya Base64 yapıştırın.",
      "Kodla veya Çöz seçin.",
      "Sonucu kopyalayın."
    ],
    "faq": [
      {
        "q": "UTF-8 destekliyor mu?",
        "a": "Evet — Unicode karakterler desteklenir."
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix timestamp ↔ tarih",
    "desc": "Unix timestamp'i (sn/ms) tarihe ve tersine dönüştürün. Loglar ve API'ler için kullanışlı.",
    "steps": [
      "Timestamp yapıştırın veya tarih seçin.",
      "ISO ve yerel sonuçları görün.",
      "Değeri kopyalayın."
    ],
    "faq": [
      {
        "q": "Saniye mi milisaniye mi?",
        "a": "Uzunluğa göre otomatik algılarız. Birimi zorlayabilirsiniz de."
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "UUID oluşturucu",
    "desc": "Tek tıkla UUID v4 (rastgele) oluşturun. Gerekirse birden fazla oluşturun.",
    "steps": [
      "Kaç UUID olduğunu ayarlayın.",
      "Oluştur'a tıklayın.",
      "Listeyi kopyalayın."
    ],
    "faq": [
      {
        "q": "Hangi UUID sürümü?",
        "a": "UUID v4 — rastgele, RFC 4122, tarayıcıda oluşturulur."
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "SHA / MD5 hash",
    "desc": "Metnin SHA-1, SHA-256, SHA-512 veya MD5'ini hesaplayın. Web Crypto ile yerel.",
    "steps": [
      "Metin yapıştırın.",
      "Algoritma seçin.",
      "Hex hash'i kopyalayın."
    ],
    "faq": [
      {
        "q": "MD5 güvenli mi?",
        "a": "MD5 parolalar için değildir. Güvenlik için SHA-256+ kullanın; MD5 yalnızca checksum için."
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "JSON biçimlendirici",
    "desc": "JSON'u tarayıcıda biçimlendirin ve küçültün — sunucuya yükleme yok.",
    "steps": [
      "JSON yapıştırın.",
      "Biçimlendir veya Küçült'e tıklayın.",
      "Sonucu kopyalayın."
    ],
    "faq": [
      {
        "q": "Veriler yükleniyor mu?",
        "a": "Hayır — işlem tarayıcınızda yerel gerçekleşir."
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "Metin diff",
    "desc": "İki metin parçasını satır satır karşılaştırın ve farkları vurgulayın.",
    "steps": [
      "A ve B metnini yapıştırın.",
      "Vurgulanan farkları inceleyin."
    ],
    "faq": [
      {
        "q": "Bu tam bir diff mi?",
        "a": "Satır satır karşılaştırmadır — kısa parçalar ve listeler için ideal."
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "Büyük/küçük harf dönüştürücü",
    "desc": "Metni büyük, küçük harf, Title Case veya sentence case'e dönüştürün.",
    "steps": [
      "Metin yapıştırın.",
      "Mod seçin.",
      "Sonucu kopyalayın."
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "Yinelenen satırları kaldır",
    "desc": "E-posta listeleri, SKU veya etiketlerden tekrarlayan satırları kaldırın.",
    "steps": [
      "Liste yapıştırın.",
      "Seçenekleri ayarlayın.",
      "Temizlenmiş listeyi kopyalayın."
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "JWT çözücü",
    "desc": "İmza doğrulamadan JWT başlık ve payload'unu okuyun.",
    "steps": [
      "Token yapıştırın.",
      "Başlık ve payload'u inceleyin."
    ],
    "faq": [
      {
        "q": "İmzayı doğruluyor mu?",
        "a": "Hayır — yalnızca token'ın Base64URL çözümünü yapar."
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "NIP / PESEL / REGON doğrulayıcı",
    "desc": "Polonya vergi ve kimlik numaralarını checksum kurallarına göre doğrulayın.",
    "steps": [
      "Numara girin.",
      "Doğrulama sonucunu görün."
    ],
    "faq": [
      {
        "q": "GUS kaydını sorguluyor mu?",
        "a": "Hayır — yalnızca checksum ve uzunluk."
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "Kredi hesaplayıcı",
    "desc": "Anüite taksitlerini, toplam geri ödemeyi ve faiz maliyetini hesaplayın.",
    "steps": [
      "Tutar, faiz ve vade girin.",
      "Aylık taksiti okuyun."
    ],
    "faq": [
      {
        "q": "Banka ücretleri dahil mi?",
        "a": "Ücret ve sigorta olmadan basitleştirilmiş simülasyon."
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Markdown önizleme",
    "desc": "Markdown yazın ve tarayıcıda canlı HTML önizlemesini görün.",
    "steps": [
      "Markdown yazın.",
      "Önizleme otomatik güncellenir."
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "Parola gücü",
    "desc": "Parola gücünü uzunluk, karakter çeşitliliği ve yaygın kalıplara göre puanlayın.",
    "steps": [
      "Parola girin.",
      "Puan ve ipuçlarını görün."
    ],
    "faq": [
      {
        "q": "Parola yükleniyor mu?",
        "a": "Hayır — puanlama tarayıcınızda yerel gerçekleşir."
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "SRT / VTT altyazı dönüştürücü",
    "desc": "Altyazıları SRT ve WebVTT formatları arasında dönüştürün.",
    "steps": [
      "Altyazıları yapıştırın.",
      "Yön veya otomatik seçin.",
      "Sonucu kopyalayın."
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "Toplu dosya yeniden adlandırma",
    "desc": "{name}, {ext}, {index} kalıbıyla dosyaları toplu yeniden adlandırın.",
    "steps": [
      "Dosya listesi yapıştırın.",
      "Kalıp ayarlayın.",
      "Yeni adları kopyalayın."
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "IBAN doğrulayıcı",
    "desc": "IBAN checksum'unu (mod 97) ve ülkeye özel uzunluğu doğrulayın.",
    "steps": [
      "IBAN yapıştırın.",
      "Biçimlendirilmiş çıktı ve doğrulamayı görün."
    ],
    "faq": [
      {
        "q": "Banka hesabını doğruluyor mu?",
        "a": "Hayır — yalnızca format ve checksum."
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "B2B vs istihdam hesaplayıcı",
    "desc": "İstihdam net maaşını B2B fatura geliriyle karşılaştırın (sabit veya doğrusal vergi).",
    "steps": [
      "Brüt maaş ve B2B gelirini girin.",
      "Vergi formunu seçin.",
      "Sonuçları karşılaştırın."
    ],
    "faq": [
      {
        "q": "Bu vergi danışmanlığı mı?",
        "a": "Hayır — muhasebeciyle görüşmek için basitleştirilmiş simülasyon."
      }
    ]
  }
};
