"use client";

import {authClient} from "@/lib/auth-client"; // path to your Better Auth client instance

/**
 * Fetches the current session on the client side.
 * Returns the session object or null if not authenticated.
 */
export async function getClientSession() {
  try {
    const session = await authClient.getSession();
    return session ?? null;
  } catch (error) {
    return null;
  }
}
