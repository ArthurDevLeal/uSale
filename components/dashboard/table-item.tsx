interface TableItemProps {
  src?: string;
  name: string;
  date: Date;
  badge: string;
  price: number;
}
export default function DashboardTableItem({ badge, date, name, price, src }: TableItemProps) {
  return (
    <div className="grow border border-border px-4 py-2 flex items-center justify-between gap-4 rounded-2xl hover:bg-background/30 cursor-pointer transition-colors">
      <div className="flex items-center gap-2">
        <div className="size-12 bg-accent rounded-full"></div>
        <p className="font-medium">{name}</p>
      </div>

      <p>{date.toLocaleDateString()}</p>

      <div className="">
        <p>{badge}</p>
      </div>

      <p>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price)}</p>
    </div>
  );
}
