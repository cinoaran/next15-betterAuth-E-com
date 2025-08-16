import {betterFetch} from "@better-fetch/fetch";
import {NextResponse, type NextRequest} from "next/server";
import type {Session} from "@/lib/auth";
import {getSessionCookie} from "better-auth/cookies";

const authRoutes = ["/login", "/register"];
const passwordRoutes = ["/reset-password", "/reset-email", "/email-verified"];
const adminRoutes = ["/admin"];
const userRoutes = ["/user"];

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthRoute = authRoutes.some((path) => pathName.startsWith(path));
  const isPasswordRoute = passwordRoutes.some((path) =>
    pathName.startsWith(path)
  );
  const isAdminRoute = adminRoutes.some((path) => pathName.startsWith(path));
  const isUserRoute = userRoutes.some((path) => pathName.startsWith(path));

  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    if (isAuthRoute || isPasswordRoute) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthRoute || isPasswordRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isAdminRoute || isUserRoute) {
    const {data: session} = await betterFetch<Session>(
      "/api/auth/get-session",
      {
        baseURL: process.env.BETTER_AUTH_URL,
        headers: {
          //get the cookie from the request
          cookie: request.headers.get("cookie") || "",
        },
      }
    );

    if (!session || !["admin", "user"].includes(session.user.role)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    if (isAdminRoute && session.user.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/user/:path*",
    "/login",
    "/register",
    "/reset-email",
    "/reset-password",
    "/email-verified",
  ],
};
