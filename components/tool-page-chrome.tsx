"use client"

import { Star } from "lucide-react"
import { RecordToolVisit } from "@/components/record-tool-visit"
import { PrivacyFirstBadge } from "@/components/premium-upsell-card"
import { useI18n } from "@/components/i18n-provider"
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
  const { t } = useI18n()
  const [fav, setFav] = useState(false)
  const favorites = (t as { favorites?: { add: string; remove: string } })
    .favorites ?? { add: "Add to favorites", remove: "Favorite" }

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
          {fav ? favorites.remove : favorites.add}
        </button>
      </div>
    </>
  )
}
