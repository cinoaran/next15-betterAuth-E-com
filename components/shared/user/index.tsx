"use client";

import {
  User2,
  LayoutDashboardIcon,
  UserPlus,
  PenBoxIcon,
  HomeIcon,
} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {Separator} from "../../ui/separator";
import Link from "next/link";
import {usePathname} from "next/navigation";
import LogoutButton from "../authComponent/logoutButton";

interface Session {
  user?: {
    name?: string;
    email?: string;
    image?: string;
    role?: string;
  };
}

export function UserBox({session}: {session: Session | null}) {
  const user = session?.user;
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center relative">
          {session && session.user && (
            <p
              className="bg-primary shadow absolute h-3 w-3 rounded-full border-2 border-popover-foreground -top-0.5 right-0.5 animate-pulse"
              title="User Online Status"
              aria-label="User Online Status"
            >
              <span className="sr-only">User Online Status</span>
            </p>
          )}

          <Avatar className="flex items-center justify-center bg-primary hover:bg-gradient-start border-3 border-popover-foreground cursor-pointer responsive-icon z-10">
            <AvatarImage
              src={user?.image}
              alt="User profile image"
              width={200}
              height={200}
            />
            <AvatarFallback>
              <p
                className="text-popover-foreground hover:text-popover-foreground/70 flex items-center justify-center"
                title="User Icon"
              >
                <User2
                  size={22}
                  className="rounded-full hover:text-popover-foreground/70 transition-colors duration-200 ease-in-out"
                />
                <span className="sr-only">User Icon</span>
              </p>
            </AvatarFallback>
            <span className="sr-only">User Image</span>
          </Avatar>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        side="bottom"
        alignOffset={17}
        sideOffset={20}
        className="w-full max-w-xs px-2 sm:w-56 sm:px-5 text-popover-foreground bg-popover border-[0.3px] border-foreground/10 shadow-xs rounded-lg mx-auto font-roboto font-thin z-50"
        aria-label="User Menu"
        role="menu"
      >
        <DropdownMenuItem className="flex flex-col items-center justify-center font-roboto outline-none px-2">
          {user && user?.name !== undefined && (
            <>
              <div className="flex flex-col items-center justify-center font-bold uppercase py-4">
                <span className="text-sm">Hello,</span>
                <span className="text-sm">{user?.name}</span>
              </div>
              <Separator className="bg-popover-foreground/30" />
              <div className="flex-col items-center justify-center px-6 py-3 text-left">
                <p className="max-w-fit py-2">
                  <Link href={`/`} className="w-fit underlined uppercase">
                    <span
                      className={`flex items-center justify-start gap-2 h-8 ${
                        pathname === "/"
                          ? "text-popover-foreground"
                          : "text-popover-foreground/50"
                      }`}
                    >
                      <HomeIcon size={16} />
                      Home
                    </span>
                  </Link>
                </p>
                <p className="max-w-fit py-2">
                  <Link href={`/${user.role}`} className="uppercase underlined">
                    <span
                      className={`flex items-center justify-start gap-2 h-8 ${
                        pathname === `/${user.role}`
                          ? "text-popover-foreground"
                          : "text-popover-foreground/50"
                      }`}
                    >
                      <LayoutDashboardIcon size={16} />
                      Dashboard
                    </span>
                  </Link>
                </p>
              </div>
              <Separator className="bg-popover-foreground/30" />
              <div className="flex-col items-center justify-center text-popover-foreground mx-auto py-5 max-w-[min-content]">
                <LogoutButton />
              </div>
            </>
          )}
          {!user && (
            <>
              <div className="text-center uppercase py-4">
                <h6 className="text-center font-bold">Account</h6>
              </div>
              <Separator className="bg-popover-foreground/30" />
              <div className="flex-col items-center justify-center px-5 py-4 text-left">
                <p className="max-w-fit py-2">
                  <Link href={`/login`} className="w-fit underlined uppercase">
                    <span
                      className={`flex items-center justify-start gap-2 h-8 ${
                        pathname === "/login"
                          ? "text-popover-foreground"
                          : "text-popover-foreground/50"
                      }`}
                    >
                      <UserPlus size={18} />
                      Login
                    </span>
                  </Link>
                </p>
                <p className="max-w-fit py-2">
                  <Link href={`/`} className="w-fit underlined uppercase">
                    <span
                      className={`flex items-center justify-start gap-2 h-8 ${
                        pathname === "/register"
                          ? "text-popover-foreground"
                          : "text-popover-foreground/50"
                      }`}
                    >
                      <PenBoxIcon size={18} />
                      Register
                    </span>
                  </Link>
                </p>
              </div>
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
