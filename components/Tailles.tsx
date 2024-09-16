import { Toggle } from "@/components/ui/toggle";

interface TextProps {
  text: string;
}

export function Tailles({ text }: TextProps) {
  return <Toggle aria-label="Toggle italic">{text}</Toggle>;
}
