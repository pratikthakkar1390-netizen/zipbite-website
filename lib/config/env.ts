/**
 * Centralized environment configuration.
 * Wire up Supabase, Stripe, WhatsApp, and analytics here as integrations are added.
 */

export const env = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  },
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "",
  },
  whatsapp: {
    businessNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  },
} as const;
