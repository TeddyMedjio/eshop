import { Toggle } from "@/components/ui/toggle";

interface TextProps {
  text: string;
  size?: "default" | "sm" | "lg";
}

export function Tailles({ text, size }: TextProps) {
  return <Toggle size={size}>{text}</Toggle>;
}
