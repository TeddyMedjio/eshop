import { Button } from "./Button";
import Link from "next/link";
import ProductDetail from "./ProductDetail";
import { Product } from "@/lib/models/ProductModels";

async function getProducts() {
  const res = await fetch("https://ecommerce-data-tyi1.onrender.com/products");
  return res.json();
}

export default async function NewArrivals() {
  const products: Product[] = await getProducts();

  return (
    <div className="mx-auto container px-4 md:px-0 my-20 ">
      <div className="flex flex-col items-center justify-center border-b pb-16">
        <h2 className=" text-[40px] md:text-5xl font-[family-name:var(--integralcf-)]">
          Nouveautes
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-5 w-full my-12">
          {/* product un */}
          {products.slice(0, 4).map((product) => (
            <div key={product.slug}>
              <ProductDetail
                link={product.slug}
                url={product.image_url}
                price={`$${product.price}`}
                title={product.name}
                sold={`$${product.sold}`}
              />
            </div>
          ))}
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
