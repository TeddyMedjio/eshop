import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="px-5 md:px-20 lg:mx-10 space-y-5 max-w-[1440px] xl:mx-auto flex flex-col items-center justify-center text-center mb-40 mt-10">
      <CheckCircle2 size={200} className="text-green-500" />
      <div className="py-5 space-y-3">
        <h1 className="  text-gray-500 text-3xl md:text-5xl font-semibold mb-4">
          Merci pour votre achat!
        </h1>
        <Link href="/" className="underline  text-gray-400 text-xl md:text-2xl">
          Retourner à l&apos;acceuil.
        </Link>
      </div>
    </div>
  );
}
