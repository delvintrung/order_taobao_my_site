import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

type FeedbackCardProps = {
  name: string;
  image: string;
};

const FeedbackCard = ({ name, image }: FeedbackCardProps) => {
  return (
    <Card className="w-[400px] h-[600px]">
      <CardHeader>{name}</CardHeader>
      <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
        <Image
          src={image}
          alt="Feedback Trung Delvin"
          width={300}
          height={400}
        />
        <div className="flex items-center">
          <Image src="/star.svg" alt="" width={10} height={10} />
          <Image src="/star.svg" alt="" width={10} height={10} />
          <Image src="/star.svg" alt="" width={10} height={10} />
          <p className="pl-2">Được chính chủ xác nhận</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
