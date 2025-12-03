import DefaultSideBar from "@/components/sidebar/default-side-bar";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen min-w-screen pl-[2%] flex gap-16">
      <DefaultSideBar />
      {children}
    </main>
  );
}
