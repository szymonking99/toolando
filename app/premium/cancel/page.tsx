import Link from "next/link"
import { XCircle } from "lucide-react"

export default function PremiumCancelPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-4 py-16 text-foreground">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-muted">
          <XCircle className="size-8 text-muted-foreground" aria-hidden="true" />
        </div>

        <h1 className="text-2xl font-semibold text-balance">
          Płatność została anulowana
        </h1>

        <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
          Nie pobrano żadnych środków. Możesz wrócić i spróbować ponownie w
          dowolnym momencie.
        </p>

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
