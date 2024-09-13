import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function TopSelling() {
  return (
    <div className="mx-auto container px-4 md:px-0 my-20 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-4xl md:text-5xl font-[family-name:var(--integralcf-)]">
          Meilleures Ventes
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-5 w-full my-12">
          {/* product */}
          <div>
            <Link href="#" className=" space-y-2">
              <div className="relative group w-[295px] h-[298px] rounded-lg overflow-hidden">
                <span className="absolute h-full w-full transition-all duration-300 group-hover:bg-black/50 z-20 rounded-lg">
                  <PlusIcon className="size-14 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" />
                </span>
                <Image
                  src="/images/vertical.png"
                  alt="image"
                  fill={true}
                  className="absolute object-cover object-center"
                />
              </div>
              <p className="text-black font-[family-name:var(--satoshibold-)]">
                Vertical Striped Shirt
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/starts.svg"
                  alt="image"
                  width={104}
                  height={18}
                />
                <p className="text-black font-[family-name:var(--satoshi-)]">
                  4.5/5
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-black font-[family-name:var(--satoshibold-)] text-2xl">
                  $212
                </p>
                <p className="text-black/30  font-[family-name:var(--satoshibold-)] text-2xl line-through">
                  $232
                </p>
                <p className="font-[family-name:var(--satoshi-)] text-sm bg-red-50 border border-red-100 py-1 px-2 rounded-full text-red-500">
                  -20%
                </p>
              </div>
            </Link>
          </div>
          {/* product */}
          <div className="space-y-2">
            <Link href="#" className=" space-y-2">
              <div className="relative group w-[295px] h-[298px] rounded-lg overflow-hidden">
                <span className="absolute h-full w-full transition-all duration-300 group-hover:bg-black/50 z-20 rounded-lg">
                  <PlusIcon className="size-14 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" />
                </span>

                <Image
                  src="/images/courage.png"
                  alt="image"
                  fill={true}
                  className="absolute object-cover object-center"
                />
              </div>
              <p className="text-black font-[family-name:var(--satoshibold-)]">
                Courage Graphic T-shirt
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/starts.svg"
                  alt="image"
                  width={104}
                  height={18}
                />
                <p className="text-black font-[family-name:var(--satoshi-)]">
                  3.5/5
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-black font-[family-name:var(--satoshibold-)] text-2xl">
                  $145
                </p>
              </div>
            </Link>
          </div>
          {/* product */}
          <div className="space-y-2">
            <Link href="#" className=" space-y-2">
              <div className="relative group w-[295px] h-[298px] rounded-lg overflow-hidden">
                <span className="absolute h-full w-full transition-all duration-300 group-hover:bg-black/50 z-20 rounded-lg">
                  <PlusIcon className="size-14 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" />
                </span>
                <Image
                  src="/images/loose.png"
                  alt="image"
                  fill={true}
                  className="absolute object-cover object-center"
                />
              </div>
              <p className="text-black font-[family-name:var(--satoshibold-)]">
                Loose Fit Bermuda Short
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/starts.svg"
                  alt="image"
                  width={104}
                  height={18}
                />
                <p className="text-black font-[family-name:var(--satoshi-)]">
                  4.5/5
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-black font-[family-name:var(--satoshibold-)] text-2xl">
                  $80
                </p>
              </div>
            </Link>
          </div>
          {/* product */}
          <div className="space-y-2">
            <Link href="#" className=" space-y-2">
              <div className="relative group w-[295px] h-[298px] rounded-lg overflow-hidden">
                <span className="absolute h-full w-full transition-all duration-300 group-hover:bg-black/50 z-20 rounded-lg">
                  <PlusIcon className="size-14 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" />
                </span>
                <Image
                  src="/images/faded.png"
                  alt="image"
                  fill={true}
                  className="absolute object-cover object-center"
                />
              </div>
              <p className="text-black font-[family-name:var(--satoshibold-)]">
                Faded Skinny Jeans
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/starts.svg"
                  alt="image"
                  width={104}
                  height={18}
                />
                <p className="text-black font-[family-name:var(--satoshi-)]">
                  4.5/5
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-black font-[family-name:var(--satoshibold-)] text-2xl">
                  $210
                </p>
              </div>
            </Link>
          </div>
        </div>

        <Link href="/meilleures-ventes">
          <Button variant="outline" size="default">
            Voir plus
          </Button>
        </Link>
        <button className="button">Voir plus</button>
      </div>
    </div>
  );
}
