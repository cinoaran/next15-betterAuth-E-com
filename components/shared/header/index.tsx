import {APP_NAME_FIRST, APP_NAME_SECOND} from "@/lib/constants";
import Link from "next/link";
import React from "react";
import {UserBox} from "../user";
import {SheetDemo} from "@/components/sheet";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {ModeToggle} from "@/components/mode/ToggleTheme";

const Header = async () => {
  const rawSession = await auth.api.getSession({
    headers: await headers(),
  });

  const session = rawSession
    ? {
        ...rawSession,
        user: {
          ...rawSession.user,
          image: rawSession.user.image ?? undefined,
        },
      }
    : null;

  return (
    <div className="md:sticky md:top-0 bg-primary/20 mx-auto px-4 sm:px-6 lg:px-8 border-b-[0.3px] border-b-foreground/10 z-50 backdrop-blur-lg space-y-0">
      <ModeToggle />

      <nav className="flex flex-col md:flex-row items-center justify-between gap-6 py-5">
        <Link
          href="/"
          className="flex flex-col items-center md:flex-row md:items-end justify-center md:justify-end gap-2 "
          aria-label="Logo"
        >
          <h1 className="flex items-center font-semibold uppercase">
            <span className="ml-2 text-foreground text-2xl text-semibold">
              {APP_NAME_FIRST}
            </span>
            <span className="ml-2 text-primary text-5xl text-semibold">
              {APP_NAME_SECOND}
            </span>
          </h1>
        </Link>

        <div className="flex items-center justify-center gap-2 md:gap-5">
          <UserBox session={session} />
          <SheetDemo />
        </div>
      </nav>
    </div>
  );
};

export default Header;
