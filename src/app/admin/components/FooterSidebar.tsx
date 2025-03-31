"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const FooterSidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="w-full h-[80px] flex items-center justify-center bg-gray-50 shadow-md mb-2 rounded-2xl gap-3">
      <div>
        <Image
          src={session?.user.image || "/profile.png"}
          alt=""
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h1 className="font-bold text-gray-700 py-1 w-[90%]">
          {session?.user.name}
        </h1>
        <p className="text-sm text-gray-500">{session?.user.email}</p>
      </div>
    </div>
  );
};

export default FooterSidebar;
