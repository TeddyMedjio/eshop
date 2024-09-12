"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

export default function Navinfo() {
  const [hidden, setHidden] = useState(true);
  const handle = () => {
    setHidden(!hidden);
  };
  return (
    <>
      {hidden && (
        <div className="bg-black h-[38px] w-full flex items-center justify-center">
          <div className="relative text-center mx-auto container">
            <p className="font-[family-name:var(--satoshi-)] text-white text-sm ">
              Inscrivez-vous et bénéficiez de 20% de réduction.{" "}
              <span className="underline font-semibold animate-pulse hidden md:block">
                <Link href="#">Inscrivez-vous Maintenant</Link>
              </span>
            </p>
            <span
              onClick={handle}
              className="hidden md:block cursor-pointer absolute top-0 -translate-x-1/2 right-6 lg:right-5"
            >
              <XMarkIcon className="size-5 text-white" />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
