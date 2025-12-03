import { Children } from "@/types/types";
import { LogOut } from "lucide-react";
import { Sidebar } from ".";
import Logo from "../ui/logo";

export default function SidebarRoot({ children }: { children: Children }) {
  return (
    <div className="py-8">
      <div className="flex flex-col justify-between items-center h-full bg-accent px-3 py-6 rounded-2xl">
        <Logo textIncluded={false} isDarker />
        <div className="flex flex-col gap-3">{children}</div>

        <Sidebar.Button href="" onClick={() => {}} Icon={LogOut} className="hover:text-red-400" />
      </div>
    </div>
  );
}
