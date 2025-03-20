import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-gray-100 p-20 flex gap-4 items-center justify-center"
    >
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-bold decoration-amber-100">
          Thông tin chính chủ:
        </h1>
        <div className="flex justify-between items-center gap-4 mt-5">
          <Card className="text-center flex justify-center flex-col w-2xs min-h-[480px]">
            <CardHeader>
              <CardTitle>Tài Khoản Ngân Hàng</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <Image
                src="/payment-info/vietcombank.jpg"
                alt="VietComBank Trung Delvin"
                width={200}
                height={300}
              />
            </CardContent>
            <CardFooter>
              <p>Ngân hàng Vietcombank chính chủ</p>
            </CardFooter>
          </Card>

          <Card className="flex justify-center text-center flex-col w-2xs min-h-[480px]">
            <CardHeader>
              <CardTitle className="whitespace-nowrap">
                Ví điện tử momo:
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center py-8">
              <Image
                src="/payment-info/momo.jpg"
                alt="Momo Trung Delvin"
                width={200}
                height={300}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <p>Ví điện tử chính chủ</p>

              <p>035******074</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
