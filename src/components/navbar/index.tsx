import LogoIcon from "@/assets/logo.svg";
import { NavItems, NavContactItems } from "./data";
import Text from "@/typography";
import Button from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-[1000] container-full w-full bg-background w-full">
      <div className="container">
        <nav className="container-center navbar w-full flex justify-between items-center">
          <a className="navbar-brand" href="#">
            <img src={LogoIcon} alt="Logo" className="max-w-[15.5rem]" />
          </a>

          <div className="flex-1 flex flex-col justify-around pr-[3.5rem] pl-[4rem]">
            <ul className="w-full flex-1 flex flex-row text-primary list-none justify-end gap-8 ">
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
            </ul>

            <ul className="w-full navbar-nav flex flex-row text-primary list-none justify-between">
              {Object.entries(NavItems).map(([key]) => (
                <li key={key} className="min-w-min text-center">
                  <Text
                    tag="span"
                    font="PrioriSans"
                    className="leading-[2.4rem] text-[1.6rem] uppercase"
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
            className="text-primary px-[5rem] py-[5.75rem] flex justify-center items-center"
            containerClassName="border-x-[1px] border-border"
          >
            <Text
              tag="span"
              font="MillerBanner"
              className="text-[2.6rem] leading-[3rem]"
            >
              {" "}
              Reserve
            </Text>
          </Button>
        </nav>
      </div>
    </div>
  );
}
