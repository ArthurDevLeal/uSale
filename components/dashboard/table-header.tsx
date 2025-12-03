"use client";
import { Filter } from "lucide-react";
import Button from "../ui/button";

export default function DashboardTableHeader() {
  return (
    <div className="flex justify-between pr-6">
      <h2 className="font-medium">Histórico de despesas</h2>
      <Button variant={"outline"} size={"sm"} className="gap-2">
        <Filter /> Filtrar
      </Button>
    </div>
  );
}
