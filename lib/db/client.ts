import { createClient, type Client } from "@libsql/client"

// Lazily construct a Turso client so missing env vars only blow up at call
// time (not at module import). This keeps build/CI green even when the
// user hasn't filled in TURSO_DATABASE_URL yet.

let client: Client | null = null

export function getDbClient(): Client {
  if (client) return client
  const url = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN
  if (!url || !authToken) {
    throw new Error(
      "Missing Turso environment variables: TURSO_DATABASE_URL and TURSO_AUTH_TOKEN.",
    )
  }
  client = createClient({ url, authToken })
  return client
}

export function hasDbEnv(): boolean {
  return Boolean(process.env.TURSO_DATABASE_URL && process.env.TURSO_AUTH_TOKEN)
}
