import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/solid";
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
      <SheetContent>
        <div className="mt-10">
          <Link href="/">
            <Image
              src="/images/logoeshopwhite.svg"
              width={148}
              height={27}
              alt="logo"
              className="text-white"
            />
          </Link>
        </div>
        <ul className="flex flex-col gap-2 mt-20">
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
              n. arrivals
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
        {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader> */}
        <div className="grid gap-4 py-4"></div>
      </SheetContent>
    </Sheet>
  );
}
