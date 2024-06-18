import { AnimatePresence, motion } from "framer-motion";
import Image from "../ui/image";
import InstagramIcon from "@/assets/instagram.svg";
import Text from "@/typography";
import { NavItems } from "./data";

interface NavbarPopupProps {
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
}
export default function NavbarPopup({
  isMenuOpen,
  handleMenuToggle,
}: NavbarPopupProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ x: "-100%" }} // Start from the left
          animate={{ x: 0 }} // Move to initial position
          exit={{ x: "-100%" }} // Animate back to the left when exiting
          transition={{ duration: 0.5, ease: "easeOut" }} // Smoother and quicker transition
          className="fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center transform"
        >
          <button
            className="absolute top-[5rem] right-[5rem] text-primary sm:!top-[1rem] sm:!right-[1rem]"
            onClick={handleMenuToggle} // Close button for the overlay
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="list-none text-center">
            {Object.entries(NavItems).map(([key]) => (
              <li key={key} className="min-w-min mb-[5rem] relative">
                <Text
                  tag="span"
                  font="RankingsCaps"
                  className="text-[2.4rem] leading-[3.6rem] text-primary uppercase cursor-pointer relative before:absolute before:left-[51%] before:right-[51%] before:bottom-0 before:h-[1px] before:bg-[#1D1D1D] before:transition-all before:duration-300 before:ease-in-out before:hover:left-0 before:hover:right-0 before:top-[3rem]"
                >
                  {key}
                </Text>
              </li>
            ))}
            <li className="flex justify-center items-center">
              <div className="bg-[#EEE] min-w-min rounded-full p-[2rem] flex justify-center items-center ">
                <Image src={InstagramIcon} alt="Instagram handle" />
              </div>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
