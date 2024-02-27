import { Link } from "react-router-dom";
import thankyouImg from "../Images/Logos/Thankyou.jpg";
import { scrollToTop } from "./utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./utils/Shimmer Comp/Shimmer";

const Thankyou = () => {
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
    <section className="relative">
      <img src={thankyouImg} className="" alt="thankyouImg" />
      <div className="absolute lg:top-1/3 lg:left-[15%] sm:top-20 sm:left-5 xxs:top-5 flex flex-col items-center">
        <h1 className="lg:text-7xl sm:text-4xl xxs:text-xl font-georgia text-mediumBlue font-medium ">
          Thank you!
        </h1>
        <p className="pt-3 sm:text-sm xxs:text-xs xxs:w-44 xxs:pl-5 md:text-base sm:w-full">
          for contact us,We will get back to you soon...
        </p>
        <Link to={"/"}>
          <button
            onClick={scrollToTop}
            className="styleButton md:mt-8 xxs:mt-4 lg:px-8 lg:py-3 sm:px-4 sm:py-2 xxs:p-1 "
          >
            Go Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Thankyou;
