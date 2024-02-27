import Hero from "../Images/hero.png";
import TwinLogo from "../Images/1.png";
import DiabetesPng from "../Images/Logos/Diabetis.png";
import DyslipedimiaPng from "../Images/Logos/Dyslipedimia.png";
import PCODPng from "../Images/Logos/pngwing.com.png";
import { Link } from "react-router-dom";
import { scrollToTop } from "./utils/constant";
import futureImg from "../Images/What we do/8966021.jpg";
import { useEffect, useState } from "react";
import Shimmer from "./utils/Shimmer Comp/Shimmer";

const Future = () => {
  const [shimmerEffect, setShimmerEffect] = useState(true);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setShimmerEffect(false);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return shimmerEffect ? (
    <Shimmer />
  ) : (
    <section className="flex flex-col gap-6 w-full">
      <img src={Hero} alt="Hero" className="bg-lightBlue" />

      {/*********** The Future ******************/}

      <div className="relative flex">
        <img
          src={futureImg}
          className="max-h-[25rem] w-full object-cover"
          alt="futureImg"
        />

        <div className="text-center xl:bottom-8 lg:bottom-16 lg:right-28 xl:right-52 md:right-14 md:bottom-14 sm:bottom-12 sm:right-14 xs:bottom-8 xs:right-4 xxs:right-2 xxs:bottom-0 rounded absolute">
          <h2 className="lg:text-4xl md:text-2xl sm:text-xl xxs:text-sm font-semibold text-white">
            THE <span className="text-primaryai"> FUTURE</span>
          </h2>

          <p className="xl:py-2 xs:pb-1 xs:text-xs md:text-sm xxs:text-[10px] font-semibold text-white xxs:w-44 sm:w-fit">
            @ Convergence of Data Science & Healthcare
          </p>

          <Link to="/whatwedo" onClick={scrollToTop}>
            <button className="hover:scale-105 lg:py-3 lg:px-8 md:py-1 md:px-4 xl:my-5 lg:my-2 xxs:px-2 xs:py-1 xs:text-sm font-medium styleButton border border-primary">
              What we do
            </button>
          </Link>
        </div>
      </div>

      {/************* Diabetes , Dyslipedimia and PCOD Section  *********************/}

      <div className="flex items-center justify-center md:gap-20 xs:gap-10 xxs:gap-2 ">
        {/**************  Diabetes *******************/}

        <div className="lg:w-64 lg:h-64 md:w-52 md:h-52 xs:w-44 xs:h-44 xxs:w-36 xxs:h-36 border border-lightBlue rounded flex flex-col items-center justify-center lg:gap-8 md:gap-3 xs:gap-5 xxs:gap-2 hover:shadow-md hover:scale-105 duration-500 hover:bg-lightGray">
          <img
            src={DiabetesPng}
            className="md:w-20 xs:w-16 xxs:w-14 hover:scale-105 "
            alt="DiabetesPng"
          />
          <h5 className="font-georgia md:text-base xxs:text-sm">Diabetes</h5>
          <Link to="/programs/diabetes">
            <button
              onClick={scrollToTop}
              className="md:px-4 md:py-2 xxs:px-2 xxs:py-1 styleButton"
            >
              Book now
            </button>
          </Link>
        </div>

        {/**************  Dyslipedimia *******************/}

        <div className="lg:w-64 lg:h-64 md:w-52 md:h-52 xs:w-44 xs:h-44 xxs:w-36 xxs:h-36 border border-lightBlue rounded flex flex-col items-center justify-center lg:gap-8 md:gap-3 xs:gap-5 xxs:gap-2 hover:shadow-md hover:scale-105 duration-500 hover:bg-lightGray">
          <img
            src={DyslipedimiaPng}
            className="md:w-20 xs:w-16 xxs:w-14 hover:scale-105"
            alt="DyslipedimiaPng"
          />
          <h5 className="font-georgia md:text-base xxs:text-sm ">
            Dyslipedimia
          </h5>
          <Link to="/programs/dyslipedimia">
            <button
              onClick={scrollToTop}
              className="md:px-4 md:py-2 xxs:px-2 xxs:py-1 styleButton"
            >
              Book now
            </button>
          </Link>
        </div>

        {/**************  PCOD *******************/}

        <div className="lg:w-64 lg:h-64 md:w-52 md:h-52 xs:w-44 xs:h-44 xxs:w-36 xxs:h-36 border border-lightBlue rounded flex flex-col items-center justify-center lg:gap-8 md:gap-3 xs:gap-5 xxs:gap-2 hover:shadow-md hover:scale-105 duration-500 hover:bg-lightGray">
          <img
            src={PCODPng}
            className="md:w-20 xs:w-16 xxs:w-14 hover:scale-105"
            alt="PCODPng"
          />
          <h5 className="font-georgia md:text-base xxs:text-sm">PCOD</h5>
          <Link to="/programs/pcod">
            <button
              onClick={scrollToTop}
              className="md:px-4 md:py-2 xxs:px-2 xxs:py-1 styleButton"
            >
              Book now
            </button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 text-xl sm:text-base text-mediumBlue font-medium font-georgia">
        <p className="inline-block xs:px-5 sm:text-xl xxs:text-base text-center">
          Transform Your Well-being with Cutting-Edge Whole Body Digital
          <img
            src={TwinLogo}
            className="sm:w-12 xxs:w-10 mx-2 inline-block"
            alt="twin-logo"
          />
          Technology!
        </p>
      </div>
    </section>
  );
};

export default Future;
