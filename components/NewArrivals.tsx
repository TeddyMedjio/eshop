import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function NewArrivals() {
  return (
    <div className="mx-auto container px-4 my-20 border-b pb-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-4xl md:text-5xl font-[family-name:var(--integralcf-)]">
          Nouveautes
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
                  src="/images/tshirt.png"
                  alt="image"
                  fill={true}
                  className="absolute object-cover object-center"
                />
              </div>
              <p className="text-black font-[family-name:var(--satoshibold-)]">
                T-shirt with Tape Details
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
              <p className="text-black font-[family-name:var(--satoshibold-)] text-2xl">
                $240
              </p>
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
                  src="/images/jeans.png"
                  alt="image"
                  fill={true}
                  className="absolute object-cover object-center"
                />
              </div>
              <p className="text-black font-[family-name:var(--satoshibold-)]">
                Skinny Fit Jeans
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
                  $240
                </p>
                <p className="text-black/30  font-[family-name:var(--satoshibold-)] text-2xl line-through">
                  $260
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
                  src="/images/shirt.png"
                  alt="image"
                  fill={true}
                  className="absolute object-cover object-center"
                />
              </div>
              <p className="text-black font-[family-name:var(--satoshibold-)]">
                Checkered Shirt
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
              <p className="text-black font-[family-name:var(--satoshibold-)] text-2xl">
                $350
              </p>
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
                  src="/images/stripeed.png"
                  alt="image"
                  fill={true}
                  className="absolute object-cover object-center"
                />
              </div>
              <p className="text-black font-[family-name:var(--satoshibold-)]">
                Sleeve Stripeed T-shirt
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
                  $130
                </p>
                <p className="text-black/30  font-[family-name:var(--satoshibold-)] text-2xl line-through">
                  $160
                </p>
                <p className="font-[family-name:var(--satoshi-)] text-sm bg-red-50 border border-red-100 py-1 px-2 rounded-full text-red-500">
                  -20%
                </p>
              </div>
            </Link>
          </div>
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
