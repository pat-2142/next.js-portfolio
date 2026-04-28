// SectionWrapper — layout shell for every section on the page.
// Wraps content in a SectionCard and applies consistent heading styles,
// text colour, spacing, and responsive flex direction.
import { SectionWrapperProps } from "@/app/lib/types";
import { SectionCard } from "../ui";
import { COLORS } from "@/app/lib/constants";

export default function SectionWrapper({ children, heading }: SectionWrapperProps) {
  return (
    <section className="pt-8 md:pt-4" style={{ color: COLORS.text }}>
      <SectionCard>
        <div>
          <h2 className="font-bold text-lg md:text-2xl">{heading}</h2>
          {/* Children are laid out in a column on mobile, row on large screens */}
          <div
            className="flex flex-col text-sm md:text-base lg:flex-row gap-8 pt-2 flex-wrap justify-center"
            style={{ color: COLORS.textMuted }}
          >
            {children}
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
