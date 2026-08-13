import type { LegalDocumentData } from "@/components/legal-document"

export const privacyTr: LegalDocumentData = {
  eyebrow: "Gizlilik Politikası",
  title: "Toolando.tech Gizlilik Politikası",
  intro:
    "Bu Gizlilik Politikası, Toolando.tech'te hangi verilerin işlendiğini, hangi amaçlarla, hangi hukuki dayanakla ve hangi haklara sahip olduğunuzu açıklar. Kişisel verileri (AB) 2016/679 Tüzüğü (GDPR) ve uygulanabilir Polonya veri koruma mevzuatına uygun olarak işliyorum.",
  lastUpdated: "Son güncelleme: 23 Temmuz 2026",
  sections: [
    {
      title: "§1. Veri sorumlusu",
      paragraphs: [
        "1.1. Veri sorumlusu («Sorumlu») Szymon Badyl'dir; Toolando.tech'in sahibi olup çevrimiçi araç hizmetleri sunmaktadır.",
        "1.2. Gizlilik iletişimi: {{email}}.",
        "1.3. Sorumlu, GDPR kapsamında bu faaliyet için gerekli olmadığından Veri Koruma Görevlisi atamamıştır.",
      ],
    },
    {
      title: "§2. Hangi verileri işliyoruz",
      paragraphs: ["2.1. Hizmeti nasıl kullandığınıza bağlı olarak aşağıdaki kategorileri işliyoruz:"],
      list: [
        "Teknik ve kullanım verileri: IP adresi, tarayıcı türü ve sürümü, işletim sistemi, dil, istek tarihi ve saati, ziyaret edilen sayfalar, trafik kaynağı, çerez tanımlayıcıları (onay sonrası).",
        "Hesap verileri: e-posta adresi, şifre (hash), kullanıcı kimliği, kayıt tarihi, Premium durumu, Stripe müşteri kimliği (varsa).",
        "Ödeme verileri: Stripe tarafından işlenir — Sorumlu tam ödeme kartı numaralarını saklamaz.",
        "Yazışma verileri: e-posta adresi, mesaj içeriği, iletişim tarihi — {{email}} adresine yazdığınızda veya iletişim formunu kullandığınızda.",
        "Kullanıcı dosyaları: yalnızca araç işlemlerini gerçekleştirmek için geçici olarak işlenir — dönüştürme tamamlandıktan sonra saklanmaz.",
      ],
    },
    {
      title: "§3. Amaçlar ve hukuki dayanaklar",
      paragraphs: ["3.1. Verileri aşağıdaki amaçlarla işliyoruz:"],
      definitions: [
        {
          term: "Hizmetin sağlanması",
          description:
            "Dosya dönüştürme, araçların çalıştırılması, hesap yönetimi — hukuki dayanak: GDPR madde 6(1)(b) (sözleşme) veya (f) (meşru menfaat: Hizmetin işletilmesi).",
        },
        {
          term: "Premium abonelik",
          description:
            "Ödeme ve abonelik işleme — hukuki dayanak: GDPR madde 6(1)(b); muhasebe: madde 6(1)(c) (yasal yükümlülük).",
        },
        {
          term: "Trafik analizi",
          description:
            "Google Analytics — yalnızca analitik çerezlere onay sonrası — hukuki dayanak: GDPR madde 6(1)(a) (onay).",
        },
        {
          term: "Reklam",
          description:
            "Google AdSense — yalnızca reklam çerezlerine onay sonrası — hukuki dayanak: GDPR madde 6(1)(a) (onay).",
        },
        {
          term: "Güvenlik",
          description:
            "Kötüye kullanımın önlenmesi, sunucu günlükleri — hukuki dayanak: GDPR madde 6(1)(f) (meşru menfaat).",
        },
        {
          term: "İletişim ve şikayetler",
          description:
            "Mesajlara yanıt — hukuki dayanak: GDPR madde 6(1)(f) veya (b) (sözleşmeyle ilgili olduğunda).",
        },
      ],
    },
    {
      title: "§4. Çerezler ve benzer teknolojiler",
      paragraphs: [
        "4.1. Hizmet çerezler ve benzer teknolojiler kullanır. İlk ziyarette tüm çerezleri kabul edebileceğiniz veya yalnızca zorunlu olanlarla sınırlayabileceğiniz bir onay banner'ı gösteririz.",
        "4.2. Çerez türleri:",
      ],
      list: [
        "Zorunlu — Hizmetin çalışması için gerekli (ör. dil, oturum, çerez ayarları). Onay gerekmez.",
        "Analitik — Google Analytics, toplu ziyaret istatistikleri. Onay gerekir.",
        "Reklam — Google AdSense, reklam kişiselleştirme. Onay gerekir.",
      ],
      afterList: [
        "4.3. Çerez ayarlarınızı banner veya tarayıcı ayarları üzerinden istediğiniz zaman değiştirebilirsiniz.",
      ],
    },
    {
      title: "§5. Alıcılar ve veri işleyenler",
      paragraphs: ["5.1. Veriler, Sorumlu adına hareket eden güvenilir veri işleyenlere aktarılabilir:"],
      list: [
        "Vercel Inc. — barındırma ve altyapı (ABD, AB standart sözleşme maddeleri).",
        "Stripe, Inc. — Premium ödeme işleme (ABD/İrlanda, PCI DSS).",
        "Google LLC — Analytics ve AdSense (onay sonrası; ortak politikası: https://policies.google.com/technologies/partner-sites).",
        "Resend — işlem e-postaları (ör. kayıt sonrası hoş geldin e-postası), yapılandırıldıysa.",
        "Yapay zeka model sağlayıcıları — yalnızca Premium yapay zeka araçları kapsamında prompt ve dosya işleme, tamamlandıktan sonra saklama olmadan.",
      ],
      afterList: ["5.2. Sorumlu kişisel verileri üçüncü taraflara satmaz."],
    },
    {
      title: "§6. Araçlara yüklenen dosyalar",
      paragraphs: [
        "6.1. Dönüştürücülere ve diğer araçlara yüklenen dosyalar işlem tamamlandıktan sonra saklanmaz.",
        "6.2. Dosyalar yapay zeka model eğitimi, profil oluşturma veya pazarlama için kullanılmaz.",
        "6.3. Bazı araçlar (ör. evrensel dosya açıcı) dosyaları tamamen tarayıcıda yerel olarak işler — dosya cihazınızdan asla ayrılmaz.",
        "6.4. Kesinlikle gerekli olmadıkça hassas veri içeren dosyalar (ör. sağlık verileri, kimlik numaraları) yüklemeyin — bu kendi riskinizdedir.",
      ],
    },
    {
      title: "§7. Saklama süreleri",
      paragraphs: ["7.1. Verileri aşağıdaki süreler boyunca saklarız:"],
      list: [
        "Hesap verileri — hesap silinene veya silme talebi yapılana kadar.",
        "Sunucu günlükleri — en fazla 90 gün, hak taleplerinin ileri sürülmesi için daha uzun saklama gerekmedikçe.",
        "Yazışmalar — davanın kapanmasından sonra en fazla 3 yıl.",
        "Fatura verileri (Stripe) — vergi mevzuatına göre (genellikle 5 yıl).",
        "Kullanıcı dosyaları — işleme sonrası derhal silinir (genellikle saniyeler ile dakikalar arası).",
        "Çerez ayarları — en fazla 12 ay veya onay geri çekilene kadar.",
      ],
    },
    {
      title: "§8. Haklarınız (GDPR)",
      paragraphs: ["8.1. Aşağıdaki haklara sahipsiniz:"],
      list: [
        "Erişim hakkı (GDPR madde 15).",
        "Düzeltme hakkı (GDPR madde 16).",
        "Silme hakkı — «unutulma hakkı» (GDPR madde 17).",
        "İşlemenin kısıtlanması hakkı (GDPR madde 18).",
        "Veri taşınabilirliği hakkı (GDPR madde 20).",
        "GDPR madde 6(1)(f) dayanaklı işlemeye itiraz hakkı (GDPR madde 21).",
        "Onayı istediğiniz zaman geri çekme hakkı — geri çekmeden önceki işlemenin hukuka uygunluğunu etkilemeden (GDPR madde 7(3)).",
        "Denetim otoritesine şikayette bulunma hakkı (Polonya'da: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Haklarınızı kullanmak için {{email}} adresine yazın. Gecikmeksizin, en geç 30 gün içinde yanıt veririm.",
      ],
    },
    {
      title: "§9. Veri güvenliği",
      paragraphs: [
        "9.1. HTTPS şifreleme, sınırlı sistem erişimi ve işleme sonrası dosya silme dahil olmak üzere riske uygun teknik ve organizasyonel önlemler uygularım.",
        "9.2. Hiçbir sistem %100 güvenli değildir. Haklarınız için yüksek risk oluşturması muhtemel bir kişisel veri ihlali durumunda GDPR madde 34'e göre sizi bilgilendiririm.",
      ],
    },
    {
      title: "§10. Çocuklar",
      paragraphs: [
        "10.1. Hizmet 16 yaşın altındaki çocuklara yönelik değildir. Ebeveyn veya vasinin onayı olmadan bilerek 16 yaşın altındaki çocukların verilerini işlemem.",
        "10.2. Bir çocuğun ebeveyn veya vasinin onayı olmadan veri sağladığını düşünüyorsanız {{email}} ile iletişime geçin — veriler silinecektir.",
      ],
    },
    {
      title: "§11. Bu politikanın değişiklikleri",
      paragraphs: [
        "11.1. Bu politika Hizmet, teknolojiler veya mevzuattaki değişiklikleri yansıtmak için güncellenebilir.",
        "11.2. Önemli değişiklikler Hizmette bildirim veya e-posta yoluyla (hesabı olan kullanıcılar için) duyurulacaktır.",
        "11.3. Güncel sürüm her zaman /polityka-prywatnosci adresinde mevcuttur.",
      ],
    },
  ],
  footerNote:
    "Gizlilik soruları: {{email}}. Kullanım koşulları /regulamin adresinde mevcuttur.",
}
