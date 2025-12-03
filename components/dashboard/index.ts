import DashboardCard from "./card";
import DashboardExpenseCard from "./expenses/card";
import DashboardExpenseHeader from "./expenses/header";
import DashboardExpenseTableHeader from "./expenses/table-header";
import DashboardExpenseTableItem from "./expenses/table-item";
import DashboardHeader from "./header";
import DashboardNavigation from "./navigation";
import DashboardRevenueCard from "./revenues/card";
import DashboardRevenueHeader from "./revenues/header";
import DashboardRevenueTableHeader from "./revenues/table-header";
import DashboardRevenueTableItem from "./revenues/table-item";
import DashboardTableHeader from "./table-header";
import DashboardTableItem from "./table-item";
import DashboardTableRoot from "./table-root";

export const Dashboard = {
  Navigation: DashboardNavigation,
  Card: DashboardCard,
  Header: DashboardHeader,
  Table: {
    Root: DashboardTableRoot,
    Item: DashboardTableItem,
    Header: DashboardTableHeader,
  },
  Revenues: {
    Card: DashboardRevenueCard,
    Header: DashboardRevenueHeader,
    Table: {
      Item: DashboardRevenueTableItem,
      Header: DashboardRevenueTableHeader,
    },
  },
  Expenses: {
    Card: DashboardExpenseCard,
    Header: DashboardExpenseHeader,
    Table: {
      Item: DashboardExpenseTableItem,
      Header: DashboardExpenseTableHeader,
    },
  },
};
