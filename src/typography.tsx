import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface TextProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  font: "MillerBanner" | "PrioriSans" | "RankingsCaps";
  children: React.ReactNode;
  lineHeight?: number;
  size?: number;
  color?: string;
  className?: string;
  animation?: "none" | "fade-in-bottom" | "fade-in-left";
  containerClassName?: string;
}

const Text = ({
  tag,
  children,
  className,
  size,
  lineHeight,
  color,
  font,
  animation = "none",
  containerClassName,
  ...props
}: TextProps) => {
  const Tag = tag;
  const fontStyles = {
    MillerBanner: { fontFamily: "MillerBanner" },
    PrioriSans: { fontFamily: "PrioriSans" },
    RankingsCaps: { fontFamily: "RankingsCaps" },
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animations = {
    "fade-in-bottom": {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    "fade-in-left": {
      initial: { x: -50, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    none: { initial: {}, animate: {} },
  };

  const animate = animation !== "none" && animations?.[animation]?.animate;
  React.useEffect(() => {
    if (isInView && animation !== "none" && animate) {
      controls.start(animate);
    }
  }, [controls, isInView, animation, animate]);

  return (
    <motion.div
      ref={ref}
      initial={animations[animation].initial}
      animate={controls}
      transition={{ duration: 1.5 }}
      className={containerClassName}
    >
      <Tag
        style={{
          ...fontStyles[font],
          lineHeight,
          fontSize: size,
          color,
          fontStyle:
            font === "RankingsCaps" || font === "MillerBanner"
              ? "italic"
              : "normal",
        }}
        className={className}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default Text;
