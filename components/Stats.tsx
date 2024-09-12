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
      <div className=" h-[60px] w-full md:h-[76px] flex flex-col md:flex-row items-center justify-center md:justify-start mt-20  mb-2 md:pb-0 md:mt-10">
        {/* state un */}
        <div className=" md:-space-y-2 text-center md:text-left ">
          <p className="font-[family-name:var(--satoshibold-)] text-[34px] md:text-[40px]">
            +<Simple />
          </p>
          <p className="font-[family-name:var(--satoshi-)] text-xs md:text-base text-[#00000060]">
            Brands Authentiques
          </p>
        </div>
        <Separator orientation="horizontal" className="my-2 md:hidden" />
        <Separator orientation="vertical" className="mx-6 hidden md:block" />
        {/* state deux */}
        <div className=" md:-space-y-2 text-center md:text-left">
          <p className="font-[family-name:var(--satoshibold-)] text-[34px] md:text-[40px]">
            +<SimpleHook />
          </p>
          <p className="font-[family-name:var(--satoshi-)] text-xs md:text-base text-[#00000060]">
            Produits de Qualités
          </p>
        </div>
        <Separator orientation="horizontal" className="my-2 md:hidden" />
        <Separator orientation="vertical" className="mx-6 hidden md:block" />
        {/* state trois */}
        <div className=" md:-space-y-2 text-center md:text-left">
          <p className="font-[family-name:var(--satoshibold-)] text-[34px] md:text-[40px]">
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
