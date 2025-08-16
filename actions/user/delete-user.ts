"use server";
import {prisma} from "@/lib/prisma";
import {z} from "zod";
import {UserIdSchema} from "@/schemas/auth/UserIdSchema";

import {getServerSession} from "@/helpers/getServerSession";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";

export async function deleteUser(userId: z.infer<typeof UserIdSchema>) {
  const safeUserId = UserIdSchema.safeParse(userId);
  if (!safeUserId.success) {
    return {error: "Invalid data"};
  }

  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!session) {
    return {error: "Unauthorized"};
  }

  console.log(userId);

  /*  await auth.api.removeUser({
    body: {
      userId, // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });
 */
  return {success: userId + "hard deleted succesfully"};
}
