"use client"
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Button from "../ui/button";

interface SidebarButtonProps {
  href: string;
  onClick: VoidFunction;
  Icon: LucideIcon;
  className?: string;
}
export default function SidebarButton({ Icon, onClick, href, className }: SidebarButtonProps) {
  return (
    <Link href={href}>
      <Button
        onClick={() => onClick()}
        size={"iconlg"}
        variant={"default"}
        className={twMerge("bg-card/30 hover:bg-card hover:text-accent ", className)}
      >
        <Icon />
      </Button>
    </Link>
  );
}
