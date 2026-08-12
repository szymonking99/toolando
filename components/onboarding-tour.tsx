"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { X, Sparkles, Upload, Crown, BookOpen } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { isOnboardingDone, markOnboardingDone } from "@/lib/client-preferences"

const STEPS = ["step1", "step2", "step3"] as const

export function OnboardingTour() {
  const { t, href } = useI18n()
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!isOnboardingDone()) setOpen(true)
  }, [])

  if (!open) return null

  const icons = [Upload, Sparkles, Crown]
  const Icon = icons[step] ?? Sparkles
  const key = STEPS[step]
  const title = t.onboarding[key].title
  const body = t.onboarding[key].body

  function close() {
    markOnboardingDone()
    setOpen(false)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-background p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <button
            type="button"
            onClick={close}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/10"
            aria-label={t.onboarding.skip}
          >
            <X className="size-4" />
          </button>
        </div>
        <h2 id="onboarding-title" className="mt-4 text-lg font-semibold text-foreground">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex gap-1.5">
            {STEPS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-6 rounded-full ${i === step ? "bg-primary" : "bg-white/15"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                {t.onboarding.next}
              </button>
            ) : (
              <Link
                href={href("/tools")}
                onClick={close}
                className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                {t.onboarding.start}
              </Link>
            )}
          </div>
        </div>
        <Link
          href={href("/jak-to-dziala")}
          onClick={close}
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
        >
          <BookOpen className="size-3.5" />
          {t.onboarding.learnMore}
        </Link>
      </div>
    </div>
  )
}
