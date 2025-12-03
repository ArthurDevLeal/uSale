import { Dashboard } from "@/components/dashboard";

export default function ExpensesPage() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <Dashboard.Expenses.Header />
      <div className="flex gap-6">
        <Dashboard.Expenses.Card mainText="Total de Receitas" price={11340} subText="Este mês" />
        <Dashboard.Expenses.Card mainText="Renda Fixa" price={7400} subText="Recorrente" />
        <Dashboard.Expenses.Card mainText="Renda Variável" price={4300} subText="Eventual" />
      </div>
      <div className="flex flex-col gap-2 pl-6 py-6 bg-card w-full rounded-4xl max-h-[500px] ">
        <Dashboard.Expenses.Table.Header />
        <Dashboard.Table.Root>
          <Dashboard.Expenses.Table.Item
            name="Air force max"
            brand="Nike"
            price={33.44}
            date={new Date()}
            badge="Payment"
          />
          <Dashboard.Expenses.Table.Item
            name="Air force max"
            brand="Nike"
            price={33.44}
            date={new Date()}
            badge="Payment"
            isRecurrent
          />
          <Dashboard.Expenses.Table.Item
            name="Air force max"
            brand="Nike"
            price={33.44}
            date={new Date()}
            badge="Payment"
          /><Dashboard.Expenses.Table.Item
            name="Air force max"
            brand="Nike"
            price={33.44}
            date={new Date()}
            badge="Payment"
          /><Dashboard.Expenses.Table.Item
            name="Air force max"
            brand="Nike"
            price={33.44}
            date={new Date()}
            badge="Payment"
          /><Dashboard.Expenses.Table.Item
            name="Air force max"
            brand="Nike"
            price={-33.44}
            date={new Date()}
            badge="Payment"
          />
        </Dashboard.Table.Root>
      </div>
    </div>
  );
}
