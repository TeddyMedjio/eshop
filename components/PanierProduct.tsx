import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface DetailsProps {
  image: string;
  title: string;
  size: string;
  couleur: string;
  prix: number;
}

export default function PanierProduct({
  image,
  title,
  size,
  couleur,
  prix,
}: DetailsProps) {
  return (
    <div className="flex items-center gap-5 w-full py-4">
      <div className="relative h-[99px] w-[99px]  md:h-[124px] md:w-[124px] ">
        <Image
          src={image}
          fill={true}
          alt="image"
          className="rounded-[10px] object-cover object-center "
        />
      </div>

      {/* infos produits */}
      <div className="space-y-1 w-full">
        <div className="flex items-center justify-between">
          <p className=" text-base md:text-xl font-[family-name:var(--satoshibold-)]">
            {title}
          </p>
          <button>
            <TrashIcon className="size-5 text-red-500" />
          </button>
        </div>
        <p className=" text-xs md:text-sm font-[family-name:var(--satoshi-)] text-black/40">
          Size: <span className="text-black">{size}</span>
        </p>
        <p className=" text-xs md:text-sm font-[family-name:var(--satoshi-)] text-black/40">
          Couleur: <span className="text-black">{couleur}</span>
        </p>
        {/* Prix total et ajouter nombre d'articles */}
        <div className="flex items-center justify-between pt-3">
          <p className=" text-xl md:text-2xl font-[family-name:var(--satoshibold-)] text-black">
            {`$${prix}`}
          </p>
          <div className="max-w-[100px] flex items-center justify-around bg-gris font-[family-name:var(--satoshibold-)] text-white w-full py-[4px] rounded-full">
            <p className="text-black font-[family-name:var(--satoshi-)]">-</p>
            <p className="text-black font-[family-name:var(--satoshi-)]">1</p>
            <p className="text-black font-[family-name:var(--satoshi-)]">+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
