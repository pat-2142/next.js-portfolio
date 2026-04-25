import { SectionWrapperProps } from "@/app/lib/types";
import { SectionCard } from "../ui";

export default function SectionWrapper({ children, heading }: SectionWrapperProps) {
  return (
    <section className={'pt-8 md:pt-4'} style={{ color: '#E8EDF5' }}>
        <SectionCard>
            <div>
                <h2 className={'font-bold text-lg md:text-2xl'}>{heading}</h2>
                <div className="flex flex-col text-sm md:text-base text-[#C5CEDB] lg:flex-row gap-8 pt-2 flex-wrap justify-center">
                    {children}
                </div>
            </div>
        </SectionCard>
    </section>    
  );
}