import React from "react";
import Image from "next/image";
import Contact from "../../components/ui/mobile/Contact";

const Infomation = () => {
  return (
    <div
      id="info"
      className="w-screen md:w-full md:h-[600px] bg-white overflow-hidden mt-10 md:mt-[100px]"
    >
      <div className="md:px-20 px-10 pt-2 md:flex gap-10  pb-20">
        <div className="mt-10">
          <div className="flex items-center">
            <div className="w-[50px] h-[50px] overflow-hidden rounded-full border">
              <Image
                src="/avatar.jpg"
                alt="Avatar Trung DelVin"
                className="object-cover"
                width={50}
                height={50}
              />
            </div>
            <h1 className="hidden text-2xl font-extrabold md:text-3xl md:ml-10 md:block">
              <i>"Uy tín mất một lần, khó khôi phục một đời"</i>
            </h1>
          </div>
          <div className="mt-10">
            <h1 className="block text-2xl font-extrabold md:text-3xl md:hidden md:ml-10">
              <i>"Uy tín mất một lần, khó khôi phục một đời"</i>
            </h1>
            <p className="max-w-[400px] mt-5 md:ml-10 text-lg">
              Châm ngôn sống này mình cực kỳ tâm đắc, khách hàng không đễ kiếm
              được, mình luôn trân trọng
            </p>

            <p className="max-w-[400px] md:max-w-[500px] mt-5 md:ml-10 text-2xl">
              Mình là Trung
              <br />
              Lê Văn Trung là tên đầy đủ của mình, <br />
              hiện tại mình đang là sinh viên năm cuối tại trường Đại Học Sài
              Gòn, Quận 5
            </p>
          </div>
          <Contact />
        </div>
        <div className="hidden rounded-lg md:block border-2 border-gray-600 w-[500px] h-[500px] mt-10">
          <Image
            src="/profile.png"
            alt="Trung DelVin"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Infomation;
