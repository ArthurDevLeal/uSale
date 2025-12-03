import { twMerge } from "tailwind-merge";

interface DashboardCardProps {
  mainText?: string;
  price?: number;
  percentage: number;
  className?: string;
}
export default function DashboardCard({ mainText, percentage, price, className }: DashboardCardProps) {
  return (
    <div
      className={twMerge(
        "grow flex flex-col gap-2 px-6 py-6 bg-card rounded-4xl",
        className
      )}
    >
     {mainText &&  <p className="font-medium">{mainText}</p>}
      {price && <p className="font-semibold text-4xl">
        {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price)}
      </p>}
     {percentage &&  <p className="text-sm ">{percentage}% desde o mês passado</p>}
    </div>
  );
}
