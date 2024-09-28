"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/models/ProductModels";
import { getProducts } from "@/Request/requests";
import { Button } from "./Button";
import { Loader } from "lucide-react";
import ProductCard from "./ProductCard";

export default function NewArrivals() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
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
      <div className="flex flex-col items-center justify-center border-b pb-16">
        <h2 className=" text-[40px] md:text-5xl font-[family-name:var(--integralcf-)]">
          Nouveautes
        </h2>
        {loading ? (
          <div className="flex justify-center items-center my-16">
            {" "}
            <Loader size={32} className="animate-spin" />{" "}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-5 w-full my-12">
            {/* product */}
            {products?.slice(0, 4).map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        <Link href="/nouveautes">
          <Button variant="outline" size="default">
            Plus de Nouveautés
          </Button>
        </Link>
      </div>
    </div>
  );
}
