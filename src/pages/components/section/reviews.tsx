import { useState } from "react";
import DynamicComponentLayout from "@/components/ui/dynamicLayout";
import Text from "@/typography";
import { reviewData } from "./data";
import LineAnimation from "@/components/ui/animations/line";

export default function ReviewsSection() {
  const [currentSlideId, setSlideId] = useState(0);

  const reviews = reviewData.map((review) => (
    <>
      <Text
        tag="p"
        font="RankingsCaps"
        className="text-[2.5rem] leading-[2.9rem] text-primary normal text-center"
        animation="fade-in-bottom"
      >
        {review.title}
      </Text>

      <Text
        tag="p"
        font="MillerBanner"
        className="text-[2.4rem] leading-[3.6rem] text-primary italic text-center !text-[#2f2625] opacity-60"
        animation="fade-in-bottom"
      >
        {review.content}
      </Text>
      <Text
        tag="p"
        font="MillerBanner"
        className="mt-[5rem] text-[2rem] leading-[2.3rem] !text-[#2f2625] italic text-center "
        animation="fade-in-bottom"
      >
        {review.from}
      </Text>
    </>
  ));

  const currentSlide = reviews[currentSlideId];
  return (
    <div className="w-custom-review-min my-0 mx-auto py-[10rem]">
      <LineAnimation
        className="!h-[0.5px] absolute top-[100%] left-0"
        direction="horizontal"
      />

      <LineAnimation
        className="!w-[0.5px] absolute top-0 right-0 h-custom"
        direction="vertical"
      />
      <LineAnimation
        className="!w-[0.5px] absolute top-0 left-0 h-custom"
        direction="vertical"
      />
      <Text
        tag="h2"
        className="text-[5rem] leading-[5.8rem] text-center mb-[5rem]"
        font="MillerBanner"
        animation="fade-in-left"
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
        paginationContainerClassName="mdlg:!left-[50%] mdlg:!right-0 mdlg:!transform mdlg:!translate-x-[-50%] mdlg:!min-w-min min-w-min mdlg:flex mdlg:items-center mdlg:justify-center"
        customStretch={1}
      ></DynamicComponentLayout>
    </div>
  );
}
