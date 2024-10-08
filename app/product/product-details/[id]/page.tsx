import { Product } from "@/lib/models/ProductModels";
import { getProductByCollections, getSingleProduct } from "@/Request/requests";
import React from "react";
import Image from "next/image";
import { Tailles } from "@/components/Tailles";
import { BreadcrumbCustom } from "@/components/Breadcrumb";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Reviews } from "@/components/Reviews";
import AjouterAuPanier from "./AjouterAuPanier";
import QuantityCart from "@/components/QuantityCart";
import { Checkbox } from "@/components/ui/checkbox";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const singleProduct: Product = await getSingleProduct(id);
  const relatedProduct: Product[] = await getProductByCollections(
    singleProduct.collection
  );

  // permet de convertir les votes du nombre decimal au nombre entier
  const num = Math.round(singleProduct.rate);
  //   permet de creer un tableau content des nombres entiers venu du haut
  const starRating = new Array(num).fill(0);

  return (
    <div className="mx-auto container px-4 md:px-0 pb-20  ">
      <BreadcrumbCustom
        link={singleProduct.collection}
        collection={singleProduct.collection}
        product={singleProduct.name}
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 mb-20 ">
        {/* images */}
        <div className=" col-span-1 relative rounded-[20px] overflow-hidden width={344px} h-[530px] ">
          <Image
            src={singleProduct.image_url}
            fill={true}
            alt="image"
            draggable={false}
            className="absolute object-cover object-center"
          />
        </div>

        {/* infos produit */}
        <div className="col-span-1 ">
          <h2 className="font-[family-name:var(--integralcf-)] text-4xl lg:text-[40px]">
            {singleProduct.name}
          </h2>
          {/* NOTASION */}
          {/* rating and count */}
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center">
              {starRating.map((star) => (
                <StarFilledIcon
                  key={Math.random() * 3000}
                  fill="yellow"
                  className="text-yellow-400 size-5"
                />
              ))}
            </div>
            <p className="font-[family-name:var(--satoshi-)]">{`${num}/5`}</p>
          </div>
          {/* PRIX et DESCRIPTION */}
          <div className="border-b flex flex-col py-[20px] gap-4">
            <div className="flex items-center gap-2">
              <p className="text-black font-[family-name:var(--satoshibold-)] text-3xl">
                {`$${singleProduct.price.toFixed(2)}`}
              </p>
              <p className="text-black/30 line-through font-[family-name:var(--satoshibold-)] text-3xl">
                {`$${(singleProduct.price + 10).toFixed(2)}`}
              </p>

              <p className="font-[family-name:var(--satoshi-)] text-sm bg-red-50 border border-red-100 py-1 px-2 rounded-full text-red-500">
                -10%
              </p>
            </div>

            <p className="text-black/60 font-[family-name:var(--satoshi-)]">
              {singleProduct.description}
            </p>
          </div>

          {/* COLORS */}
          <div className="border-b py-[20px] space-y-4">
            <p className="text-black/60 font-[family-name:var(--satoshi-)]">
              Couleurs Disponibles
            </p>

            <div className="w-fit flex items-center gap-3">
              {singleProduct.color?.map((color) => (
                <Checkbox
                  key={Math.random() * 5000}
                  style={{ backgroundColor: `${color}` }}
                  className="h-7 w-7 rounded-full border border-gray-400 "
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="py-[20px] space-y-4 border-b">
            <p className="text-black/60 font-[family-name:var(--satoshi-)]">
              Choix de Tailles
            </p>
            <div className="w-fit flex items-center flex-wrap gap-3">
              <Tailles text="Small" />
              <Tailles text="Medium" />
              <Tailles text="Large" />
            </div>
          </div>
          {/* Button add cart */}
          <div className="w-full flex items-center gap-3 pt-6">
            <QuantityCart product={singleProduct} />
            {/* ajouter au panier */}
            <AjouterAuPanier product={singleProduct} />
          </div>
        </div>
      </div>
      <Reviews product={singleProduct} />

      {/* Vous aimerez aussi */}
      <div className="flex flex-col items-center justify-center my-20">
        {/* <h2 className=" text-center md:text-left text-4xl md:text-5xl font-[family-name:var(--integralcf-)]">
          Vous aimerez aussi
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-5 w-full my-12">
          {relatedProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
