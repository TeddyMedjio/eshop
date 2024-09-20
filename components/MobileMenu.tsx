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

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Link href="#" className="lg:hidden mr-2">
          <Bars3Icon className="size-10 text-black] " />
        </Link>
      </SheetTrigger>
      <SheetContent side="top">
        <div className="mt-10 flex items-center justify-between">
          <Link href="/">
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
            <Link
              href="#"
              className="text-white text-3xl font-[family-name:var(--integralcf-)]
"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white text-3xl font-[family-name:var(--integralcf-)]
"
            >
              On sale
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white text-3xl font-[family-name:var(--integralcf-)]
"
            >
              N. arrivals
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white text-3xl font-[family-name:var(--integralcf-)]
"
            >
              brands
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
