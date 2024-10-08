import { Product } from "@/lib/models/ProductModels";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};
export default function AlsoLike({ product }: Props) {
  // permet de convertir les votes du nombre decimal au nombre entier
  const num = Math.round(product.rate);
  //   permet de creer un tableau content des nombres entiers venu du haut
  const starRating = new Array(num).fill(0);
  return (
    <div className="mx-auto container px-4 md:px-0 my-20 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-center md:text-left text-4xl md:text-5xl font-[family-name:var(--integralcf-)]">
          Vous aimerez aussi
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-5 w-full my-12">
          {/* product */}
          <div className="space-y-2">
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
            <div className="w-fit flex items-center gap-2">
              {product.color?.map((color) => (
                <div
                  style={{ backgroundColor: `${color}` }}
                  className={` h-5 w-5 rounded-full border border-gray-400`}
                ></div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <p className="text-black font-[family-name:var(--satoshibold-)] text-2xl">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-black/30 font-[family-name:var(--satoshibold-)] text-2xl line-through">
                {`$${(product.price + 10).toFixed(2)}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
