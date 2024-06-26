import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SwiperImageSlider from "@/components/ui/imageSlider";
import Text from "@/typography";
import Image from "@/components/ui/image";

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        y: ["-50%", "0%", "0%"],
        x: ["0%", "0%", "100%"],
        transition: {
          times: [0, 0.3, 1],
          duration: 3,
          ease: "easeInOut",
        },
      });
    }
  }, [isInView, controls]);

  return (
    <div className="min-w-min relative overflow-hidden" ref={ref}>
      <SwiperImageSlider
        slides={[
          "/assets/images/hero1.webp",
          "/assets/images/hero2.webp",
          "/assets/images/hero3.webp",
        ]}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-primary z-50 flex items-center justify-center z-[200]"
        animate={controls}
        initial={{ y: "-100%" }}
      >
        <Image
          src={"/assets/icons/logo-white.svg"}
          alt="Logo"
          className="max-w-[15.5rem] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      <div className="absolute left-1/2 transform -translate-x-1/2 z-[123] bottom-16 w-full text-center text-[#fff] italic flex justify-center items-center flex-col md:px-[2rem] md:bottom-[17rem]">
        <Text
          tag="h1"
          font="RankingsCaps"
          containerClassName="w-full h-full"
          className="text-[2.9rem] leading-[3.3rem] text-center absolute top-50 transform -translate-y-1/2 left-0 right-0 mt-[0] ml-[-44rem] flex justify-center items-center sm:!mx-auto"
        >
          <span>The new</span>
        </Text>

        <div className="hero-heading  w-full sm:!mt-[2rem]">
          <Text
            tag="h1"
            font="MillerBanner"
            className="text-[8.1rem] leading-[9.3rem] text-center md:text-[5.4rem] md:leading-[6.4rem] flex flex-wrap sm:flex-nowrap sm:block justify-center items-center"
            containerClassName="w-full"
          >
            <span className="whitespace-nowrap sm:whitespace-normal">
              Center of
            </span>
            <Text
              tag="span"
              font="RankingsCaps"
              className="mx-[2rem] ml-[4rem] whitespace-nowrap sm:whitespace-normal"
            >
              L.A.
            </Text>
            <span className="whitespace-nowrap sm:whitespace-normal">
              Culture
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
}
