import Image from "next/image";

export default function ProductNotFound() {
  return (
    <div className="px-5 md:px-20 lg:mx-10 space-y-5 max-w-[1440px] xl:mx-auto flex flex-col items-center justify-center text-center mb-40 mt-10">
      <Image
        src="/images/notfound.svg"
        height={240}
        width={200}
        alt="icon"
        className="text-gray-400"
      />
      <div className="py-5 space-y-3">
        <p className="  text-gray-400 text-3xl md:text-5xl font-semibold">
          Aucun produits trouvés
        </p>
        <p className=" capitalize text-gray-400 text-xl md:text-2xl">
          Votre recherche ne correspond à aucun produits.
        </p>
        <p className=" capitalize text-gray-400 text-xl md:text-2xl">
          S'il vous plait Réessayer.
        </p>
      </div>
    </div>
  );
}
