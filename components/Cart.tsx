import { TagIcon } from "@heroicons/react/24/outline";
import PanierProduct from "./PanierProduct";

const articles = [
  {
    id: "1",
    url: "/images/slide1.png",
    title: "Gradient Graphic Tshirt",
    size: "Large",
    couleur: "blanche",
    prix: 145,
  },
  {
    id: "2",
    url: "/images/slide2.png",
    title: "Checkered shirt",
    size: "Medium",
    couleur: "red",
    prix: 180,
  },
  {
    id: "3",
    url: "/images/slide3.png",
    title: "Skinny Fit Jeans",
    size: "Large",
    couleur: "Bleu",
    prix: 240,
  },
];

export default function Cart() {
  return (
    <div className="mt-10">
      <h2 className=" text-center md:text-left text-[40px] md:text-5xl font-[family-name:var(--integralcf-)] leading-10 md:leading-none">
        votre panier
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mt-10 ">
        {/* Articles */}
        <div className="border border-black/10 px-4 rounded-lg flex-1">
          {articles.map((article) => (
            <div key={article.id} className="border-b pb-4 last:border-0">
              <PanierProduct
                image={article.url}
                title={article.title}
                size={article.size}
                couleur={article.couleur}
                prix={article.prix}
              />
            </div>
          ))}
        </div>

        {/* Votre commande */}
        <div className="border border-black/10 p-4 rounded-lg flex-1">
          <p className="font-[family-name:var(--satoshibold-)] text-xl">
            Votre Commande
          </p>
          {/* calcule facture */}
          <div className=" mt-5 space-y-2 border-b border-b-black-10 pb-5">
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/40 text-xl">
                Total Article
              </p>
              <p className="font-[family-name:var(--satoshibold-)] text-black text-xl">
                $565
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/40 text-xl">
                Reduction <span className="text-black">(-20%)</span>
              </p>
              <p className="font-[family-name:var(--satoshibold-)] text-red-500 text-xl">
                -$113
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/40 text-xl">
                Livraison
              </p>
              <p className="font-[family-name:var(--satoshibold-)] text-black text-xl">
                $15
              </p>
            </div>
          </div>

          {/* Total */}
          <div className="my-5">
            <div className="flex items-center justify-between mb-5">
              <p className="font-[family-name:var(--satoshi-)] text-black text-xl">
                Total
              </p>
              <p className="font-[family-name:var(--satoshibold-)] text-black text-2xl">
                $467
              </p>
            </div>
            {/* code promo et checkout */}
            <div className="w-full space-y-4">
              <div className="flex items-center gap-4">
                {/* barre de recherche */}
                <div className="flex-auto relative">
                  <input
                    type="search"
                    name="search"
                    placeholder="Code promo"
                    className=" bg-gris pl-10 py-4 rounded-full w-full placeholder-black/50 outline-none"
                  />
                  <TagIcon className="size-6 text-black/50 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-5" />
                </div>
                <button className="bg-black font-[family-name:var(--satoshi-)] text-white py-4 rounded-full w-[150px]">
                  Appliquer
                </button>
              </div>
              {/* checkout button */}
              <button className="bg-black font-[family-name:var(--satoshi-)] text-white w-full py-4 rounded-full">
                Commander
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
