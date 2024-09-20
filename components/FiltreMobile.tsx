import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Accordeon } from "./Accordeon";
import { Progress } from "./ui/progress";
import { Tailles } from "./Tailles";

export function FiltreMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden grid items-center p-2 bg-gris rounded-full">
          <AdjustmentsVerticalIcon className="size-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="bottom">
        {/* Filtres */}
        <div className="flex items-center justify-between border-b border-b-black/10 pb-5">
          <h3 className="font-[family-name:var(--satoshibold-)] text-xl">
            Filtres
          </h3>
          <SheetClose>
            <Cross2Icon className="size-6 text-black" />
          </SheetClose>
        </div>

        {/* tshirts, shorts... */}
        <div className="border-b border-b-black/10 py-5 space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-[family-name:var(--satoshi-)] text-black/60">
              T-shirts
            </p>
            <ChevronRightIcon className="text-black/60 size-4" />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-[family-name:var(--satoshi-)] text-black/60">
              Shorts
            </p>
            <ChevronRightIcon className="text-black/60 size-4 " />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-[family-name:var(--satoshi-)] text-black/60">
              Shirts
            </p>
            <ChevronRightIcon className="text-black/60 size-4" />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-[family-name:var(--satoshi-)] text-black/60">
              Hoodie
            </p>
            <ChevronRightIcon className="text-black/60 size-4" />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-[family-name:var(--satoshi-)] text-black/60">
              Jeans
            </p>
            <ChevronRightIcon className="text-black/60 size-4" />
          </div>
        </div>

        {/* Price */}
        <div className="border-b border-b-black/10 space-y-4">
          <Accordeon title="Price">
            <Progress value={33} />
          </Accordeon>
        </div>

        {/* Couleurs */}
        <div className="border-b border-b-black/10 space-y-4">
          <Accordeon title="Couleurs">
            <div className="flex items-center flex-wrap gap-4">
              <div className="h-9 w-9 bg-green-500 border border-green-800 rounded-full"></div>
              <div className="h-9 w-9 bg-red-500 border border-red-800 rounded-full"></div>
              <div className="h-9 w-9 bg-yellow-400 border border-yellow-800 rounded-full"></div>
              <div className="h-9 w-9 bg-orange-500 border border-orange-800 rounded-full"></div>
              <div className="h-9 w-9 bg-blue-500 border border-blue-800 rounded-full"></div>
              <div className="h-9 w-9 bg-purple-500 border border-purple-800 rounded-full"></div>
              <div className="h-9 w-9 bg-pink-500 border border-pink-800 rounded-full"></div>
              <div className="h-9 w-9 bg-white border border-gray-400 rounded-full"></div>
              <div className="h-9 w-9 bg-sky-500 border border-sky-800 rounded-full"></div>
              <div className="h-9 w-9 bg-black border border-black rounded-full"></div>
            </div>
          </Accordeon>
        </div>

        {/* Taille */}
        <div className="border-b border-b-black/10 space-y-4">
          <Accordeon title="Tailles">
            <div className="flex items-center gap-4 flex-wrap">
              <Tailles size="sm" text="XX-Small" />
              <Tailles size="sm" text="Small" />
              <Tailles size="sm" text="X-Small" />
              <Tailles size="sm" text="Medium" />
              <Tailles size="sm" text="Large" />
              <Tailles size="sm" text="X-Large" />
              <Tailles size="sm" text="XX-Large" />
              <Tailles size="sm" text="3X-Large" />
            </div>
          </Accordeon>
        </div>

        {/* Styles */}
        <Accordeon title="Collections">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/60">
                Casual
              </p>
              <ChevronRightIcon className="text-black/60 size-4" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/60">
                Formal
              </p>
              <ChevronRightIcon className="text-black/60 size-4" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/60">
                Party
              </p>
              <ChevronRightIcon className="text-black/60 size-4" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--satoshi-)] text-black/60">
                Gym
              </p>
              <ChevronRightIcon className="text-black/60 size-4" />
            </div>
          </div>
        </Accordeon>
      </SheetContent>
    </Sheet>
  );
}
