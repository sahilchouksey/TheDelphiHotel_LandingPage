import LineAnimation from "@/components/ui/animations/line";
import Image from "@/components/ui/image";
import Text from "@/typography";

export default function IntroSection() {
  return (
    <div className="flex flex-row justify-between items-center flex-row-reverse">
      <LineAnimation />;
      <Image
        alt="Shiny building"
        src="/assets/images/intro.webp"
        containerClassName=" !w-[50%]"
        className="intro-img px-[2.5rem] py-[1rem]"
      />
      <div className="flex flex-col px-[10rem] !w-[50%]">
        <Text
          tag="h1"
          font="RankingsCaps"
          className="text-[10.4rem] leading-[8.3rem] text-primary uppercase"
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
