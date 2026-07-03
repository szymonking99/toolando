"use client"

import { useSession } from "@/lib/auth-client"

/**
 * Klientowy hook z danymi zalogowanego użytkownika.
 * Zwraca sesję Better Auth wraz z polami dodatkowymi (isPremium, premiumUntil).
 *
 * Uwaga: `isPremium` z sesji odzwierciedla stan z chwili logowania/odświeżenia.
 * Twarde bramkowanie funkcji AI dzieje się po stronie serwera (patrz lib/user.ts).
 */
export function useUser() {
  const { data, isPending, error, refetch } = useSession()

  const user = data?.user as
    | (typeof data extends { user: infer U } ? U : Record<string, unknown>)
    | undefined

  const isPremium = Boolean(
    (user as { isPremium?: boolean } | undefined)?.isPremium,
  )

  return {
    user: data?.user ?? null,
    isPremium,
    isLoading: isPending,
    isLoggedIn: Boolean(data?.user),
    error,
    refetch,
  }
}
