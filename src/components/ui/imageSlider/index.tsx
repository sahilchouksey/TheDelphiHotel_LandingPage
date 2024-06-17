// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";
import Image from "../image";

interface SwiperImageSliderProps {
  slides: string[];
}

export default function SwiperImageSlider({ slides }: SwiperImageSliderProps) {
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
      modules={[EffectCreative, Autoplay]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      className="mySwiper custom-swiper"
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
