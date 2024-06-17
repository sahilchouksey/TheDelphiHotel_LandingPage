import Button from "@/components/ui/button";
import Text from "@/typography";

export default function LocationSection() {
  return (
    <div className="flex flex-col justify-center items-start ml-auto w-[52rem]">
      <Text
        tag="p"
        font="MillerBanner"
        className="relative italic text-[2rem] leading-[3rem] text-[#2f2625] capitalize before:content-[''] before:w-[2rem] before:h-[1px] before:absolute before:left-0 before:bottom-0 before:bg-primary before:block mb-[3rem]"
      >
        Our location
      </Text>
      <Text
        tag="p"
        font="RankingsCaps"
        className="normal text-[2.5rem] leading-[2.9rem] mb-[3rem] text-[#2f2625]"
      >
        FLOWER STREET FAME
      </Text>
      <Text
        tag="p"
        font="PrioriSans"
        className="normal text-[1.8rem] leading-[2.7rem] text-[#2f2625] "
      >
        Set your sights on a kaleidoscope of cultural hotspots, from art
        galleries and acclaimed eateries to flagship stores and architectural
        masterpieces, situated mere steps from our lobby.
      </Text>
      <Button
        type="secondary"
        className="mt-[3rem] flex justify-center items-center"
        animation="custom"
      >
        <Text
          tag="span"
          font="MillerBanner"
          className="text-[1.6rem] leading-[1.8rem] text-primary italic"
        >
          Gather together
        </Text>
      </Button>
    </div>
  );
}