import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import Services from "@/components/services/Services";
import Faq from "@/components/faq/Faq";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Faq></Faq>
    </>
  );
}
