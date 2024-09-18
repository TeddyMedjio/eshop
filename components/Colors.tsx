"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function Colors() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        className={`h-9 w-9 rounded-full text-white bg-[#ff4aj] shadow-none`}
        id="terms"
      />
      {/* <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label> */}
    </div>
  );
}
