export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-3xl font-semibold text-foreground mb-6">
        Polityka Prywatności Toolando.tech
      </h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Toolando.tech to serwis internetowy oferujący narzędzia online do konwersji plików,
          generowania treści oraz narzędzia wspierane sztuczną inteligencją. Dbamy o prywatność
          użytkowników i przetwarzamy dane zgodnie z obowiązującymi przepisami, w tym RODO.
        </p>

        <h2 className="text-xl font-semibold text-foreground">1. Jakie dane są przetwarzane?</h2>
        <p>
          Toolando.tech nie zbiera i nie przechowuje plików przesyłanych przez użytkowników.
          Wszystkie konwersje i operacje na plikach odbywają się lokalnie w przeglądarce,
          bez wysyłania plików na serwer.
        </p>
        <p>Możemy przetwarzać następujące dane:</p>
        <ul className="list-disc pl-6">
          <li>adres e‑mail (jeśli kontaktujesz się przez formularz lub e‑mail),</li>
          <li>dane techniczne przeglądarki (np. cookies techniczne),</li>
          <li>anonimowe dane statystyczne (np. narzędzia analityczne).</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">2. Cel przetwarzania danych</h2>
        <p>Dane przetwarzamy wyłącznie w celu:</p>
        <ul className="list-disc pl-6">
          <li>obsługi kontaktu z użytkownikiem,</li>
          <li>poprawy działania serwisu,</li>
          <li>analizy statystycznej ruchu,</li>
          <li>zapewnienia bezpieczeństwa i stabilności strony.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">3. Pliki cookies</h2>
        <p>
          Toolando.tech może używać plików cookies w celu poprawnego działania strony,
          analityki ruchu oraz zapamiętywania ustawień językowych.
          Możesz w każdej chwili wyłączyć cookies w ustawieniach przeglądarki.
        </p>

        <h2 className="text-xl font-semibold text-foreground">4. Udostępnianie danych</h2>
        <p>
          Nie udostępniamy danych osobowych żadnym podmiotom zewnętrznym,
          chyba że wymagają tego przepisy prawa.
        </p>

        <h2 className="text-xl font-semibold text-foreground">5. Twoje prawa</h2>
        <p>Masz prawo do:</p>
        <ul className="list-disc pl-6">
          <li>dostępu do swoich danych,</li>
          <li>poprawienia danych,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>wniesienia skargi do Prezesa UODO.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">6. Kontakt</h2>
        <p>
          W sprawach związanych z prywatnością możesz kontaktować się pod adresem:
          <br />
          <strong>badyltech@outlook.com</strong>
        </p>

        <h2 className="text-xl font-semibold text-foreground">7. Zmiany polityki</h2>
        <p>
          Polityka prywatności może być aktualizowana w celu dostosowania jej do zmian
          w serwisie lub przepisach prawa.
        </p>
      </div>
    </main>
  )
}
