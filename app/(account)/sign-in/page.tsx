import { redirect } from "next/navigation"
import { headers, cookies } from "next/headers"
import { auth } from "@/lib/auth"
import { AuthForm } from "@/components/auth-form"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { fallbackLocale } from "@/lib/i18n/config"

export default async function SignInPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session?.user) redirect("/account")

  const cookieStore = await cookies()
  const locale = cookieStore.get("toolando-locale")?.value || fallbackLocale
  const dict = await getDictionary(locale)

  return <AuthForm mode="sign-in" dict={dict.auth} />
}
