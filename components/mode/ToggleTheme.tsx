"use client";

import * as React from "react";
import {Lightbulb} from "lucide-react";
import {useTheme} from "next-themes";

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
    <div className="flex items-center justify-center w-full">
      {theme === "dark" ? (
        <div onClick={() => setTheme("light")}>
          <span className="flex flex-col items-center justify-center cursor-pointer hover:text-link text-[0.8rem] text-link font-bold">
            <hr className="w-5 border-link rotate-90" />
            <Lightbulb size={24} className="rotate-180 mt-2 hover:scale-95" />
          </span>
        </div>
      ) : (
        <div onClick={() => setTheme("dark")}>
          <span className="flex flex-col items-center justify-center cursor-pointer hover:text-link text-[0.8rem] text-link font-bold">
            <hr className="w-5 border-link rotate-90" />
            <Lightbulb size={24} className="rotate-180 mt-2 hover:scale-95" />
          </span>
        </div>
      )}
      <span className="sr-only">Toggle Theme</span>
    </div>
  );
}
