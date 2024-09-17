import { Button } from "./Button";
import Link from "next/link";
import ProductDetail from "./ProductDetail";

export default function TopSelling() {
  return (
    <div className="mx-auto container px-4 md:px-0 my-20 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-center md:text-left text-4xl md:text-5xl font-[family-name:var(--integralcf-)]">
          Meilleures Ventes
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-5 w-full my-12">
          {/* product */}
          <ProductDetail
            url="/images/vertical.png"
            title="Vertical Striped Shirt"
            reduction={`${-15}%`}
            price={`$${212}`}
            sold={`$${232}`}
            isActif={true}
          />
          {/* product */}
          <ProductDetail
            url="/images/courage.png"
            price={`$${145}`}
            title="Courage Graphic T-shirt"
            isActif={false}
          />
          {/* product */}
          <ProductDetail
            url="/images/loose.png"
            price={`$${80}`}
            title="Loose Fit Bermuda Shorts"
            isActif={false}
          />

          {/* product */}
          <ProductDetail
            url="/images/faded.png"
            price={`$${210}`}
            title="Faded Skinny Jeans"
            isActif={false}
          />
        </div>

        <Link href="/meilleures-ventes">
          <Button variant="outline" size="default">
            Voir plus
          </Button>
        </Link>
      </div>
    </div>
  );
}
