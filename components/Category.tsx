import Image from "next/image";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Collection } from "@/lib/models/ProductModels";

async function getCollections() {
  const res = await fetch("http://localhost:4000/collections");
  return res.json();
}

export default async function Category() {
  const collections: Collection[] = await getCollections();
  return (
    <div className="md:mx-auto md:container px-4 my-20 ">
      <div className="flex flex-col items-center justify-center bg-gris rounded-3xl py-10 lg:py-20 px-8 lg:px-20">
        <h2 className="text-center lg:text-left text-[40px] md:text-5xl font-[family-name:var(--integralcf-)]">
          Nos styles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 w-full mt-12">
          {collections.map((collection) => (
            <div
              key={collection.slug}
              className={`bg-white md:first-of-type:col-span-1 md:last-of-type:col-span-1 md:odd:col-span-2 md:even:col-span-2 h-[190px] lg:h-[289px] rounded-lg overflow-hidden relative`}
            >
              <Link href={`/${collection.slug}`} className="group">
                <span className="lg:absolute bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full h-full z-30">
                  <PlusIcon className="size-14 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" />
                </span>
                <p className=" absolute top-5 left-5 text-black font-[family-name:var(--satoshibold-)] text-3xl z-20">
                  {collection.name}
                </p>
                <Image
                  src={collection.image_url}
                  fill={true}
                  alt={`image ${collection.name}`}
                  className=" absolute left-7 object-cover object-right-top"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
