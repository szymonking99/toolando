// Centralna konfiguracja planu Premium.
// priceId pochodzi ze zmiennej STRIPE_PRICE_ID (ustaw ją na cenę LIVE w Stripe).
// Fallback to testowa cena — używana tylko, gdy zmienna nie jest ustawiona.
export const PREMIUM_PLAN = {
  priceId: process.env.STRIPE_PRICE_ID || "price_1Tp3sxQCXdlppkX0eB7ET5u9",
  amount: 900, // w groszach
  currency: "PLN",
  interval: "month" as const,
  // Sformatowana cena do wyświetlenia w UI.
  displayPrice: "9,00 zł",
  displayPeriod: "miesięcznie",
}
