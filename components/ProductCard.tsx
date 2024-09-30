"use client";

import { Product } from "@/lib/models/ProductModels";
import { PlusIcon } from "@heroicons/react/24/solid";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/store/cartSlice";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useToast } from "@/hooks/use-toast";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  // permet de convertir les votes du nombre decimal au nombre entier
  const num = Math.round(product.rate);
  //   permet de creer un tableau content des nombres entiers venu du haut
  const starRating = new Array(num).fill(0);

  const dispatch = useDispatch();
  const { toast } = useToast();

  const addToCarHandler = (product: Product) => {
    toast({
      description: "Article ajouter au panier",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  return (
    <div className="relative space-y-2">
      <button
        onClick={() => {
          addToCarHandler(product);
        }}
        className=" absolute  top-0 right-0 bg-white w-10 h-10 z-50 flex items-center gap-1"
      >
        <ShoppingCartIcon className=" size-5 ml-2" />+
      </button>
      <Link
        href={`/product/product-details/${product.id}`}
        className="bg-red-400 z-40"
      >
        <div className="relative w-[360px] md:w-[295px] h-[298px] rounded-lg overflow-hidden">
          <PlusIcon className="size-4 text-black transition-all duration-300 absolute left-1/2 top-/1/2 bottom-4 transform -translate-x-1/2 -translate-y-1/2 bg-white/50 rounded-full z-50" />
          <Image
            src={product.image_url}
            alt="image"
            fill={true}
            className="absolute object-cover object-center hover:scale-110 duration-300"
          />
        </div>
      </Link>
      <p className="text-black font-[family-name:var(--satoshibold-)] text-xl">
        {product.name}
      </p>
      {/* rating and count */}
      <div className="flex items-center gap-2">
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
      {/* colors */}
      <div className=" flex items-center justify-between ">
        <div className="flex items-center gap-2">
          {product.color?.map((color) => (
            <div
              key={Math.random() * 2000}
              style={{ backgroundColor: `${color}` }}
              className={` h-5 w-5 rounded-full border border-gray-400`}
            ></div>
          ))}
        </div>
        <div className=""></div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-black font-[family-name:var(--satoshibold-)] text-2xl">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-black/30 font-[family-name:var(--satoshibold-)] text-2xl line-through">
          {`$${(product.price + 10).toFixed(2)}`}
        </p>
      </div>

      {/* <AjouterAuPanier product={product} /> */}
    </div>
  );
}
