import PcodIMG from "../../Images/PCOD/PCOD.jpg";
import overviewImg from "../../Images/PCOD/Overview.jpg";
import problemImg from "../../Images/PCOD/problem.jpg";
import symptomsImg from "../../Images/PCOD/Symptoms.jpg";
import DiagnosisImg from "../../Images/PCOD/diagnosis.jpg";
import fetilityPNG from "../../Images/PCOD/Keyfacts/1.png";
import worldPNG from "../../Images/PCOD/Keyfacts/2.png";
import syndromePNG from "../../Images/PCOD/Keyfacts/3.png";
import healthPNG from "../../Images/PCOD/Keyfacts/4.png";
import PCOSPNG from "../../Images/PCOD/Keyfacts/5.png";
import { Link } from "react-router-dom";
import twinHealthLogo from "../../Images/1.png";
import { scrollToTop } from "../utils/constant";
import Shimmer from "../utils/Shimmer Comp/Shimmer";
import { useEffect, useState } from "react";

const PCOD = () => {
  const [shimmerEffect, setShimmerEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShimmerEffect(false);
    }, 1000);
  }, []);
  return shimmerEffect ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-14 ">
      <div className="flex flex-col items-center relative">
        <img src={PcodIMG} className="w-full object-cover" alt="PcodIMG" />
        <div className="border-4 border-primary text-center lg:p-8 lg:h-44 xxs:h-28 xxs:p-4 bg-white rounded absolute md:-bottom-20 xxs:-bottom-16">
          <h2 className="text-4xl text-primary font-semibold">
            PCOD Reversal Program
          </h2>
          <p className="font-medium text-center lg:pt-10 md:text-base xxs:text-sm xxs:pt-4">
            Control PCOD and Reduce medication
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-1 xl:grid-cols-2 relative mx-auto gap-y-20 mt-32 ">
        {/************ Overview ********************/}
        <div className="flex xxs:flex-col xs:flex-row group">
          <img
            src={overviewImg}
            className="sm:w-80 sm:h-80 xxs:w-80 object-cover relative bottom-8 z-10 rounded xs:group-hover:rounded-t-full transition-all duration-500 ease-in-out "
            alt="overviewImg"
          />
          <div className="bg-lightWhite first:rounded-full xs:pl-44 relative xxs:p-2 xs:right-40 z-0 xs:group-hover:shadow-lg transition-all duration-500 ease-in-out">
            <h1 className="text-xl font-semibold">Overview</h1>
            <p className="text-sm w-72 text-mediumGray ">
              Polycystic ovary syndrome (PCOS) is a common hormonal condition
              that affects women of reproductive age. It usually starts during
              adolescence, but symptoms may fluctuate over time. PCOS can cause
              hormonal imbalances, irregular periods, excess androgen levels and
              cysts in the ovaries. Irregular periods, usually with a lack of
              ovulation, can make it difficult to become pregnant. PCOS is a
              leading cause of infertility.
            </p>
          </div>
        </div>

        {/************ Scope of the problem ********************/}

        <div className="flex xxs:flex-col xs:flex-row group">
          <img
            src={problemImg}
            className="sm:w-80 sm:h-80 xxs:w-80 object-cover relative bottom-8 z-10 rounded group-hover:rounded-t-full transition-all duration-500 ease-in-out"
            alt="problemImg"
          />
          <div className="bg-lightWhite first:rounded-full xs:pl-44 relative xxs:p-2 xs:right-40 z-0 xs:group-hover:shadow-lg transition-all duration-500 ease-in-out">
            <h1 className="text-xl font-semibold p-2">Scope of the problem</h1>
            <p className="text-sm w-72 text-mediumGray">
              PCOS a significant public health problem and is one of the
              commonest hormonal disturbances affecting women of reproductive
              age. The condition affects an estimated 8–13% of women of
              reproductive age, and up to 70% of cases are undiagnosed. The
              prevalence of PCOS is higher among some ethnicities and these
              groups often experience more complications, in particular related
              to metabolic problems.
            </p>
          </div>
        </div>

        {/*************** Symptoms ***********************/}

        <div className="flex xxs:flex-col xs:flex-row group">
          <img
            src={symptomsImg}
            className="sm:w-80 sm:h-80 xxs:w-80 object-cover relative bottom-8 z-10 rounded group-hover:rounded-t-full transition-all duration-500 ease-in-out"
            alt="symptomsImg"
          />
          <div className="bg-lightWhite first:rounded-full xs:pl-44 relative xxs:p-2 xs:right-40 z-0 xs:group-hover:shadow-lg transition-all duration-500 ease-in-out">
            <h1 className="text-xl font-semibold p-2">Symptoms</h1>
            <div className="text-sm text-mediumGray w-72">
              <p className="">
                Symptoms of polycystic ovary syndrome can differ from person to
                person. Symptoms may change over time and often occur without a
                clear trigger. Possible symptoms include:
              </p>
              <ul>
                <li>
                  • heavy, long, intermittent, unpredictable or absent periods
                </li>
                <li>• infertility</li>
                <li>• acne or oily skin</li>
                <li>• excessive hair on the face or body</li>
                <li>• weight gain, especially around the belly.</li>
              </ul>
            </div>
          </div>
        </div>

        {/*************** Diagnosis ***********************/}

        <div className="flex xxs:flex-col xs:flex-row group">
          <img
            src={DiagnosisImg}
            className="sm:w-80 sm:h-80 xxs:w-80 object-cover relative bottom-8 z-10 rounded group-hover:rounded-t-full transition-all duration-500 ease-in-out"
            alt="DiagnosisImg"
          />
          <div className="bg-lightWhite first:rounded-full xs:pl-44 relative xxs:p-2 xs:right-40 z-0 xs:group-hover:shadow-lg transition-all duration-500 ease-in-out">
            <h1 className="text-xl font-semibold p-2">Diagnosis</h1>
            <div className="text-sm w-72 text-mediumGray">
              <p>
                Polycystic ovary syndrome is diagnosed by the presence of at
                least two out of the following:
              </p>
              <ul>
                <li>
                  1. signs or symptoms of high androgens (unwanted facial or
                  bodily hair, loss of hair from the head, acne or an elevated
                  blood level of testosterone) – after other causes for this
                  have been excluded;
                </li>
                <li>
                  2. irregular or absent menstrual periods – after other causes
                  for this have been excluded; and{" "}
                </li>
                <li> 3. polycystic ovaries on an ultrasound scan.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/****************** Key Facts ******************/}

      <div className="text-center">
        <h1 className="text-4xl font-semibold bg-mediumBlue inline-block p-3 rounded text-white">
          Key facts
        </h1>
        <div className="grid lg:grid-cols-3 py-8 gap-y-5 items-center justify-center">
          <div className="flex flex-col items-center">
            <img src={fetilityPNG} className="w-28" alt="fetilityPNG" />
            <p className="w-72">
              PCOS is the commonest cause of anovulation and a leading cause of
              infertility.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={worldPNG} className="w-28" alt="worldPNG" />
            <p className="w-72">
              Up to 70% of affected women remain undiagnosed worldwide.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={syndromePNG} className="w-28" alt="syndromePNG" />
            <p className="w-72">
              Polycystic ovary syndrome (PCOS) affects an estimated 8–13% of
              reproductive-aged women.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={healthPNG} className="w-28" alt="healthPNG" />
            <p className="w-72">
              PCOS is associated with a variety of long-term health problems
              that affect physical and emotional wellbeing.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={PCOSPNG} className="w-28" alt="PCOSPNG" />
            <p className="w-72">
              PCOS runs in families, but there are ethnic variations in how PCOS
              manifests itself and how it affects people.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/***************** Enquire Now Button *****************/}

        <Link to={"/contactus"}>
          <button onClick={scrollToTop} className="styleButton px-8 py-3">
            Enquire Now
          </button>
        </Link>

        {/************* Associated With Twin Health Logo *************/}

        <div className="flex items-center gap-4 py-4">
          <p className="text-sm">In Association With</p>
          <Link to="https://ind.twinhealth.com/" target="_blank">
            <img src={twinHealthLogo} className="w-14" alt="twinHealthLogo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PCOD;
