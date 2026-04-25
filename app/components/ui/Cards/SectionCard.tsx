import { CardProps } from "@/app/lib/types";

export default function SectionCard({ children }: CardProps) {
  return (
    <div className={`rounded-2xl p-4 md:p-8 bg-[#1E2A3B]`}>
        {children}
    </div>
  );
}