import { NextResponse } from "next/server"
import { getCurrentUser, syncPremiumFromStripe } from "@/lib/user"

export const runtime = "nodejs"

export async function POST() {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Zaloguj się." }, { status: 401 })
    }

    const premium = await syncPremiumFromStripe(user.id)
    return NextResponse.json({ premium })
  } catch (error) {
    console.error("[premium/sync] error:", error)
    const message =
      error instanceof Error ? error.message : "Nieoczekiwany błąd serwera."
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
