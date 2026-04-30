// ObjectCard — inner content card with a slightly lighter background.
// Used inside SectionWrapper to group related content (e.g. a single job,
// a certificate, a project). Stacks its children vertically with a gap.
import { CardProps } from "@/app/lib/types";
import { COLORS } from "@/app/lib/constants";

export default function ObjectCard({ children }: CardProps) {
  return (
    <div
      className="flex flex-col rounded-2xl p-4 md:p-8 gap-4"
      style={{ backgroundColor: COLORS.cardInner }}
    >
      {children}
    </div>
  );
}
