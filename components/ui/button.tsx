import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-center transition-all cursor-pointer text-foreground disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-muted-foreground/30 focus-visible:ring-4 outline-none",
  {
    variants: {
      variant: {
        default: "bg-accent hover:bg-accent/70",
        secondary: "bg-card  hover:bg-muted-foreground/20 ",
        outline: "border border-muted-foreground hover:bg-muted-foreground/20",
        ghost: "hover:bg-card/30",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        xs: "px-2.5 py-1 rounded-md text-xs font-medium",
        sm: "px-3 py-1.5 rounded-md text-sm font-medium",
        md: "px-4 py-2 rounded-xl text-base font-medium",
        lg: "px-6 py-3 rounded-xl font-medium text-base",
        xl: "px-8 py-3.5 rounded-xl text-lg font-semibold",
        icon: "p-2 rounded-md text-base",
        iconsm: "p-1.5 rounded-sm text-sm",
        iconlg: "p-3.5 rounded-xl text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={twMerge(buttonVariants({ variant, size }), className)} {...props} />;
}
