"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [rate, setRate] = useState<number>(0);
  useEffect(() => {
    fetch("/api/exchangeRate")
      .then((res) => res.json())
      .then((data) => setRate(data[0].value))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="bg-white w-full h-[50px] flex px-20 py-10 justify-between items-center fixed top-0 z-50">
      <div className="flex items-center gap-10">
        <Link href={"/"}>
          <div className="w-[60px] h-[60px] overflow-hidden rounded-full border border-gray-300">
            <Image
              src="/logo.png"
              alt="Profile picture"
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
        </Link>
        <ul className="flex gap-5">
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
      <div className="flex items-center gap-5">
        <div>
          <span>Giá Nhân Dân Tệ</span> <br />
          <span>1 CNY = {rate != 0 ? rate : "Đang cập nhật"} VND</span>
        </div>
        <Button>Đặt Hàng</Button>
      </div>
    </div>
  );
};

export default Header;
