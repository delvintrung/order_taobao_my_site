"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeedbackCard from "@/app/components/FeedbackCard";
import { FeedbackCardProps } from "@/types/type";

const FeedBack = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  }, []);
  return (
    <div id="feedback" className="w-full bg-amber-50 md:px-20 px-10  py-10">
      <div>
        <p className="md:hidden text-2xl mx-auto font-bold text-center mb-5">
          Đánh giá từ khách hàng
        </p>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full md:max-w-[1400px]"
        >
          <CarouselContent>
            {feedbacks.length > 0 &&
              feedbacks.map((feedback: FeedbackCardProps, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <FeedbackCard
                      name={feedback.name}
                      link_info={feedback.link_info}
                      image_feedback={feedback.image_feedback}
                    />
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </Carousel>
        <p className="text-red-700 text-xl font-medium text-center md:hidden mt-5">
          Vuốt trái phải để xem thêm
        </p>
      </div>
    </div>
  );
};

export default FeedBack;
