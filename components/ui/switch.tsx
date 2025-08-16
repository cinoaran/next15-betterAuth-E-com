"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import {cn} from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "relative peer data-[state=checked]:bg-primary/20  data-[state=unchecked]:bg-primary/30 inline-flex h-[1.15rem] w-4 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "absolute left-1 data-[state=checked]:bg-green-400 data-[state=checked]:animate-pulse data-[state=unchecked]:bg-primary-foreground pointer-events-none block size-3.5 rounded-full ring-1 ring-inset ring-black/20 transition-transform data-[state=checked]:translate-x-[calc(0.6rem)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export {Switch};
