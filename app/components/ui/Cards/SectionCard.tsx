// SectionCard — outer container card for a page section.
// Provides the darker background and rounded corners that frame each section.
// Used by SectionWrapper so every section has a consistent shell.
import { CardProps } from "@/app/lib/types";
import { COLORS } from "@/app/lib/constants";

export default function SectionCard({ children }: CardProps) {
  return (
    <div
      className="rounded-2xl p-4 md:p-8"
      style={{ backgroundColor: COLORS.card }}
    >
      {children}
    </div>
  );
}
