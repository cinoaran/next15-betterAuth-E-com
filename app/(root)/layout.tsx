import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/header";

export default function PublicLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
