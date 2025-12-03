import { Badge } from "@/components/ui/badge";

interface TableItemProps {
  src?: string;
  name: string;
  brand: string;
  date: Date;
  badge: string;
  price: number;
  isRecurrent?: boolean;
}
export default function DashboardExpenseTableItem({
  badge,
  date,
  brand,
  name,
  price,
  src,
  isRecurrent = false,
}: TableItemProps) {
  const isPositive = price > 0;

  return (
    <div className="border border-border grow px-4 py-2 flex items-center justify-between gap-4 rounded-2xl hover:bg-background/30 cursor-pointer transition-colors">
      <div className="flex gap-3">
        <div className="size-12 bg-accent rounded-full"></div>

        <div className="flexitems-center ">
          <p className="font-medium">
            {brand} - {name}
          </p>

          <div className="flex gap-3 items-center">
            <Badge text={badge} />
            {isRecurrent && <Badge variant={"outline"} text={"Recorrente"} />}

            <p className="text-muted-foreground text-sm">{date.toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <p className={isPositive ? "text-emerald-600 font-medium" : "text-red-600 font-medium"}>
        {isPositive && "+"} {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price)}
      </p>
    </div>
  );
}
