import type { ToolContentTemplates } from "../locale-factory"

export const trToolContentTemplates: ToolContentTemplates = {
  extendedDesc:
    "Bu ücretsiz çevrimiçi dönüştürücü, {fromName} ({FROM}) dosyalarını herhangi bir yazılım yüklemeden {toName} ({TO}) formatına dönüştürür. Dosyanızı yükleyin — Toolando.tech sunucuda işler ve indirmeniz için sonucu size iletir. Dosyalar asla saklanmaz — dönüştürmeden hemen sonra silinir.",
  whenToUseBase: [
    "{TO} dosyasına ihtiyacınız var ancak dosyanız yalnızca {FROM} formatındaysa.",
    "Kullandığınız cihaz veya uygulama {FROM} dosyalarını desteklemiyorsa.",
  ],
  whenToUseCategory: {
    audio: "Ses dosyası boyutunu küçültmek veya oynatıcı uyumluluğunu artırmak istediğinizde.",
    video: "Videoyu bir web sitesinde veya sosyal medyada farklı bir formatta yayınlamanız gerektiğinde.",
    image: "Bir görseli web, e-posta veya baskı için optimize etmek istediğinizde.",
    pdf: "PDF sayfalarını görsel olarak çıkarmanız veya bir belgeyi düzenlenebilir bir formata dönüştürmeniz gerektiğinde.",
    doc: "Metin belgeleriyle çalışıyorsanız ve düzenleme veya yayınlama için farklı bir formata ihtiyacınız varsa.",
    data: "Verileri sistemler, API'ler veya elektronik tablolar arasında farklı bir formatta taşıdığınızda.",
    font: "Web sitenizde kullanmak üzere web yazı tiplerini hazırladığınızda.",
    archive: "Arşivi başka bir sistemde açabilmek için arşiv formatını değiştirmeniz gerektiğinde.",
  },
  steps: [
    '"Dosya seç"e tıklayın veya {FROM} dosyanızı yükleme alanına sürükleyin.',
    "Yükleme ve dönüştürmenin tamamlanmasını bekleyin — bu genellikle birkaç saniye sürer.",
    "Hazır {TO} dosyasını tek tıkla indirin.",
    "Kaynak dosya, işlem tamamlandıktan hemen sonra sunucudan silinir.",
  ],
  faq: [
    {
      q: "{FROM} → {TO} dönüştürme ücretsiz mi?",
      a: "Evet. Bu dönüştürücü tamamen ücretsizdir ve hesap gerektirmez. Dosyaları sınırsız dönüştürebilirsiniz.",
    },
    {
      q: "{FROM} dosyam güvende mi?",
      a: "Evet. Dosyanız yalnızca dönüştürme için işlenir ve hemen ardından silinir. Dosyalarınızı asla saklamaz veya paylaşmayız.",
    },
    {
      q: "Maksimum dosya boyutu nedir?",
      a: "500 MB'a kadar dosya yükleyebilirsiniz. Daha büyük dosyaların işlenmesi daha uzun sürebilir.",
    },
    {
      q: "{TO} kalitesi iyi olacak mı?",
      a: "Toolando.tech dönüştürme için profesyonel kütüphaneler (FFmpeg, Sharp, MuPDF) kullanır. Kalite kaynak ve hedef formata bağlıdır — kayıplı formattan kayıpsıza dönüştürmek kaybolan veriyi geri getirmez, ancak çıktı teknik olarak doğru olur.",
    },
  ],
  extraFaq: [
    {
      q: "{FROM} hakkında daha fazla bilgiyi nereden edinebilirim?",
      a: "Toolando.tech format ansiklopedisindeki kapsamlı {FROM} format rehberini okuyun — kullanım alanları, avantajlar, dezavantajlar ve karşılaştırmalar.",
    },
    {
      q: "{TO} dosyasını tekrar {FROM} formatına dönüştürebilir miyim?",
      a: "Evet — araçlar listesinden {TO} → {FROM} dönüştürücüsünü seçin. Kayıplı bir formattan dönüştürmek kaybolan kaliteyi geri getirmez.",
    },
  ],
}
