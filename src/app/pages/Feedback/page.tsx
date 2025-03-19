"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeedbackCard from "@/app/components/feeback_card/page";
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
    <div id="feedback" className="w-full bg-amber-50 px-20 py-10">
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default FeedBack;
