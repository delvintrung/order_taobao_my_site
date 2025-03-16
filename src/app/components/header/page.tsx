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
    <div className="bg-white w-full h-[50px] flex px-7 pt-10 justify-between items-center">
      <div className="flex items-center gap-10">
        <Link href={"/"}>
          <div className="w-[60px] h-[60px] overflow-hidden rounded-full border border-gray-300">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
        </Link>
        <ul className="flex gap-5">
          <Link href="#info">
            <li>Giới thiệu</li>
          </Link>
          <Link href="#service">
            <li>Dịch Vụ</li>
          </Link>

          <Link href="#calculate">
            <li>Đổi Tỉ Giá</li>
          </Link>

          <Link href="#contact">
            <li>Liên Hệ</li>
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
