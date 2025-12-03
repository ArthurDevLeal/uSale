import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-accent text-foreground [a&]:hover:bg-accent/90",
        secondary: "border-transparent bg-muted-foreground text-foreground [a&]:hover:bg-muted-foreground/90",
        destructive:
          "border-transparent bg-red-700 text-white [a&]:hover:bg-red-700/90 focus-visible:ring-red-700/20 dark:focus-visible:ring-red-700/40 dark:bg-red-700/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  text,
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean } & { text: string }) {
  return (
    <div className={twMerge(badgeVariants({ variant }), className)}>
      <p>{text}</p>
    </div>
  );
}

export { Badge, badgeVariants };
