"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <div className="md:hidden relative">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer p-3">
        <GiHamburgerMenu size={50} />
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        <div
          className=" w-screen bg-black/30 h-screen top-[60px] right-[-20px] absolute"
          onClick={(e) => {
            setIsOpen(false);
            e.stopPropagation();
          }}
        >
          <ul className="absolute top-0 right-[0px] bg-white text-3xl  p-4 w-[250px] h-screen z-50">
            <Link href="/">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Giới thiệu
              </li>
              <div className="h-0.5 bg-gray-400 w-full mb-1"></div>
            </Link>

            <Link href="/">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Dịch Vụ
              </li>
              <div className="h-0.5 bg-gray-400 w-full mb-1"></div>
            </Link>

            <Link href="/">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Đổi Tỉ Giá
              </li>
              <div className="h-0.5 bg-gray-400 w-full mb-1"></div>
            </Link>

            <Link href="/">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Liên Hệ
              </li>
              <div className="h-0.5 bg-gray-400 w-full mb-1"></div>
            </Link>
            <Link href="/">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Feedback
              </li>
              <div className="h-0.5 bg-gray-400 w-full mb-1"></div>
            </Link>
            <Link href="pages/faq">
              <li className="hover:bg-gray-100 px-2 py-0.5 rounded-xl">
                Hỏi đáp
              </li>
            </Link>
            {session ? (
              <div>
                <div className="flex-col gap-5 items-start">
                  <Link
                    href={`/pages/user/${session.user?.id!}`}
                    className="p-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2 "
                  >
                    <Avatar>
                      <AvatarImage
                        src={
                          session.user?.image || "https://github.com/shadcn.png"
                        }
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm">Thông tin tài khoản</p>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
