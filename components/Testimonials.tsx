import { TestimonialsSlider } from "./TestimonialsSlider";

export default function Testimonials() {
  return (
    <div className="mx-auto container px-4 mt-20 mb-52 ">
      <div className="">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--integralcf-)] mb-10">
          Nos Clients satisfaits
        </h2>
        <TestimonialsSlider />
      </div>
    </div>
  );
}
