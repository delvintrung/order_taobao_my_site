import React from "react";
import Contact from "../components/Contact";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative">
      {children}
      <Contact />
    </div>
  );
};

export default layout;
