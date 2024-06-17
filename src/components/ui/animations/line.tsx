import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface LineAnimationProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  customTo?: string;
}

const LineAnimation = ({
  className,
  direction = "horizontal",
  customTo,
}: LineAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        [direction === "horizontal" ? "width" : "height"]: customTo || "100%",
        transition: { duration: 3, ease: "easeInOut" },
      });
    }
  }, [controls, isInView, direction, customTo]);

  return (
    <motion.div
      ref={ref}
      initial={{ [direction === "horizontal" ? "width" : "height"]: "0%" }}
      animate={controls}
      className={`${
        direction === "horizontal" ? "h-[2px]" : "w-[2px]"
      } bg-black ${className}`}
    />
  );
};

export default LineAnimation;
