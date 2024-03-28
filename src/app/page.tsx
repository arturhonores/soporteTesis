import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import Services from "@/components/services/Services";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}
