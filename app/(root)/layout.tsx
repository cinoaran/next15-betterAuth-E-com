import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/header";

export default function PublicLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full mx-auto min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
