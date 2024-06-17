interface ButtonProps {
  children: React.ReactNode;
  type: "primary" | "secondary";
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  animation: "fade-in" | "left-to-right" | "none" | "custom";
  className?: string;
  containerClassName?: string;
  animationClassName?: string;
  onClick?: () => void;
}
export default function Button({
  children,
  type,
  width,
  height,
  color,
  backgroundColor,
  animation,
  className,
  containerClassName,
  animationClassName,
  onClick,
  ...props
}: ButtonProps) {
  let animationClass = "";
  if (animation === "fade-in") {
    animationClass = "fade-in 1s ease-in-out";
  }
  if (animation === "left-to-right") {
    animationClass = "left-to-right ";
  }
  if (animation === "custom" && animationClassName) {
    animationClass = animationClassName as string;
  }

  return type === "primary" ? (
    <div className={`relative btn-primary-container ${containerClassName}`}>
      <button
        style={{
          width,
          height,
          color,
          backgroundColor,
        }}
        className={`btn-primary ${animationClass} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </div>
  ) : (
    <button
      style={{
        width,
        height,
        color,
        backgroundColor,
      }}
      className={`button--secondary ${animationClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
