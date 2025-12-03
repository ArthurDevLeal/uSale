import { Dashboard } from "@/components/dashboard";
import DefaultSideBar from "@/components/sidebar/default-side-bar";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen min-w-screen pl-[2%] flex gap-16">
      <DefaultSideBar />
      <div className="overflow-y-auto flex flex-col w-full gap-12 pr-[1.5%] mr-[0.5%] py-8">
        <Dashboard.Navigation />
        {children}
      </div>
    </main>
  );
}
