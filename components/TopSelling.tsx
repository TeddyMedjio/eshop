import { Button } from "./Button";
import Link from "next/link";
import ProductDetail from "./ProductDetail";
import { Product } from "@/lib/models/ProductModels";

async function getProducts() {
  const res = await fetch("https://ecommerce-data-tyi1.onrender.com/products");
  return res.json();
}

export default async function TopSelling() {
  const products: Product[] = await getProducts();
  return (
    <div className="mx-auto container px-4 md:px-0 my-20 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-center md:text-left text-[40px] md:text-5xl font-[family-name:var(--integralcf-)] leading-10 md:leading-none">
          Meilleures Ventes
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-5 w-full my-12">
          {/* product un */}
          {products.slice(4, 8).map((product) => (
            <ProductDetail
              key={product.slug}
              link={product.slug}
              url={product.image_url}
              price={`$${product.price}`}
              title={product.name}
              sold={`$${product.sold}`}
            />
          ))}
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
