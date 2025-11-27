import * as React from "react";
import { twMerge } from "tailwind-merge";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={twMerge(
        "px-6 py-3 bg-card text-foreground border border-muted-foreground placeholder:text-muted-foreground rounded-full outline-none transition-all  focus-visible:ring-muted-foreground/30 focus-visible:ring-4 disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
