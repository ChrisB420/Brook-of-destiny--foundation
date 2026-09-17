import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Home,
  Sprout,
  Stethoscope,
  Trees,
  Users,
} from "lucide-react";
import type { Programme } from "@/lib/site";
import { cn } from "@/lib/utils";

const ICONS = {
  graduation: GraduationCap,
  users: Users,
  book: BookOpen,
  stethoscope: Stethoscope,
  sprout: Sprout,
  heart: HeartHandshake,
  home: Home,
  trees: Trees,
} as const;

export function ProgrammeIcon({
  icon,
  className,
}: {
  icon: Programme["icon"];
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={cn("size-5", className)} strokeWidth={1.75} />;
}
