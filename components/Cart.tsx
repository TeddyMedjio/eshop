"use client";

import { TagIcon } from "@heroicons/react/24/outline";
import {
  addItem,
  CartItem,
  clearCart,
  removeItem,
} from "@/app/store/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { TrashIcon } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import PaypalButton from "./PaypalButton";
import { useRouter } from "next/navigation";

interface Props {
  items: CartItem[];
}

export default function Cart({ items }: Props) {
  const router = useRouter();

  const dispatch = useDispatch();

  const addCartHandler = (item: CartItem) => dispatch(addItem(item));
  const removeCartHandler = (id: number) => dispatch(removeItem({ id }));

  // Prix total
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  //calcule taxe (10%)
  const taxe = (+totalPrice * 0.1).toFixed(2);
  //total prix avec taxe
  const totalpriceWithTaxe = (+totalPrice + +taxe).toFixed(2);

  // Si plus grand que 100$ ajouter livraison

  // authentification de l'utilisateur
  const { user } = useUser();

  //   confirmer le paiement
  const handleSuccess = (details: any) => {
    router.push("/success");
    dispatch(clearCart());
  };
  //   confirmer le paiement
  const deleteProduct = (id: number) => {
    dispatch(removeCartHandler(id));
  };

  const free = 0;

  return (
    <div className="mt-10">
      <h2 className=" text-center md:text-left text-[40px] md:text-5xl font-[family-name:var(--integralcf-)] leading-10 md:leading-none">
        votre panier
      </h2>
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/images/notfound.svg"
            alt="empty_cart"
            width={200}
            height={200}
            className="object-cover mx-auto"
          />
          <p className="mt-5 text-gray-400 text-3xl md:text-5xl font-semibold">
            Votre panier est vide
          </p>
        </div>
      )}
      {items.length > 0 && (
        <div className="flex flex-col items-start md:flex-row gap-4 mt-10 ">
          {/* Articles */}
          <div className="border border-black/10 px-4 rounded-lg flex-1">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 w-full py-4"
              >
                <div className="relative h-[99px] w-[99px]  md:h-[124px] md:w-[124px] ">
                  <Image
                    src={item.image_url}
                    fill={true}
                    alt="image"
                    className="rounded-[10px] object-cover object-center "
                  />
                </div>

                {/* infos produits */}
                <div className="space-y-1 w-full">
                  <div className="flex items-center justify-between">
                    <p className=" text-base md:text-xl font-[family-name:var(--satoshibold-)]">
                      {item.name}
                    </p>
                    <button onClick={() => deleteProduct(item.id)}>
                      <TrashIcon className="size-5 text-red-500" />
                    </button>
                  </div>
                  <p className=" text-xs md:text-sm font-[family-name:var(--satoshi-)] text-black/40">
                    Size: <span className="text-black">xl</span>
                  </p>
                  <p className=" text-xs md:text-sm font-[family-name:var(--satoshi-)] text-black/40 flex items-center capitalize gap-2">
                    Couleur:{" "}
                    {item.color.map((color) => (
                      <span className="text-black flex items-center gap-2">
                        {color}
                      </span>
                    ))}
                  </p>
                  {/* Prix total et ajouter nombre d'articles */}
                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-2">
                      {" "}
                      <p className=" text-xl md:text-2xl font-[family-name:var(--satoshibold-)] text-black">
                        {`$${(item?.price * item?.quantity).toFixed(2)}`}
                      </p>
                      <p className=" text-xl md:text-2xl font-[family-name:var(--satoshibold-)] text-black/40">
                        {`$${item.price.toFixed(2)}`}
                      </p>
                    </div>
                    <div className="max-w-[100px] flex items-center justify-around bg-gris font-[family-name:var(--satoshibold-)] text-white w-full py-[4px] rounded-full">
                      <button
                        onClick={() => removeCartHandler(item.id)}
                        className="text-black font-[family-name:var(--satoshi-)]"
                      >
                        -
                      </button>
                      <p className="text-black font-[family-name:var(--satoshi-)]">
                        {item?.quantity}
                      </p>
                      <button
                        onClick={() => addCartHandler(item)}
                        className="text-black font-[family-name:var(--satoshi-)]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Votre commande  */}
          <div className="border border-black/10 p-4 rounded-lg flex-1">
            <p className="font-[family-name:var(--satoshibold-)] text-xl">
              Votre Commande
            </p>
            {/* calcule facture */}

            <div className=" mt-5 space-y-2 border-b border-b-black-10 pb-5">
              <div className="flex items-center justify-between">
                <p className="font-[family-name:var(--satoshi-)] text-black/40 text-xl">
                  Total Article
                </p>
                <p className="font-[family-name:var(--satoshibold-)] text-black text-xl">
                  {`$${totalPrice}`}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-[family-name:var(--satoshi-)] text-black/40 text-xl">
                  Reduction <span className="text-black">(-10%)</span>
                </p>
                <p className="font-[family-name:var(--satoshibold-)] text-red-500 text-xl">
                  {`$${taxe}`}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-[family-name:var(--satoshi-)] text-black/40 text-xl">
                  Livraison
                </p>

                <p className="font-[family-name:var(--satoshibold-)] text-black text-xl">
                  Free
                </p>
              </div>
            </div>

            {/* Total */}

            <div className="my-5">
              <div className="flex items-center justify-between mb-5">
                <p className="font-[family-name:var(--satoshi-)] text-black text-xl">
                  Total
                </p>

                <p className="font-[family-name:var(--satoshibold-)] text-black text-2xl">
                  {totalpriceWithTaxe}
                </p>
              </div>
              {/* code promo et checkout */}
              <div className="w-full space-y-4">
                <div className="flex items-center gap-4">
                  {/* barre de recherche */}
                  <div className="flex-auto relative">
                    <input
                      type="search"
                      name="search"
                      placeholder="Code promo"
                      className=" bg-gris pl-10 py-4 rounded-full w-full placeholder-black/50 outline-none"
                    />
                    <TagIcon className="size-6 text-black/50 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-5" />
                  </div>
                  <button className="bg-black font-[family-name:var(--satoshi-)] text-white py-4 rounded-full w-[150px]">
                    Appliquer
                  </button>
                </div>
                {/* button commander */}
                {!user && (
                  <div className="bg-black font-[family-name:var(--satoshi-)] text-white w-full py-4 rounded-full text-center">
                    <Link href="/sign-in">Veillez vous connecter</Link>
                  </div>
                )}
                {user && (
                  // <button className="bg-black font-[family-name:var(--satoshi-)] text-white w-full py-4 rounded-full">
                  //   Commander
                  // </button>
                  <PaypalButton
                    amount={totalpriceWithTaxe}
                    onSuccess={handleSuccess}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
