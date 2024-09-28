"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function ShopingCart() {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <Link href="/cart" className="relative">
        <p className="absolute top-0 -right-5 bg-black w-6 h-6 text-white text-center flex items-center justify-center flex-col text-xs font-[family-name:var(--satoshi-)] rounded-full">
          {totalQuantity}
        </p>
        <ShoppingCartIcon className=" size-7 md:size-6 text-black" />
      </Link>
    </div>
  );
}
