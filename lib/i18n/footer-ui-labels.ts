import type { SupportedLocale } from "./config"

/** Footer social + email link labels — synced to every locale file. */
export type FooterUiLabels = {
  facebook: string
  instagram: string
  messenger: string
  youtube: string
  emailAria: string
}

export const footerUiLabels: Record<SupportedLocale, FooterUiLabels> = {
  pl: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Otwiera program pocztowy, aby napisać do nas",
  },
  en: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Opens your email app to write to us",
  },
  de: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Öffnet dein E-Mail-Programm, um uns zu schreiben",
  },
  es: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Abre tu app de correo para escribirnos",
  },
  uk: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Відкриває поштовий застосунок, щоб написати нам",
  },
  fr: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Ouvre votre application de messagerie pour nous écrire",
  },
  it: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Apre l'app e-mail per scriverci",
  },
  pt: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Abre o app de e-mail para nos escrever",
  },
  nl: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Opent je e-mailapp om ons te schrijven",
  },
  sv: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Öppnar e-postappen för att skriva till oss",
  },
  no: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Åpner e-postappen for å skrive til oss",
  },
  da: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Åbner din e-mail-app for at skrive til os",
  },
  fi: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Avaa sähköpostisovelluksen kirjoittaaksesi meille",
  },
  cs: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Otevře e-mailovou aplikaci pro napsání nám",
  },
  ro: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Deschide aplicația de e-mail pentru a ne scrie",
  },
  hu: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Megnyitja az e-mail alkalmazást, hogy írjon nekünk",
  },
  el: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Ανοίγει την εφαρμογή email για να μας γράψετε",
  },
  tr: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Bize yazmak için e-posta uygulamanızı açar",
  },
  ru: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Открывает почтовое приложение, чтобы написать нам",
  },
  ar: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "يفتح تطبيق البريد للكتابة إلينا",
  },
  zh: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "打开邮件应用给我们写信",
  },
  ja: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "メールアプリを開いてお問い合わせ",
  },
  ko: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "이메일 앱을 열어 문의하기",
  },
  hi: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "हमें लिखने के लिए ईमेल ऐप खोलता है",
  },
  id: {
    facebook: "Facebook",
    instagram: "Instagram",
    messenger: "Messenger",
    youtube: "YouTube",
    emailAria: "Membuka aplikasi email untuk menulis kepada kami",
  },
}

export function getFooterUiLabels(locale: string): FooterUiLabels {
  if (locale in footerUiLabels) {
    return footerUiLabels[locale as SupportedLocale]
  }
  return footerUiLabels.en
}
