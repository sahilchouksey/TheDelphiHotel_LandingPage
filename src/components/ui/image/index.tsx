import { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  animated?: "none" | "circle" | "left-to-right";
}

export default function Image({
  src,
  alt,
  className,
  containerClassName,
  animated = "none",
  ...props
}: ImageProps) {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && animated === "circle") {
      controls.start({
        clipPath: "circle(50%)",
        opacity: 1,
        transition: { duration: 5, ease: [0.18, 0.32, 0.17, 0.99] },
      });
    } else if (isInView && animated === "left-to-right") {
      controls.start({
        clipPath: "inset(0 0 0 0)",
        opacity: 1,
        transition: { duration: 2, ease: [0.18, 0.32, 0.17, 0.99] },
      });
    }
  }, [controls, isInView, animated]);

  const initialStyles =
    animated === "circle"
      ? { clipPath: "circle(0%)", opacity: 0 }
      : animated === "left-to-right"
      ? { clipPath: "inset(0 100% 0 0)", opacity: 0 }
      : {};

  const IMAGE = (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={`bg-cover align-center ${className}`}
      initial={initialStyles}
      animate={controls}
      {...props}
    />
  );

  return <div className={`image-container ${containerClassName}`}>{IMAGE}</div>;
}
