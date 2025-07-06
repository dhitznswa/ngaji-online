import React from "react";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto px-4 md:px-16">{children}</div>;
}
