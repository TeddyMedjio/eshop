"use client";

import { addItem } from "@/app/store/cartSlice";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/lib/models/ProductModels";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AjouterAuPanier() {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const addToCarHandler = (product: Product) => {
    toast({
      description: "Article ajouter dans le panier",
      variant: "success",
    });
    dispatch(addItem(product));
  };
  return (
    <Button className="bg-black font-[family-name:var(--satoshi-)] text-white flex-auto py-3 rounded-full">
      Commander maintenant
    </Button>
  );
}
