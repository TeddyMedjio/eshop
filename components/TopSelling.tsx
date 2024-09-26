"use client";
import { getProducts } from "@/api/requests";
import { Product } from "@/lib/models/ProductModels";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Loader } from "lucide-react";

export default function TopSelling() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);

  console.log(products);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const products: Product[] = await getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div className="mx-auto container px-4 md:px-0 my-20 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-center md:text-left text-[40px] md:text-5xl font-[family-name:var(--integralcf-)] leading-10 md:leading-none">
          Meilleures Ventes
        </h2>
        {loading ? (
          <div className="flex justify-center items-center my-16">
            {" "}
            <Loader size={32} className="animate-spin" />{" "}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-5 w-full my-12">
            {/* product */}
            {products?.slice(4, 8).map((product) => (
              <div key={Math.random() * 1000}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
