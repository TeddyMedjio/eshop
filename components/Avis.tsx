import { CheckIcon } from "@heroicons/react/24/outline";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { ComboBox } from "./Combobox";
import { Review } from "@/lib/models/ProductModels";

async function getReviews() {
  const res = await fetch("https://ecommerce-data-tyi1.onrender.com/review");
  return res.json();
}

export default async function Avis() {
  const reviews: Review[] = await getReviews();

  return (
    <div>
      <div className="flex items-center justify-between w-full mb-10">
        <button className="font-[family-name:var(--satoshibold-)] text-xl md:text-2xl capitalize">
          Tous Les Avis{" "}
          <span className="font-[family-name:var(--satoshi-)] text-sm text-black/40">
            (451)
          </span>
        </button>

        <div className="flex items-center gap-3">
          <button className="grid items-center p-3 bg-gris rounded-full">
            <AdjustmentsVerticalIcon className="size-6" />
          </button>
          <ComboBox />
          <button className="bg-black font-[family-name:var(--satoshi-)] text-white px-8 py-3 rounded-full text-xs md:text-base">
            Rediger
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.slice(0, 8).map((review) => (
          <div
            key={review.product_id}
            className="pl-1 col-span-1 border rounded-xl"
          >
            <div className="p-1">
              <div className="space-y-2 py-6 px-7 ">
                <div className="flex items-center gap-2">
                  <Image
                    src={review.image_rating}
                    alt="etoiles"
                    width={118}
                    height={18}
                    className=""
                  />
                  <p>{review.rating}/5</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-[family-name:var(--satoshibold-)] capitalize">
                    {review.author}
                  </p>
                  <div className="bg-[#01AB31] p-[3px] rounded-full">
                    <CheckIcon className="text-white size-3" />
                  </div>
                </div>
                <p className=" text-sm md:text-base text-black/50 font-[family-name:var(--satoshi-)]">
                  &quot; {review.content} &quot;
                </p>
                <p className="pt-5 text-sm md:text-base text-black/70 font-[family-name:var(--satoshi-)]">
                  Posté le: {review.created_at}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
