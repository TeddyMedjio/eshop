"use client";

import { addItem, CartItem, removeItem } from "@/app/store/cartSlice";
import { RootState } from "@/app/store/store";
import { Product } from "@/lib/models/ProductModels";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function QuantityCart({ product }: { product: Product }) {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const dispatch = useDispatch();

  const addCartHandler = (product: Product) => dispatch(addItem(product));
  const removeCartHandler = (id: number) => dispatch(removeItem({ id }));
  return (
    <div className="max-w-[200px] flex-1 flex items-center justify-around bg-gris font-[family-name:var(--satoshibold-)] text-white w-full py-3 rounded-full">
      <button
        onClick={() => removeCartHandler(product.id)}
        className="text-black font-[family-name:var(--satoshi-)]"
      >
        -
      </button>
      <p className="text-black font-[family-name:var(--satoshi-)]">
        {totalQuantity}
      </p>
      <button
        onClick={() => addCartHandler(product)}
        className="text-black font-[family-name:var(--satoshi-)]"
      >
        +
      </button>
    </div>
  );
}
