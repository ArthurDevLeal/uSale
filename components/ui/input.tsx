import * as React from "react";
import { twMerge } from "tailwind-merge";
import { LucideIcon } from "lucide-react";

interface InputProps extends React.ComponentProps<"input"> {
  Icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

function Input({ 
  className, 
  type, 
  Icon, 
  iconPosition = "left",
  ...props 
}: InputProps) {
  const inputElement = (
    <input
      type={type}
      data-slot="input"
      className={twMerge(
        "px-4 py-2 text-sm bg-card text-foreground border border-border placeholder:text-muted-foreground rounded-xl outline-none transition-all focus-visible:ring-muted-foreground/30 focus-visible:ring-4 disabled:opacity-50",
        Icon && iconPosition === "left" && "pl-10",
        Icon && iconPosition === "right" && "pr-10",
        className
      )}
      {...props}
    />
  );

  if (!Icon) {
    return inputElement;
  }

  return (
    <div className="relative">
      {iconPosition === "left" && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Icon size={18} />
        </div>
      )}
      
      {inputElement}
      
      {iconPosition === "right" && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Icon size={18} />
        </div>
      )}
    </div>
  );
}

export { Input };