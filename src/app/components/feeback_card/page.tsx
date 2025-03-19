import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FeedbackCardProps } from "@/types/type";

const FeedbackCard = ({
  name,
  link_info,
  image_feedback,
}: FeedbackCardProps) => {
  return (
    <Card className="w-[400px] h-[600px]">
      <CardHeader>
        <p>{name}</p>
        <div className="flex items-start gap-1.5">
          <p>Link:</p>{" "}
          <Link href={link_info} className="text-blue-500">
            Trang cá nhân feedback
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
        <Image
          src={image_feedback}
          alt="Feedback Trung Delvin"
          width={300}
          height={400}
        />
        <div className="flex items-center mt-2.5">
          <Image src="/star.svg" alt="" width={10} height={10} />
          <Image src="/star.svg" alt="" width={10} height={10} />
          <p className="pl-2">Uy tín tạo niểm tin</p>
          <Image src="/star.svg" alt="" width={10} height={10} />
          <Image src="/star.svg" alt="" width={10} height={10} />
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
