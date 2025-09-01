"use server";

import {auth} from "@/lib/auth"; // path to your Better Auth server instance
import {headers} from "next/headers";

export async function getServerSession() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  try {
    return session ?? null;
  } catch (error) {
    return null;
  }
}
