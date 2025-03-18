import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeedbackCard from "@/app/components/feeback_card/page";

const FeedBack = () => {
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <FeedbackCard
                    name="Trung"
                    info_url="https://www.facebook.com/le.van.trung.450113"
                    image="/profile.jpg"
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
