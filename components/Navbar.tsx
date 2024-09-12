"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";
import { ResearchMobile } from "./ResearchMobile";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const apparait = () => {
    setShow(!show);
  };

  return (
    <nav className="mx-auto container px-4 h-24 flex items-center justify-center">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <MobileMenu />
          <Link href="/">
            <Image
              src="/images/logoeshop.svg"
              width={148}
              height={27}
              alt="logo"
            />
          </Link>
        </div>

        {/* Liens de navigations */}
        <ul className="font-[family-name:var(--satoshi-)] lg:flex items-center gap-4 hidden">
          <li className="flex items-center gap-2 group ">
            <Link href="#">Shop</Link>
            <ChevronDownIcon className="size-4 group-hover:rotate-180 ease-in-out transition-all duration-400" />
          </li>
          <li>
            <Link href="#">En Vente</Link>
          </li>
          <li>
            <Link href="#">Nouveautés</Link>
          </li>
          <li>
            <Link href="#"> Brands</Link>
          </li>
        </ul>
        {/* barre de recherche */}
        <div className="hidden md:block w-[50%] relative">
          <input
            type="search"
            name="search"
            placeholder="Recherche de products..."
            className=" bg-[#0000000c] pl-10 py-2 rounded-full w-full placeholder-[#00000065] outline-none"
          />
          <MagnifyingGlassIcon className="size-6 text-[#00000065] absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-5" />
        </div>
        {/* panier et profil */}
        <div className="flex items-center gap-2">
          <ResearchMobile />
          <span className="relative">
            <ShoppingCartIcon className=" size-7 md:size-6 text-black" />
            {/* <p className="absolute -top-3 -left-1 bg-black rounded-full px-2 text-white text-sm">
              0
            </p> */}
          </span>
          <span>
            <UserCircleIcon className=" size-7 md:size-6 text-black" />
          </span>
        </div>
      </div>
    </nav>
  );
}
