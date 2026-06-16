import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Reuses the existing NY USA Reviews Supabase project (ref tgxlewuchioatnnpkiqm).
 * Add to web/.env.local:
 *   NEXT_PUBLIC_SUPABASE_URL=https://tgxlewuchioatnnpkiqm.supabase.co
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
 * Returns null when env is absent so the app still builds/renders with mock data.
 */
let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (client) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  client = createClient(url, key);
  return client;
}
