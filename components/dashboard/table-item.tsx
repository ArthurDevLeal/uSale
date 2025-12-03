import { Badge } from "../ui/badge";

interface TableItemProps {
  src?: string;
  name: string;
  brand: string;
  date: Date;
  badge: string;
  price: number;
}
export default function DashboardTableItem({ badge, date, brand, name, price, src }: TableItemProps) {
  const isPositive = price > 0;
  return (
    <div className="grow border border-border px-4 py-2 flex items-center justify-between gap-4 rounded-2xl hover:bg-background/30 cursor-pointer transition-colors">
      <div className="flex items-center gap-2">
        <div className="size-12 bg-accent rounded-full"></div>
        <div className="flex flex-col">
          <p className="font-medium">{brand}</p>
          <p className="text-muted-foreground text-xs">{name}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-muted-foreground text-sm">{date.toLocaleDateString()}</p>

        <div className="">
          <Badge text={badge} />
        </div>

        <p className={isPositive ? "text-emerald-600 font-medium" : "text-red-700 font-medium"}>
          {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price)}
        </p>
      </div>
    </div>
  );
}
