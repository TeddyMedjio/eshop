import { Tailles } from "./Tailles";
import Image from "next/image";

interface DetailProps {
  image: string;
  name: string;
  price: number;
  description: string;
  rating?: number;
}

export default function DetailsProduct({
  image,
  name,
  price,
  description,
}: // color,
DetailProps) {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 mb-20 ">
      {/* images */}
      <div className=" col-span-1 relative rounded-[20px] overflow-hidden width={344px} h-[530px] ">
        <Image
          src={image}
          fill={true}
          alt="image"
          draggable={false}
          className="absolute object-cover object-center"
        />
      </div>

      {/* infos produit */}
      <div className="col-span-1 ">
        <h2 className="font-[family-name:var(--integralcf-)] text-4xl lg:text-[40px]">
          {name}
        </h2>
        {/* NOTASION */}
        <div className="flex items-center gap-4 mt-3">
          <Image src="/images/starts.svg" alt="image" width={104} height={18} />
          <p className="text-black font-[family-name:var(--satoshi-)] ">5/5</p>
        </div>
        {/* PRIX et DESCRIPTION */}
        <div className="border-b flex flex-col py-[20px] gap-4">
          <div className="flex items-center gap-2">
            <p className="text-black font-[family-name:var(--satoshibold-)] text-3xl">
              {`$${price}`}
            </p>

            <p className="font-[family-name:var(--satoshi-)] text-sm bg-red-50 border border-red-100 py-1 px-2 rounded-full text-red-500">
              -40%
            </p>
          </div>

          <p className="text-black/60 font-[family-name:var(--satoshi-)]">
            {description}
          </p>
        </div>

        {/* COLORS */}
        {/* <div className="border-b py-[20px] space-y-4">
          <p className="text-black/60 font-[family-name:var(--satoshi-)]">
            Couleurs Disponibles
          </p>

          <div className="w-fit flex items-center gap-3">
            <div
              style={{ backgroundColor: `${color}` }}
              className={` h-7 w-7 rounded-full border border-gray-400`}
            ></div>
          </div>
        </div> */}

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
          <div className="max-w-[200px] flex-1 flex items-center justify-around bg-gris font-[family-name:var(--satoshibold-)] text-white w-full py-3 rounded-full">
            <p className="text-black font-[family-name:var(--satoshi-)]">-</p>
            <p className="text-black font-[family-name:var(--satoshi-)]">1</p>
            <p className="text-black font-[family-name:var(--satoshi-)]">+</p>
          </div>
          <button className="bg-black font-[family-name:var(--satoshi-)] text-white flex-auto py-3 rounded-full">
            Ajouter au Panier
          </button>
        </div>
      </div>
    </div>
  );
}
