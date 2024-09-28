"use client";

import { BreadcrumbCart } from "@/components/BreadcrumbCart";
import Cart from "@/components/Cart";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function page() {
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="mx-auto container px-4 pb-20 mt-5 mb-20 ">
      <BreadcrumbCart />
      <Cart items={items} />
    </div>
  );
}
