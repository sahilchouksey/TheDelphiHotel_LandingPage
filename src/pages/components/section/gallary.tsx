import Button from "@/components/ui/button";
import Image from "@/components/ui/image";
import SwiperImageSlider from "@/components/ui/imageSlider";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import Text from "@/typography";

export default function GallarySection() {
  const width = useWindowWidth();
  const isMobile = width <= 768;
  console.log("isMobile", isMobile);
  return (
    <div className="mb-[8rem] relative">
      <div className="gallery-section md:hidden">
        <figure className="big-gallery__img big-gallery__img--1 animate-fade visible fade-in">
          <a
            href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-03-64be9659e12d6.webp"
            className="big-gallery__overlay"
            data-fancybox="gallery-big"
          >
            <Image
              src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-03-64be9659e12d6.webp"
              alt="a large living room with a large window"
            />
          </a>
        </figure>
        <figure className="big-gallery__img big-gallery__img--2 animate-fade visible fade-in">
          <a
            href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-04-64be965d21267.webp"
            className="big-gallery__overlay"
            data-fancybox="gallery-big"
          >
            <Image
              src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-04-64be965d21267.webp"
              alt="a building with a small staircase and plants"
            />
          </a>
        </figure>
        <figure className="big-gallery__img big-gallery__img--3 animate-fade visible fade-in">
          <a
            href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-64dd387bae739.webp"
            className="big-gallery__overlay"
            data-fancybox="gallery-big"
          >
            <Image
              src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-64dd387bae739.webp"
              alt="a person wearing sunglasses"
            />
          </a>
        </figure>
        <figure className="big-gallery__img big-gallery__img--4 animate-fade visible fade-in">
          <a
            href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-05-64be965f97bec.webp"
            className="big-gallery__overlay"
            data-fancybox="gallery-big"
          >
            <Image
              src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-05-64be965f97bec.webp"
              alt="a hand holding a bag in a car"
            />
          </a>
        </figure>
        <figure className="big-gallery__img big-gallery__img--5 animate-fade visible fade-in">
          <a
            href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-2-64dd3859bcc6e.webp"
            className="big-gallery__overlay"
            data-fancybox="gallery-big"
          >
            <Image
              src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-2-64dd3859bcc6e.webp"
              alt="a city with tall buildings"
            />
          </a>
        </figure>
        <figure className="big-gallery__img big-gallery__img--6 animate-fade visible fade-in">
          <a
            href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-01-64be96552fd38.webp"
            className="big-gallery__overlay"
            data-fancybox="gallery-big"
          >
            <Image
              src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-01-64be96552fd38.webp"
              alt="a room with a tv and couches"
            />
          </a>
        </figure>
        <div className="gallery-section-content flex flex-col justify-center items-center">
          <Text
            tag="h2"
            font="RankingsCaps"
            className="italic text-[8.5rem] leading-[9.8rem] text-primary"
            animation="fade-in-bottom"
          >
            SCENES
          </Text>
          <Text
            tag="p"
            className="text-[5rem] leading-[5.8rem] text-primary italic !text-[#2f2625]"
            font="MillerBanner"
            animation="fade-in-bottom"
          >
            From
          </Text>
          <Text
            tag="p"
            font="MillerBanner"
            className="text-[9rem] leading-[10.4rem] text-primary italic !text-[#2f2625]"
            animation="fade-in-bottom"
          >
            The City
          </Text>
          <Button
            type="secondary"
            className="w-full mt-[3rem] flex justify-start items-center"
            animation="custom"
          >
            <Text
              tag="span"
              font="MillerBanner"
              className="text-[1.6rem] leading-[1.8rem] text-primary italic"
            >
              View Gallery
            </Text>
          </Button>
        </div>
      </div>
      <div className="md:flex hidden  w-full flex-col justify-center items-center">
        <Text
          tag="h2"
          font="RankingsCaps"
          className="italic text-[8.5rem] leading-[9.8rem] text-primary mdlg:!text-[4.9rem] mdlg:!leading-[5.8rem]"
          animation="fade-in-bottom"
        >
          SCENES
        </Text>
        <Text
          tag="p"
          className="text-[5rem] leading-[5.8rem] text-primary italic !text-[#2f2625] mdlg:!text-[3.9rem] mdlg:!leading-[3.9rem]"
          font="MillerBanner"
          animation="fade-in-bottom"
        >
          From
        </Text>
        <Text
          tag="p"
          font="MillerBanner"
          className="mb-[4rem] text-[9rem] leading-[10.4rem] text-primary italic !text-[#2f2625] mdlg:!text-[5.1rem] mdlg:!leading-[5.9rem]"
          animation="fade-in-bottom"
        >
          The City
        </Text>
        <SwiperImageSlider
          slides={[
            "https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-03-64be9659e12d6.webp",
            "https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-04-64be965d21267.webp",
            "https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-64dd387bae739.webp",
            "https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-05-64be965f97bec.webp",
            "https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-2-64dd3859bcc6e.webp",
            "https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-01-64be96552fd38.webp",
          ]}
          slidesPerView={3}
          effectCreative={false}
          spaceBetween={10}
          pagination
          freeMode
        ></SwiperImageSlider>
        <Button
          type="secondary"
          className="w-full mt-[3rem] flex justify-start items-center"
          animation="custom"
        >
          <Text
            tag="span"
            font="MillerBanner"
            className="text-[1.6rem] leading-[1.8rem] text-primary italic"
          >
            View Gallery
          </Text>
        </Button>
      </div>
    </div>
  );
}
