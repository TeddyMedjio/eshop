import AlsoLike from "@/components/AlsoLike";
import { BreadcrumbCustom } from "@/components/Breadcrumb";
import DetailsProduct from "@/components/DetailsProduct";
import { Reviews } from "@/components/Reviews";

export default function page() {
  return (
    <div className="mx-auto container px-4 pb-20  ">
      <BreadcrumbCustom />
      <DetailsProduct />
      <Reviews />
      <AlsoLike />
    </div>
  );
}
