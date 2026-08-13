import type { LegalDocumentData } from "@/components/legal-document"

export const privacyNl: LegalDocumentData = {
  eyebrow: "Privacybeleid",
  title: "Privacybeleid van Toolando.tech",
  intro:
    "Dit privacybeleid beschrijft welke gegevens op Toolando.tech worden verwerkt, voor welke doeleinden, op welke rechtsgrond en welke rechten u heeft. Ik verwerk persoonsgegevens in overeenstemming met Verordening (EU) 2016/679 (AVG) en het toepasselijke Poolse privacyrecht.",
  lastUpdated: "Laatst bijgewerkt: 23 juli 2026",
  sections: [
    {
      title: "§1. Verantwoordelijke",
      paragraphs: [
        "1.1. De verantwoordelijke voor de gegevensverwerking (« Verantwoordelijke ») is Szymon Badyl, exploitant van Toolando.tech, die online tooldiensten aanbiedt.",
        "1.2. Privacycontact: {{email}}.",
        "1.3. De Verantwoordelijke heeft geen functionaris voor gegevensbescherming aangesteld, omdat dit voor deze activiteit niet vereist is onder de AVG.",
      ],
    },
    {
      title: "§2. Welke gegevens wij verwerken",
      paragraphs: ["2.1. Afhankelijk van uw gebruik van de dienst verwerken wij de volgende categorieën:"],
      list: [
        "Technische en gebruiksgegevens: IP-adres, browsertype en -versie, besturingssysteem, taal, datum en tijd van het verzoek, bezochte pagina's, verkeersbron, cookie-identificatoren (met toestemming).",
        "Accountgegevens: e-mailadres, wachtwoord (hash), gebruikers-ID, registratiedatum, Premium-status, Stripe-klant-ID (indien van toepassing).",
        "Betalingsgegevens: verwerkt door Stripe — de Verantwoordelijke slaat geen volledige betaalkaartnummers op.",
        "Correspondentiegegevens: e-mailadres, berichtinhoud, contactdatum — wanneer u schrijft naar {{email}} of het contactformulier gebruikt.",
        "Gebruikersbestanden: worden alleen tijdelijk verwerkt om toolbewerkingen uit te voeren — niet opgeslagen na voltooiing van de conversie.",
      ],
    },
    {
      title: "§3. Doeleinden en rechtsgronden",
      paragraphs: ["3.1. Wij verwerken gegevens voor de volgende doeleinden:"],
      definitions: [
        {
          term: "Levering van de dienst",
          description:
            "Bestandsconversie, toolbediening, accountbeheer — rechtsgrond: art. 6 lid 1 onder b AVG (overeenkomst) of onder f (gerechtvaardigd belang: exploitatie van de dienst).",
        },
        {
          term: "Premium-abonnement",
          description:
            "Betalings- en abonnementsafhandeling — rechtsgrond: art. 6 lid 1 onder b AVG; boekhouding: art. 6 lid 1 onder c (wettelijke verplichting).",
        },
        {
          term: "Verkeersanalyse",
          description:
            "Google Analytics — alleen na toestemming voor analytische cookies — rechtsgrond: art. 6 lid 1 onder a AVG (toestemming).",
        },
        {
          term: "Advertenties",
          description:
            "Google AdSense — alleen na toestemming voor advertentiecookies — rechtsgrond: art. 6 lid 1 onder a AVG (toestemming).",
        },
        {
          term: "Beveiliging",
          description:
            "Misbruikpreventie, serverlogs — rechtsgrond: art. 6 lid 1 onder f AVG (gerechtvaardigd belang).",
        },
        {
          term: "Contact en klachten",
          description:
            "Beantwoorden van berichten — rechtsgrond: art. 6 lid 1 onder f AVG of onder b (indien contractgerelateerd).",
        },
      ],
    },
    {
      title: "§4. Cookies en vergelijkbare technologieën",
      paragraphs: [
        "4.1. De dienst gebruikt cookies en vergelijkbare technologieën. Bij uw eerste bezoek tonen wij een toestemmingsbanner waarin u alle cookies kunt accepteren of zich kunt beperken tot essentiële cookies.",
        "4.2. Soorten cookies:",
      ],
      list: [
        "Essentieel — vereist voor het functioneren van de dienst (bijv. taal, sessie, cookievoorkeuren). Geen toestemming vereist.",
        "Analytisch — Google Analytics, geaggregeerde bezoekstatistieken. Toestemming vereist.",
        "Advertentie — Google AdSense, advertentiepersonalisatie. Toestemming vereist.",
      ],
      afterList: [
        "4.3. U kunt uw cookievoorkeuren op elk moment wijzigen via de banner of browserinstellingen.",
      ],
    },
    {
      title: "§5. Ontvangers en verwerkers",
      paragraphs: [
        "5.1. Gegevens kunnen worden gedeeld met vertrouwde verwerkers die namens de Verantwoordelijke handelen:",
      ],
      list: [
        "Vercel Inc. — hosting en infrastructuur (VS, EU-standaardcontractbepalingen).",
        "Stripe, Inc. — Premium-betalingsverwerking (VS/Ierland, PCI DSS).",
        "Google LLC — Analytics en AdSense (met toestemming; partnerbeleid: https://policies.google.com/technologies/partner-sites).",
        "Resend — transactionele e-mails (bijv. welkomstmail na registratie), indien geconfigureerd.",
        "AI-modelleveranciers — verwerking van prompts en bestanden alleen binnen Premium AI-tools, zonder opslag na voltooiing.",
      ],
      afterList: ["5.2. De Verantwoordelijke verkoopt geen persoonsgegevens aan derden."],
    },
    {
      title: "§6. In tools geüploade bestanden",
      paragraphs: [
        "6.1. In converters en andere tools geüploade bestanden worden na voltooiing van de bewerking niet opgeslagen.",
        "6.2. Bestanden worden niet gebruikt voor AI-modeltraining, profilering of marketing.",
        "6.3. Sommige tools (bijv. de universele bestandsopener) verwerken bestanden volledig lokaal in de browser — het bestand verlaat nooit uw apparaat.",
        "6.4. Upload geen bestanden met gevoelige gegevens (bijv. gezondheidsgegevens, identiteitsdocumentnummers), tenzij absoluut noodzakelijk — dit gebeurt op eigen risico.",
      ],
    },
    {
      title: "§7. Bewaartermijnen",
      paragraphs: ["7.1. Wij bewaren gegevens voor de volgende perioden:"],
      list: [
        "Accountgegevens — tot accountverwijdering of een verzoek tot verwijdering.",
        "Serverlogs — tot 90 dagen, tenzij langere bewaring nodig is voor het afdwingen van rechten.",
        "Correspondentie — tot 3 jaar na afsluiting van de zaak.",
        "Facturatiegegevens (Stripe) — conform fiscale wetgeving (doorgaans 5 jaar).",
        "Gebruikersbestanden — onmiddellijk verwijderd na verwerking (doorgaans seconden tot minuten).",
        "Cookievoorkeuren — tot 12 maanden of tot intrekking van toestemming.",
      ],
    },
    {
      title: "§8. Uw rechten (AVG)",
      paragraphs: ["8.1. U heeft de volgende rechten:"],
      list: [
        "Recht op inzage (art. 15 AVG).",
        "Recht op rectificatie (art. 16 AVG).",
        "Recht op wissing — «recht om vergeten te worden» (art. 17 AVG).",
        "Recht op beperking van de verwerking (art. 18 AVG).",
        "Recht op gegevensoverdraagbaarheid (art. 20 AVG).",
        "Recht van bezwaar tegen verwerking op grond van art. 6 lid 1 onder f AVG (art. 21 AVG).",
        "Recht om toestemming te allen tijde in te trekken — zonder de rechtmatigheid van verwerking vóór intrekking aan te tasten (art. 7 lid 3 AVG).",
        "Recht om een klacht in te dienen bij een toezichthoudende autoriteit (in Polen: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Om uw rechten uit te oefenen, schrijf naar {{email}}. Ik reageer zonder onredelijke vertraging, uiterlijk binnen 30 dagen.",
      ],
    },
    {
      title: "§9. Gegevensbeveiliging",
      paragraphs: [
        "9.1. Ik pas technische en organisatorische maatregelen toe die passend zijn bij het risico, waaronder HTTPS-versleuteling, beperkte systeemtoegang en verwijdering van bestanden na verwerking.",
        "9.2. Geen enkel systeem is 100% veilig. Bij een inbreuk op persoonsgegevens die waarschijnlijk een hoog risico voor uw rechten oplevert, informeer ik u conform art. 34 AVG.",
      ],
    },
    {
      title: "§10. Kinderen",
      paragraphs: [
        "10.1. De dienst is niet gericht op kinderen jonger dan 16 jaar. Ik verwerk bewust geen gegevens van kinderen jonger dan 16 jaar zonder toestemming van een ouder of voogd.",
        "10.2. Als u denkt dat een kind zonder ouderlijke toestemming gegevens heeft verstrekt, neem contact op via {{email}} — de gegevens worden verwijderd.",
      ],
    },
    {
      title: "§11. Wijzigingen in dit beleid",
      paragraphs: [
        "11.1. Dit beleid kan worden bijgewerkt om wijzigingen in de dienst, technologieën of wetgeving weer te geven.",
        "11.2. Belangrijke wijzigingen worden meegedeeld via een melding in de dienst of per e-mail (voor gebruikers met accounts).",
        "11.3. De actuele versie is altijd beschikbaar op /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Privacyvragen: {{email}}. Gebruiksvoorwaarden beschikbaar op /regulamin.",
}
