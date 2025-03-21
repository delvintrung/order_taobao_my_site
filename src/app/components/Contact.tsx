import React from "react";
import Link from "next/link";
import Imgae from "next/image";

const ContactGroup = () => {
  return (
    <div className="hidden md:fixed bottom-0 right-20 md:flex flex-col items-center w-[100px] h-[200px]  gap-3 z-50">
      <Link
        href="https://www.facebook.com/le.van.trung.450113"
        className="transition-transform hover:scale-110 focus:ring-4 focus:ring-blue-300"
      >
        <Imgae
          src="/facebook_icon.png"
          alt="Facebook LE VAN TRUNG"
          width={50}
          height={50}
        />
      </Link>
      <Link
        href="https://zalo.me/0357255074"
        className="transition-transform hover:scale-110 focus:ring-4 focus:ring-blue-300"
      >
        <Imgae
          src="/zalo_icon.webp"
          alt="Zalo LE VAN TRUNG"
          width={50}
          height={50}
        />
      </Link>
      <Link
        href="weixin://dl/chat?trunglv3x"
        className="transition-transform hover:scale-110 focus:ring-4 focus:ring-blue-300"
      >
        <Imgae
          src="/wechat_icon.png"
          alt="WeChat LE VAN TRUNG"
          width={50}
          height={50}
        />
      </Link>
      <div></div>
    </div>
  );
};

export default ContactGroup;
