import { Header } from "@/components/Header/header.view";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-zinc-800 min-h-screen text-zinc-100">
      <Header />

      <div className="px-14">{children}</div>
    </main>
  );
}
