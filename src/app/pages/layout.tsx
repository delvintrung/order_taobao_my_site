import React from "react";
import Contact from "../../components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nhận Order Các Sản Phẩm Tại Trung Quốc | Trung Delvin",
  description: "Trang web chính thức của Trung Delvin",
};

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
