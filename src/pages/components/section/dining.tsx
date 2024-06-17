import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "@/components/ui/button";
import Image from "@/components/ui/image";
import Text from "@/typography";

export default function DiningSection() {
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
    <div className="dining-section-container relative pb-[7rem]" ref={ref}>
      <figure className="text-center relative z-[1] m-0">
        <Image
          src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/thedelphidowntownla-homepage-dining-image-03-650e00b0beeed.png"
          alt="a plate with a slice of pizza on it"
          className="max-w-[56rem] bg-cover object-cover align-middle z-[-1]"
          containerClassName="flex justify-center items-center z-[-1]"
          animated="circle"
        />
        <figcaption className="block" data-one="dining">
          <div
            className="absolute left-[50%] translate-x-[-50%] w-full flex justify-center"
            style={{ top: "calc(10% + 2rem)" }}
          >
            <span className="">d</span>
            <span className="letter1 ">i</span>
            <span className="">n</span>
            <span className="">i</span>
            <span className="letter2 ">n</span>
            <span className="">g</span>
          </div>
        </figcaption>
      </figure>
      <motion.div
        className="mt-[-6.8rem] relative pl-[13rem] max-w-[44rem] z-[1]"
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1.5 }}
      >
        <Text
          tag="h2"
          className="text-[2.5rem] leading-[2.9rem] normal"
          font="RankingsCaps"
        >
          Intrigue the Appetite
        </Text>
        <Text
          tag="span"
          className="text-[1.8rem] leading-[2.7rem] text-[#2f2625] normal"
          font="PrioriSans"
        >
          Let your palate decide what’s on the table—classic American diner
          fare, Japanese-omakase creations, or some light bites to get started.
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
            Let's eat
          </Text>
        </Button>
      </motion.div>
    </div>
  );
}
