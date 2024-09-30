"use client";
import { addItem } from "@/app/store/cartSlice";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/lib/models/ProductModels";

import React from "react";
import { useDispatch } from "react-redux";

export default function AjouterAuPanier({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const addCartHandler = () => {
    toast({
      description: "Article ajouter au panier",
      variant: "success",
    });
    dispatch(addItem(product));
  };
  return (
    <button
      className="bg-black font-[family-name:var(--satoshi-)] w-fit text-white flex-auto py-3 px-7  gap-3 rounded-full text-center"
      onClick={() => {
        addCartHandler();
      }}
    >
      Ajouter au panier
    </button>
  );
}
