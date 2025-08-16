"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  LayoutDashboardIcon,
  Menu,
  PenBoxIcon,
  User2,
  UserPlus,
} from "lucide-react";
import Main from "../shared/nav";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";
import {usePathname} from "next/navigation";
import Link from "next/link";
import LogoutButton from "../shared/authComponent/logoutButton";
import AvatarEdit from "../uploadthing/AvatarEdit";

import type {Session} from "@/lib/auth";

export function SheetNavigation({session}: {session: Session | null}) {
  const user = session?.user;
  const pathname = usePathname();

  const userLoggedIn = user && user.name !== undefined;

  return (
    <Sheet modal={true} /* open={true} */>
      <SheetTrigger asChild>
        <span className="flex items-center justify-center bg-primary shadow responsive-icon rounded-full border-2 border-primary-foreground hover:border-primary-foreground/10 hover:bg-transparent transition-colors duration-200 ease-in-out cursor-pointer z-10">
          {userLoggedIn ? (
            <Avatar className="flex items-center justify-center bg-primary hover:bg-primary/30 ring-1 ring-white responsive-icon animate-pulse z-10">
              <AvatarImage
                src={user?.image || "/avatar/placeholder-avatar.png"}
                alt="User profile image"
                className="object-contain"
              />
              <AvatarFallback>
                <p
                  className="flex items-center justify-center text-white"
                  title="User Icon"
                >
                  <User2
                    size={22}
                    className="rounded-full hover:text-sheet-foreground/70 transition-colors duration-200 ease-in-out"
                  />
                  <span className="sr-only">User Icon</span>
                </p>
              </AvatarFallback>
              <span className="sr-only">User Image</span>
            </Avatar>
          ) : (
            <Menu strokeWidth={2} className="text-white" />
          )}
        </span>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-background/10 backdrop-blur-xl border-sheet-border/30 shadow-md max-h-screen overflow-y-auto text-sheet-foreground"
      >
        <SheetHeader className="flex flex-col items-center justify-center gap-3 my-3 border-b border-sheet-foreground/30">
          <SheetTitle
            asChild
            className="flex items-center justify-center gap-1 uppercase text-sheet-foreground"
          >
            <h6>Navigation</h6>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col items-center justify-center h-full gap-3 my-3">
          <Main />
        </div>
        <SheetFooter className="flex flex-col items-center justify-center gap-3">
          {userLoggedIn ? (
            <>
              <SheetHeader className="flex flex-col items-center justify-center gap-3 border-b border-sheet-foreground/30">
                <SheetTitle
                  asChild
                  className="flex items-center justify-center gap-1 uppercase text-sheet-foreground"
                ></SheetTitle>
                <div className="flex flex-col items-center justify-center gap-1">
                  <AvatarEdit session={session} />
                </div>

                <div className="flex flex-col items-start justify-center">
                  <p className="max-w-fit py-2">
                    <Link
                      href={`/${user.role}`}
                      className="flex items-center justify-center gap-1 w-fit underlined uppercase"
                    >
                      <span
                        className={`flex items-center justify-center gap-1  max-text-[0.8rem] ${
                          pathname === `/${user.role}`
                            ? "text-primary font-semibold"
                            : "text-sheet-foreground/50"
                        }`}
                      >
                        <LayoutDashboardIcon className="size-[0.8rem]" />
                        Dashboard
                      </span>
                    </Link>
                  </p>
                  <p className="max-w-fit py-2">
                    <Link
                      href={`/${user.role}/profile`}
                      className="flex items-center justify-center gap-1 w-fit underlined uppercase"
                    >
                      <span
                        className={`flex items-center justify-center gap-1 max-text-[0.8rem] ${
                          pathname === `/${user.role}/profile`
                            ? "text-primary font-semibold"
                            : "text-sheet-foreground/50"
                        }`}
                      >
                        <UserPlus className="size-[0.8rem]" />
                        Profile
                      </span>
                    </Link>
                  </p>
                </div>
              </SheetHeader>
              <LogoutButton />
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center gap-3 my-3 border-b border-sheet-foreground/30 w-[90%]">
                <SheetTitle asChild>
                  <h6 className="uppercase text-sheet-foreground">
                    Your Account
                  </h6>
                </SheetTitle>
              </div>

              <ul className="flex flex-col items-start justify-center md:flex-row gap-1 md:gap-12">
                <li
                  className={`flex items-center justify-center gap-1 ${
                    pathname === "/login"
                      ? "text-primary font-semibold"
                      : "text-sheet-foreground/50"
                  }`}
                >
                  <Link
                    href={`/login`}
                    className="flex items-center justify-start gap-1 w-fit underlined uppercase"
                  >
                    <UserPlus
                      className="size-[0.9rem]"
                      strokeWidth={pathname === "/" ? 3 : 2}
                    />
                    Login
                  </Link>
                </li>
                <li
                  className={`flex items-start justify-center gap-1 ${
                    pathname === "/register"
                      ? "text-primary font-semibold"
                      : "text-sheet-foreground/50"
                  }`}
                >
                  <Link
                    href={`/register`}
                    className="flex items-center justify-start gap-1 w-fit underlined uppercase"
                  >
                    <PenBoxIcon
                      className="size-[0.9rem]"
                      strokeWidth={pathname === "/" ? 3 : 2}
                    />
                    Register
                  </Link>
                </li>
              </ul>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default SheetNavigation;
