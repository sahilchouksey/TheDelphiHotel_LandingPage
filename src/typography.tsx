interface TextProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  font: "MillerBanner" | "PrioriSans" | "RankingsCaps";
  children: React.ReactNode;
  lineHeight?: number;
  size?: number;
  color?: string;
  className?: string;
}

const Text = ({
  tag,
  children,
  className,
  size,
  lineHeight,
  color,
  font,
  ...props
}: TextProps) => {
  const Tag = tag;
  const fontStyles = {
    MillerBanner: { fontFamily: "MillerBanner" },
    PrioriSans: { fontFamily: "PrioriSans" },
    RankingsCaps: { fontFamily: "RankingsCaps" },
  };
  return (
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
      className={`${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;
