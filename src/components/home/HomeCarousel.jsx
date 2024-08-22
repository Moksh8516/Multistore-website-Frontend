import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCrousel from "./CategoryCrousel";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { product } from "./catProduct";
let slidesToShow = 6;

const NextSlide = (props) => {
  const { className, onClick, currentSlide, slideCount } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className}>
          <Button
            variant="contained"
            className="z-50"
            onClick={onClick}
            sx={{
              position: "absolute",
              right: "0rem",
              transform: "translateX(20%) rotate(-90deg)",
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#e5e7eb",
                color: "black",
              },
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        </div>
      )}
    </>
  );
};

const PrevSlide = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className}>
          <Button
            variant="contained"
            className="z-50"
            onClick={onClick}
            sx={{
              position: "absolute",
              right: "0rem",
              transform: "translateX(40%) rotate(90deg)",
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#e5e7eb",
                color: "black",
              },
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        </div>
      )}
    </>
  );
};

const carouselResponsive = {
  infinite: false,
  dots: false,
  speed: 500,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  nextArrow: <NextSlide />,
  prevArrow: <PrevSlide />,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        centerMode: false,
      },
    },
  ],
};

function HomeCarousel({ sectionName }) {
  const theme = useTheme();

  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 480) {
    slidesToShow: 1;
  } else if (width > 480 && width <= 630) {
    slidesToShow: 2;
  } else if (width > 630 && width <= 770) {
    slidesToShow: 3;
  } else if (width > 770 && width <= 1025) {
    slidesToShow: 4;
  } else if (width > 1230 && width <= 1450) {
    slidesToShow: 5;
  } else {
    slidesToShow: 6;
  }

  const items = product
    .slice(0, 10)
    .map((item) => <CategoryCrousel product={item} key={item} />);

  return (
    <>
      <div className=" px-4 lg:px-5 bg-gray-50">
        <h3 className="text-2xl font-bold text-gray-900 pt-2 pl-4">
          {sectionName}
        </h3>
        <div className="relative p-5">
          <Slider {...carouselResponsive}>{items}</Slider>
        </div>
        {/* <MobileStepper
          variant="progress"
          steps={5}
          position="static"
          activeStep={activeIndex}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={slideNext}
              disabled={activeIndex === 5}
            >
              Next
              {theme.direction === "rtl" ? (
                <ArrowBackIosIcon />
              ) : (
                <ArrowForwardIosIcon />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={slidePrev}
              disabled={activeIndex === 0}
            >
              {theme.direction === "rtl" ? (
                <ArrowForwardIosIcon />
              ) : (
                <ArrowBackIosIcon />
              )}
              Back
            </Button>
          }
        /> */}
      </div>
    </>
  );
}

export default HomeCarousel;
