"use client"

import { useEffect } from "react"
import { recordToolVisit } from "@/lib/client-preferences"

export function RecordToolVisit({
  id,
  title,
}: {
  id: string
  title: string
}) {
  useEffect(() => {
    recordToolVisit(id, title)
  }, [id, title])
  return null
}
