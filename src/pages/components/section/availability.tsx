import LineAnimation from "@/components/ui/animations/line";
import Button from "@/components/ui/button";
import Text from "@/typography";

export default function AvailablilitySection() {
  return (
    <div className="relative w-full h-full  flex flex-row justify-between items-center">
      <LineAnimation
        className="!h-[0.5px] absolute top-0 left-0"
        direction="horizontal"
      />
      <LineAnimation
        className="!w-[0.5px] absolute top-0 left-0"
        direction="vertical"
      />
      <Button
        type="primary"
        className="text-primary px-[5rem] py-[2.2rem] xl:px-[3.6rem] xl:py-[1.6rem] lg:!px-[2px] lg:!py-[2rem] flex justify-center items-center"
        containerClassName="flex-1 h-full flex justify-center items-center"
        animation="none"
        backgroundColor="transparent"
      >
        <Text
          tag="span"
          font="RankingsCaps"
          className="text-[2.1rem] leading-[2.4rem] uppercase"
        >
          Check in
        </Text>
      </Button>
      <Button
        type="primary"
        className="text-primary px-[5rem] py-[2.2rem] xl:px-[3.6rem] xl:py-[1.6rem] lg:!px-[2px] lg:!py-[2rem] flex justify-center items-center"
        containerClassName="flex-1 h-full flex justify-center items-center border-l-[1px] border-border_light"
        animation="none"
        backgroundColor="transparent"
      >
        <Text
          tag="span"
          font="RankingsCaps"
          className="text-[2.1rem] leading-[2.4rem] uppercase"
        >
          Check Out
        </Text>
      </Button>

      <Button
        type="primary"
        className="text-primary px-[5rem] py-[2.2rem] xl:px-[3.6rem] xl:py-[1.6rem] lg:!px-[2px] lg:!py-[2rem] flex justify-between items-center mdlg:flex-col mdlg:justify-center"
        containerClassName="flex-1 h-full flex justify-center items-center  border-l-[1px] border-border_light max-w-[20rem]"
        animation="none"
        backgroundColor="transparent"
      >
        <Text
          tag="span"
          font="RankingsCaps"
          className="text-[1.3rem] leading-[1.5rem] uppercase relative left-[-1.8rem] mdlg:left-[-1rem]"
          containerClassName="flex"
        >
          Rooms
        </Text>
        <select className="custom-select ml-[4rem] max-w-[6rem] !w-[5rem]">
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
        </select>
      </Button>

      <Button
        type="primary"
        className="text-primary px-[5rem] py-[2.2rem] xl:px-[3.6rem] xl:py-[1.6rem] lg:!px-[2px] lg:!py-[2rem] flex justify-between items-center mdlg:flex-col mdlg:justify-center"
        containerClassName="flex-1 h-full flex justify-center items-center border-l-[1px] border-border_light max-w-[20rem]"
        animation="none"
        backgroundColor="transparent"
      >
        <Text
          tag="span"
          font="RankingsCaps"
          className="text-[1.3rem] leading-[1.5rem] uppercase relative left-[-1.8rem] mdlg:left-[-1rem]"
          containerClassName="flex"
        >
          Guests
        </Text>
        <select className="custom-select ml-[4rem] max-w-[6rem] !w-[5rem]">
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
        </select>
      </Button>

      <Button
        type="primary"
        className="text-[#fff] px-[5rem] py-[2.2rem] xl:px-[3.6rem] xl:py-[1.6rem] lg:!px-[2px] lg:!py-[2rem] flex justify-center items-center bg-primary w-full h-full rounded-md scale-y-[1.05] "
        containerClassName="h-full flex justify-center items-center border-l-[1px] border-border_light w-custom-min"
        animation="left-to-right"
      >
        <Text
          tag="span"
          font="MillerBanner"
          className="text-[2.6rem] leading-[3rem] relative z-[2]"
        >
          Check Availability
        </Text>
      </Button>
    </div>
  );
}
