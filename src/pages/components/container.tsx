import React from "react";
export default function Container_IndexPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container">{children}</div>;
}
