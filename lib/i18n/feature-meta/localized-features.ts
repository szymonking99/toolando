import type { TextMeta } from "../category-meta/types"

type FeatureRow = readonly [title: string, description: string]

const FEATURE_IDS = [
  "pdf-to-jpg",
  "kompresor-obrazow",
  "mp3-to-wav",
  "mp4-to-webm",
  "laczenie-pdf",
  "usuwanie-tla",
] as const

function buildFeatures(rows: readonly FeatureRow[]): Record<string, TextMeta> {
  return Object.fromEntries(
    FEATURE_IDS.map((id, i) => {
      const [title, description] = rows[i]
      return [id, { title, description }]
    }),
  )
}

export const localizedFeatureMeta: Record<string, Record<string, TextMeta>> = {
  fr: buildFeatures([
    ["Convertisseur PDF → JPG", "Transformez les pages PDF en images JPG de haute qualité — rapidement et sans installation."],
    ["Compresseur d'images", "Réduisez la taille des images sans perte visible pour accélérer votre site."],
    ["Convertisseur MP3 → WAV", "Convertissez l'audio MP3 au format WAV sans perte, sans dégrader le son."],
    ["Convertisseur MP4 → WebM", "Transformez la vidéo MP4 en WebM léger, idéal pour le web et le streaming."],
    ["Fusionner des PDF", "Combinez plusieurs documents PDF en un seul fichier, en conservant l'ordre et la qualité."],
    ["Supprimer l'arrière-plan", "Découpez automatiquement l'arrière-plan d'une photo en un clic grâce à l'IA."],
  ]),
  it: buildFeatures([
    ["Convertitore PDF → JPG", "Trasforma le pagine PDF in immagini JPG di alta qualità — velocemente e senza installazione."],
    ["Compressore immagini", "Riduci le dimensioni delle immagini senza perdita visibile per velocizzare il sito."],
    ["Convertitore MP3 → WAV", "Converti audio MP3 nel formato WAV senza perdita, senza degradare il suono."],
    ["Convertitore MP4 → WebM", "Trasforma video MP4 nel leggero formato WebM, ideale per web e streaming."],
    ["Unire file PDF", "Combina più documenti PDF in un unico file, mantenendo ordine e qualità."],
    ["Rimuovi sfondo immagine", "Ritaglia automaticamente lo sfondo di una foto con un clic grazie all'IA."],
  ]),
  pt: buildFeatures([
    ["Conversor PDF → JPG", "Transforme páginas PDF em imagens JPG de alta qualidade — rápido e sem instalação."],
    ["Compressor de imagens", "Reduza o tamanho das imagens sem perda visível para acelerar o seu site."],
    ["Conversor MP3 → WAV", "Converta áudio MP3 para o formato WAV sem perdas, sem degradar o som."],
    ["Conversor MP4 → WebM", "Transforme vídeo MP4 no formato WebM leve, ideal para web e streaming."],
    ["Unir ficheiros PDF", "Combine vários documentos PDF num único ficheiro, mantendo ordem e qualidade."],
    ["Remover fundo da imagem", "Recorte automaticamente o fundo de uma foto com um clique graças à IA."],
  ]),
  nl: buildFeatures([
    ["PDF → JPG-converter", "Zet PDF-pagina's om in JPG-afbeeldingen van hoge kwaliteit — snel en zonder installatie."],
    ["Beeldcompressor", "Verklein afbeeldingen zonder zichtbaar kwaliteitsverlies om je site te versnellen."],
    ["MP3 → WAV-converter", "Converteer MP3-audio naar verliesvrij WAV zonder geluidskwaliteit te verliezen."],
    ["MP4 → WebM-converter", "Zet MP4-video om naar het lichte WebM-formaat, ideaal voor web en streaming."],
    ["PDF-bestanden samenvoegen", "Combineer meerdere PDF-documenten in één bestand, met behoud van volgorde en kwaliteit."],
    ["Achtergrond verwijderen", "Knip automatisch de achtergrond uit een foto met één klik dankzij precieze AI."],
  ]),
  sv: buildFeatures([
    ["PDF → JPG-konverterare", "Gör PDF-sidor till JPG-bilder i hög kvalitet — snabbt och utan installation."],
    ["Bildkompressor", "Minska bildstorlek utan synlig kvalitetsförlust för att snabba upp din webbplats."],
    ["MP3 → WAV-konverterare", "Konvertera MP3-ljud till förlustfritt WAV utan att försämra ljudkvaliteten."],
    ["MP4 → WebM-konverterare", "Gör MP4-video till det lätta WebM-formatet, idealiskt för webb och streaming."],
    ["Slå ihop PDF-filer", "Kombinera flera PDF-dokument till en fil med ordning och full kvalitet."],
    ["Ta bort bildbakgrund", "Klipp automatiskt bort bakgrunden från ett foto med ett klick tack vare AI."],
  ]),
  no: buildFeatures([
    ["PDF → JPG-konverter", "Gjør PDF-sider om til JPG-bilder i høy kvalitet — raskt og uten installasjon."],
    ["Bildekompressor", "Reduser bildestørrelse uten synlig kvalitetstap for å gjøre nettstedet raskere."],
    ["MP3 → WAV-konverter", "Konverter MP3-lyd til tapsfritt WAV uten å forringe lydkvaliteten."],
    ["MP4 → WebM-konverter", "Gjør MP4-video om til det lette WebM-formatet, ideelt for web og streaming."],
    ["Slå sammen PDF-filer", "Kombiner flere PDF-dokumenter til én fil med rekkefølge og full kvalitet."],
    ["Fjern bildebakgrunn", "Klipp automatisk ut bakgrunnen fra et bilde med ett klikk takket være AI."],
  ]),
  da: buildFeatures([
    ["PDF → JPG-konverter", "Gør PDF-sider til JPG-billeder i høj kvalitet — hurtigt og uden installation."],
    ["Billedkompressor", "Reducer billedstørrelse uden synligt kvalitetstab for at gøre dit website hurtigere."],
    ["MP3 → WAV-konverter", "Konverter MP3-lyd til tabsfrit WAV uden at forringe lydkvaliteten."],
    ["MP4 → WebM-konverter", "Gør MP4-video om til det lette WebM-format, ideelt til web og streaming."],
    ["Flet PDF-filer", "Kombiner flere PDF-dokumenter til én fil med rækkefølge og fuld kvalitet."],
    ["Fjern baggrund fra billede", "Klipp automatisk baggrunden fra et foto med ét klik takket være præcis AI."],
  ]),
  fi: buildFeatures([
    ["PDF → JPG -muunnin", "Muunna PDF-sivut korkealaatuisiksi JPG-kuviksi — nopeasti ilman asennusta."],
    ["Kuvan pakkaus", "Pienennä kuvien kokoa ilman näkyvää laadun heikkenemistä nopeuttaaksesi sivustoa."],
    ["MP3 → WAV -muunnin", "Muunna MP3-ääni häviöttömään WAV-muotoon menettämättä äänenlaatua."],
    ["MP4 → WebM -muunnin", "Muunna MP4-video kevyeksi WebM-muodoksi, ihanteellinen verkkoon ja suoratoistoon."],
    ["Yhdistä PDF-tiedostot", "Yhdistä useita PDF-dokumentteja yhdeksi tiedostoksi säilyttäen järjestyksen ja laadun."],
    ["Poista kuvan tausta", "Leikkaa tausta automaattisesti valokuvasta yhdellä napsautuksella tarkalla tekoälyllä."],
  ]),
  cs: buildFeatures([
    ["Převodník PDF → JPG", "Převeďte stránky PDF na kvalitní JPG obrázky — rychle a bez instalace."],
    ["Komprese obrázků", "Zmenšete velikost obrázků bez viditelné ztráty kvality a urychlete web."],
    ["Převodník MP3 → WAV", "Převeďte audio MP3 do bezeztrátového WAV bez zhoršení kvality zvuku."],
    ["Převodník MP4 → WebM", "Převeďte video MP4 do lehkého formátu WebM, ideální pro web a streaming."],
    ["Sloučení PDF souborů", "Spojte více PDF dokumentů do jednoho souboru se zachováním pořadí a kvality."],
    ["Odstranění pozadí", "Automaticky vyjměte pozadí z fotky jedním kliknutím díky přesné AI."],
  ]),
  ro: buildFeatures([
    ["Convertor PDF → JPG", "Transformă paginile PDF în imagini JPG de înaltă calitate — rapid și fără instalare."],
    ["Compresor de imagini", "Reduce dimensiunea imaginilor fără pierdere vizibilă de calitate pentru un site mai rapid."],
    ["Convertor MP3 → WAV", "Convertește audio MP3 în format WAV fără pierderi, fără degradarea sunetului."],
    ["Convertor MP4 → WebM", "Transformă video MP4 în formatul ușor WebM, ideal pentru web și streaming."],
    ["Combină fișiere PDF", "Combină mai multe documente PDF într-un singur fișier, păstrând ordinea și calitatea."],
    ["Elimină fundalul imaginii", "Decupează automat fundalul unei fotografii dintr-un singur clic cu AI precisă."],
  ]),
  hu: buildFeatures([
    ["PDF → JPG konverter", "Alakítsd a PDF oldalakat kiváló minőségű JPG képekké — gyorsan, telepítés nélkül."],
    ["Képtömörítő", "Csökkentsd a képek méretét látható minőségveszteség nélkül a gyorsabb weboldalért."],
    ["MP3 → WAV konverter", "Konvertáld az MP3 hangot veszteségmentes WAV formátumba minőségromlás nélkül."],
    ["MP4 → WebM konverter", "Alakítsd az MP4 videót könnyű WebM formátummá, ideális webhez és streameléshez."],
    ["PDF fájlok egyesítése", "Fűzz össze több PDF dokumentumot egy fájlba, sorrend és teljes minőség megőrzésével."],
    ["Háttér eltávolítása", "Automatikusan vágd ki a hátteret egy fotóról egy kattintással precíz AI-val."],
  ]),
  el: buildFeatures([
    ["Μετατροπέας PDF → JPG", "Μετέτρεψε σελίδες PDF σε JPG εικόνες υψηλής ποιότητας — γρήγορα χωρίς εγκατάσταση."],
    ["Συμπιεστής εικόνων", "Μείωσε το μέγεθος εικόνων χωρίς ορατή απώλεια ποιότητας για ταχύτερο site."],
    ["Μετατροπέας MP3 → WAV", "Μετέτρεψε ήχο MP3 σε μορφή WAV χωρίς απώλειες, χωρίς υποβάθμιση ήχου."],
    ["Μετατροπέας MP4 → WebM", "Μετέτρεψε βίντεο MP4 στο ελαφρύ WebM, ιδανικό για web και streaming."],
    ["Συγχώνευση αρχείων PDF", "Συνδύασε πολλά PDF σε ένα αρχείο, διατηρώντας σειρά και πλήρη ποιότητα."],
    ["Αφαίρεση φόντου εικόνας", "Αφαίρεσε αυτόματα το φόντο από μια φωτογραφία με ένα κλικ χάρη σε ακριβή AI."],
  ]),
  tr: buildFeatures([
    ["PDF → JPG dönüştürücü", "PDF sayfalarını yüksek kaliteli JPG görsellere dönüştürün — hızlı, kurulum yok."],
    ["Görsel sıkıştırıcı", "Sitenizi hızlandırmak için görselleri görünür kalite kaybı olmadan küçültün."],
    ["MP3 → WAV dönüştürücü", "MP3 sesi kayıpsız WAV formatına dönüştürün, ses kalitesini koruyun."],
    ["MP4 → WebM dönüştürücü", "MP4 videoyu hafif WebM formatına dönüştürün, web ve yayın için ideal."],
    ["PDF dosyalarını birleştir", "Birden fazla PDF'yi sıra ve tam kalite korunarak tek dosyada birleştirin."],
    ["Görsel arka planını kaldır", "Hassas yapay zeka ile tek tıkla fotoğraftan arka planı otomatik kesin."],
  ]),
  ru: buildFeatures([
    ["Конвертер PDF → JPG", "Преобразуйте страницы PDF в качественные JPG — быстро и без установки."],
    ["Сжатие изображений", "Уменьшите размер изображений без видимой потери качества для ускорения сайта."],
    ["Конвертер MP3 → WAV", "Конвертируйте MP3 в формат WAV без потерь, сохраняя качество звука."],
    ["Конвертер MP4 → WebM", "Преобразуйте MP4 в лёгкий WebM — идеально для веба и стриминга."],
    ["Объединение PDF", "Объедините несколько PDF в один файл с сохранением порядка и качества."],
    ["Удаление фона", "Автоматически вырежьте фон с фото одним кликом с помощью точного ИИ."],
  ]),
  ar: buildFeatures([
    ["محوّل PDF → JPG", "حوّل صفحات PDF إلى صور JPG عالية الجودة — بسرعة وبدون تثبيت."],
    ["ضاغط الصور", "قلّل حجم الصور دون فقدان مرئي للجودة لتسريع موقعك."],
    ["محوّل MP3 → WAV", "حوّل صوت MP3 إلى WAV بدون فقدان مع الحفاظ على جودة الصوت."],
    ["محوّل MP4 → WebM", "حوّل فيديو MP4 إلى WebM خفيف، مثالي للويب والبث."],
    ["دمج ملفات PDF", "ادمج عدة مستندات PDF في ملف واحد مع الحفاظ على الترتيب والجودة."],
    ["إزالة خلفية الصورة", "اقطع الخلفية من الصورة تلقائياً بنقرة واحدة بدقة الذكاء الاصطناعي."],
  ]),
  zh: buildFeatures([
    ["PDF → JPG 转换器", "将 PDF 页面转为高质量 JPG 图片 — 快速、无需安装。"],
    ["图片压缩", "在无明显质量损失的情况下降小图片体积，加快网站加载。"],
    ["MP3 → WAV 转换器", "将 MP3 音频转为无损 WAV 格式，不降低音质。"],
    ["MP4 → WebM 转换器", "将 MP4 视频转为轻量 WebM 格式，适合网页与流媒体。"],
    ["合并 PDF 文件", "将多个 PDF 合并为一个文件，保持顺序与完整质量。"],
    ["去除图片背景", "一键借助精准 AI 自动抠除照片背景。"],
  ]),
  ja: buildFeatures([
    ["PDF → JPG コンバーター", "PDFページを高品質JPG画像に変換 — インストール不要で素早く。"],
    ["画像圧縮", "目に見える画質低下なくサイズを小さくし、サイトを高速化。"],
    ["MP3 → WAV コンバーター", "MP3音声をロスレスWAVに変換し、音質を維持。"],
    ["MP4 → WebM コンバーター", "MP4動画を軽量WebMに変換 — Webとストリーミングに最適。"],
    ["PDFファイル結合", "複数のPDFを順序と品質を保って1つのファイルに結合。"],
    ["背景除去", "精密AIでワンクリック自動背景切り抜き。"],
  ]),
  ko: buildFeatures([
    ["PDF → JPG 변환기", "PDF 페이지를 고품질 JPG 이미지로 — 빠르고 설치 없이."],
    ["이미지 압축", "눈에 띄는 품질 손실 없이 크기를 줄여 사이트를 빠르게."],
    ["MP3 → WAV 변환기", "MP3 오디오를 무손실 WAV로 변환, 음질 유지."],
    ["MP4 → WebM 변환기", "MP4 동영상을 가벼운 WebM으로 — 웹과 스트리밍에 적합."],
    ["PDF 파일 병합", "여러 PDF를 순서와 품질을 유지하며 하나의 파일로 병합."],
    ["배경 제거", "정밀 AI로 한 번의 클릭으로 사진 배경 자동 제거."],
  ]),
  hi: buildFeatures([
    ["PDF → JPG कन्वर्टर", "PDF पृष्ठों को उच्च गुणवत्ता वाली JPG छवियों में बदलें — तेज़, बिना इंस्टॉलेशन।"],
    ["छवि कंप्रेसर", "वेबसाइट तेज़ करने के लिए बिना दिखाई देने वाली गुणवत्ता हानि के छवि आकार घटाएँ।"],
    ["MP3 → WAV कन्वर्टर", "MP3 ऑडियो को बिना हानि WAV में बदलें, ध्वनि गुणवत्ता बनाए रखें।"],
    ["MP4 → WebM कन्वर्टर", "MP4 वीडियो को हल्के WebM में बदलें — वेब और स्ट्रीमिंग के लिए आदर्श।"],
    ["PDF फ़ाइलें मिलाएँ", "कई PDF को क्रम और पूर्ण गुणवत्ता बनाए रखकर एक फ़ाइल में जोड़ें।"],
    ["छवि पृष्ठभूमि हटाएँ", "सटीक AI से एक क्लिक में फ़ोटो से पृष्ठभूमि स्वचालित काटें।"],
  ]),
  id: buildFeatures([
    ["Konverter PDF → JPG", "Ubah halaman PDF menjadi gambar JPG berkualitas tinggi — cepat tanpa instalasi."],
    ["Kompresor gambar", "Perkecil ukuran gambar tanpa kehilangan kualitas terlihat untuk mempercepat situs."],
    ["Konverter MP3 → WAV", "Konversi audio MP3 ke WAV lossless tanpa menurunkan kualitas suara."],
    ["Konverter MP4 → WebM", "Ubah video MP4 ke WebM ringan, ideal untuk web dan streaming."],
    ["Gabung file PDF", "Gabungkan beberapa PDF menjadi satu file dengan urutan dan kualitas penuh."],
    ["Hapus latar gambar", "Potong latar belakang foto otomatis dengan satu klik berkat AI presisi."],
  ]),
}
