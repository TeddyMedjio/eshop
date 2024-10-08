import { getCollections, getProducts } from "@/Request/requests";
import { Accordeon } from "@/components/Accordeon";
import { BreadcrumbCollection } from "@/components/BreadcrumCollection";
import { FiltreMobile } from "@/components/FiltreMobile";
import ProductCard from "@/components/ProductCard";
import ProductNotFound from "@/components/ProductNotFound";
import { Tailles } from "@/components/Tailles";
import { Progress } from "@/components/ui/progress";
import { Collection, Product } from "@/lib/models/ProductModels";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default async function ProductCollection({
  params,
}: {
  params: { slug: string };
}) {
  const collections: Collection[] = await getCollections();
  const collection = collections.find((x) => x.collection === params.slug);
  if (!collection) {
    return <ProductNotFound />;
  }

  const products: Product[] = await getProducts();
  const product = products.filter((product) =>
    collection.collection.includes(product.collection)
  );

  return (
    <div className="mx-auto container px-4 pb-20 mt-5 mb-20">
      {product.slice(0, 1).map((product) => (
        <BreadcrumbCollection
          key={product.collection}
          product={product.collection}
        />
      ))}
      <div className="flex items-start gap-5 mt-10">
        {/* barre de recherche */}
        <div className="hidden p-4 lg:block w-full md:w-[200px] lg:w-[390px] border border-black/10 rounded-lg">
          {/* Filtres */}
          <div className="flex items-center justify-between border-b border-b-black/10 pb-5">
            <h3 className="font-[family-name:var(--satoshibold-)] text-xl">
              Filtres
            </h3>
            <button>
              <AdjustmentsVerticalIcon className="size-6 text-black/40" />
            </button>
          </div>

          {/* tshirts, shorts... */}
          <div className="border-b border-b-black/10 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/60">
                All
              </p>
              <ChevronRightIcon className="text-black/60 size-4" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/60">
                Urban
              </p>
              <ChevronRightIcon className="text-black/60 size-4" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/60">
                Cozy
              </p>
              <ChevronRightIcon className="text-black/60 size-4" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/60">
                Fresh
              </p>
              <ChevronRightIcon className="text-black/60 size-4" />
            </div>
          </div>

          {/* Price */}
          <div className="border-b border-b-black/10 space-y-4">
            <Accordeon title="Price">
              <Progress value={33} />
            </Accordeon>
          </div>

          {/* Couleurs */}
          <div className="border-b border-b-black/10 space-y-4">
            <Accordeon title="Couleurs">
              <div className="flex items-center flex-wrap gap-4">
                <div className="h-9 w-9 bg-green-500 border border-green-800 rounded-full"></div>
                <div className="h-9 w-9 bg-red-500 border border-red-800 rounded-full"></div>
                <div className="h-9 w-9 bg-yellow-400 border border-yellow-800 rounded-full"></div>
                <div className="h-9 w-9 bg-orange-500 border border-orange-800 rounded-full"></div>
                <div className="h-9 w-9 bg-blue-500 border border-blue-800 rounded-full"></div>
                <div className="h-9 w-9 bg-purple-500 border border-purple-800 rounded-full"></div>
                <div className="h-9 w-9 bg-pink-500 border border-pink-800 rounded-full"></div>
                <div className="h-9 w-9 bg-white border border-gray-400 rounded-full"></div>
                <div className="h-9 w-9 bg-sky-500 border border-sky-800 rounded-full"></div>
                <div className="h-9 w-9 bg-black border border-black rounded-full"></div>
              </div>
            </Accordeon>
          </div>

          {/* Taille */}
          <div className="border-b border-b-black/10 space-y-4">
            <Accordeon title="Tailles">
              <div className="flex items-center gap-4 flex-wrap">
                <Tailles size="sm" text="XX-Small" />
                <Tailles size="sm" text="Small" />
                <Tailles size="sm" text="X-Small" />
                <Tailles size="sm" text="Medium" />
                <Tailles size="sm" text="Large" />
                <Tailles size="sm" text="X-Large" />
                <Tailles size="sm" text="XX-Large" />
                <Tailles size="sm" text="3X-Large" />
              </div>
            </Accordeon>
          </div>

          {/* Styles */}
          <Accordeon title="Collections">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-base font-[family-name:var(--satoshi-)] text-black/60">
                  All
                </p>
                <ChevronRightIcon className="text-black/60 size-4" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-[family-name:var(--satoshi-)] text-black/60">
                  Urban
                </p>
                <ChevronRightIcon className="text-black/60 size-4" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-[family-name:var(--satoshi-)] text-black/60">
                  Cozy
                </p>
                <ChevronRightIcon className="text-black/60 size-4" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-[family-name:var(--satoshi-)] text-black/60">
                  Fresh
                </p>
                <ChevronRightIcon className="text-black/60 size-4" />
              </div>
            </div>
          </Accordeon>
        </div>

        {/* produits */}
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-[family-name:var(--satoshibold-)]">
              {collection.name}
            </h1>
            <div className="flex items-center gap-2">
              <p className="hidden md:block font-[family-name:var(--satoshi-)] text-black/40 md:text-sm lg:text-base">
                Montrer 1-6 de 50 Produits Trier par:
              </p>
              <span className="font-[family-name:var(--satoshibold-)] text-black">
                Plus Populaires
              </span>
              <FiltreMobile />
            </div>
          </div>

          {/* Collection de produits */}
          <div className="flex flex-col md:flex-row flex-wrap items-center gap-10 md:gap-5 mt-10">
            {product.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
