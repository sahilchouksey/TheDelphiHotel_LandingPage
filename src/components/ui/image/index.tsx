import React from "react";
interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}
export default function Image({
  src,
  alt,
  className,
  containerClassName,
  ...props
}: ImageProps) {
  const img = /*#__PURE__*/ React.createElement("img", {
    src: src,
    alt: alt,
    className: `bg-cover align-center ${className}`,

    ...props,
  });

  return <div className={`image-container ${containerClassName}`}>{img}</div>;
}
