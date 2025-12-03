import DashboardCard from "./card";
import DashboardHeader from "./header";
import DashboardNavigation from "./navigation";
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
};
