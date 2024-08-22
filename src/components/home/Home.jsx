import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomeContainer from "./HomeContainer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Backdrop } from "@mui/material";
import { product } from "./catProduct";

const items = [
  <div className="item" data-value="1">
    <img
      className="w-full h-full bg-no-repeat"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/GW/June/unrec/all/FDFO/3000_PC._CB554223838_.jpg"
      alt="1"
    />
  </div>,
  <div className="item" data-value="2">
    <img
      className="w-full h-full bg-no-repeat"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Makeup-PCfdfo._CB554430294_.jpg"
      alt="2"
    />
  </div>,
  <div className="item" data-value="3">
    <img
      className="w-full h-full bg-no-repeat"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/June/Unrec/3000x1200_1._CB554217106_.jpg"
      alt="3"
    />
  </div>,
  <div className="item" data-value="4">
    <img
      className="w-full h-full bg-no-repeat"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg"
      alt="4"
    />
  </div>,
  <div className="item" data-value="5">
    <img
      className="w-full h-full bg-no-repeat"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/D132995370_Homepage_DesktopHeroTemplate_3000x1200._CB557152260_.jpg"
      alt="5"
    />
  </div>,
];

const NextSlide = (props) => {
  const { className, style } = props;
  return (
    <div
      className={`${className} `}
      style={{
        ...style,
        display: "none",
      }}
    ></div>
  );
};
const PrevSlide = (props) => {
  const { className, style } = props;
  return (
    <div
      className={`${className}`}
      style={{
        ...style,
        display: "none",
      }}
    ></div>
  );
};

function Home() {
  const bannerCarousel = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <NextSlide />,
    prevArrow: <PrevSlide />,
  };
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            MultiStore
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-8xl absloute">
          {/* Your content */}
          <Slider {...bannerCarousel} className="m-0 p-0">
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </Slider>
        </div>
      </main>
      <div
        className="mx-auto top-[-5rem] 

      md:top-[-11rem] lg:top-[-16rem] xl:top-[-18rem] relative"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:p-6 z-50  items-center justify-center">
          <HomeContainer />
          <HomeContainer />
          <HomeContainer />
          <HomeContainer />
        </div>
        <div className=" py-10 flex flex-col justify-center px-3 lg:px-6 space-y-4 ">
          <HomeCarousel sectionName={"Men's Product"} data={product} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:p-6 mx-auto inset-2 items-center justify-center">
            <HomeContainer />
          </div>
          <HomeCarousel sectionName={"Women Products"} />
        </div>
      </div>
    </>
  );
}

export default Home;
