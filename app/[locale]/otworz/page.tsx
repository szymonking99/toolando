import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Wrench } from "lucide-react"
import { UniversalOpener } from "@/components/universal-opener"

export const metadata: Metadata = {
  title: "Uniwersalny otwieracz i konwerter plików — Toolando",
  description:
    "Otwórz dowolny plik w przeglądarce i przekonwertuj go na sensowny format jednym kliknięciem: obrazy, wideo, audio, PDF, dokumenty, dane, fonty i więcej.",
}

export default function OpenerPage() {
  return (
    <div className="min-h-dvh">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-5 py-3 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
              <Wrench className="size-4" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Toolando
            </span>
          </Link>
          <Link
            href="/#narzedzia"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Wszystkie narzędzia
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-32">
        <div className="mb-2 text-sm font-medium text-primary">
          Podgląd i konwersja
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Uniwersalny otwieracz i konwerter plików
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Otwórz dosłownie każdy format pliku — obrazy, wideo, dźwięk, PDF,
          dokumenty, kod i dane wyświetlą się natychmiast. Po otwarciu Toolando
          od razu podpowie wszystkie sensowne formaty, na które możesz
          przekonwertować plik jednym kliknięciem.
        </p>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <UniversalOpener />
        </section>
      </main>
    </div>
  )
}
