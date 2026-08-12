"use client"

import { Star } from "lucide-react"
import { RecordToolVisit } from "@/components/record-tool-visit"
import { PrivacyFirstBadge } from "@/components/premium-upsell-card"
import {
  isFavorite,
  toggleFavorite,
  subscribePrefs,
} from "@/lib/client-preferences"
import { useEffect, useState } from "react"

export function ToolPageChrome({
  id,
  title,
  localOnly,
}: {
  id: string
  title: string
  localOnly?: boolean
}) {
  const [fav, setFav] = useState(false)

  useEffect(() => {
    function refresh() {
      setFav(isFavorite(id))
    }
    refresh()
    return subscribePrefs(refresh)
  }, [id])

  return (
    <>
      <RecordToolVisit id={id} title={title} />
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {localOnly && <PrivacyFirstBadge localOnly />}
        <button
          type="button"
          onClick={() => setFav(toggleFavorite(id).includes(id))}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          aria-pressed={fav}
        >
          <Star
            className={`size-3.5 ${fav ? "fill-amber-400 text-amber-400" : ""}`}
          />
          {fav ? "Ulubione" : "Dodaj do ulubionych"}
        </button>
      </div>
    </>
  )
}
