import { useState } from "react";
import { motion } from "framer-motion";
interface AnimatedInputProps {
  id: string;
  label: string;
  type?: string;
  className?: string;
}

const AnimatedInput = ({
  id,
  label,
  type = "text",
  className,
}: AnimatedInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={`relative w-full ${className}`}>
      <motion.label
        htmlFor={id}
        initial={{ y: 0, x: 0, scale: 1 }}
        animate={{
          y: value || isFocused ? -40 : 0,
          x: value || isFocused ? 0 : 0,
          scale: value || isFocused ? 0.8 : 1,
        }}
        className={` absolute left-[30%] bottom-[4rem] text-4xl transition-all text-[#fff] `}
      >
        {label}
      </motion.label>
      <input
        id={id}
        required
        type={type}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value.length > 0)}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white text-4xl px-2 py-1 h-[10rem] family-sans max-w-[40rem]"
      />
    </div>
  );
};

export default AnimatedInput;
