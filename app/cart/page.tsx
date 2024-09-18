import { BreadcrumbCart } from "@/components/BreadcrumbCart";
import Cart from "@/components/Cart";

export default function page() {
  return (
    <div className="mx-auto container px-4 pb-20 mt-5 mb-20 ">
      <BreadcrumbCart />
      <Cart />
    </div>
  );
}
