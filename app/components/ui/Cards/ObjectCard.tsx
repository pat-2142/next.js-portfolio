import { CardProps } from "@/app/lib/types";

export default function ObjectCard({ children }: CardProps) {
  return (
    <div className={`flex flex-col rounded-2xl p-4 md:p-8 bg-[#2A3D54] gap-4`}>
        {children}
    </div>
  );
}