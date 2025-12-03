"use client";
import { BellDot, Search } from "lucide-react";
import Button from "../ui/button";
import { Input } from "../ui/input";

export default function DashboardNavigation() {
  return (
    <div className="w-full flex items-center justify-between bg-accent rounded-2xl px-6 py-3">
      <Input Icon={Search} placeholder="Buscar transaçõess" className="border-none" />

      <div className="flex items-center gap-4">
        <Button size={"icon"} className="bg-card/30 hover:bg-card hover:text-accent">
          <BellDot />
        </Button>
        <div className="rounded-full size-12 bg-card/30"></div>
      </div>
    </div>
  );
}
