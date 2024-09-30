"use client";
import Link from "next/link";
import React from "react";

export default function AjouterAuPanier() {
  return (
    <div className="bg-black font-[family-name:var(--satoshi-)] text-white flex-auto py-3 rounded-full text-center">
      <Link href="/cart">Voir le panier</Link>
    </div>
  );
}
