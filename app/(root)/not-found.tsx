import {MoveLeftIcon} from "lucide-react";
import Link from "next/link";
import React from "react";

const notFoundPage = () => {
  return (
    <section className="flex items-center justify-center h-1/2 w-1/2 my-30 mx-auto rounded-md border-[0.3px] border-accent-foreground/20  bg-primary/20 font-roboto">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto text-center space-y-10">
          <h1 className="text-8xl">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-foreground">
            Something&#39;s missing.
          </p>
          <p className="mb-4 text-lg font-thin text-link py-10">
            Sorry, we can&#39;t find that page. You will find lots to explore on
            the home page.
          </p>
          <Link
            href="/"
            title="Back to Homepage"
            className="flex items-center justify-center gap-5 p-7 max-w-[max-content] text-center mx-auto rounded-md bg-black hover:bg-black/60 text-foreground text-xl uppercase cursor-pointer"
            aria-label="Back to Homepage"
          >
            <MoveLeftIcon className="h-8 w-8" /> Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default notFoundPage;
