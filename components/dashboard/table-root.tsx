import { Children } from "@/types/types";

export default function DashboardTableRoot({ children }: { children: Children }) {
  return <div className="overflow-y-auto h-auto grid grid-cols-1 gap-2 pr-4 mr-2">{children}</div>;
}
