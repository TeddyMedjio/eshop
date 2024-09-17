"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface PropsColor {
  color: string;
}

export function CheckBox({ color }: PropsColor) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox className={`bg-[${color}]`} />
    </div>
  );
}
