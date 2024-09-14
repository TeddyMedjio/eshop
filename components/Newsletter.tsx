import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Newsletter() {
  return (
    <div className="mx-auto container px-4 absolute -top-28">
      <div className="bg-black w-full py-8 md:py-16 rounded-xl flex flex-col items-center justify-center lg:flex-row  gap-10 px-4 md:px-10">
        <h2 className="font-[family-name:var(--integralcf-)] text-white text-4xl md:text-5xl max-w-[651px] text-center lg:text-left">
          Inscrivez vous a notre newsletter
        </h2>
        <div className="space-y-4 flex-auto">
          <div className="relative w-full ">
            <EnvelopeIcon className=" text-black/50 size-5 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              size={40}
              className=" w-full py-3 pl-12 rounded-full outline-none"
            />
          </div>
          <button className="py-3 bg-white w-full rounded-full duration-300 hover:bg-[#adadad]">
            Souscrire
          </button>
        </div>
      </div>
    </div>
  );
}
