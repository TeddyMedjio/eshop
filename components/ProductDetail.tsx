import { PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

interface PropDetail {
  url: string;
  title: string;
  price: string;
  sold?: string | "";
  reduction?: string | "";
  isActif: boolean;
}

export default function ProductDetail({
  url,
  title,
  price,
  sold,
  isActif,
  reduction,
}: PropDetail) {
  return (
    <div className="space-y-2">
      <Link href="#" className=" space-y-2">
        <div className="relative group w-[295px] h-[298px] rounded-lg overflow-hidden">
          <span className="absolute h-full w-full transition-all duration-300 group-hover:bg-black/50 z-20 rounded-lg">
            <PlusIcon className="size-14 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" />
          </span>

          <Image
            src={url}
            alt="image"
            fill={true}
            className="absolute object-cover object-center"
          />
        </div>
        <p className="text-black font-[family-name:var(--satoshibold-)]">
          {title}
        </p>
        <div className="flex items-center gap-4">
          <Image src="/images/starts.svg" alt="image" width={104} height={18} />
          <p className="text-black font-[family-name:var(--satoshi-)]">3.5/5</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-black font-[family-name:var(--satoshibold-)] text-2xl">
            {price}
          </p>
          <p className="text-black/30  font-[family-name:var(--satoshibold-)] text-2xl line-through">
            {sold}
          </p>
          {isActif && (
            <p className="font-[family-name:var(--satoshi-)] text-sm bg-red-50 border border-red-100 py-1 px-2 rounded-full text-red-500">
              {`${reduction}`}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
