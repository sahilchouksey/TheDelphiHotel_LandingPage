import Button from "@/components/ui/button";
import Image from "@/components/ui/image";
import Text from "@/typography";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function RoomsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.5 },
      });
    }
  }, [controls, isInView]);

  return (
    <div
      className="!my-[5rem] bg-[url(/assets/images/room.jpg)] bg-cover relative h-[70rem] sm:bg-none sm:!h-full sm:flex sm:justify-center sm:items-center sm:flex-col"
      ref={ref}
    >
      <Image
        src="/assets/images/room.jpg"
        alt="A room"
        className="object-cover w-full h-full"
      />

      <motion.div
        className="flex justify-start items-center bg-[#fff] absolute bottom-[3rem] right-[3rem] z-[12] max-w-[83rem] mdlg:right-0 mdlg:left-[50%] mdlg:!transform mdlg:!translate-x-[-50%] mdlg:w-[95%] mdlg:justify-center sm:relative sm:!w-full sm:flex-col sm:flex sm:justify-center sm:items-center sm:!bottom-0"
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1.5 }}
      >
        <div className="my-0 mx-auto w-custom-room-min mdlg:w-[25%] mdlg:m-0 text-center sm:!w-full">
          <Text
            tag="p"
            className="text-[2rem] leading-[3rem] absolute left-[1.5rem] top-[1rem] capitalize block before:content-[''] before:w-[2rem] before:h-[1px] before:absolute before:left-0 before:bottom-0 before:bg-primary"
            font="MillerBanner"
          >
            Rooms
          </Text>
          <Text
            tag="h2"
            className="text-[2.5rem] leading-[2.9rem] sm:text-[4.4rem] sm:leading-[5.2rem] text-primary normal sm:w-full"
            font="RankingsCaps"
            containerClassName="sm:w-full sm:text-start sm:mt-[6rem] sm:ml-[1rem]"
          >
            Peace & Quiet
          </Text>
        </div>
        <div className="w-custom-room-min-2 p-[7rem] pr-[2rem] mdlg:p-[5rem] border border-l-border_light sm:!w-full sm:border-0 sm:!pt-[2rem]">
          <Text
            tag="p"
            font="PrioriSans"
            className="text-[1.8rem] leading-[2.7rem] text-[#2f2625] normal"
          >
            From premium amenities to personalized experiences, our 205 spacious
            guest rooms and two penthouses create an environment of
            sophistication, elegance, and comfort that sets The Delphi apart.
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
              View All rooms
            </Text>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
