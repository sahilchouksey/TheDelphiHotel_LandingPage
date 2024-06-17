import { useState } from "react";
import LogoIcon from "@/assets/logo.svg";
import { NavItems, NavContactItems } from "./data";
import Text from "@/typography";
import Button from "@/components/ui/button";
import NavbarPopup from "./popup";
import useScroll from "@/hooks/useScroll";
import Image from "../ui/image";
import BurgerIcon from "@/assets/burger-menu.svg";
import PhoneIcon from "@/assets/phone.svg";

export default function Navbar() {
  const scroll = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu open/close

  const isScrolled: boolean = scroll > 50; // Check if the user has scrolled
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <>
      <div className="sticky top-0 z-[1000] container-full w-full bg-background w-full">
        <div className="container">
          <nav
            className={`container-center navbar w-full flex justify-between items-center sm:justify-center sm:py-[2rem] duration-300 ease-in-out transition-all ${
              isScrolled ? "sm:py-[2rem] sm:pt-[2rem]" : ""
            }`}
          >
            <a className="navbar-brand block " href="#">
              <img
                src={LogoIcon}
                alt="Logo"
                className={`max-w-[15.5rem] duration-300 ease-in-out transition-all ${
                  isScrolled ? "sm:max-w-[12rem]" : ""
                }`}
              />
            </a>

            <div className="flex-1 flex flex-col justify-around pr-[3.5rem] pl-[4rem] sm:hidden">
              <ul className="w-full flex-1 flex flex-row text-primary list-none justify-end gap-8 items-center">
                {Object.entries(NavContactItems).map(([key, value]) => (
                  <li
                    key={key}
                    className="min-w-min text-center flex justify-center items-center gap-4"
                  >
                    <img src={value} alt={key} className="max-w-[2.4rem]" />
                    <Text
                      tag="span"
                      font="PrioriSans"
                      className="leading-[2.4rem] text-[1.6rem] capitalize"
                    >
                      {key}
                    </Text>
                  </li>
                ))}
                <li className="ml-[3rem] hidden mdlg:block mdlg:relative top-[1px]">
                  <button className="flex" onClick={handleMenuToggle}>
                    {" "}
                    <Text
                      tag="h2"
                      font="RankingsCaps"
                      className="uppercase text-[2rem] leading-[2.3rem] text-primary normal hamburger"
                    >
                      Menu
                    </Text>
                  </button>
                </li>
              </ul>

              <ul className="mdlg:w-0 mdlg:hidden mdlg:h-0 w-full navbar-nav flex flex-row text-primary list-none justify-between">
                {Object.entries(NavItems).map(([key]) => (
                  <li
                    key={key}
                    className="cursor-pointer relative before:absolute before:left-[51%] before:right-[51%] before:bottom-0 before:h-[1px] before:bg-[#1D1D1D] before:transition-all before:duration-300 before:ease-in-out before:hover:left-0 before:hover:right-0"
                  >
                    <Text
                      tag="span"
                      font="PrioriSans"
                      className="leading-[2.4rem] text-[1.6rem] uppercase xl:text-[1.4rem]"
                    >
                      {key}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              type="primary"
              width={200}
              height={50}
              backgroundColor="transparent"
              animation="custom"
              animationClassName="hover:!bg-primary hover:!text-background transition-all duration-300 ease-in-out"
              className="text-primary px-[5rem] py-[5.75rem] mdlg:py-[4.2rem] flex justify-center items-center"
              containerClassName="border-x-[1px] border-[#000] sm:hidden"
            >
              <Text
                tag="span"
                font="MillerBanner"
                className="text-[2.6rem] leading-[3rem]"
              >
                Reserve
              </Text>
            </Button>
          </nav>
        </div>
        <NavbarPopup
          isMenuOpen={isMenuOpen}
          handleMenuToggle={handleMenuToggle}
        />
      </div>
      <div className="sm:fixed sm:z-[999] sm:w-full sm:flex sm:bottom-0 sm:left-0 sm:border sm:border-primary sm:bg-background hidden">
        <div
          className="flex-1 flex justify-center items-center space-x-4 border border-r-[#000] border-[0.5px]"
          onClick={handleMenuToggle}
        >
          <Image
            src={BurgerIcon}
            alt="Burger Icon"
            containerClassName="!w-[2rem] !h-[1.5rem]"
            className="w-full h-full"
          />
          <Text
            tag="span"
            font="RankingsCaps"
            className="text-[1.4rem] leading-[1.6rem] text-primary"
          >
            Menu
          </Text>
        </div>
        <div className="flex-1 flex justify-center items-center space-x-4 border border-r-[#000] border-[0.5px]">
          <Image
            src={PhoneIcon}
            alt="Phone Icon"
            containerClassName="!w-[2rem] !h-[2rem]"
            className="w-full h-full"
          />
          <Text
            tag="span"
            font="RankingsCaps"
            className="text-[1.4rem] leading-[1.6rem] text-primary"
          >
            Call
          </Text>
        </div>
        <Button
          type="primary"
          className="text-[#fff] px-[5rem] py-[2.2rem] flex justify-center items-center bg-primary w-full h-full rounded-md scale-y-[1.05] "
          containerClassName="h-full flex justify-center items-center border-l-[1px] border-border_light w-[50%]"
          animation="none"
        >
          <Text
            tag="span"
            font="MillerBanner"
            className="text-[1.8rem] leading-[2.1rem] relative z-[2]"
          >
            Check Availability
          </Text>
        </Button>
      </div>
    </>
  );
}
