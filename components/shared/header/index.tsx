import {APP_NAME_FIRST, APP_NAME_SECOND} from "@/lib/constants";
import Link from "next/link";
import React from "react";
import {SheetNavigation} from "@/components/sheet";
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
    <header className="relative md:sticky md:top-0 bg-header mx-auto px-8 border-b-[0.3px] border-b-foreground/10 backdrop-blur-lg z-[50]">
      <ModeToggle />

      <nav className="flex flex-col md:flex-row items-center justify-center md:justify-between md:gap-1 gap-5 py-0">
        <div className="flex items-center justify-center gap-1 mt-6 md:mt-0">
          <SheetNavigation session={session} />
        </div>
        <Link
          href="/"
          className="flex flex-col items-center md:flex-row md:items-end justify-center gap-2 "
          aria-label="Logo"
        >
          <h1 className="flex items-center justify-center flex-wrap text-primary font-semibold uppercase">
            <span className="text-foreground text-semibold">
              {APP_NAME_FIRST}
            </span>

            {APP_NAME_SECOND}
          </h1>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
