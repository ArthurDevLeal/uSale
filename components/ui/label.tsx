"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={twMerge(
        "w-fit flex items-center gap-2 text-muted-foreground leading-none  transition-colors group-focus-within:text-foreground group-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Label };
