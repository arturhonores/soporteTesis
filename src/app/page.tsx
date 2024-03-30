import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import Services from "@/components/services/Services";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Testimonials from "@/components/testimonials/Testimonials";
import Plan from "@/components/plan/Plan";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Plan></Plan>
      <Testimonials></Testimonials>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}
