"use server";

import {auth} from "@/lib/auth"; // path to your Better Auth server instance
import {headers} from "next/headers";

const session = await auth.api.getSession({
  headers: await headers(), // you need to pass the headers object.
});

export async function getServerSession() {
  try {
    return session ?? null;
  } catch (error) {
    return null;
  }
}
