import { useState } from "react";
import DynamicComponentLayout from "@/components/ui/dynamicLayout";
import { detailsData } from "./data";

import Text from "@/typography";

export default function DetailSection() {
  const [currentSlideId, setSlideId] = useState(0);

  const content = detailsData[currentSlideId];
  return (
    <div className="flex justify-center items-center px-[4rem] py-[4rem] relative ">
      <div className="w-[20%] flex justify-center items-center flex-col relative">
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
        >
          In Detail
        </Text>
      </div>
      <DynamicComponentLayout
        currentSlideId={currentSlideId}
        setSlideId={setSlideId}
        className="max-w-content h-[100%] relative"
        slides={detailsData.map((data) => data.image)}
      >
        <div className="ml-[-8rem]">
          <Text
            tag="h2"
            font="RankingsCaps"
            className="text-[2.5rem] leading-[2.9rem] text-primary normal max-w-[14rem]"
          >
            {content.title}
          </Text>

          <Text
            tag="p"
            font="PrioriSans"
            className="mt-[1.4rem] text-[1.8rem] leading-[2.7rem] text-[#2f2625] normal max-w-[28rem]"
          >
            {content.content}
          </Text>
        </div>
      </DynamicComponentLayout>
    </div>
  );
}
