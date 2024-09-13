import Link from "next/link";
import React, { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// export default function Button({link,text}:ButtonProps) {
//   return (
//     <button className=" w-full md:w-fit font-[family-name:var(--satoshi-)] px-14 py-4 bg-black text-white duration-300  hover:scale-95 rounded-xl">
//       <Link href={link}>{text}</Link>
//     </button>
//   );
// }
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  "active:w-full md:w-fit font-[family-name:var(--satoshi-)] text-base rounded-lg duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:scale-95 w-full  md:w-fit font-[family-name:var(--satoshi-)] text-base duration-300",
        outline:
          "bg-transparent hover:bg-black hover:text-white border border-black text-black hover:scale-95",
      },
      size: {
        default: "px-14 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    />
  );
};

export { Button, buttonVariants };
