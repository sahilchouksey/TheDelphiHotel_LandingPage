import { useState } from "react";
import DynamicComponentLayout from "@/components/ui/dynamicLayout";
import { detailsData } from "./data";

import Text from "@/typography";
import LineAnimation from "@/components/ui/animations/line";

export default function DetailSection() {
  const [currentSlideId, setSlideId] = useState(0);

  const content = detailsData[currentSlideId];
  return (
    <div className="relative flex justify-center items-center px-[4rem] py-[4rem] relative ">
      <LineAnimation
        className="!h-[0.5px] absolute top-[-5rem] left-0 "
        direction="horizontal"
      />
      <LineAnimation
        className="!h-[0.5px] absolute top-[100%] left-0"
        direction="horizontal"
      />
      <LineAnimation
        className="!w-[0.5px] absolute top-[-5rem] left-0 h-custom "
        direction="vertical"
        customTo="calc(100% + 5rem)"
      />

      <LineAnimation
        className="!w-[0.5px] absolute top-[-5rem] right-0 h-custom"
        direction="vertical"
        customTo="calc(100% + 5rem)"
      />

      <div className="w-[20%] flex justify-center items-center flex-col relativexl:w-[15%]">
        <Text
          tag="h2"
          font="RankingsCaps"
          className="text-[5rem] leading-[5rem] text-primary"
        >
          The Delphi
        </Text>
        <Text
          tag="p"
          font="MillerBanner"
          className="text-[3.9rem] leading-[3.9rem] text-primary pl-[7rem] mr-[-4rem]"
          animation="fade-in-left"
        >
          In Detail
        </Text>
      </div>
      <DynamicComponentLayout
        currentSlideId={currentSlideId}
        setSlideId={setSlideId}
        className="max-w-content h-[100%] relative w-[80%] xl:w-[85%] xl:ml-[-5rem]"
        slides={detailsData.map((data) => data.image)}
        paginationContainerClassName="right-[-4rem] bottom-[-4rem]"
      >
        <div className="ml-[-8rem]">
          <Text
            tag="h2"
            font="RankingsCaps"
            className="text-[2.5rem] leading-[2.9rem] text-primary normal max-w-[14rem]"
            animation="fade-in-bottom"
          >
            {content.title}
          </Text>

          <Text
            tag="p"
            font="PrioriSans"
            className="mt-[1.4rem] text-[1.8rem] leading-[2.7rem] text-[#2f2625] normal max-w-[28rem]"
            animation="fade-in-bottom"
          >
            {content.content}
          </Text>
        </div>
      </DynamicComponentLayout>
    </div>
  );
}
