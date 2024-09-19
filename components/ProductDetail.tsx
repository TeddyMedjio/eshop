import { PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

interface PropDetail {
  url: string;
  link?: string;
  title: string;
  price: string;
  sold?: string | "";
  reduction?: string | "";
  color?: string;
}

export default function ProductDetail({
  url,
  title,
  price,
  sold,
  link,
}: PropDetail) {
  return (
    <div className="space-y-2">
      <Link href={`/${link}`} className="bg-red-400 z-40">
        <div className="relative w-[295px] h-[298px] rounded-lg overflow-hidden">
          <PlusIcon className="size-4 text-black transition-all duration-300 absolute left-1/2 top-/1/2 bottom-4 transform -translate-x-1/2 -translate-y-1/2 bg-white/50 rounded-full z-50" />
          <Image
            src={url}
            alt="image"
            fill={true}
            className="absolute object-cover object-center"
          />
        </div>
      </Link>
      <p className="text-black font-[family-name:var(--satoshibold-)] text-xl">
        {title}
      </p>
      <div className="flex items-center gap-4">
        <Image src="/images/starts.svg" alt="image" width={104} height={18} />
        <p className="text-black font-[family-name:var(--satoshi-)]">3.5/5</p>
      </div>

      {/* <div
        style={{ backgroundColor: `${color}` }}
        className={` h-6 w-6 rounded-full border border-gray-400`}
      ></div> */}

      <div className="flex items-center gap-2">
        <p className="text-black font-[family-name:var(--satoshibold-)] text-2xl">
          {price}
        </p>
        <p className="text-black/30  font-[family-name:var(--satoshibold-)] text-2xl line-through">
          {sold}
        </p>
        {/* {isActif && (
          <p className="font-[family-name:var(--satoshi-)] text-sm bg-red-50 border border-red-100 py-1 px-2 rounded-full text-red-500">
            {`${reduction}`}
          </p>
        )} */}
      </div>
    </div>
  );
}
