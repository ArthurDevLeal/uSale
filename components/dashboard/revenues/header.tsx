"use client";
import Button from "@/components/ui/button";
import { Calendar, PlusIcon } from "lucide-react";

export default function DashboardRevenueHeader() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-medium">Receitas</h1>
        <p className="text-muted-foreground">Gerencie suas fontes de renda</p>
      </div>

      <Button className="h-fit px-8 gap-2" size={"md"}>
        <PlusIcon />
        Nova receita
      </Button>
    </div>
  );
}
