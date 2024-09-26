"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";
import { ResearchMobile } from "./ResearchMobile";
import { Navigation } from "./MenuList";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="mx-auto container px-4 h-24 flex items-center justify-center border-b">
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
        <Navigation />
        {/* barre de recherche */}
        <div className="hidden md:block w-[50%] relative">
          <input
            type="search"
            name="search"
            placeholder="Recherche de products..."
            className=" bg-gris pl-10 py-2 rounded-full w-full placeholder-black/50 outline-none"
          />
          <MagnifyingGlassIcon className="size-6 text-black/50 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-5" />
        </div>
        {/* panier et profil */}
        <div className="flex items-center gap-2">
          <ResearchMobile />
          <Link href="/cart" className="relative">
            <p className="absolute -top-3 -left-1 bg-black rounded-full px-2 text-white text-sm">
              3
            </p>
            <ShoppingCartIcon className=" size-7 md:size-6 text-black" />
          </Link>

          {/* SIGNIN USER */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* not SIGNIN USER */}
          <SignedOut>
            <SignInButton>
              <UserCircleIcon className=" size-7 md:size-6 text-black cursor-pointer" />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
