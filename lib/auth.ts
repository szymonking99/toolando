import { betterAuth } from "better-auth"
import { pool } from "@/lib/db"
import { sendWelcomeEmail } from "@/lib/email"

export const auth = betterAuth({
  database: pool,
  baseURL:
    process.env.BETTER_AUTH_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.V0_RUNTIME_URL),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  user: {
    additionalFields: {
      isPremium: {
        type: "boolean",
        required: false,
        defaultValue: false,
        input: false,
      },
      stripeCustomerId: {
        type: "string",
        required: false,
        input: false,
      },
      premiumUntil: {
        type: "date",
        required: false,
        input: false,
      },
    },
  },
  trustedOrigins: [
    ...(process.env.V0_RUNTIME_URL ? [process.env.V0_RUNTIME_URL] : []),
    ...(process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : []),
    ...(process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? [`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`]
      : []),
    // Lokalny dev / testy w przeglądarce.
    "http://localhost:3000",
    "http://localhost:3001",
  ],
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          // Wysyłka nieblokująca — ewentualny błąd nie przerywa rejestracji.
          void sendWelcomeEmail(user.email, user.name)
        },
      },
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 dni
    updateAge: 60 * 60 * 24, // 1 dzień
  },
  ...(process.env.NODE_ENV !== "production"
    ? {
        advanced: {
          // Poza produkcją (iframe podglądu v0) wymuszamy cookies cross-site,
          // aby przeglądarka zapisała cookie sesji. NODE_ENV bywa pusty w dev.
          defaultCookieAttributes: {
            sameSite: "none" as const,
            secure: true,
          },
        },
      }
    : {}),
})
