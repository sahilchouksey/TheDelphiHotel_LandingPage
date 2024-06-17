import React from "react";
import { motion, useInView } from "framer-motion";

const LineAnimation = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div ref={ref} className="flex flex-col space-y-4">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="h-1 bg-black"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={lineVariants}
          transition={{ delay: i * 0.5 }}
        />
      ))}
    </div>
  );
};

export default LineAnimation;
