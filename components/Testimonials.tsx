import { TestimonialsSlider } from "./TestimonialsSlider";

export default function Testimonials() {
  return (
    <div className="mx-auto container px-4 mt-20 mb-52 ">
      <h2 className="text-4xl md:text-5xl font-[family-name:var(--integralcf-)] mb-10">
        Nos Clients satisfaits
      </h2>
      <div className="flex items-center justify-center container px-4">
        <TestimonialsSlider />
      </div>
    </div>
  );
}
