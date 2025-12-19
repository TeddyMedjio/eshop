import Category from "@/components/Category";
import Hero from "@/components/Hero";
import MyModal from "@/components/Modal";
import NewArrivals from "@/components/NewArrivals";
import SliderLogos from "@/components/SliderLogos";
import Testimonials from "@/components/Testimonials";
import TopSelling from "@/components/TopSelling";
import ScrollToHashSection from "@/components/ScrollToHashSection";

export default function Home() {
  return (
    <>
      <MyModal />
      <ScrollToHashSection />
      <section id="accueil">
        <Hero />
        <SliderLogos />
      </section>
      <section id="nouveautes">
        <NewArrivals />
      </section>
      <section id="en-vente">
        <TopSelling />
      </section>
      <section id="categories">
        <Category />
      </section>
      <section id="temoignages">
        <Testimonials />
      </section>
    </>
  );
}
