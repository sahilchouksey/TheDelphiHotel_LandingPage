import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Button from "../button";
import Image from "../image";
import Text from "@/typography";
import ArrowRight from "@/assets/arrow-right.svg";
import ArrowLeft from "@/assets/arrow-left.svg";

interface DynamicComponentLayoutProps {
  currentSlideId: number;
  setSlideId: (slideId: number) => void;
  slides: string[] | React.ReactNode[];
  className?: string;
  children?: React.ReactNode;
  customSlides?: React.ReactNode[];
  currentSlide?: React.ReactNode;
  paginationContainerClassName?: string;
  childContainerClassName?: string;
  hideCounter?: boolean;
  customStretch?: number;
}

const DynamicComponentLayout = ({
  currentSlideId,
  setSlideId,
  slides,
  className,
  children,
  customSlides,
  currentSlide,
  paginationContainerClassName,
  childContainerClassName,
  hideCounter,
  customStretch,
}: DynamicComponentLayoutProps) => {
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    setSlideId(swiper.realIndex);
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const maxWidth =
    customStretch && customStretch > -1
      ? customStretch
      : customSlides
      ? 0.6
      : 0.4;

  return (
    <div
      className={`w-full h-full border-1 border-[#707070] ${className} ${
        !customSlides && ""
      }`}
    >
      <div
        className={`flex justify-between items-center ${childContainerClassName}`}
      >
        <Swiper
          effect="fade"
          onSlideChange={handleSlideChange}
          className={`${
            customSlides
              ? ""
              : "w-[60%] detail-section-center relative mdlg:w-full !max-w-[56rem]"
          }`}
          modules={[EffectFade, Autoplay]}
          style={{
            maxWidth: `calc(var(--max-stretch) * ${maxWidth})`,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          ref={swiperRef}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              {currentSlide ? (
                currentSlide
              ) : (
                <Image
                  src={typeof slide === "string" ? slide : ""}
                  alt={`slide-${index}`}
                  className="circular relative z-[-5]"
                  animated="circle"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {!customSlides && <div className="w-[25%] mdlg:w-full">{children}</div>}
      </div>
      {!hideCounter && (
        <div className="absolute flex top-[15px] right-[15px] mdlg:hidden">
          <Text
            tag="h2"
            font="RankingsCaps"
            className="text-[2.9rem] leading-[3.3rem] text-[#2f2625]"
          >
            0{currentSlideId + 1}
          </Text>
        </div>
      )}

      <div
        className={`absolute flex bottom-0 right-0 ${paginationContainerClassName}`}
      >
        <Button
          type="primary"
          animation="custom"
          animationClassName="hover:bg-[#254844] hover:text-[#fff] transition-all duration-300 ease-in-out group"
          className="w-[9rem] h-[7rem] flex justify-center items-center border border-border_light"
          onClick={prevSlide}
        >
          <Image
            src={ArrowLeft}
            alt="Arrow Left"
            className="w-[2.5rem] h-[1.8rem]"
            containerClassName="flex justify-center items-center w-[2.5rem] h-[1.8rem] group-hover:filter-custom group-hover:translate-x-[-0.5rem] transition-all duration-200 ease-in-out"
          />
        </Button>

        <Button
          type="primary"
          animation="custom"
          animationClassName="hover:bg-[#254844] group transition-all duration-300 ease-in-out"
          className="w-[9rem] h-[7rem] flex justify-center items-center border border-border_light"
          onClick={nextSlide}
        >
          <Image
            src={ArrowRight}
            alt="Arrow Right"
            className="w-[2.5rem] h-[1.8rem]"
            containerClassName="flex justify-center items-center w-[2.5rem] h-[1.8rem] group-hover:filter-custom group-hover:translate-x-[0.5rem] transition-all duration-200 ease-in-out"
          />
        </Button>
      </div>
    </div>
  );
};

export default DynamicComponentLayout;
