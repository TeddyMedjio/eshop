import Category from "@/components/Category";
import Hero from "@/components/Hero";
import MyModal from "@/components/Modal";
import NewArrivals from "@/components/NewArrivals";
import SliderLogos from "@/components/SliderLogos";
import Testimonials from "@/components/Testimonials";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
    <>
      <MyModal />
      <Hero />
      <SliderLogos />
      <NewArrivals />
      <TopSelling />
      <Category />
      <Testimonials />
    </>
  );
}
