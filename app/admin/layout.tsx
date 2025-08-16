import Header from "@/components/shared/header";

export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full mx-auto min-h-screen">
      <Header />
      {children}
    </div>
  );
}
