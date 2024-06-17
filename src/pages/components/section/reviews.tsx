import { useState } from "react";
import DynamicComponentLayout from "@/components/ui/dynamicLayout";
import Text from "@/typography";
import { reviewData } from "./data";

export default function ReviewsSection() {
  const [currentSlideId, setSlideId] = useState(0);

  const reviews = reviewData.map((review) => (
    <>
      <Text
        tag="p"
        font="RankingsCaps"
        className="text-[2.5rem] leading-[2.9rem] text-primary normal text-center"
      >
        {review.title}
      </Text>

      <Text
        tag="p"
        font="MillerBanner"
        className="text-[2.4rem] leading-[3.6rem] text-primary italic text-center !text-[#2f2625]"
      >
        {review.content}
      </Text>
      <Text
        tag="p"
        font="MillerBanner"
        className="mt-[5rem] text-[2rem] leading-[2.3rem] !text-[#2f2625] italic text-center "
      >
        {review.from}
      </Text>
    </>
  ));

  const currentSlide = reviews[currentSlideId];
  return (
    <div className="w-custom-review-min my-0 mx-auto py-[10rem]">
      <Text
        tag="h2"
        className="text-[5rem] leading-[5.8rem] text-center mb-[5rem]"
        font="MillerBanner"
      >
        Experience Seekers Speak
      </Text>
      <DynamicComponentLayout
        className="w-full cursor-pointer "
        currentSlideId={currentSlideId}
        setSlideId={setSlideId}
        slides={reviews}
        customSlides={reviews}
        currentSlide={currentSlide}
      ></DynamicComponentLayout>
    </div>
  );
}
