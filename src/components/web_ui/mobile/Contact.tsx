import React from "react";
import Link from "next/link";
import Imgae from "next/image";

const Contact = () => {
  return (
    <div className="flex md:hidden justify-between items-center mt-5">
      <Link href="https://www.facebook.com/le.van.trung.450113" className="">
        <div className="flex justify-center items-center">
          <Imgae
            src="/facebook_icon.png"
            alt="Facebook LE VAN TRUNG"
            width={30}
            height={30}
          />
          <p className="text-blue-800 text-md">Facebook</p>
        </div>
      </Link>
      <Link
        href="https://zalo.me/0357255074"
        className="transition-transform hover:scale-110 focus:ring-4 focus:ring-blue-300"
      >
        <div className="flex justify-center items-center">
          <Imgae
            src="/zalo_icon.webp"
            alt="Zalo LE VAN TRUNG"
            width={30}
            height={30}
          />
          <p className="text-blue-800 text-md">Zalo</p>
        </div>
      </Link>
      <Link
        href="weixin://dl/chat?trunglv3x"
        className="transition-transform hover:scale-110 focus:ring-4 focus:ring-blue-300"
      >
        <div className="flex justify-center items-center">
          <Imgae
            src="/wechat_icon.png"
            alt="WeChat LE VAN TRUNG"
            width={30}
            height={30}
          />
          <p className="text-blue-800 text-md">WeChat</p>
        </div>
      </Link>
    </div>
  );
};

export default Contact;
