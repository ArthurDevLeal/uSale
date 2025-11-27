export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="h-screen min-w-screen px-[10%] py-16 flex">{children}</main>;
}