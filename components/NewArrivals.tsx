import { Button } from "./Button";
import Link from "next/link";
import ProductDetail from "./ProductDetail";

export default function NewArrivals() {
  return (
    <div className="mx-auto container px-4 md:px-0 my-20 ">
      <div className="flex flex-col items-center justify-center border-b pb-16">
        <h2 className=" text-[40px] md:text-5xl font-[family-name:var(--integralcf-)]">
          Nouveautes
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-5 w-full my-12">
          {/* product un */}
          <ProductDetail
            url="/images/tshirt.png"
            price={`$${240}`}
            title="T-shirt with Taps Details"
            isActif={false}
          />
          {/* product deux */}
          <ProductDetail
            url="/images/jeans.png"
            price={`$${240}`}
            title="Skinny Fit Jeans"
            sold={`$ ${260}`}
            reduction={`${-20}%`}
            isActif={true}
          />
          {/* product trois */}
          <ProductDetail
            url="/images/shirt.png"
            price={`$${350}`}
            title="Checkered Shirt"
            isActif={false}
          />
          {/* product quatre */}
          <ProductDetail
            url="/images/stripeed.png"
            price={`$${130}`}
            title="Skinny Fit Jeans"
            sold={`$ ${160}`}
            reduction={`${-30}%`}
            isActif={true}
          />
        </div>

        <Link href="/nouveautes">
          <Button variant="outline" size="default">
            Plus de Nouveautés
          </Button>
        </Link>
      </div>
    </div>
  );
}
