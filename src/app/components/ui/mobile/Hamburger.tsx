"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer p-3">
        <GiHamburgerMenu size={50} />
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        <ul className="absolute top-[60px] right-[-50px] bg-white text-3xl rounded-lg p-4 w-[250px] z-50">
          <Link href="#info">
            <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
              Giới thiệu
            </li>
          </Link>
          <Link href="#service">
            <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
              Dịch Vụ
            </li>
          </Link>

          <Link href="#calculate">
            <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
              Đổi Tỉ Giá
            </li>
          </Link>

          <Link href="#contact">
            <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
              Liên Hệ
            </li>
          </Link>
          <Link href="#feedback">
            <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
              Feedback
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
