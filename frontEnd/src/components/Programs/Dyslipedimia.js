import dyslipidemiaImg from "../../Images/Dyslipedimia/banner.png";
import smokingPng from "../../Images/Dyslipedimia/01.png";
import obesityPng from "../../Images/Dyslipedimia/02.png";
import excessiveFoodPng from "../../Images/Dyslipedimia/03.png";
import alocoholPng from "../../Images/Dyslipedimia/04.png";
import freeDrugIMG from "../../Images/Dyslipedimia/non drugs.jpg";
import twinHealthLogo from "../../Images/1.png";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "../utils/Shimmer Comp/Shimmer";

const Dyslipedimia = () => {
  const [shimmerEffect, setShimmerEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShimmerEffect(false);
    }, 1000);
  }, []);
  return shimmerEffect ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col items-center relative">
        <img src={dyslipidemiaImg} className="w-full" alt="dyslipidemiaImg" />
        <div className="border-4 border-primary text-center lg:p-8 lg:h-44 xxs:h-28 xxs:p-4 bg-white rounded absolute md:-bottom-20 xxs:-bottom-16">
          <h2 className="lg:text-4xl xxs:text-xl sm:text-3xl text-primary font-semibold">
            Dyslipidemia
          </h2>
          <p className="font-medium lg:pt-10 sm:pt-8 md:text-base xxs:text-sm xxs:pt-4">
            Reduce the risk of Cardiovascular Disease (CVD)
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:pt-24 text-mediumGray md:pt-14">
        <div className="flex flex-col lg:gap-10 sm:gap-5 md:px-2 lg:text-base xs:text-sm xxs:items-center md:text-base xxs:text-sm px-1">
          <div className="flex lg:gap-16 xxs:flex-col lg:flex-row xxs:gap-5">
            <p className="xs:w-[30rem] xxs:w-80">
              Introducing a cutting-edge solution for individuals managing
              dyslipidemia, the Whole-Body Digital Twin serves as a virtual
              representation of your unique physiological profile. Seamlessly
              integrated into an intuitive app interface, this innovative
              technology provides personalized guidance on nutrition, sleep,
              exercise, and breathing. Partnered with a dedicated team of
              caregivers, Twin Health's inclusive program monitors your sensor
              data, offers tailored suggestions, and supports you on your
              journey towards improved health.
            </p>
            <p className="xs:w-[30rem] xxs:w-80">
              Experience a revolutionary program designed to address
              dyslipidemia with unprecedented precision. By leveraging
              state-of-the-art technology, Twin Health offers a holistic
              approach that eliminates the need for invasive treatments and
              medications. Through an artificial intelligence-driven system, a
              personalized body model is constructed to comprehensively analyze
              the complexities of your physiology.
            </p>
          </div>

          <div className="flex lg:gap-16 xxs:flex-col lg:flex-row xxs:gap-5">
            <p className="xs:w-[30rem] xxs:w-80">
              Accessible via a user-friendly application, this program ensures a
              balanced and individualized approach to managing dyslipidemia.
              Embrace the potential of modern technology, often underutilized by
              many, and witnes
            </p>
            <p className="xs:w-[30rem] xxs:w-80">
              Dyslipidemia is a chronic condition that cannot be cured. However,
              certain symptoms can be improved through lifestyle modifications,
              medications, and targeted interventions. While the exact cause of
              dyslipidemia remains unknown, individuals with a family history or
              those diagnosed with type 2 diabetes are at a higher risk.
            </p>
          </div>
        </div>
      </div>

      {/************************* What are the causes  **************************/}

      <div className="bg-darkBlue text-white md:p-5 xxs:p-2">
        <h1 className="md:text-4xl xxs:text-xl font-medium text-center bg-white w-fit mx-auto text-darkBlue p-2 rounded">
          What are the causes and who’s at risk?
        </h1>
        <div>
          <h2 className="py-10 text-center md:text-xl">
            Several behaviours can lead to dyslipidemia. They include:
          </h2>
          <div className="flex justify-center xxs:flex-wrap">
            {/***************** smoking Section ***************/}

            <div className="xl:w-72 md:w-56 xxs:w-44">
              <img
                src={smokingPng}
                className="lg:w-44 lg:h-44 xxs:w-36 xxs:h-36 rounded-full object-contain border-2 border-Orange"
                alt="smokingPng"
              />
              <p className="py-8">cigarette smoking.</p>
            </div>

            {/***************** obesity Section ***************/}

            <div className="xl:w-72 md:w-56 xxs:w-44">
              <img
                src={obesityPng}
                className="lg:w-44 lg:h-44 xxs:w-36 xxs:h-36 rounded-full object-contain border-2 border-Orange"
                alt="obesityPng"
              />
              <p className="py-8">obesity and a sedentary lifestyle</p>
            </div>

            {/***************** excessiveFood Section ***************/}

            <div className="xl:w-72 md:w-56 xxs:w-44">
              <img
                src={excessiveFoodPng}
                className="lg:w-44 lg:h-44 xxs:w-36 xxs:h-36 rounded-full object-contain border-2 border-Orange"
                alt="excessiveFoodPng"
              />
              <p className="py-8">
                consumption of foods high in saturated fat and trans fat
              </p>
            </div>

            {/***************** alocohol Section ***************/}

            <div className="xl:w-72 md:w-56 xxs:w-44">
              <img
                src={alocoholPng}
                className="lg:w-44 lg:h-44 xxs:w-36 xxs:h-36 rounded-full object-contain border-2 border-Orange round"
                alt="alocoholPng"
              />
              <p className="py-8">
                Excessive alcohol consumption may also contribute to higher
                triglyceride levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/************** Treatment options *******************************/}

      <div className="flex flex-col">
        <h1 className="md:text-4xl xxs:text-xl text-center font-medium">
          Treatment options
        </h1>
        <div className="flex xl:justify-around lg:flex-row xxs:flex-col xxs:gap-8 xxs:items-center text-mediumGray py-10">
          <p className="md:w-96 xxs:w-80 md:text-base xxs:text-sm">
            The most commonly used medication to treat dyslipidemia is a statin.
            Statins help reduce LDL levels by interfering with cholesterol
            production in the liver. Here’s more about how statins work.
          </p>
          <p className="md:w-96 xxs:w-80 md:text-base xxs:text-sm">
            There are several types of statin. They all work a little
            differently, with some being stronger than others.
          </p>
          <p className="md:w-96 xxs:w-80 md:text-base xxs:text-sm">
            Your doctor may also prescribe other cholesterol medications. They
            may be taken in addition to a statin or in place of a statin. There
            are many pros and cons to consider when choosing between
            cholesterol-controlling drugs.
          </p>
        </div>

        {/************ These non-statin drugs include  *************/}

        <div className="flex flex-col items-center gap-5 bg-lightWhite ">
          <h1 className="text-xl font-semibold my-5 p-2 bg-darkBlue  text-white rounded">
            These non-statin drugs include
          </h1>
          <div className="flex xxs:flex-col sm:flex-row gap-10 items-center py-5">
            <img src={freeDrugIMG} className="w-72 rounded" alt="freeDrugIMG" />
            <ul className="flex flex-col gap-5 list-disc">
              <li>ezetimibe (Zetia)</li>
              <li>fibrates, like fenofibrate (Feno glide)</li>
              <li>PCSK9 inhibitors</li>
            </ul>
          </div>
          <p className="font-medium px-4">
            Experience relief from dyslipidaemia with our highly recommended
            TWIN HEALTH REVERSAL PROGRAM.
          </p>

          <div className="flex flex-col items-center">
            <Link to={"/contactus"}>
              <button
                onClick={scrollToTop}
                className="styleButton px-6 py-3 border border-primary"
              >
                Enquire Now
              </button>
            </Link>

            <div className="flex items-center gap-4 py-4">
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

export default Dyslipedimia;
