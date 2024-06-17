import React from "react";
interface SectionWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
  padding?: string;
  margin?: string;
  className?: string;
    style?: React.CSSProperties;
  childContainerClassName?: string;
}
export default function Section({
  children,
  backgroundColor,
  backgroundImage,
  padding,
  margin,
    style,
  className,
  childContainerClassName,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={`${
        backgroundColor || backgroundImage
          ? "container-full container h-full "
          : "container-center"
      } ${className}`}
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        padding: padding,
        margin: margin,
        ...style,
      }}
      {...props}
    >
      {backgroundColor || backgroundImage || childContainerClassName ? (
        <div className={`container-center h-full ${childContainerClassName}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
