import diabetesImg from "../../Images/d-4.jpg";
import { DiabetesResults, scrollToTop } from "../utils/constant";
import glucosemeterIMG from "../../Images/diabetes/glucose meter.jpg";
import doctorIMG from "../../Images/diabetes/doctor superVisionIMG.jpg";
import diabetesExpertIMG from "../../Images/diabetes/Diabetes Expert.jpg";
import diagnosticTestingIMG from "../../Images/diabetes/diagnostic testing.jpg";
import personalisedIMG from "../../Images/diabetes/personalised.jpg";
import { Link } from "react-router-dom";
import twinHealthLogo from "../../Images/1.png";
import { useEffect, useState } from "react";
import Shimmer from "../utils/Shimmer Comp/Shimmer";

const Diabetes = () => {
  const [shimmerEffect, setShimmerEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShimmerEffect(false);
    }, 1000);
  }, []);

  return shimmerEffect ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-20 z-0">
      <div className="flex flex-col items-center relative">
        <img src={diabetesImg} alt="diabetesImg" className="" />
        <div className="border-4 border-primary lg:p-8 lg:h-44 xxs:h-28 xxs:p-2 text-center bg-white rounded absolute md:-bottom-20 xxs:-bottom-16">
          <h2 className="lg:text-4xl md:text-2xl sm:text-3xl text-primary font-semibold">
            Diabetes Reversal Program
          </h2>
          <p className="font-medium lg:pt-10 md:text-base xxs:text-sm sm:pt-8 xxs:pt-4">
            Reduce sugar level and get off medication
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:pt-24 md:pt-14 text-mediumGray">
        <div className="flex flex-col lg:gap-10 sm:gap-5 md:px-2 lg:text-base xs:text-sm xxs:items-center px-1">
          <div className="flex md:gap-16 xxs:flex-col md:flex-row xxs:gap-5">
            <p className="xs:w-[30rem] xxs:w-80 md:w-[22rem] inline-block">
              The Whole-Body Digital
              <img
                src={twinHealthLogo}
                className="md:w-12 xxs:w-10 mx-2 inline-block"
                alt="twinHealthLogo"
              />
              serves as a virtual representation of your distinct metabolism,
              providing tailored advice on nutrition, sleep, exercise, and
              breathing through a user-friendly app interface.
            </p>
            <p className="xs:w-[30rem] xxs:w-80 md:w-[22rem]">
              Twin Health's comprehensive program combines the power of the
              Whole-Body Digital Twin with a dedicated team of caregivers who
              oversee your sensor data, provide personalized recommendations,
              and assist you on your health journey.
            </p>
          </div>

          <div className="flex md:gap-16 xxs:flex-col md:flex-row xxs:gap-5">
            <p className="xs:w-[30rem] xxs:w-80 md:w-[22rem]">
              Experience a revolutionary program that offers a transformative
              solution for individuals managing diabetes. This cutting-edge
              technology provides a comprehensive approach, eliminating the need
              for painful insulin injections and medication. Twin, an innovative
              artificial intelligence-based system, creates a personalized body
              double to analyze and comprehend the intricacies of your body.
            </p>
            <p className="xs:w-[30rem] xxs:w-80 md:w-[22rem]">
              Through a user-friendly application, this program ensures a
              balanced and tailored approach to reverse diabetes. Embrace the
              power of modern technology, largely untapped by many, and witness
              the potential to achieve diabetes reversal within a remarkable
              four-month timeframe.
            </p>
          </div>
        </div>
      </div>

      {/**************** Results Section **************************/}

      <div>
        <div className="text-center">
          <h1 className="text-primary md:text-4xl xxs:text-2xl font-semibold">
            Results you can see and feel
          </h1>
          <p className="text-xl py-8">Helping people to reverse diabetes</p>
        </div>
        <div className="flex flex-wrap xxs:gap-y-5 justify-around">
          {DiabetesResults.map((result) => {
            const { imgUrl, heading, subHeading } = result;
            return (
              <div
                key={imgUrl}
                className="flex flex-col items-center xxs:gap-2 xl:gap-5 w-52 hover:scale-105 duration-500"
              >
                <div className="border-2 border-Orange w-44 h-44 flex flex-col items-center justify-center rounded-full">
                  <img src={imgUrl} alt={imgUrl} className="w-22 h-24" />
                </div>
                <h1 className="text-4xl text-primary font-bold">{heading}</h1>
                <h2 className="font-medium text-center">{subHeading}</h2>
              </div>
            );
          })}
        </div>
      </div>

      {/********************* What's in the plan Section **************************/}
      <div className="bg-darkBlue md:p-10 xs:p-0">
        <h1 className="text-white text-4xl font-semibold text-center">
          What's in the plan
        </h1>
        <div className="flex items-center justify-center">
          <div className="bg-lightBlue w-3/4 sm:p-5 m-10 rounded flex flex-col gap-5 items-center">
            {/****** Continuous Glucose Monitor   ********/}

            <div className="lg:w-[60%] min-w-[50%] flex ">
              <img
                src={glucosemeterIMG}
                className="w-[30%] min-h-40 object-cover rounded-l-2xl"
                alt="glucosemeterIMG"
              />
              <div className="bg-white hover:bg-lightGray duration-500 rounded-r-2xl w-full p-5 flex flex-col gap-5 ">
                <h2 className="text-xl ">Continuous Glucose Monitor</h2>
                <p className="text-darkBlue/55">
                  Technology that collects real-time blood sugar data for
                  analysis.
                </p>
              </div>
            </div>

            {/***** On-demand doctor supervision   ********/}

            <div className="lg:w-[60%] min-w-[50%] flex flex-row-reverse">
              <img
                src={doctorIMG}
                className="w-[30%] min-h-40 object-cover rounded-r-2xl border border-lightGray"
                alt="doctorIMG"
              />
              <div className="bg-white hover:bg-lightGray duration-500 rounded-l-2xl w-full p-5 flex flex-col gap-5 ">
                <h2 className="text-xl">On-demand doctor supervision</h2>
                <p className="text-darkBlue/55">
                  No more once-in-a-blue-moon appointments!
                </p>
              </div>
            </div>

            {/****** Dedicated Diabetes Expert   *********/}

            <div className="lg:w-[60%] min-w-[50%] flex">
              <img
                src={diabetesExpertIMG}
                className="w-[30%] min-h-40 object-cover rounded-l-2xl border border-lightGray"
                alt="diabetesExpertIMG"
              />
              <div className="bg-white hover:bg-lightGray duration-500 rounded-r-2xl w-full p-5 flex flex-col gap-5 ">
                <h2 className="text-xl ">Dedicated Diabetes Expert</h2>
                <p className="text-darkBlue/55">
                  Daily support and answers to questions are just a WhatsApp
                  message away!
                </p>
              </div>
            </div>

            {/***** Comprehensive diagnostic testing  *******/}

            <div className="lg:w-[60%] min-w-[50%] flex flex-row-reverse">
              <img
                src={diagnosticTestingIMG}
                className="w-[30%] min-h-40 object-cover rounded-r-2xl border border-lightGray"
                alt="diagnosticTestingIMG"
              />
              <div className="bg-white hover:bg-lightGray duration-500 rounded-l-2xl w-full p-5 flex flex-col gap-5 ">
                <h2 className="text-xl ">Comprehensive diagnostic testing</h2>
                <p className="text-darkBlue/55">
                  A 70+ parameter blood and urine check-up at onboarding and
                  diabetes screening tests every quarter.
                </p>
              </div>
            </div>

            {/***** Personalised plans   ********/}

            <div className="lg:w-[60%] min-w-[50%] flex">
              <img
                src={personalisedIMG}
                className="w-[30%] min-h-40 object-cover rounded-l-2xl border border-lightGray"
                alt="personalisedIMG"
              />
              <div className="bg-white hover:bg-lightGray duration-500 rounded-r-2xl w-full p-5 flex flex-col gap-5">
                <h2 className="text-xl ">Personalised plans</h2>
                <p className="text-darkBlue/55">
                  Personalised and easy to follow meal, stress and sleep plans.
                </p>
              </div>
            </div>

            {/***************** Enquire Now Button *****************/}

            <Link to={"/contactus"}>
              <button
                onClick={scrollToTop}
                className="styleButton px-8 py-3 mt-10"
              >
                Enquire Now
              </button>
            </Link>

            {/************* Associated With Twin Health Logo *************/}

            <div className="flex items-center gap-4">
              <p className="text-sm">In Association With</p>
              <Link to="https://ind.twinhealth.com/" target="_blank">
                <img
                  src={twinHealthLogo}
                  className="w-12"
                  alt="twinHealthLogo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diabetes; //109
