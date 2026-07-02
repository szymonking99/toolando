export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-3xl font-semibold text-foreground mb-6">
        Regulamin korzystania z Toolando
      </h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <h2 className="text-xl font-semibold text-foreground">1. Postanowienia ogólne</h2>
        <p>
          Toolando jest serwisem internetowym udostępniającym narzędzia online do konwersji plików,
          generowania treści oraz narzędzia wspierane sztuczną inteligencją.
          Korzystanie z serwisu oznacza akceptację niniejszego regulaminu.
        </p>

        <h2 className="text-xl font-semibold text-foreground">2. Korzystanie z serwisu</h2>
        <p>
          Użytkownik zobowiązuje się do korzystania z Toolando zgodnie z prawem,
          dobrymi obyczajami oraz niniejszym regulaminem.
        </p>
        <ul className="list-disc pl-6">
          <li>Zakazane jest wykorzystywanie serwisu do działań niezgodnych z prawem.</li>
          <li>Użytkownik ponosi odpowiedzialność za treści i pliki, które przetwarza.</li>
          <li>Serwis może być rozwijany i zmieniany bez uprzedniego powiadomienia.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">3. Odpowiedzialność</h2>
        <p>
          Dołożono starań, aby narzędzia działały poprawnie, jednak serwis jest udostępniany
          w modelu „tak jak jest” (as is), bez gwarancji dostępności, poprawności wyników
          ani przydatności do konkretnego celu.
        </p>
        <p>
          Właściciel serwisu nie ponosi odpowiedzialności za:
        </p>
        <ul className="list-disc pl-6">
          <li>skutki wykorzystania wyników działania narzędzi,</li>
          <li>utracone korzyści,</li>
          <li>szkody wynikające z przerw w działaniu serwisu.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">4. Płatności i zarabianie</h2>
        <p>
          W przypadku wprowadzenia płatnych funkcji, subskrypcji lub reklam,
          zasady ich działania będą opisane w osobnej sekcji serwisu lub w zaktualizowanym regulaminie.
        </p>

        <h2 className="text-xl font-semibold text-foreground">5. Prawa autorskie</h2>
        <p>
          Nazwa Toolando, elementy graficzne oraz treści opisowe serwisu podlegają ochronie prawnej.
          Zabronione jest ich kopiowanie i wykorzystywanie bez zgody właściciela.
        </p>

        <h2 className="text-xl font-semibold text-foreground">6. Kontakt</h2>
        <p>
          W sprawach związanych z regulaminem możesz kontaktować się pod adresem:
          <br />
          <strong>badyltech@outlook.com</strong>
        </p>

        <h2 className="text-xl font-semibold text-foreground">7. Zmiany regulaminu</h2>
        <p>
          Regulamin może być aktualizowany w celu dostosowania go do zmian w serwisie
          lub przepisach prawa. Aktualna wersja jest zawsze dostępna na tej stronie.
        </p>
      </div>
    </main>
  )
}
