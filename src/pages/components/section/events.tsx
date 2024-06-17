import Button from "@/components/ui/button";
import Image from "@/components/ui/image";
import Text from "@/typography";

export default function EventsSection() {
  return (
    <div className="event-section-container">
      <figure className="relative w-custom-event-min">
        <Image
          alt="a woman talking on a cell phone"
          src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-events-64be95d53df4d.jpg"
          data-srcset="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-events-64be95d53df4d.jpg"
          className="object-cover w-full"
          containerClassName="w-full"
        ></Image>{" "}
      </figure>
      <div className="w-custom-event-min-2 pr-[2rem] pl-[9%]">
        <Text
          tag="p"
          font="RankingsCaps"
          className="text-events text-[#FBF8F2] block absolute top-[-3.8rem] right-[-1.3rem]"
        >
          Events
        </Text>

        <Text
          tag="h2"
          font="RankingsCaps"
          className="mb-[2rem] text-[2.5rem] leading-[2.9rem] text-[#FBF8F2] normal"
        >
          Organized Occasions
        </Text>

        <Text
          tag="p"
          font="PrioriSans"
          className="text-[1.8rem] leading-[2.7rem] text-[#FBF8F2] normal"
        >
          Bring together a few friends and make a few more while you’re with us.
          From casual to corporate, we’ve got all the space and amenities you
          need, and then some.
        </Text>
        <Button
          type="secondary"
          className="mt-[3rem] flex justify-center items-center after:filter after:invert before:filter before:invert"
          animation="custom"
        >
          <Text
            tag="span"
            font="MillerBanner"
            className="text-[1.6rem] leading-[1.8rem] text-[#FBF8F2] italic"
          >
            Gather together
          </Text>
        </Button>
      </div>
    </div>
  );
}
