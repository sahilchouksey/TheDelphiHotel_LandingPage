import Image from "@/components/ui/image";
import Section from "./section";
import Text from "@/typography";
import Button from "@/components/ui/button";
import AnimatedInput from "@/components/ui/animations/input";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SignUpForm = () => {
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
      ref={ref}
      className="text-white w-full mt-[4rem] relative overflow-hidden"
    >
      <Text
        tag="h2"
        font="MillerBanner"
        className="text-[3.3rem] leading-[3.8rem] text-[#fff] text-center"
        animation="fade-in-bottom"
      >
        Stay in The Know
      </Text>
      <form className="w-full mt-[3rem]">
        <motion.div
          className="flex justify-between items-center sm:flex-col"
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1.5 }}
        >
          <AnimatedInput
            id="firstName"
            label="First Name"
            className="w-full mr-[4rem] sm:mr-0 sm:mb-[2rem]"
            inputClassName="sm:w-full sm:ml-[2.5rem] xss:!ml-0"
          />
          <AnimatedInput
            id="lastName"
            label="Last Name"
            className="w-full mr-[4rem] sm:mr-0 sm:mb-[2rem]"
            inputClassName="sm:w-full sm:ml-[2.5rem] xss:!ml-0"
          />
          <AnimatedInput
            id="email"
            label="Email Address"
            type="email"
            className="w-full mr-0 sm:mb-[2rem]"
            inputClassName="sm:w-full sm:ml-[2.5rem] xss:!ml-0"
          />
        </motion.div>
        <motion.div
          className="flex flex-row justify-between items-center mt-[4rem] sm:flex-col sm:ml-[2rem]"
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-row space-x-6 gap-12 sm:flex-col sm:!space-x-0">
            <div className="flex flex-row justify-start items-center">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                className="mr-[1rem]"
                required
              />
              <label htmlFor="privacy" className="ml-[1rem]">
                <Text
                  tag="p"
                  font="PrioriSans"
                  className="normal text-[2rem] leading-[2.3rem] text-[#fff] normal"
                >
                  I have read and agree to the Privacy Policy.
                </Text>
              </label>
            </div>
            <div className="flex flex-row justify-start items-center">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                className="mr-[1rem]"
                required
              />
              <label htmlFor="subscribe" className="ml-[1rem]">
                <Text
                  tag="p"
                  font="PrioriSans"
                  className="normal text-[2rem] leading-[2.3rem] text-[#fff] normal"
                >
                  Yes, I would like to receive emails with exclusive specials
                  and offers.
                </Text>
              </label>
            </div>
          </div>

          <Button
            type="secondary"
            className="ml-auto mr-[12rem] xl:mr-0 flex justify-center items-center text-[#fff] before:filter before:invert after:filter after:invert sm:!mx-auto sm:!mt-[4rem]"
            animation="custom"
          >
            <Text
              tag="span"
              font="MillerBanner"
              className="text-[2.2rem] leading-[2.2rem] text-primary italic text-[#fff] filter invert"
            >
              Sign Up
            </Text>
          </Button>
        </motion.div>
      </form>
    </div>
  );
};

export default function Footer() {
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
    <Section
      backgroundColor="var(--color-primary)"
      childContainerClassName="relative clear pt-[8.5rem] flex justify-start items-center flex-col min-h-[30rem] mb-[15rem]"
    >
      <Image
        src="/assets/icons/logo-white.svg"
        alt="White logo"
        containerClassName="flex justify-center items-start min-h-min max-w-[211px] max-h-[74px]"
        animated="left-to-right"
      />
      <div className="mt-[5rem] flex flex-col justify-center items-center text-[#fff]">
        <Text
          tag="p"
          font="PrioriSans"
          className="flex justify-center items-center text-[2rem] leading-[2.3rem] hover:underline duration-300 ease-in-out"
          animation="fade-in-bottom"
        >
          <span>550 S Flower St</span>
        </Text>
        <Text
          tag="p"
          font="PrioriSans"
          className="flex justify-center items-center text-[2rem] leading-[2.3rem] hover:underline duration-300 ease-in-out"
          animation="fade-in-bottom"
        >
          Los Angeles,CA 90071{" "}
        </Text>
        <Text
          tag="p"
          font="PrioriSans"
          className="mt-[2rem] flex justify-center items-center text-[2rem] leading-[2.3rem] hover:underline duration-300 ease-in-out"
          animation="fade-in-bottom"
        >
          213-892-8080
        </Text>
      </div>
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1.5 }}
        className="mt-[5rem] call-to-actions w-full flex justify-between items-center border border-[#fff] sm:flex-col"
      >
        {["FAQ", "Media Inquiries", "Contact Us", "Careers"].map(
          (item, index) => (
            <Button
              type="primary"
              className="group py-[2rem] px-[8rem] rounded-none text-[#fff] hover:!text-primary lg:!px-[2rem]"
              animation="custom"
              animationClassName="left-to-right light rounded-none"
              containerClassName="h-full border border-l-[#fff] flex-1 flex justify-center items-center rounded-none sm:flex-1 sm:w-full"
              key={index}
            >
              <Text
                tag="span"
                font="MillerBanner"
                className="text-[2.5rem] leading-[3.8rem] italic "
              >
                {item}
              </Text>
            </Button>
          ),
        )}
      </motion.div>

      <SignUpForm />

      <div className="divider w-full bg-[#fff] h-[1px] w-[100vw] absolute bottom-[7rem] sm:bottom-[18rem] sm:hidden"></div>
      <div className="relative w-full flex justify-between items-center mt-[15rem] mb-[2rem] sm:flex-col sm:space-y-12 mb-[10rem] sm:hidden">
        <div className="flex justify-start items-center ">
          {[
            "Privacy Policy",
            "Accessibility",
            "Sitemap",
            "Consent Preferences",
          ].map((item, index) => (
            <Text
              tag="p"
              font="PrioriSans"
              className="text-[1.5rem] leading-[2.3rem] text-[#fff] "
              key={index}
            >
              {index !== 0 && <span className="mx-[1rem]">●</span>}
              {item}
            </Text>
          ))}
        </div>
        <div
          className="justify-center flex justify-center items-center absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]
                    sm:flex-col sm:space-y-12
                    "
        >
          <Text
            tag="p"
            font="PrioriSans"
            className="text-[1.5rem] leading-[2.3rem] text-[#fff] "
          >
            The Delphi Downtown LA. 2024. All rights reserved.{" "}
          </Text>
        </div>

        <div className="flex justify-end items-center">
          <Text
            tag="p"
            font="PrioriSans"
            className="text-[1.5rem] leading-[2.3rem] text-[#fff] "
          >
            Developed by Sahil
          </Text>
        </div>
      </div>
    </Section>
  );
}
