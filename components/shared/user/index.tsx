"use client";

import {
  User2,
  LayoutDashboardIcon,
  UserPlus,
  PenBoxIcon,
  HomeIcon,
  KeyRound,
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
        <Avatar className="flex items-center justify-center border-2 border-link rounded-full cursor-pointer hover:text-link size-11 md:size-12 rounded-link-active">
          <AvatarImage src={user?.image} alt="User profile image" />
          <AvatarFallback>
            <p
              className={`hover:text-link ${
                pathname === "/" ? "text-accent" : "text-foreground"
              }`}
            >
              <User2 size={22} />
              <span className="sr-only">User Icon</span>
            </p>
          </AvatarFallback>
          <span className="sr-only">User Image</span>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        side="bottom"
        alignOffset={15}
        sideOffset={15}
        className="border-[0.2px] bg-background border-foreground/30 text-primary-foreground rounded-md        
        shadow-md backdrop-blur-lg max-w-[90vw]"
      >
        <div className="bg-primary/10 text-foreground uppercase">
          <DropdownMenuItem className="outline-none px-2">
            <div className="flex flex-col items-center justify-center font-roboto">
              {user && user?.name !== undefined && (
                <div>
                  <div className="text-center uppercase py-4">
                    <h3 className="flex items-center justify-center gap-2 mx-auto text-responsive-xs md:text-responsive-md text-center py-4">
                      Welcome back
                    </h3>
                    <span className="text-center text-xs">{user?.name}</span>
                  </div>
                  <Separator className="bg-foreground/30" />
                  <div className="flex-col items-center justify-center px-5 py-5 text-left">
                    <div className="max-w-[fit-content] py-2">
                      <Link href={`/`} className="w-{max-content] underlined">
                        <p
                          className={`flex items-center justify-start hover:text-foreground/70 gap-1 h-10 ${
                            pathname === "/" ? "text-accent" : "text-foreground"
                          }`}
                        >
                          <HomeIcon size={18} />
                          Home
                        </p>
                      </Link>
                    </div>
                    <div className="max-w-[fit-content]">
                      <Link
                        href={`/${user.role}`}
                        className="uppercase text-foreground underlined"
                      >
                        <p
                          className={`flex items-center justify-start hover:text-foreground/70 gap-2 h-10 ${
                            pathname === "/dashboard"
                              ? "text-accent"
                              : "text-foreground"
                          }`}
                        >
                          <LayoutDashboardIcon size={18} />
                          Dashboard
                        </p>
                      </Link>
                    </div>
                  </div>
                  <Separator className="bg-foreground/30" />
                  <div className="flex-col items-center justify-center mx-auto py-5 max-w-[min-content]">
                    <LogoutButton />
                  </div>
                </div>
              )}

              {!user && (
                <div>
                  <h3 className="flex items-center justify-center gap-2 mx-auto text-responsive-xs md:text-responsive-md text-center py-4">
                    <KeyRound size={18} />
                    Account
                  </h3>
                  <Separator className="bg-foreground/30" />
                  <div className="flex-col items-center justify-center px-5 py-4 text-left">
                    <div className="max-w-[fit-content] py-2">
                      <Link
                        href="/login"
                        className="w-{max-content] underlined"
                      >
                        <p
                          className={`flex items-center justify-start gap-1 h-10 ${
                            pathname === "/login"
                              ? "text-accent"
                              : "text-foreground/70"
                          }`}
                        >
                          <span className="flex items-center justify-start">
                            <UserPlus size={20} />
                          </span>
                          <span className="w-fit">Login</span>
                        </p>
                      </Link>
                    </div>
                    <div className="max-w-[fit-content]">
                      <Link
                        href="/register"
                        className="w-{max-content] underlined"
                      >
                        <p
                          className={`flex items-center justify-start gap-1 h-10 ${
                            pathname === "/register"
                              ? "text-accent"
                              : "text-foreground/70"
                          }`}
                        >
                          <span className="flex items-center justify-start">
                            <PenBoxIcon size={20} />
                          </span>
                          <span className="w-fit">Register</span>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
