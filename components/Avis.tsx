"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import { ComboBox } from "./Combobox";
import { Review } from "@/lib/models/ProductModels";
import { getReviews } from "@/Request/requests";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

export default function Avis() {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const reviews: Review[] = await getReviews();
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  //   permet de creer un tableau content des nombres entiers venu du haut

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
      {loading ? (
        <div className="flex justify-center items-center my-16">
          {" "}
          <Loader size={32} className="animate-spin" />{" "}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews?.slice(0, 8).map((review) => (
            <div
              key={Math.random() * 2000}
              className="pl-1 col-span-1 border rounded-xl"
            >
              <div className="p-1">
                <div className="space-y-2 py-6 px-7 ">
                  {/* rating and count */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {/* {review.map((star) => (
                        <StarFilledIcon
                          key={Math.random() * 1000}
                          fill="yellow"
                          className="text-yellow-400 size-5"
                        />
                      ))} */}
                    </div>
                    <p className="font-[family-name:var(--satoshi-)]">{`${review.rate}/5`}</p>
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
      )}
    </div>
  );
}
