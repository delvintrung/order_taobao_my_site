"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Hamberger from "./ui/mobile/Hamburger";
import { useSession, signIn, signOut } from "next-auth/react";
import type { Session, DefaultSession } from "next-auth";

// Extend the Session type to include the `id` property on `user`
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
    } & DefaultSession["user"];
  }
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const { data: session } = useSession();
  const [rate, setRate] = useState<number>(0);
  useEffect(() => {
    fetch("/api/exchangeRate")
      .then((res) => res.json())
      .then((data) => setRate(data[0].value))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="bg-white w-screen md:w-full h-[50px] flex px-5 md:px-20 py-10 justify-between items-center fixed top-0 z-50">
      <div className="md:hidden">
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
      </div>
      <div className="hidden items-center gap-10 md:flex">
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
          <Link href="/pages/faq">
            <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">Q&A</li>
          </Link>
        </ul>
      </div>

      {/* Hamberger menu */}
      <Hamberger />
      <div className="flex gap-5 items-center">
        <div>
          <span>Giá Nhân Dân Tệ</span> <br />
          <span>1 CNY = {rate != 0 ? rate : "Đang cập nhật"} VND</span>
        </div>
        {session ? (
          <div>
            <p>Xin chào, {session.user?.name}!</p>
            <div className="flex gap-5 items-center">
              <Link
                href={`/pages/user/${session.user?.id!}`}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                <Avatar>
                  <AvatarImage
                    src={session.user?.image || "https://github.com/shadcn.png"}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
              <Button
                onClick={() => {
                  signOut();
                }}
              >
                Đăng xuất
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={() => signIn("google")}>Đăng Nhập</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
