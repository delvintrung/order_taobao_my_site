import React from "react";
import Image from "next/image";

const Infomation = () => {
  return (
    <div
      id="info"
      className="w-full h-[500px] bg-white overflow-hidden mt-[100px]"
    >
      <div className="px-20 pt-2 flex gap-10 ">
        <div className="mt-10 ">
          <div className="w-[50px] h-[50px] overflow-hidden rounded-full border">
            <Image
              src="/avatar.jpg"
              alt="Avatar Trung DelVin"
              className="object-cover"
              width={50}
              height={50}
            />
          </div>
          <div className="mt-10">
            <h1 className="text-3xl ml-10">
              <i>"Uy tín mất một lần, khó khôi phục một đời"</i>
            </h1>

            <p className="max-w-[400px] mt-5 ml-10 text-lg">
              Châm ngôn sống này mình cực kỳ tâm đắc, khách hàng không đễ kiếm
              được, mình luôn trân trọng
            </p>

            <p className="max-w-[500px] mt-5 ml-10 text-2xl">
              Mình là Trung
              <br />
              Lê Văn Trung là tên đầy đủ của mình, <br /> mình sinh năm 2004,
              hiện tại mình đang là sinh viên năm cuối tại trường Đại Học Sài
              Gòn, Quận 5
            </p>
          </div>
        </div>
        <div className="  rounded-lg">
          <Image
            src="/profile.jpg"
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
