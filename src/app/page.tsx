import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import Services from "@/components/services/Services";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Faq></Faq>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}
