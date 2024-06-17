import Navbar from "../components/navbar";
import { default as Container } from "./components/container";
import Footer from "./components/footer";
import Section from "./components/section";
import AvailablilitySection from "./components/section/availability";
import DetailSection from "./components/section/details";
import DiningSection from "./components/section/dining";
import EventsSection from "./components/section/events";
import GallarySection from "./components/section/gallary";
import { default as HeroSection } from "./components/section/hero";
import IntroSection from "./components/section/intro";
import LocationSection from "./components/section/location";
import ReviewsSection from "./components/section/reviews";
import RoomsSection from "./components/section/rooms";

export default function IndexPage() {
  return (
    <Container>
      <Navbar />
      <Section>
        <HeroSection />
      </Section>
      <Section className="mt-[1rem]">
        <AvailablilitySection />
      </Section>
      <Section className="mt-[1rem]">
        <IntroSection />
      </Section>
      <Section className="mt-[1rem] mb-[5rem]">
        <DetailSection />
      </Section>
      <Section backgroundColor="var(--color-primary)">
        <RoomsSection />
      </Section>
      <Section
        backgroundColor="var(--color-background)"
        className="relative"
        childContainerClassName="before:content-[''] before:w-[100%] before:min-h-[27rem] before:block before:absolute before:left-0 before:top-0 before:bg-primary before:z-[-1]"
      >
        <DiningSection />
      </Section>
      <Section>
        <EventsSection />
      </Section>
      <Section childContainerClassName="relative z-[12]">
        <ReviewsSection />
      </Section>
      <Section
        className="bg-no-repeat bg-center bg-contain max-w-full max-w-[192rem] mx-auto !mt-[-36rem] -mb-[60rem] min-h-[178rem] flex justify-center items-center"
        style={{ backgroundPosition: "calc(100% - 15rem) center" }}
        backgroundImage="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-map-64be9613eb4a4.jpg"
        childContainerClassName="location flex justify-end items-center"
      >
        <LocationSection />
      </Section>
      <Section childContainerClassName="mt-[-50rem]">
        <GallarySection />
      </Section>
      <Footer />
    </Container>
  );
}
