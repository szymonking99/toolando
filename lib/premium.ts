// Centralna konfiguracja planu Premium.
// priceId pochodzi z ceny utworzonej w Stripe (tryb testowy).
export const PREMIUM_PLAN = {
  priceId: "price_1Tp3sxQCXdlppkX0eB7ET5u9",
  amount: 900, // w groszach
  currency: "PLN",
  interval: "month" as const,
  // Sformatowana cena do wyświetlenia w UI.
  displayPrice: "9,00 zł",
  displayPeriod: "miesięcznie",
}
