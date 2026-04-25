"use client";
import { motion } from "framer-motion";
import { MotionProps } from "@/app/lib/types";

const directionMap = {
    up:    { x: 0,   y: 20  },
    down:  { x: 0,   y: -20 },
    left:  { x: -20, y: 0   },
    right: { x: 20,  y: 0   },
};

export default function MotionWrapper({ children, direction = "up", delay = 0, className }: MotionProps) {
    const { x, y } = directionMap[direction];

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}