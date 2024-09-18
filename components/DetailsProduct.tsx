import { Tailles } from "./Tailles";
import Image from "next/image";

const images = [
  { id: "1", url: "/images/slide1.png" },
  { id: "2", url: "/images/slide2.png" },
  { id: "3", url: "/images/slide3.png" },
];

const colors = [
  { id: "1", url: "#4F4631" },
  { id: "2", url: "#314F4A" },
  { id: "3", url: "#31344F" },
];

export default function DetailsProduct() {
  return (
    <div className=" flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start gap-8 mt-5 mb-20 ">
      {/* images */}
      <div className="w-full lg:w-auto flex flex-col-reverse md:flex-row items-end justify-center gap-3 md:gap-4 md:h-[530px]">
        <div className="flex flex-row gap-3 md:gap-0 md:flex-col justify-between h-full">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative h-[106px] w-[111px]  md:h-[167px] md:w-[152px] "
            >
              <Image
                src={image.url}
                fill={true}
                alt="image"
                className="rounded-[10px] object-cover object-center "
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
      <div className="flex-1 ">
        <h2 className="font-[family-name:var(--integralcf-)] text-4xl md:text-[40px]">
          one life graphic tshirt
        </h2>
        {/* NOTASION */}
        <div className="flex items-center gap-4 mt-3">
          <Image src="/images/starts.svg" alt="image" width={104} height={18} />
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
            partir d'un tissu doux et respirant, il offre un confort et un style
            supérieurs.
          </p>
        </div>

        {/* COLORS */}
        <div className="border-b py-[20px] space-y-4">
          <p className="text-black/60 font-[family-name:var(--satoshi-)]">
            Choix de couleurs
          </p>

          <div className="w-fit flex items-center gap-3">
            {colors.map((item) => (
              <div
                key={item.id}
                className={`h-9 w-9 bg-[${item.url}] rounded-full cursor-pointer`}
              ></div>
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
            <Tailles text="X-Large" />
          </div>
        </div>
        {/* Button add cart */}
        <div className="w-full flex items-center gap-3 pt-6">
          <div className="max-w-[200px] flex-1 flex items-center justify-around bg-gris font-[family-name:var(--satoshibold-)] text-white w-full py-4 rounded-full">
            <p className="text-black font-[family-name:var(--satoshi-)]">-</p>
            <p className="text-black font-[family-name:var(--satoshi-)]">1</p>
            <p className="text-black font-[family-name:var(--satoshi-)]">+</p>
          </div>
          <button className="bg-black font-[family-name:var(--satoshi-)] text-white flex-auto py-4 rounded-full">
            Ajouter au Panier
          </button>
        </div>
      </div>
    </div>
  );
}
