"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useState } from "react";

export function MobileMenu() {
  const { scrollToSection } = useSmoothScroll();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false); // Fermer le menu

    if (isHomePage) {
      // Petit délai pour permettre à l'animation de fermeture de se terminer
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden mr-2">
          <Bars3Icon className="size-10 text-black" />
        </button>
      </SheetTrigger>
      <SheetContent side="top">
        <div className="mt-10 flex items-center justify-between">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logoeshopwhite.svg"
              width={148}
              height={27}
              alt="logo"
              className="text-white"
            />
          </Link>
          <SheetClose>
            <Cross2Icon className="size-8 text-white" />
          </SheetClose>
        </div>
        <ul className="flex flex-col gap-2 my-20">
          <li>
            <a
              href="#categories"
              onClick={(e) => handleSectionClick(e, "categories")}
              className="text-white text-3xl font-[family-name:var(--integralcf-)]"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#en-vente"
              onClick={(e) => handleSectionClick(e, "en-vente")}
              className="text-white text-3xl font-[family-name:var(--integralcf-)]"
            >
              En Vente
            </a>
          </li>
          <li>
            <a
              href="#nouveautes"
              onClick={(e) => handleSectionClick(e, "nouveautes")}
              className="text-white text-3xl font-[family-name:var(--integralcf-)]"
            >
              Nouveautés
            </a>
          </li>
          <li>
            <a
              href="#temoignages"
              onClick={(e) => handleSectionClick(e, "temoignages")}
              className="text-white text-3xl font-[family-name:var(--integralcf-)]"
            >
              Témoignages
            </a>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
