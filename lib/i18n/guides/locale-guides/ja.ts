import type { GuideArticle } from "../types"
import type { GuideSlug } from "../slugs"
import { guidesEn } from "../guides-en"

export const guidesJa: Record<GuideSlug, GuideArticle> = {
  "choose-audio-bitrate": {
    ...guidesEn["choose-audio-bitrate"],
    title: "MP3 や AAC のビットレートはどれを選ぶ？",
    description: "128 vs 192 vs 320 kbps — ポッドキャスト、音楽、動画の実用的な選び方。",
    sections: [
      {
        paragraphs: [
          "ビットレートは 1 秒あたりの音声データ量です。高いほど音質は良い傾向ですがファイルも大きくなります。MP3 では 128 と 320 kbps の差は、良いスピーカーと複雑な音楽で最も聞こえやすいです。",
          "音声（ポッドキャスト、インタビュー）ならモノラル 96–128 kbps で十分なことが多いです。ヘッドフォンで音楽ならステレオ 192–256 kbps がバランス良いです。320 kbps は MP3 の実質的上限 — 形式が非可逆のため、それ以上はあまり意味がありません。",
        ],
      },
      {
        title: "MP3、AAC、Opus — ざっくり比較",
        paragraphs: [
          "同じビットレートでは AAC（M4A）が通常 MP3 より優れます — YouTube と Apple Music が使う理由です。",
          "Opus は低ビットレート（64–128 kbps）の VoIP とストリーミングに強い。",
          "スタジオ保管は WAV または FLAC — 非可逆ビットレートでは失われたデータは戻りません。",
        ],
      },
      {
        title: "よくある間違い",
        paragraphs: [
          "低品質 MP3 を高ビットレートに上げても音は良くならない — ファイルだけ大きくなる。",
          "同じ曲を何度も再エンコード（MP3 → AAC → MP3）すると毎回劣化する。",
          "動画制作では他人の音楽を落とすのではなく、自分の MP4 から音声を抽出 — 著作権に注意。",
        ],
      },
    ],
  },
  "compress-images-without-quality-loss": {
    ...guidesEn["compress-images-without-quality-loss"],
    title: "JPG と PNG を目に見える劣化なく圧縮する方法",
    description: "圧縮ツールをいつ使うか、品質レベルの選び方、圧縮と形式変換の違い。",
    sections: [
      {
        paragraphs: [
          "画像圧縮は形式を変えずにサイズを小さくします — JPG か PNG のまま、軽くなるだけ。JPG → WebP は形式変更で、Web ではしばしば有利ですが、印刷フローは JPG を要求することがあります。",
          "Toolando.tech で 2000×2000 の商品写真をテスト：品質 80% でサイズ 40–60% 減、画面上ではアーティファクトなし。",
        ],
      },
      {
        title: "圧縮 vs 変換",
        paragraphs: [
          "形式は問題ない（例：ショップが JPG 指定）がメールや CMS には重すぎる → 圧縮。",
          "自サイト公開で <picture> フォールバックがある → WebP/AVIF に変換。",
          "同じ JPG を何度も保存しない — 保存のたびにアーティファクト。",
        ],
      },
      {
        title: "典型的なシナリオ",
        paragraphs: [
          "メール添付：JPG 品質 ~75–85、最大幅 1600 px。",
          "EC：WebP + JPG フォールバック。サムネ 800 px。",
          "テキスト入り UI スクショ：PNG または可逆 WebP — 強い JPG は避ける。",
        ],
      },
    ],
  },
  "convert-video-to-gif-properly": {
    ...guidesEn["convert-video-to-gif-properly"],
    title: "動画から良い GIF を作る — 解像度、FPS、長さ",
    description: "巨大ファイルなしで MP4/MOV → GIF：実用的な限界と代替。",
    sections: [
      {
        paragraphs: [
          "GIF に音声はなく H.264 も使わない — 各フレームがフルビットマップ（256 色パレットが多い）。10 秒 1080p GIF は原動画より重いことも。目標：短く、小さく、低解像度。",
          "MP4 → GIF の前に外部エディタで 2–4 秒にトリムし、30 ではなく 10–15 FPS — GIF は映画の滑らかさは戻せない。",
        ],
      },
      {
        title: "開始パラメータ",
        paragraphs: [
          "ミーム・リアクションは最大幅 480–640 px。",
          "最大 5 秒 — それ以上はループ MP4 を検討。",
          "単純背景（グリーンスクリーン）はグラデーション・ノイズより圧縮しやすい。",
        ],
      },
      {
        title: "変換後",
        paragraphs: [
          "サイズ確認 — 5 MB 超 GIF はページではほぼ意味がない。",
          "大きすぎるなら GIF → MP4 と <video> 埋め込みで解決することが多い。",
          "Toolando は変換中だけ動画を処理 — 完成 GIF を公開ホストしない。",
        ],
      },
    ],
  },
  "docx-pdf-workflow": {
    ...guidesEn["docx-pdf-workflow"],
    title: "オフィス向け DOCX → PDF — いつ、どう変換するか",
    description: "履歴書、請求書、契約の送信：PDF が DOCX より良い理由とフォント崩れの回避。",
    sections: [
      {
        paragraphs: [
          "DOCX は編集用 — 相手が Word を持ちテキストを変える必要があるときに最適。PDF は閲覧用 — レイアウト、フォント、余白が Windows、Mac、スマホで同じ。",
          "履歴書、提案書、契約を送る前に DOCX → PDF。誤編集を防ぎ、代替フォントでブランドが崩れるのも避けられます。",
        ],
      },
      {
        title: "PDF → DOCX にしないとき",
        paragraphs: [
          "スキャンした請求書や署名済み契約 — PDF をアーカイブとして保持。OCR は別工程。",
          "複雑な多ページレイアウト（カタログ、パンフレット） — DOCX 変換でページ送りが崩れやすい。",
          "テキストの一部だけ必要なら、ファイル全体を変換せず PDF からコピー。",
        ],
      },
      {
        title: "セキュリティとプライバシー",
        paragraphs: [
          "Toolando.tech では DOCX と PDF は変換のためだけに使い、処理後に削除されます。",
          "機密文書（身分証、銀行口座）は HTTPS を使い、暗号化なしの公開クラウドにコピーを残さない。",
        ],
      },
    ],
  },
  "extract-audio-from-video": {
    ...guidesEn["extract-audio-from-video"],
    title: "動画から音声を抽出する — 合法的な方法",
    description: "自分の動画ファイル（MP4、MOV、MKV）から合法的に音声トラックを取り出す方法。",
    sections: [
      {
        paragraphs: [
          "動画ファイルはあるが音声だけ必要、ということもあります。Toolando.tech は MP4、MOV、AVI、MKV から音声を抽出し、MP3、WAV、FLAC、AAC で保存します。",
          "自分のファイルなら合法です — YouTube や TikTok から音楽をダウンロードする方法は、Toolando.tech では意図的に提供していません。",
        ],
      },
    ],
  },
  "extract-images-from-pdf-pages": {
    ...guidesEn["extract-images-from-pdf-pages"],
    title: "PDF ページから画像を抽出（JPG、PNG、WebP）",
    description: "スライド、カタログ、スキャン — ページを画像にする意味と解像度。",
    sections: [
      {
        paragraphs: [
          "PDF はコンテナ — 内部にベクター、フォント、埋め込みビットマップ。PDF → JPG は各ページをラスター画像に。単一ロゴ抽出（PDF エディタ必要）とは別だが、スライド、ポスター、スキャンには有効。",
          "16:9 デッキを幅 1920 px PNG でエクスポートすると画面でシャープ。A4 印刷は高解像度対応なら ~2480×3508 px（300 DPI）。",
        ],
      },
      {
        title: "JPG vs PNG vs WebP",
        paragraphs: [
          "写真背景スライド → JPG または WebP。",
          "チャートと文字スライド → PNG（文字がシャープ）。",
          "Web サムネ → WebP、さらに変換後 JPG フォールバック。",
        ],
      },
      {
        title: "複数ページ PDF",
        paragraphs: [
          "5 と 12 ページだけ必要なら単ページエクスポート。",
          "全ページギャラリー — ファイル全体を変換しファイル名の番号で並べる。",
          "著作権を尊重 — 他人の PDF を自由公開してはいけない。",
        ],
      },
    ],
  },
  "flac-music-archive-guide": {
    ...guidesEn["flac-music-archive-guide"],
    title: "音楽アーカイブとしての FLAC — MP3 と比べて得か",
    description: "可逆 FLAC vs MP3 320 kbps：バックアップ、自宅ストリーミング、カープレーヤー。",
    sections: [
      {
        paragraphs: [
          "FLAC（Free Lossless Audio Codec）は可逆圧縮 — 音声の ZIP のようなもの。デコードすると WAV と同じ信号ですが、サイズは約半分。MP3 はデータを永久に削除。320 kbps でも CD リップとビット一致しません。",
          "実務：可逆音源を買うか自分のディスクをリップするなら FLAC は合理的なアーカイブ形式。Bluetooth ヘッドフォン付きスマホでは FLAC vs MP3 256 kbps は聞き分けられないことも — MP3 変換で GB 節約。",
        ],
      },
      {
        title: "アーカイブワークフロー",
        paragraphs: [
          "1）NAS/クラウドバックアップに FLAC（または WAV）マスター。",
          "2）スマホ・車用に MP3/AAC 作業コピー。",
          "3）MP3 → FLAC「品質のため」は絶対にしない — ファイルが膨らむだけでデータは戻らない。",
          "Toolando.tech の FLAC → MP3 を 40–60 分アルバムでテスト。変換後プレーヤーでメタデータ（タイトル、アーティスト）を確認。",
        ],
      },
      {
        title: "互換性",
        paragraphs: [
          "FLAC：VLC、Foobar2000、多くの Android プレーヤー。ネイティブ Apple Music は弱め（Apple なら ALAC が適合）。",
          "カーステレオは USB から MP3/WMA/AAC のみ — FLAC → MP3 が必要。",
          "自宅ストリーミング（Plex、Jellyfin）は FLAC 問題なし。",
        ],
      },
    ],
  },
  "font-woff2-for-websites": {
    ...guidesEn["font-woff2-for-websites"],
    title: "TTF、OTF、WOFF、WOFF2 — Web フォント",
    description: "@font-face 用の変換、ライセンス、ページ速度への影響。",
    sections: [
      {
        paragraphs: [
          "ブラウザは CSS（@font-face）の WOFF/WOFF2 が必要で、生の Windows フォントファイルではありません。WOFF2 が最小転送量。",
          "Toolando の TTF/OTF → WOFF2 は Web 用ファイルを用意。埋め込み前にフォントライセンスを確認。",
        ],
      },
      {
        title: "パフォーマンス",
        paragraphs: [
          "ファイルが大きいならプロツールで使用グリフにサブセット化。",
          "ファーストビューのテキスト用に <head> で重要 WOFF2 を preload。",
          "font-display: swap で読み込み中も文字が読める。",
        ],
      },
    ],
  },
  "gif-vs-mp4-for-animations": {
    ...guidesEn["gif-vs-mp4-for-animations"],
    title: "GIF vs MP4 — サイトと SNS のアニメーション",
    description: "旧来 GIF が意味があるときと、短い MP4/WebM で MB 節約。",
    sections: [
      {
        paragraphs: [
          "GIF はどこでも再生できますが、技術的にはモダン動画圧縮のないフレーム列 — 5 秒 720p で 10–20 MB も。同じ内容の MP4（H.264）は 500 KB–1 MB に収まることも。",
          "Toolando.tech の MP4 → GIF は、プラットフォームが動画埋め込み不可の短ループ（ローダー、Slack リアクション）向け。自サイトは <video autoplay loop muted playsinline> + MP4/WebM を優先。",
        ],
      },
      {
        title: "GIF を使うとき",
        paragraphs: [
          "短いループ（<5 秒）、小解像度（幅 ≤480 px）。",
          "プラットフォーム要件（GIF のみのフォーラム）。",
          "色数の少ないシンプルグラフィック — 本当に軽くできる。",
        ],
      },
      {
        title: "MP4/WebM",
        paragraphs: [
          "多色、グラデーション、動画クリップのアニメーション。",
          "Web サイト — LCP と帯域改善。",
          "Instagram/TikTok は GIF ではなく動画必須。",
        ],
      },
      {
        title: "MP4 → GIF のコツ",
        paragraphs: [
          "長さを切る — 1 秒が数十フレーム。",
          "変換前に解像度を下げる。",
          "ツールがあれば色パレット制限（バンディング減）。",
        ],
      },
    ],
  },
  "heic-iphone-jpg": {
    ...guidesEn["heic-iphone-jpg"],
    title: "iPhone の HEIC — 開いて JPG に変換する方法",
    description: "iPhone が HEIC で保存する理由、互換性の問題、JPG や PNG への変換。",
    sections: [
      {
        paragraphs: [
          "Apple は既定で HEIC に保存します — 同品質で JPG より小さい。問題：拡張機能のない Windows、古いアプリ、多くのサービスが HEIC 非対応。",
          "解決策：メール、投稿、印刷の前に Toolando.tech で HEIC → JPG または HEIC → PNG。設定で iPhone を「互換性優先」（JPG）にすることもできます。",
        ],
      },
    ],
  },
  "json-csv-xml": {
    ...guidesEn["json-csv-xml"],
    title: "JSON、CSV、XML — 形式間でデータを変換",
    description: "JSON、CSV、TSV、XML をいつ使うか、構造を失わずに変換する方法。",
    sections: [
      {
        paragraphs: [
          "JSON は REST API とアプリ設定の標準です。CSV と TSV は Excel インポートに使われます。XML は古いエンタープライズシステムや RSS で使われます。",
          "JSON → CSV で API レスポンスを Excel で開けます。CSV → JSON で REST API 用にデータを準備します。Toolando.tech は変換時にデータ構造を保持します。",
        ],
      },
    ],
  },
  "jwt-decode-safely-guide": {
    ...guidesEn["jwt-decode-safely-guide"],
    title: "JWT — 署名検証なしでトークンを読む方法",
    description: "Header、payload、Base64URL — ローカルデコードのタイミングと禁止事項。",
    sections: [
      {
        paragraphs: [
          "JSON Web Token はドット区切り 3 部：header、payload、signature。Toolando の JWT デコーダーは Base64URL 後に header/payload を表示 — サーバーに送らない（ブラウザ内）。",
          "バックエンドの署名検証の代わりにはならない。デコードはデバッグ用（期限切れ `exp`、誤った `aud`）— payload 単体を身元証明にしない。",
        ],
      },
      {
        title: "安全な実践",
        paragraphs: [
          "個人データ入り本番トークンを公開サイトに貼らない — ローカルデコーダーかテスト環境。",
          "401 デバッグ前に `exp` と `nbf` を確認。",
          "分析後、クリップボード履歴とログからトークンを消す。",
        ],
      },
    ],
  },
  "lossy-vs-lossless": {
    ...guidesEn["lossy-vs-lossless"],
    title: "非可逆と可逆圧縮 — かんたんガイド",
    description: "非可逆と可逆圧縮の違い、変換時に品質を失わない方法。",
    sections: [
      {
        paragraphs: [
          "非可逆形式（MP3、JPG、AAC、H.264）はデータを捨ててファイルを小さくします。可逆形式（FLAC、PNG、WAV、ZIP）はすべてのデータを保持しますが、ファイルは大きくなります。",
          "原則：必要なときだけ非可逆 → 可逆 — 失われた品質は戻りません。非可逆 → 非可逆は一度だけ — 再変換のたびに劣化します。",
        ],
      },
    ],
  },
  "markdown-to-pdf-workflow": {
    ...guidesEn["markdown-to-pdf-workflow"],
    title: "Markdown から PDF — ドキュメント、README、メモ",
    description: "MD → HTML → PDF/DOCX：エディタ書き出しで足りるときとオンラインコンバーター。",
    sections: [
      {
        paragraphs: [
          "Markdown は WYSIWYG なしで見出し、リスト、コードを書く形式。開発者は README.md をリポジトリに置き、クライアントや印刷用 PDF が必要に。典型：MD → HTML → ブラウザ「PDF に印刷」、または MD → DOCX → PDF でページヘッダー制御。",
          "Toolando.tech で MD → HTML、DOCX → PDF を 20–40 KB ファイルでテスト。MD が UTF-8 なら日本語文字とコードブロックも問題なし。",
        ],
      },
      {
        title: "どの経路をいつ",
        paragraphs: [
          "クイックプレビュー：MD → HTML、ブラウザで開く。",
          "ページ番号付き正式文書：MD → DOCX（またはエディタ）、社内スタイル、DOCX → PDF。",
          "スタイルなしメモ：MD → TXT で十分。",
        ],
      },
      {
        title: "良い MD の習慣",
        paragraphs: [
          "1 ファイル 1 トピック。長文は章に分割。",
          "画像は相対リンク — 変換後パスを確認。",
          "MD 表は PDF で壊れやすい — 表データは CSV または DOCX を検討。",
        ],
      },
    ],
  },
  "merge-pdf-online-guide": {
    ...guidesEn["merge-pdf-online-guide"],
    title: "複数 PDF を 1 つに結合 — 意味があるとき",
    description: "請求書、スキャン、添付の統合 — ページ順、品質、プライバシー。",
    sections: [
      {
        paragraphs: [
          "PDF 結合は日常のオフィス作業：請求書 + 契約 + 身分証スキャンを 1 添付に。Toolando.tech は選択順にファイルを結合します。",
          "PDF はベクターテキストとビットマップスキャンを保持 — 元が過度に圧縮されていなければ、結合でスキャン解像度は下がりません。",
        ],
      },
      {
        title: "送信前",
        paragraphs: [
          "論理的な順序（表紙 → 本文 → 添付）。",
          "スキャンの重複ページを削除。",
          "相手がスマホなら ≤10–15 MB を目安、またはクラウドリンク。",
        ],
      },
      {
        title: "プライバシー",
        paragraphs: [
          "ビジネス・個人文書は機密として扱う。Toolando は処理後に削除。機密データは社内ポリシーも遵守。",
        ],
      },
    ],
  },
  "mortgage-loan-calculator-guide": {
    ...guidesEn["mortgage-loan-calculator-guide"],
    title: "ローン計算機 — 返済額、利息、注意点",
    description: "元利均等、手数料、保険 — 住宅ローン計算結果の読み方。",
    sections: [
      {
        paragraphs: [
          "Toolando のローン計算機は元利均等返済：毎月固定の元金+利息。期間が長いほど月額は下がる — 総利息コストは上がる。",
          "銀行との話の出発点であり、オファーではない。実際の返済は基準金利、マージン、手数料、生命保険、頭金次第。",
        ],
      },
      {
        title: "計算機以外に足すもの",
        paragraphs: [
          "事務手数料、繰上返済手数料（契約にある場合）。",
          "火災・生命保険 — 銀行が要求することが多い。",
          "住宅購入時の公証費用、登録免許税等。",
        ],
      },
    ],
  },
  "mp3-vs-wav": {
    ...guidesEn["mp3-vs-wav"],
    title: "MP3 と WAV — いつ音声を変換する？",
    description: "MP3 と WAV の比較：可逆・非可逆圧縮、ファイルサイズ、DAW 編集、どちらを選ぶか。",
    sections: [
      {
        paragraphs: [
          "MP3 は非可逆圧縮を使います。ファイルは小さい一方、一部の音声データは永久に失われます。WAV は完全な品質（可逆または非圧縮）を保ちますが、MP3 の約 10 倍のサイズになることがあります。",
          "実務では：スマホで聴く → MP3 で十分。Audacity でポッドキャストを編集したり FL Studio でミックスする → WAV または FLAC で作業してください。",
        ],
      },
      {
        title: "MP3 → WAV に変換するタイミング",
        paragraphs: [
          "プラットフォームやアプリが、さらに編集するために可逆形式を要求するとき。",
          "カット、エフェクト、マスタリングを複数回行う予定のとき — MP3 への各操作で品質が低下します。",
          "注意：MP3 → WAV では失われた品質は戻りませんが、編集中のさらなる劣化は防げます。",
        ],
      },
      {
        title: "WAV → MP3 に変換するタイミング",
        paragraphs: [
          "メールやチャットで録音を送る — 小さいファイルほど転送が速い。",
          "編集ではなく聴取用にポッドキャストや音楽を公開する。",
          "大きな音楽ライブラリでディスク容量を節約する。",
        ],
      },
    ],
  },
  "online-file-security": {
    ...guidesEn["online-file-security"],
    title: "オンラインツールにおけるファイルのセキュリティ",
    description: "Toolando.tech がファイルをどう処理するか、ブラウザ内で動くツール、プライバシーの詳細。",
    sections: [
      {
        paragraphs: [
          "オンラインツールへファイルをアップロードするのは当然の不安があります。Toolando.tech では、変換・圧縮・プレビューなど、依頼した操作のためだけにファイルを使います。",
          "処理が終わるとサーバーから削除されます。一部のツール（ユニバーサルオープナー）はブラウザ内だけで動作 — ファイルは PC から出ません。接続は HTTPS で暗号化されています。",
        ],
      },
    ],
  },
  "pdf-to-jpg": {
    ...guidesEn["pdf-to-jpg"],
    title: "印刷と Web 向けに PDF を JPG に変換する方法",
    description: "PDF ページを JPG にエクスポートするタイミング、解像度の選び方、PNG が向く場合。",
    sections: [
      {
        paragraphs: [
          "PDF はページレイアウトを保持します。Web サイト、PowerPoint、1 ページだけ印刷するなど、個別の画像ページが必要なこともあります。",
          "Toolando.tech の PDF → JPG コンバーターは各ページを別々の JPG としてレンダリングします。ファイルは保存されず、変換直後に削除されます。",
        ],
      },
      {
        title: "PDF から JPG か PNG か？",
        paragraphs: [
          "JPG — ファイルが小さく、透過のない写真や文書に最適。",
          "PNG — 透過付きの可逆形式。テキストやシャープなエッジのあるグラフィック向け。",
        ],
      },
    ],
  },
  "pdf-vs-docx": {
    ...guidesEn["pdf-vs-docx"],
    title: "PDF と DOCX — どちらをいつ使う？",
    description: "PDF と DOCX の違い：編集、印刷、保管、どちら向きに変換するか。",
    sections: [
      {
        paragraphs: [
          "DOCX（Word）はテキスト編集用 — 内容、スタイル、見出し。PDF はレイアウトを固定 — どの端末でも同じ見え方。請求書、契約、履歴書に最適。",
          "「閲覧のみ」で送る前に DOCX → PDF。テキストを編集したいときだけ PDF → DOCX — レイアウトが崩れることがあります。保管と印刷は常に PDF。",
        ],
      },
    ],
  },
  "png-vs-jpg-photos-and-graphics": {
    ...guidesEn["png-vs-jpg-photos-and-graphics"],
    title: "PNG vs JPG — 写真とテキスト入りグラフィック",
    description: "実用的な選択：写真、スクリーンショット、透過ロゴ、印刷。",
    sections: [
      {
        paragraphs: [
          "PNG と JPG は最も混同されやすい形式です。JPG は写真（空、肌、風景）をよく圧縮しますが、シャープなエッジと文字を壊します。PNG は透過（アルファ）含めピクセルを正確に保持しますが、同解像度で JPG の 5–10 倍のサイズになりがちです。",
          "Toolando.tech テストでの原則：ギャラリーや SNS の写真 → JPG（または WebP + JPG フォールバック）。アイコン、ロゴ、図、UI スクショ → PNG。写真+文字（見積表紙など）→ 多くは PNG または可逆 WebP。",
        ],
      },
      {
        title: "JPG を選ぶとき",
        paragraphs: [
          "透過のないカメラ・スマホ写真。",
          "背景が単色でアルファ不要の商品サムネ。",
          "メール添付 — JPG 品質 80–85 が妥当な妥協点。",
          "家庭の写真印刷 — 高解像度 JPG（300 DPI 相当）を受け付ける店が多い。",
        ],
      },
      {
        title: "PNG を選ぶとき",
        paragraphs: [
          "透過背景の Web ロゴ — JPG は常に白か黒で塗りつぶす。",
          "UI、チャート、コードのスクショ — 文字がシャープ。",
          "色数の少ないフラットグラフィック（インフォグラフィック、アプリアイコン）。",
          "さらにレイヤー編集する予定 — 可逆 PNG は保存のたびにアーティファクトを増やさない（繰り返し JPG とは対照的）。",
        ],
      },
      {
        title: "よくある間違い",
        paragraphs: [
          "ロゴを JPG で保存 — ギザギザと透過なし。",
          "4000×3000 写真を「品質のため」PNG — 不要に 15 MB、JPG なら 2 MB。",
          "PNG → JPG → PNG ループ — JPG のたびに劣化。マスターは PNG。",
        ],
      },
    ],
  },
  "podcast-export-mp3-aac-settings": {
    ...guidesEn["podcast-export-mp3-aac-settings"],
    title: "ポッドキャスト書き出し — MP3 か AAC、ビットレートは",
    description: "Audacity、Reaper、スマホ録音後の設定：モノ、44.1 kHz、妥当な圧縮。",
    sections: [
      {
        paragraphs: [
          "ポッドキャストは主に音声 — スタジオ音楽のようなステレオ 320 kbps は不要。Spotify、Apple Podcasts、RSS ホストはアップロードを再エンコードします。それでも良いマスターを送る：モノ/ステレオ、44.1 または 48 kHz、MP3 128–192 kbps または AAC/M4A 128 kbps。",
          "WAV または FLAC で録音？最終書き出しはほぼ常に MP3 か AAC — Toolando.tech で 30–60 分の WAV → MP3 をテスト。~30 MB WAV が 128 kbps ステレオで ~28 MB（モノ音声なら ~15 MB）。",
        ],
      },
      {
        title: "推奨設定",
        paragraphs: [
          "ソロ/単一声インタビュー：モノ、MP3 96–128 kbps。",
          "別トラックの 2 声：ステレオ 128 kbps。",
          "イントロ/アウトロ音楽はステレオ、残りモノ — 簡単のため全体ステレオ 128 kbps も可。",
          "64 kbps は避ける — 安いマイクで歯擦音とノイズ。",
        ],
      },
      {
        title: "MP3 vs AAC（M4A）",
        paragraphs: [
          "同ビットレートで AAC は通常 MP3 より良い — Apple は M4A 優先。",
          "MP3 は古いプレーヤーと車で互換性最大。",
          "ポッドキャストホストに生 WAV を上げない — アップロードが終わらない。",
        ],
      },
    ],
  },
  "prepare-images-for-web": {
    ...guidesEn["prepare-images-for-web"],
    title: "Web 向け画像の準備（JPG、WebP、AVIF）",
    description: "解像度、圧縮、形式 — 見た目を大きく損なわずサイトを速く。",
    sections: [
      {
        paragraphs: [
          "巨大なカメラ写真（4000×3000 px）はページを遅くします。ブログやストアに上げる前に、実際の表示サイズにリサイズ — 例：ヒーローバナー幅 1600 px。",
          "JPG は依然として安全な汎用選択。WebP と AVIF は同じ見た目品質でより小さい — モダン構成では <picture> フォールバック付きで使う。",
        ],
      },
      {
        title: "JPG ではなく PNG を使うとき",
        paragraphs: [
          "ロゴ、アイコン、UI スクリーンショット — PNG または可逆 WebP でエッジがシャープ。",
          "白背景の商品写真は JPG 品質 80–85 で十分なことが多い。",
          "同じバナーを JPG で何度も保存しない — 保存のたびにアーティファクトが増える。",
        ],
      },
      {
        title: "公開前チェックリスト",
        paragraphs: [
          "1）目標幅（px）にリサイズ。2）形式を選ぶ（JPG/WebP/AVIF）。3）ファイル重量を確認（サムネ <200 KB、大きなブログ画像 <500 KB）。4）PageSpeed Insights で LCP を前後比較。",
        ],
      },
    ],
  },
  "remove-exif-privacy-guide": {
    ...guidesEn["remove-exif-privacy-guide"],
    title: "写真の EXIF — 公開前に削除すべきもの",
    description: "EXIF メタデータの GPS、カメラモデル、日付 — プライバシーリスクと削除。",
    sections: [
      {
        paragraphs: [
          "EXIF は JPEG、PNG、HEIC の隠しメタデータ：GPS、端末モデル、向き、時々プレビューサムネ。SNS は多くの場合除去しますが、自サイト、ニュースレター、メール添付は必ずしも。",
          "子供、室内、机の上の文書写真を公開する前に EXIF を削除 — Toolando ではサーバー処理で、外部 AI クラウドには送りません。",
        ],
      },
      {
        title: "EXIF 削除後に残るもの",
        paragraphs: [
          "画像ピクセルは変わらない。メタデータのみ削除 — 解像度は影響なし。",
          "EXIF 除去後も圧縮や透かし追加でポートフォリオ公開可能。",
        ],
      },
    ],
  },
  "split-pdf-pages-guide": {
    ...guidesEn["split-pdf-pages-guide"],
    title: "PDF を個別ページに分割するオンライン方法",
    description: "いつ PDF を分割するか、ページ範囲の選び方、ZIP 出力の扱い。",
    sections: [
      {
        paragraphs: [
          "複数ページ契約や請求書スキャン後の PDF 分割はよくある作業 — 1 ページだけメールしたり、別文書に一部添付したりします。",
          "Toolando.tech では各ページを個別エクスポート、または範囲指定（例 1-3,5）可能。結果は PDF の ZIP — 各ファイルは元のベクターまたはスキャン品質を保持。",
        ],
      },
      {
        title: "分割 vs 結合",
        paragraphs: [
          "分割 — 相手が一部だけ必要（署名ページ、添付、表紙）。",
          "結合 — スキャンを 1 つのアーカイブ/送付ファイルに。",
          "分割後はページ番号や大きなスキャンの圧縮を検討。",
        ],
      },
    ],
  },
  "spreadsheet-csv-json-guide": {
    ...guidesEn["spreadsheet-csv-json-guide"],
    title: "CSV、JSON、Excel — シートと API 間でデータを移す",
    description: "CSV と JSON の選び方、小数点や文字化けの回避。",
    sections: [
      {
        paragraphs: [
          "CSV はプレーンテキスト — Excel、Google スプレッドシート、BI で開けます。JSON はネスト構造（API、設定）向け。XLSX はセル型と複数シート。",
          "典型：API を JSON エクスポート → JSON to CSV → Excel 分析。逆：顧客 CSV → JSON → REST API。",
        ],
      },
      {
        title: "エンコーディングと Excel",
        paragraphs: [
          "非 ASCII は UTF-8 CSV。Excel が文字化けするなら「データ → テキストから」で UTF-8 を指定。",
          "CSV の区切りはロケールでカンマかセミコロン。説明にカンマがあるなら TSV（タブ）が安全。",
        ],
      },
      {
        title: "変換後の検証",
        paragraphs: [
          "変換前後の行数を比較。",
          "JSON はキーと型を確認 — 引用符 1 つ欠けるとファイル全体が壊れる。",
        ],
      },
    ],
  },
  "svg-vs-png-logos-and-icons": {
    ...guidesEn["svg-vs-png-logos-and-icons"],
    title: "SVG vs PNG — Web のロゴとアイコン",
    description: "ベクター vs ラスター：SVG を出すときと @2x PNG で足りるとき。",
    sections: [
      {
        paragraphs: [
          "SVG は数学的に記述されたベクター — どの画面でもピクセル化しにくい。PNG は固定解像度ビットマップ。Retina では 2× が必要なことが多い。Web ではロゴとシンプルアイコンはほぼ常に SVG（またはアイコンフォント）。写真埋め込みでなければ。",
          "Toolando.tech の SVG → PNG は、印刷所が 300 DPI PNG を要求したり SVG 非対応のときに便利。",
        ],
      },
      {
        title: "SVG の利点",
        paragraphs: [
          "モバイルとデスクトップで 1 ファイル — CSS 少なく srcset 不要。",
          "シンプルアイコンは CSS fill で色変更が容易。",
          "重い PNG ヒーローより Lighthouse スコア良好。",
        ],
      },
      {
        title: "SVG ではなく PNG",
        paragraphs: [
          "グラデーション、影、ベクターからのエクスポートが悪い効果のロゴ。",
          "Open Graph / SNS プレビュー — プラットフォームは結局ラスター化。",
          "SVG エンジンなしのデスクトップアプリ。",
          "インライン SVG 横の <img> フォールバックとして @2x PNG（例 512×512）。",
        ],
      },
    ],
  },
  "tiff-and-png-for-document-scans": {
    ...guidesEn["tiff-and-png-for-document-scans"],
    title: "文書スキャン — TIFF、PNG、JPG",
    description: "請求書と契約：可逆保管、複数ページ、PDF で足りるとき。",
    sections: [
      {
        paragraphs: [
          "請求書や契約のスキャンは休暇写真とは別。文字とスタンプはシャープなエッジが必要 — 強い JPG は文字をぼかす。TIFF（LZW 可逆が多い）と PNG はアーカイブ向け。送付と OCR では結局 PDF か中程度 JPG になることも。",
          "複数ページ TIFF は 1 ファイル多層 — すべてのビューアが対応しない。役所やクライアントには複数ページ PDF が明確（Toolando.tech で PDF 結合）。",
        ],
      },
      {
        title: "推奨ワークフロー",
        paragraphs: [
          "スキャナ → ページごと PNG または TIFF（印刷 300 DPI、プレビュー 150 DPI）。",
          "エディタで回転/クロップ修正。",
          "送付用に 1 つの PDF に結合。",
          "相手が PDF 不可のときだけ JPG 品質 90。",
        ],
      },
      {
        title: "避けること",
        paragraphs: [
          "請求書に JPG 品質 60 — 金額が読めなくなる。",
          "TIFF → JPG → TIFF の繰り返し。",
          "A4 文字を「念のため」600 DPI カラー — GB 単位でメリットなし。",
        ],
      },
    ],
  },
  "toolando-editorial-standards": {
    ...guidesEn["toolando-editorial-standards"],
    title: "Toolando.tech 編集基準 — ガイドの書き方",
    description: "記事、コンバーターテスト、形式百科の作り方 — 読者とレビュアーへの透明性。",
    sections: [
      {
        paragraphs: [
          "Toolando.tech は Szymon（Badyl-Tech）が単独で構築。ガイドは大量生成や Wikipedia コピーではなく、実際の変換テストに基づきます。",
          "各記事に公開・更新日。プラットフォーム要件やライブラリ変更時に本文を改訂します。",
        ],
      },
      {
        title: "テスト内容",
        paragraphs: [
          "音声/動画コンバーター：時間、出力サイズ、VLC とスマホ再生。",
          "画像：前後の視覚比較、PNG 透過、WebP vs JPG サイズ。",
          "文書：PDF ↔ DOCX 後のレイアウト、CSV/JSON のエンコーディング。",
        ],
      },
      {
        title: "約束しないこと",
        paragraphs: [
          "非可逆 → 非可逆変換で「100% 品質」は約束しない。",
          "他人の YouTube/TikTok 動画のダウンロードは提供しない — 自分のファイルの合法操作のみ。",
          "Google 広告は出ることがあるが、編集コンテンツは広告主と無関係。",
        ],
      },
    ],
  },
  "video-compress-before-sharing": {
    ...guidesEn["video-compress-before-sharing"],
    title: "メールや WhatsApp の前に動画を小さく",
    description: "MP4、解像度、ビットレート — 実用的なサイズ制限とコンテナ変換。",
    sections: [
      {
        paragraphs: [
          "スマホの MOV/MKV は数百 MB になり得ます。多くのメールは >25 MB 添付を拒否。対処：MP4（H.264 + AAC）に変換し、必要なら解像度を下げる。",
          "720p はスマホプレビューで十分なことが多い。TV 視聴なら 1080p を維持。",
        ],
      },
      {
        title: "送信前の手順",
        paragraphs: [
          "1）MOV/MKV → MP4。2）サイズ確認。3）まだ大きい — エディタで不要な冒頭・末尾をトリム。4）>25 MB ならクラウドリンク。",
        ],
      },
    ],
  },
  "video-social-media": {
    ...guidesEn["video-social-media"],
    title: "SNS 向け動画 — MP4、解像度、ビットレート",
    description: "Instagram、TikTok、YouTube 向けの準備：MP4、H.264、1080p。",
    sections: [
      {
        paragraphs: [
          "Instagram、TikTok、YouTube、Facebook は H.264 動画 + AAC 音声の MP4 を好みます。アップロードエラーを避けるため、公開前に MOV、AVI、MKV を MP4 に変換してください。",
          "1080p（1920×1080）で多くのプラットフォームは十分。ビットレートが高いほど画質は上がりますがファイルも大きくなります。形式百科で MP4、WebM、MOV の詳細を確認してください。",
        ],
      },
    ],
  },
  "webp-avif-images": {
    ...guidesEn["webp-avif-images"],
    title: "WebP と AVIF — サイト向けのモダン画像形式",
    description: "WebP と AVIF vs JPG/PNG：圧縮、ブラウザ対応、PageSpeed 最適化。",
    sections: [
      {
        paragraphs: [
          "JPG と PNG が Web を長年支配してきましたが、WebP は同じ見た目品質で JPG より 25〜35% 小さくなります。AVIF はさらに進み、WebP の半分サイズになることもあります。",
          "モダンブラウザはすべて WebP に対応。AVIF は古い Safari ではやや弱いです。",
        ],
      },
      {
        title: "導入戦略",
        paragraphs: [
          "商品写真やバナーは JPG → WebP — ページ読み込みが速くなります。",
          "古いブラウザ向けに JPG をフォールバックとして残す（HTML の <picture> タグ）。",
          "透過のあるロゴ：JPG ではなく PNG → WebP。",
        ],
      },
    ],
  },
  "when-not-to-convert-files": {
    ...guidesEn["when-not-to-convert-files"],
    title: "ファイルを変換しないとき — 品質を損なう 7 つの状況",
    description: "不要な変換を避ける：原本保持、可逆アーカイブ、実験前のバックアップ。",
    sections: [
      {
        paragraphs: [
          "オンラインコンバーターは便利ですが、すべての操作が有益とは限りません。原本のまま、または可逆アーカイブ（ZIP、FLAC）の方が良いことも。",
          "原則：非可逆 → 可逆で奇跡を期待しない — MP3 → WAV では失われたデータは戻りません。",
        ],
      },
      {
        title: "そのままにする",
        paragraphs: [
          "透過付き PNG がある — 理由なく JPG にしない。",
          "デザインプロジェクト — レイヤー源（PSD、SVG）を保持。最後に JPG エクスポート。",
          "スタジオ WAV/FLAC — 最終ミックスまで MP3 にしない。",
          "電子署名 PDF — 変換で署名が無効になることがある。",
        ],
      },
      {
        title: "変換を押す前に",
        paragraphs: [
          "原本のコピーを残す。",
          "先プラットフォームがソース形式を既に受け付けるか確認。",
          "Toolando 形式百科で比較を読み、無用なステップを省く。",
        ],
      },
    ],
  },
  "zip-7z-rar-when-to-use": {
    ...guidesEn["zip-7z-rar-when-to-use"],
    title: "ZIP、7z、RAR — どのアーカイブを送るか",
    description: "サイズ、互換性、暗号化 — ZIP で足りるときと 7z/RAR が役立つとき。",
    sections: [
      {
        paragraphs: [
          "アーカイブは複数ファイルを 1 つに — メール、クラウド、フォルダバックアップに便利。ZIP は universal：Windows、macOS、Linux で追加ソフト不要。7z は通常より小さいが、相手に 7-Zip が必要な場合あり。RAR はレガシーフローに登場。オンライン RAR 作成はライセンス制限 — RAR → ZIP の方が多い。",
        ],
      },
      {
        title: "ZIP を使うとき",
        paragraphs: [
          "クライアントや役所へ — 「開けない」リスク最小。",
          "コード、オフィス文書、JPG セットのアーカイブ。",
          ".zip のみ受け付けるアップロードシステム。",
        ],
      },
      {
        title: "7z を使うとき",
        paragraphs: [
          "大きなゲームフォルダ、動画プロジェクト、外付け前バックアップ — 小さいほどアップロード速い。",
          "相手が技術者で 7-Zip あり。",
          "ZIP → 7z は一度で十分 — 同じデータをぐるぐる再パックしない。",
        ],
      },
      {
        title: "セキュリティ",
        paragraphs: [
          "アーカイブパスワードは誤開封防止。機密文書の E2E 暗号の代わりにはならない。",
          "不明なソースのアーカイブは AV スキャンなしで展開しない。",
          "Toolando はコンテナ変換の間だけアーカイブを処理 — 内容は合法かつ自分のもの。",
        ],
      },
    ],
  },
}
