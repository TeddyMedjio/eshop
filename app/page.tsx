import Hero from "@/components/Hero";
import MyModal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import Navinfo from "@/components/Navinfo";
import NewArrivals from "@/components/NewArrivals";
import SliderLogos from "@/components/SliderLogos";

export default function Home() {
  return (
    <>
      <MyModal />
      <Navinfo />
      <Navbar />
      <Hero />
      <SliderLogos />
      <NewArrivals />
    </>
  );
}
