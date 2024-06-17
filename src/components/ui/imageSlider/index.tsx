// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "../image";

interface SwiperImageSliderProps {
  slides: string[];
  slidesPerView?: number;
  freeMode?: boolean;
  pagination?: boolean;
  effectCreative?: boolean;
  spaceBetween?: number;
}

export default function SwiperImageSlider({
  slides,
  slidesPerView = 1,
  freeMode = false,
  pagination = false,
  effectCreative = true,
  spaceBetween = 0,
}: SwiperImageSliderProps) {
  const modules = [Autoplay];
  if (effectCreative) {
    modules.push(EffectCreative);
  }
  if (freeMode) {
    modules.push(FreeMode);
  }
  if (pagination) {
    modules.push(Pagination);
  }

  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={modules}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper custom-swiper"
      slidesPerView={slidesPerView}
      freeMode={freeMode}
      spaceBetween={spaceBetween}
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="w-full h-full ">
          <Image
            src={slide}
            alt={`slide-${index}`}
            className="h-[64rem]"
          ></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
