import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function ResearchMobile() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <span>
          <MagnifyingGlassIcon className=" md:hidden size-7 md:size-6 text-black" />
        </span>
      </AlertDialogTrigger>
      <AlertDialogContent className="">
        <AlertDialogHeader>
          <AlertDialogTitle
            className="text-white font-[family-name:var(--integralcf-)]
"
          >
            Research
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[#ffffffb0] [family-name:var(--satoshi-)]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className=" absolute top-0 right-5 rounded-xl ">
            <XMarkIcon className="size-5 text-white" />
          </AlertDialogCancel>
          <div className="flex flex-col gap-2">
            <input
              type="search"
              placeholder="Search for products..."
              className="py-2 rounded-full text-black bg-white  outline-none pl-4 text-center"
            />
            <input
              type="button"
              value="Research"
              className=" py-2 rounded-full text-white  bg-[#5e5e5e] placeholder-[#b9b9b9]"
            />
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
