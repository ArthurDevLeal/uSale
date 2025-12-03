"use client";
import { Calendar } from "lucide-react";
import Button from "../ui/button";

export default function DashboardHeader() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-medium">Dashboard Mensal</h1>
        <p className="text-muted-foreground">Visão geral das suas finanças</p>
      </div>

      <Button className="h-fit px-8 gap-2" size={"md"}>
        <Calendar />
        Mensal
      </Button>
    </div>
  );
}
