import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyModal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import Navinfo from "@/components/Navinfo";
import NewArrivals from "@/components/NewArrivals";
import SliderLogos from "@/components/SliderLogos";
import Testimonials from "@/components/Testimonials";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
    <>
      <MyModal />
      <Navinfo />
      <Navbar />
      <Hero />
      <SliderLogos />
      <NewArrivals />
      <TopSelling />
      <Category />
      <Testimonials />
      <Footer />
    </>
  );
}
