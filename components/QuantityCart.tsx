"use client";

import { addItem, removeItem } from "@/app/store/cartSlice";
import { RootState } from "@/app/store/store";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/lib/models/ProductModels";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function QuantityCart({ product }: { product: Product }) {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addToCarHandler = (product: Product) => {
    toast({
      description: "Article ajouter dans le panier",
      variant: "success",
    });
    dispatch(addItem(product));
  };
  const removeCartHandler = (id: number) => {
    toast({
      description: "Article supprimer du panier",
      variant: "danger",
    });
    dispatch(removeItem({ id }));
  };
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
        onClick={() => addToCarHandler(product)}
        className="text-black font-[family-name:var(--satoshi-)]"
      >
        +
      </button>
    </div>
  );
}
