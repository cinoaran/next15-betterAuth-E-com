"use client";
import React from "react";
import {HomeIcon, MessageSquareMore} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Main = () => {
  const pathname = usePathname();
  return (
    <div>
      <ul className="mx-auto my-4 font-roboto ml-3 md:ml-[9rem] space-y-0 uppercase">
        <li className="max-w-[fit-content] text-responsive-xs md:text-responsive-md py-2">
          <Link href="/" className="w-{max-content] underlined">
            <p
              className={`flex items-center justify-start gap-2 h-10 ${
                pathname === "/" ? "text-link" : "text-foreground/70"
              }`}
            >
              <span className="flex items-center justify-start">
                <HomeIcon size={20} />
              </span>
              <span className="w-fit">Home</span>
            </p>
          </Link>
        </li>
        <li className="max-w-[fit-content] text-responsive-xs md:text-responsive-md py-2">
          <Link
            href="/blog "
            className="flex items-center justify-start underlined"
          >
            <p
              className={`flex items-center justify-start gap-2 h-10 ${
                pathname === "/blog" ? "text-link" : "text-foreground/70"
              }`}
            >
              <span className="flex items-center justify-start">
                <MessageSquareMore size={20} />
              </span>
              <span className="w-fit">Blog</span>
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
