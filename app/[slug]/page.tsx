import { BreadcrumbCustom } from "@/components/Breadcrumb";
import { Tailles } from "@/components/Tailles";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const images = [
  { id: "1", url: "/images/slide1.png" },
  { id: "2", url: "/images/slide2.png" },
  { id: "3", url: "/images/slide3.png" },
];
export default function page() {
  return (
    <div className="mx-auto container px-4 md:px-0">
      <BreadcrumbCustom />
      <div className=" flex flex-col items-center justify-center lg:flex-row lg:items-start md:justify-start gap-8  mt-5 mb-20 pb-40">
        {/* images */}
        <div className="flex flex-col-reverse md:flex-row items-end gap-2 h-[530px]">
          <div className="flex md:flex-col h-full justify-between ">
            {images.map((image) => (
              <div key={image.id}>
                <Image
                  src={image.url}
                  width={152}
                  height={167}
                  alt="image"
                  className="rounded-[10px]"
                />
              </div>
            ))}
          </div>
          <div>
            <Image
              src="/images/slide1.png"
              width={444}
              height={530}
              alt="image"
              className="rounded-[20px]"
            />
          </div>
        </div>

        {/* infos produit */}
        <div className="flex-1">
          <h2 className="font-[family-name:var(--integralcf-)] text-[40px]">
            one life graphic tshirt
          </h2>
          {/* NOTASION */}
          <div className="flex items-center gap-4 mt-3">
            <Image
              src="/images/starts.svg"
              alt="image"
              width={104}
              height={18}
            />
            <p className="text-black font-[family-name:var(--satoshi-)] ">
              4.5/5
            </p>
          </div>
          {/* PRIX et DESCRIPTION */}
          <div className="border-b flex flex-col py-[20px] gap-4">
            <div className="flex items-center gap-2">
              <p className="text-black font-[family-name:var(--satoshibold-)] text-3xl">
                $240
              </p>
              <p className="text-black/30  font-[family-name:var(--satoshibold-)] text-3xl line-through">
                $260
              </p>
              <p className="font-[family-name:var(--satoshi-)] text-sm bg-red-50 border border-red-100 py-1 px-2 rounded-full text-red-500">
                -40%
              </p>
            </div>

            <p className="text-black/60 font-[family-name:var(--satoshi-)]">
              Ce t-shirt graphique parfait pour toutes les occasions. Fabriqué à
              partir d'un tissu doux et respirant, il offre un confort et un
              style supérieurs.
            </p>
          </div>

          {/* COLORS */}
          <div className="border-b py-[20px] space-y-4">
            <p className="text-black/60 font-[family-name:var(--satoshi-)]">
              Choix de couleurs
            </p>
            <div className="w-fit flex items-center gap-3">
              <div className="bg-[#4F4631] flex items-center justify-center h-9 w-9 rounded-full">
                <CheckIcon className="text-white size-6" />
              </div>
              <div className="bg-[#314F4A] flex items-center justify-center h-9 w-9 rounded-full"></div>
              <div className="bg-[#31344F] flex items-center justify-center h-9 w-9 rounded-full"></div>
            </div>
          </div>

          {/* SIZE */}
          <div className="border-b py-[20px] space-y-4">
            <p className="text-black/60 font-[family-name:var(--satoshi-)]">
              Choix de Tailles
            </p>
            <div className="w-fit flex items-center gap-3">
              <Tailles text="Small" />
              <Tailles text="Medium" />
              <Tailles text="Large" />
              <Tailles text="X-Large" />
            </div>
          </div>
          {/* Button add cart */}
          <div className="w-full flex items-center">
            <button className="bg-black font-[family-name:var(--satoshibold-)] text-white w-full py-4 rounded-full">
              Ajouter au Panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
