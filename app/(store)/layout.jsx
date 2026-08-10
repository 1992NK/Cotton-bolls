import Footer from "@/component/footer/Footer";
import Header from "@/component/header/Header";

export default function StoreLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}