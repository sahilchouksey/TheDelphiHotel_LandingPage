import LineAnimation from "@/components/ui/animations/line";
import Image from "@/components/ui/image";
import Text from "@/typography";

export default function IntroSection() {
  return (
    <div className="relative my-[4rem] flex justify-between items-center flex-row-reverse mdlg:flex-col">
      <LineAnimation
        className="!h-[0.5px] absolute top-[-5rem] left-0 "
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

      <Image
        alt="Shiny building"
        src="/assets/images/intro.webp"
        containerClassName=" !w-[50%] mdlg:!w-full mdlg:!py-[2.5rem] mdlg:px-[3rem] sm:!pt-0 sm:!mt-[-4rem]"
        className="intro-img px-[2.5rem] py-[1rem] relative z-[49]"
        animated="left-to-right"
      />
      <div className="absolute w-[0.5px] top-0 left-[50%] h-custom transform translate-x-[-50%] bg-border_light translate-y-[-5rem] mdlg:!w-full mdlg:h-[0.5px] mdlg:top-[50%] mdlg:left-0 mdlg:translate-x-0 mdlg:translate-y-[-50%] mdlg:relative mdlg:transform-none"></div>
      <div className="relative z-[50] flex flex-col px-[10rem] xl:px-[6rem] lg:!px-[1rem] !w-[50%] mb-[3rem] mdlg:!w-full mdlg:!py-[4rem] mdlg:!px-[4rem] mdlg:!pb-[1rem] mdlg:mt-[2rem]">
        <Text
          tag="h1"
          font="RankingsCaps"
          className="text-[10.4rem] leading-[8.3rem] text-primary uppercase xxs:!text-[5rem] mdlg:text-[8.4rem] sm:!text-[6.6rem] mdlg:leading-[9.3rem] sm:!leading-[7.4rem]"
        >
          THE DELPHI LOS ANGELES
        </Text>

        <Text
          tag="p"
          font="MillerBanner"
          className="text-[1.9rem] leading-[2.9rem] text-primary"
        >
          In Ancient Greece, Delphi was considered the center of the world. A
          few thousand years later, that essence now resides at 550 Flower
          Street: a staple of downtown Los Angeles’ silhouette. Once the
          headquarters of Superior Oil, and then the focal point of the city’s
          early 2000s revitalization, our address is once again rewriting the
          script for creativity, culture, and hospitality.
        </Text>
      </div>
    </div>
  );
}
