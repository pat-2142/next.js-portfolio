// Tag — small pill label used to display technology or category tags.
// Appears in CertificateCard and ProjectCard beneath descriptions.
// The unused framer-motion import has been removed.
import { TagProps } from "@/app/lib/types";

export default function Tag({ children }: TagProps) {
  return (
    <div>
      <div className="flex items-center py-1 px-2 rounded-4xl text-xs font-bold bg-[#3D5470]">
        {children}
      </div>
    </div>
  );
}
