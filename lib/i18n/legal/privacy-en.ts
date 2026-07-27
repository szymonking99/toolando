import type { LegalDocumentData } from "@/components/legal-document"

export const privacyEn: LegalDocumentData = {
  eyebrow: "Privacy Policy",
  title: "Toolando.tech Privacy Policy",
  intro:
    "This Privacy Policy describes what data is processed on Toolando.tech, for what purposes, on what legal basis, and what rights you have. I process personal data in accordance with Regulation (EU) 2016/679 (GDPR) and applicable Polish data protection law.",
  lastUpdated: "Last updated: July 23, 2026",
  sections: [
    {
      title: "§1. Data controller",
      paragraphs: [
        "1.1. The data controller (“Controller”) is Szymon Badyl, owner of Toolando.tech, operating online tools services.",
        "1.2. Privacy contact: {{email}}.",
        "1.3. The Controller has not appointed a Data Protection Officer as it is not required for this activity under GDPR.",
      ],
    },
    {
      title: "§2. What data we process",
      paragraphs: ["2.1. Depending on how you use the Service, we process the following categories:"],
      list: [
        "Technical and usage data: IP address, browser type and version, operating system, language, request date/time, pages visited, traffic source, cookie identifiers (after consent).",
        "Account data: email address, password (hash), user ID, registration date, Premium status, Stripe customer ID (if applicable).",
        "Payment data: processed by Stripe — the Controller does not store full payment card numbers.",
        "Correspondence data: email address, message content, contact date — when you write to {{email}} or use the contact form.",
        "User files: processed temporarily only to perform tool operations — not stored after conversion completes.",
      ],
    },
    {
      title: "§3. Purposes and legal bases",
      paragraphs: ["3.1. We process data for the following purposes:"],
      definitions: [
        {
          term: "Providing the Service",
          description:
            "File conversion, tool operation, Account management — legal basis: Art. 6(1)(b) GDPR (contract) or (f) (legitimate interest: operating the Service).",
        },
        {
          term: "Premium subscription",
          description:
            "Payment and subscription handling — legal basis: Art. 6(1)(b) GDPR; accounting: Art. 6(1)(c) (legal obligation).",
        },
        {
          term: "Traffic analytics",
          description:
            "Google Analytics — only after consent to analytics cookies — legal basis: Art. 6(1)(a) GDPR (consent).",
        },
        {
          term: "Advertising",
          description:
            "Google AdSense — only after consent to advertising cookies — legal basis: Art. 6(1)(a) GDPR (consent).",
        },
        {
          term: "Security",
          description:
            "Abuse prevention, server logs — legal basis: Art. 6(1)(f) GDPR (legitimate interest).",
        },
        {
          term: "Contact and complaints",
          description:
            "Responding to messages — legal basis: Art. 6(1)(f) GDPR or (b) (when related to a contract).",
        },
      ],
    },
    {
      title: "§4. Cookies and similar technologies",
      paragraphs: [
        "4.1. The Service uses cookies and similar technologies. On first visit we show a consent banner where you can accept all cookies or limit yourself to essential ones.",
        "4.2. Types of cookies:",
      ],
      list: [
        "Essential — required for the Service to work (e.g. language, session, cookie preferences). No consent required.",
        "Analytics — Google Analytics, aggregate visit statistics. Consent required.",
        "Advertising — Google AdSense, ad personalization. Consent required.",
      ],
      afterList: [
        "4.3. You can change your cookie choices at any time via the banner or browser settings.",
      ],
    },
    {
      title: "§5. Recipients and processors",
      paragraphs: ["5.1. Data may be shared with trusted processors acting on the Controller's behalf:"],
      list: [
        "Vercel Inc. — hosting and infrastructure (USA, EU standard contractual clauses).",
        "Stripe, Inc. — Premium payment processing (USA/Ireland, PCI DSS).",
        "Google LLC — Analytics and AdSense (after consent; partner policy: https://policies.google.com/technologies/partner-sites).",
        "Resend — transactional emails (e.g. welcome email after registration), if configured.",
        "AI model providers — processing prompts and files only within Premium AI tools, without storage after completion.",
      ],
      afterList: ["5.2. The Controller does not sell personal data to third parties."],
    },
    {
      title: "§6. Files uploaded to tools",
      paragraphs: [
        "6.1. Files uploaded to converters and other tools are not stored after the operation completes.",
        "6.2. Files are not used for AI model training, profiling, or marketing.",
        "6.3. Some tools (e.g. the universal file opener) process files entirely locally in the browser — the file never leaves your device.",
        "6.4. Do not upload files containing sensitive data (e.g. health data, national ID numbers) unless absolutely necessary — you do so at your own risk.",
      ],
    },
    {
      title: "§7. Retention periods",
      paragraphs: ["7.1. We retain data for the following periods:"],
      list: [
        "Account data — until Account deletion or a deletion request.",
        "Server logs — up to 90 days, unless longer retention is required to establish claims.",
        "Correspondence — up to 3 years from case closure.",
        "Billing data (Stripe) — as required by tax law (typically 5 years).",
        "User files — deleted immediately after processing (usually seconds to minutes).",
        "Cookie preferences — up to 12 months or until consent is withdrawn.",
      ],
    },
    {
      title: "§8. Your rights (GDPR)",
      paragraphs: ["8.1. You have the following rights:"],
      list: [
        "Right of access (Art. 15 GDPR).",
        "Right to rectification (Art. 16 GDPR).",
        "Right to erasure — “right to be forgotten” (Art. 17 GDPR).",
        "Right to restriction of processing (Art. 18 GDPR).",
        "Right to data portability (Art. 20 GDPR).",
        "Right to object to processing based on Art. 6(1)(f) GDPR (Art. 21 GDPR).",
        "Right to withdraw consent at any time — without affecting lawfulness of processing before withdrawal (Art. 7(3) GDPR).",
        "Right to lodge a complaint with a supervisory authority (in Poland: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. To exercise your rights, write to {{email}}. I will respond without undue delay, within 30 days at latest.",
      ],
    },
    {
      title: "§9. Data security",
      paragraphs: [
        "9.1. I apply technical and organizational measures appropriate to the risk, including HTTPS encryption, limited system access, and deletion of files after processing.",
        "9.2. No system is 100% secure. In case of a personal data breach likely to result in high risk to your rights, I will inform you in accordance with Art. 34 GDPR.",
      ],
    },
    {
      title: "§10. Children",
      paragraphs: [
        "10.1. The Service is not directed at children under 16. I do not knowingly process data of children under 16 without a guardian's consent.",
        "10.2. If you believe a child provided data without guardian consent, contact {{email}} — the data will be deleted.",
      ],
    },
    {
      title: "§11. Changes to this Policy",
      paragraphs: [
        "11.1. This Policy may be updated to reflect changes in the Service, technologies, or law.",
        "11.2. Material changes will be communicated via a Service notice or email (for users with Accounts).",
        "11.3. The current version is always available at /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Privacy questions: {{email}}. Terms of Service available at /regulamin.",
}
