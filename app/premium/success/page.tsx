import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { getStripe } from "@/lib/stripe"
import { reconcilePremiumFromSession } from "@/lib/user"

export const dynamic = "force-dynamic"

export default async function PremiumSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id: sessionId } = await searchParams

  let email: string | null = null
  let activated = false
  if (sessionId) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(sessionId)
      email = session.customer_details?.email ?? null
    } catch {
      // Sesja może nie być jeszcze gotowa — pomijamy.
    }

    // Niezależne od webhooka aktywowanie Premium po potwierdzonej płatności.
    try {
      activated = await reconcilePremiumFromSession(sessionId)
    } catch (error) {
      console.error("[premium/success] Reconcyliacja nie powiodła się:", error)
    }
  }

  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-4 py-16 text-foreground">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="size-8 text-primary" aria-hidden="true" />
        </div>

        <h1 className="text-2xl font-semibold text-balance">
          Dziękujemy za zakup Premium!
        </h1>

        <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
          Twoja płatność została przyjęta
          {email ? (
            <>
              {" "}
              dla adresu <span className="font-medium text-foreground">{email}</span>
            </>
          ) : null}
          .{" "}
          {activated
            ? "Dostęp Premium został aktywowany na Twoim koncie."
            : "Dostęp Premium zostanie aktywowany automatycznie w ciągu kilku chwil."}
        </p>

        {sessionId ? (
          <p className="mt-4 break-all rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">
            ID sesji: {sessionId}
          </p>
        ) : null}

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  )
}
