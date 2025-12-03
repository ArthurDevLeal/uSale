"use client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Button from "../ui/button";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  href: string;
  onClick: VoidFunction;
  Icon: LucideIcon;
  className?: string;
}
export default function SidebarButton({ Icon, onClick, href, className }: SidebarButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <Button
        onClick={() => onClick()}
        size={"icon"}
        variant={"default"}
        className={twMerge("bg-card/30 hover:bg-card hover:text-accent ",isActive ? "bg-card text-accent hover:bg-card/80": "" , className)}
      >
        <Icon />
      </Button>
    </Link>
  );
}
