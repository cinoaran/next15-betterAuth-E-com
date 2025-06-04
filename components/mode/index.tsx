"use client";

import * as React from "react";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

export function ModeToggle() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is mounted before rendering theme-dependent content
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing or a placeholder during SSR
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" size="icon" className="rounded-link-active">
          {theme === "dark" ? (
            <span className="flex items-center justify-center text-foreground hover:text-link">
              <Sun />
            </span>
          ) : (
            <span className="flex items-center justify-center text-foreground hover:text-link">
              <Moon />
            </span>
          )}
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        sideOffset={15}
        className="border-s-[0.3px] border-foreground/20 max-w-[12rem] z-50 bg-background text-primary-foreground rounded-md shadow-md"
      >
        <div className="bg-primary/10 text-primary-foreground p-5">
          <h5 className="text-md text-responsive uppercase py-3">
            Select Theme
          </h5>
          <DropdownMenuSeparator className="bg-foreground/30" />
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Link
              href="#"
              className={`rounded text-md text-foreground text-semibold hover:bg-transparent underlined max-w-[fit-content] py-2 ${
                theme === "light" ? "text-link" : ""
              }`}
            >
              Light Theme
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Link
              href="#"
              className={`rounded text-md text-foreground text-semibold hover:bg-transparent underlined max-w-[fit-content] py-2 ${
                theme === "dark" ? "text-link" : ""
              }`}
            >
              Dark Theme
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
