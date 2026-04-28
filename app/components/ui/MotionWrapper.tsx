"use client";
// MotionWrapper — wraps any content in a Framer Motion fade-in animation.
// Plays once when the element enters the viewport. Direction and delay are
// configurable via props; defaults to sliding up with no delay.
// The direction map and duration come from constants to keep values consistent.
import { motion } from "framer-motion";
import { MotionProps } from "@/app/lib/types";
import { MOTION_DIRECTION_MAP, MOTION_DURATION } from "@/app/lib/constants";

export default function MotionWrapper({
  children,
  direction = "up",
  delay = 0,
  className,
}: MotionProps) {
  const { x, y } = MOTION_DIRECTION_MAP[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: MOTION_DURATION, delay, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
