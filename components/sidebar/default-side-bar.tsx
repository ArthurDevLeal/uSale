"use client";
import { BanknoteArrowDown, Calendar, ChartPieIcon, FileText, Wallet } from "lucide-react";
import { Sidebar } from ".";

export default function DefaultSideBar() {
  return (
    <Sidebar.Root>
      <Sidebar.Button href="/dashboard" onClick={() => {}} Icon={ChartPieIcon} />
      <Sidebar.Button href="" onClick={() => {}} Icon={Wallet} />
      <Sidebar.Button href="" onClick={() => {}} Icon={BanknoteArrowDown} />
      <Sidebar.Button href="" onClick={() => {}} Icon={Calendar} />
      <Sidebar.Button href="" onClick={() => {}} Icon={FileText} />
    </Sidebar.Root>
  );
}
