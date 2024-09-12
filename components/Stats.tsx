"use client";

import React from "react";
import { Separator } from "./ui/separator";
import { useCountUp } from "react-countup";

// compte numero aleatoire
const SimpleHook = () => {
  useCountUp({ ref: "counter", end: 2000 });
  return <span id="counter" />;
};
const Simple = () => {
  useCountUp({ ref: "count", end: 200 });
  return <span id="count" />;
};
const SimpleH = () => {
  useCountUp({ ref: "counte", end: 30000 });
  return <span id="counte" />;
};

export default function Stats() {
  return (
    <div>
      <div className=" h-[60px] md:h-[76px] flex items-center flex-wrap justify-center w-full mb-2 md:pb-0 md:mt-10">
        {/* state un */}
        <div className=" md:-space-y-2">
          <p className="font-[family-name:var(--satoshibold-)] text-[24px] md:text-[40px]">
            +<Simple />
          </p>
          <p className="font-[family-name:var(--satoshi-)] text-xs md:text-base text-[#00000060]">
            Brands Authentiques
          </p>
        </div>
        <Separator orientation="vertical" className="mx-6" />
        {/* state deux */}
        <div className=" md:-space-y-2">
          <p className="font-[family-name:var(--satoshibold-)] text-[24px] md:text-[40px]">
            +<SimpleHook />
          </p>
          <p className="font-[family-name:var(--satoshi-)] text-xs md:text-base text-[#00000060]">
            Produits de Qualités
          </p>
        </div>
        <Separator orientation="vertical" className="mx-6 hidden md:block" />
        {/* state trois */}
        <div className=" md:-space-y-2">
          <p className="font-[family-name:var(--satoshibold-)] text-[24px] md:text-[40px]">
            +<SimpleH />
          </p>
          <p className="font-[family-name:var(--satoshi-)] text-xs md:text-base text-[#00000060]">
            Clients Satisfaits
          </p>
        </div>
      </div>
    </div>
  );
}
