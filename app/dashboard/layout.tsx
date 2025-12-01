import DefaultSideBar from "@/components/sidebar/default-side-bar";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen min-w-screen px-[2%] py-8 flex gap-16">
      <DefaultSideBar />
      {children}
    </main>
  );
}
