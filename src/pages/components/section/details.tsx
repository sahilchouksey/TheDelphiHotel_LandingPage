import { useState } from "react";
import DynamicComponentLayout from "@/components/ui/dynamicLayout";
import { detailsData } from "./data";

import Text from "@/typography";
import LineAnimation from "@/components/ui/animations/line";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function DetailSection() {
  const [currentSlideId, setSlideId] = useState(0);

  const width = useWindowWidth();
  let customStretch = 0;

  if (width <= 950) {
    customStretch = 0.8;
  }
  const content = detailsData[currentSlideId];
  return (
    <div className="relative flex justify-center items-center px-[4rem] py-[4rem] relative mdlg:flex mdlg:flex-col mdlg:!py-[2rem] mdlg:!px-[2rem] ">
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

      <div className="w-[20%] flex justify-center items-center flex-col relative xl:w-[15%] mdlg:!w-full mdlg:!mt-[-3rem] mdlg:!ml-[-10rem]">
        <Text
          tag="h2"
          font="RankingsCaps"
          className="text-[5rem] leading-[5rem] text-primary sm:text-[4rem]"
        >
          The Delphi
        </Text>
        <Text
          tag="p"
          font="MillerBanner"
          className="text-[3.9rem] leading-[3.9rem] text-primary pl-[7rem] mr-[-4rem] mdlg:!pl-[12rem] mdlg:!mt-[-1rem]"
          animation="fade-in-left"
        >
          In Detail
        </Text>
      </div>
      <DynamicComponentLayout
        currentSlideId={currentSlideId}
        setSlideId={setSlideId}
        className="mdlg:mt-[3rem] max-w-content h-[100%] w-[80%] xl:w-[85%] xl:ml-[-5rem] mdlg:mb-[10rem] sm:pl-[2rem]"
        slides={detailsData.map((data) => data.image)}
        paginationContainerClassName="mdlg:!left-[50%] mdlg:!right-0 mdlg:!transform mdlg:!translate-x-[-50%] mdlg:!min-w-min min-w-min mdlg:flex mdlg:items-center mdlg:justify-center sm:!bottom-0"
        childContainerClassName="flex mdlg:flex-col"
        customStretch={customStretch}
      >
        <div className="mdlg:flex mdlg:flex-col flex-col">
          <Text
            tag="h2"
            font="RankingsCaps"
            className="text-[2.5rem] leading-[2.9rem] text-primary normal max-w-[14rem] hidden mdlg:!flex"
            animation="fade-in-bottom"
          >
            0{currentSlideId + 1}
          </Text>
          <Text
            tag="h2"
            font="RankingsCaps"
            className="mt-[2rem] text-[2.5rem] leading-[2.9rem] text-primary normal max-w-[14rem] mdlg:!max-w-full"
            animation="fade-in-bottom"
          >
            {content.title}
          </Text>

          <Text
            tag="p"
            font="PrioriSans"
            className="mt-[1.4rem] text-[1.8rem] leading-[2.7rem] text-[#2f2625] normal max-w-[28rem] mdlg:!max-w-full"
            animation="fade-in-bottom"
          >
            {content.content}
          </Text>
        </div>
      </DynamicComponentLayout>
    </div>
  );
}
