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
        <div className=" w-screen bg-black/30 h-screen top-[60px] right-[-20px] absolute">
          <ul className="absolute top-0 right-[0px] bg-white text-3xl  p-4 w-[250px] h-screen z-50">
            <Link href="#info">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Giới thiệu
              </li>
              <div className="h-0.5 bg-gray-400 w-full mb-1"></div>
            </Link>

            <Link href="#service">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Dịch Vụ
              </li>
              <div className="h-0.5 bg-gray-400 w-full mb-1"></div>
            </Link>

            <Link href="#calculate">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Đổi Tỉ Giá
              </li>
              <div className="h-0.5 bg-gray-400 w-full mb-1"></div>
            </Link>

            <Link href="#contact">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Liên Hệ
              </li>
              <div className="h-0.5 bg-gray-400 w-full mb-1"></div>
            </Link>
            <Link href="#feedback">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Feedback
              </li>
              <div className="h-0.5 bg-gray-400 w-full mb-1"></div>
            </Link>
            <Link href="/faq">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Hỏi đáp
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
