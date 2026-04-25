import { TagProps } from "@/app/lib/types";
import { style } from "framer-motion/client";

export default function Tag({ children }: TagProps) {
    return (
        <div>
            <div className={`flex items-center py-1 px-2 rounded-4xl text-xs font-bold bg-[#3D5470]`}>
                {children}
            </div>
        </div>
    );
}