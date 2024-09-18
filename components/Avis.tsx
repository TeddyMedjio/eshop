import { CheckIcon } from "@heroicons/react/24/outline";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { ComboBox } from "./Combobox";

const users = [
  {
    id: 1,
    name: "Sarah M.",
    testimonial:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    url: "/images/fullstart.svg",
  },
  {
    id: 2,
    name: "Alex K.",
    testimonial:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    url: "/images/fullstart.svg",
  },
  {
    id: 3,
    name: "James L.",
    testimonial:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon EShop. The selection of clothes is not only diverse but also on-point with the latest trends.",
    url: "/images/fullstart.svg",
  },
  {
    id: 4,
    name: "Moundi C.",
    testimonial:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    url: "/images/fullstart.svg",
  },
  {
    id: 5,
    name: "Sarah M.",
    testimonial:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    url: "/images/fullstart.svg",
  },
  {
    id: 6,
    name: "Alex K.",
    testimonial:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    url: "/images/fullstart.svg",
  },
  {
    id: 7,
    name: "James L.",
    testimonial:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon EShop. The selection of clothes is not only diverse but also on-point with the latest trends.",
    url: "/images/fullstart.svg",
  },
  {
    id: 8,
    name: "Moundi C.",
    testimonial:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    url: "/images/fullstart.svg",
  },
];

export default function Avis() {
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
          <button className="grid items-center p-4 bg-gris rounded-full">
            <AdjustmentsVerticalIcon className="size-6" />
          </button>
          <ComboBox />
          <button className="bg-black font-[family-name:var(--satoshi-)] text-white px-8 py-4 rounded-full text-xs md:text-base">
            Rediger
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3 border rounded-xl"
          >
            <div className="p-1">
              <div className=" space-y-4 p-6">
                <Image src={user.url} alt="etoiles" width={104} height={18} />
                <div className="flex items-center gap-2">
                  <p className="text-xl font-[family-name:var(--satoshibold-)]">
                    {user.name}{" "}
                  </p>
                  <div className="bg-[#01AB31] p-[3px] rounded-full">
                    <CheckIcon className="text-white size-3" />
                  </div>
                </div>
                <p className=" text-sm md:text-base text-black/50 font-[family-name:var(--satoshi-)]">
                  &quot; {user.testimonial} &quot;
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
