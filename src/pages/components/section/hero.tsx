import SwiperImageSlider from "@/components/ui/imageSlider";
import Text from "@/typography";

export default function HeroSection() {
  return (
    <div className="min-w-min relative">
      <SwiperImageSlider
        slides={[
          "/assets/images/hero1.webp",
          "/assets/images/hero2.webp",
          "/assets/images/hero3.webp",
        ]}
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 z-[123] bottom-16 w-full text-center text-[#fff] italic ">
        <Text
          tag="h1"
          font="RankingsCaps"
          className="text-[2.9rem] leading-[3.3rem] text-center absolute top-50 transform -translate-y-1/2 left-0 right-0 mt-[0] ml-[-44rem]"
        >
          The new
        </Text>

        <div className="hero-heading">
          <Text
            tag="h1"
            font="MillerBanner"
            className="text-[8.1rem] leading-[9.3rem] text-center"
          >
            Center of
            <Text
              tag="span"
              font="RankingsCaps"
              className="mx-[2rem] ml-[4rem]"
            >
              L.A.
            </Text>
            Culture
          </Text>
        </div>
      </div>
    </div>
  );
}
