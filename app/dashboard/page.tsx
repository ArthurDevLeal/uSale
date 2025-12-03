import { Dashboard } from "@/components/dashboard";
import Button from "@/components/ui/button";
import { ArrowUpDown, BanknoteArrowDown, ChartBarStacked, PiggyBank, Plus } from "lucide-react";
export default function Page() {
  return (
    
      <div className="flex flex-col gap-6 h-full">
        <Dashboard.Header />

        <div className="flex gap-6">
          <Dashboard.Card
            mainText="Saldo Total"
            percentage={12.5}
            price={45423}
           
            accent
          />
          <Dashboard.Card mainText="Receitas" percentage={12.5} price={9433.0} />
          <Dashboard.Card mainText="Despesas" percentage={12.5} price={9433.0} />
          <Dashboard.Card mainText="Economia" percentage={-12.5} price={4672.0} />
        </div>
        <div className="flex gap-6 h-full max-h-[500px]">
          <div className="flex flex-col gap-2 pl-6 py-6 bg-card w-full rounded-4xl ">
            <Dashboard.Table.Header />
            <Dashboard.Table.Root>
              <Dashboard.Table.Item name="Air force max" brand="Nike" price={33.44} date={new Date()} badge="Payment" />
              <Dashboard.Table.Item name="Air force max" brand="Nike" price={33.44} date={new Date()} badge="Payment" />
              <Dashboard.Table.Item name="Air force max" brand="Nike" price={33.44} date={new Date()} badge="Payment" />
              <Dashboard.Table.Item name="Air force max" brand="Nike" price={33.44} date={new Date()} badge="Payment" />
              <Dashboard.Table.Item name="Air force max" brand="Nike" price={33.44} date={new Date()} badge="Payment" />
              <Dashboard.Table.Item name="Air force max" brand="Nike" price={33.44} date={new Date()} badge="Payment" />
              <Dashboard.Table.Item name="Air force max" brand="Nike" price={33.44} date={new Date()} badge="Payment" />
              <Dashboard.Table.Item name="Air force max" brand="Nike" price={33.44} date={new Date()} badge="Payment" />
              <Dashboard.Table.Item name="Air force max" brand="Nike" price={33.44} date={new Date()} badge="Payment" />
              <Dashboard.Table.Item name="Air force max" brand="Nike" price={33.44} date={new Date()} badge="Payment" />
            </Dashboard.Table.Root>
          </div>

          <div className="flex flex-col gap-6 bg-card p-6 w-fit min-w-140 h-fit rounded-4xl">
            <h2 className="font-medium">Histórico de despesas</h2>

            <div className="grid grid-cols-2 gap-4">
              <Button variant={"default"} size={"lg"} className="flex flex-col">
                <Plus /> Nova receita
              </Button>
              <Button variant={"outline"} size={"lg"} className="flex flex-col">
                <BanknoteArrowDown /> Nova despesas
              </Button>
              <Button variant={"outline"} size={"lg"} className="flex flex-col">
                <ChartBarStacked /> Definir categorias
              </Button>
              <Button variant={"outline"} size={"lg"} className="flex flex-col">
                <PiggyBank /> Definir Meta
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}
