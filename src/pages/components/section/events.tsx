import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Button from "@/components/ui/button";
import Image from "@/components/ui/image";
import Text from "@/typography";

export default function EventsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        y: ["-100%", "0%", "0%"],
        x: ["0%", "0%", "100%"],
        transition: {
          times: [0, 0.3, 1],
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
  }, [isInView, controls]);
  return (
    <div ref={ref} className="event-section-container">
      <figure className="relative w-custom-event-min overflow-hidden">
        <Image
          alt="a woman talking on a cell phone"
          src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-events-64be95d53df4d.jpg"
          data-srcset="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-events-64be95d53df4d.jpg"
          className="object-cover w-full"
          containerClassName="w-full"
        ></Image>{" "}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-primary z-50 flex items-center justify-center z-[98]"
          animate={controls}
          initial={{ y: "-100%" }}
        >
          <Image
            src={"/assets/icons/logo-white.svg"}
            alt="Logo"
            className="max-w-[15.5rem] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      </figure>
      <div className="w-custom-event-min-2 h-full pr-[2rem] pl-[9%] z-[99] bg-[#254844]">
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
          animation="fade-in-bottom"
        >
          Organized Occasions
        </Text>

        <Text
          tag="p"
          font="PrioriSans"
          className="text-[1.8rem] leading-[2.7rem] text-[#FBF8F2] normal"
          animation="fade-in-bottom"
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
            animation="fade-in-bottom"
          >
            Gather together
          </Text>
        </Button>
      </div>
    </div>
  );
}
