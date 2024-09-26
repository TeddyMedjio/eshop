import Image from "next/image";
import Link from "next/link";
import { Collection } from "@/lib/models/ProductModels";
import { getCollections } from "@/api/requests";

export default async function Category() {
  const collections: Collection[] = await getCollections();
  return (
    <div className="md:mx-auto md:container px-4 my-20 ">
      <div className="flex flex-col items-center justify-center bg-gris rounded-3xl py-10 lg:py-20 px-8 lg:px-20">
        <h2 className="text-center lg:text-left text-[40px] md:text-5xl font-[family-name:var(--integralcf-)] mb-10">
          Nos Collections
        </h2>
        <div className=" cursor-pointer w-full h-[520px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-6 ">
          {collections.map((item: Collection) => (
            <Link
              href={`/collections/${item.collection_id}`}
              key={item.name}
              className="group overflow-hidden relative row-span-2 md:odd:row-span-1 border rounded-lg"
            >
              <Image
                src={item.image_url}
                width={500}
                height={500}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="z-50 absolute bottom-3 left-3 ">
                <p className="text-gray-100 text-sm mb-1 lg:-translate-x-28 lg:group-hover:translate-x-0 lg:transition-all duration-400 font-[family-name:var(--satoshi-)]">
                  {item.name}
                </p>
                <h3 className="text-gray-50 text-xl font-[family-name:var(--satoshibold-)]">
                  {item.description}
                </h3>
              </div>
              <div className="absolute w-full top-0 bg-black h-full p-4 opacity-40 group-hover:opacity-50 transition-all duration-300 "></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
