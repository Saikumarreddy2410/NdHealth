import conceptimg from "../Images/What we do/concept.jpg";
import realtimeimg from "../Images/What we do/realtime.jpg";
import efficencyimg from "../Images/What we do/efficiency.jpg";
import seriousimg from "../Images/What we do/serious.jpg";
import digitalImg from "../Images/twin.jpg";
import twinHealthLogo from "../Images/1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./utils/Shimmer Comp/Shimmer";

const WhatWeDo = () => {
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
    <section>
      <div>
        <img
          src={digitalImg}
          className="w-full h-[40rem] object-cover"
          alt="digitalImg"
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="lg:text-4xl sm:text-xl mt-5">
            Elevating Healthcare through Digital Patient Twinning
          </h1>
          <div className="font-medium underline text-center px-10">
            <Link>Prediabetes</Link>
            <Link> | Diabetes</Link>
            <Link> | Obesity</Link>
            <Link> | PCOD </Link>
            <Link> | Dyslipidemia</Link>
            <Link>| Metabolic Wellness for Preventive Care</Link>
          </div>
          <h2 className="lg:text-2xl bg-darkBlue text-white font-semibold p-5 rounded">
            WHAT IS DIGITAL TWIN
          </h2>
        </div>

        {/* New Section */}

        <div className="flex flex-col gap-20 py-10">
          {/************ A New Era In Healthcare ****************/}

          <div className="flex sm:flex-row xxs:flex-col xl:gap-20 md:gap-10 sm:gap-5 mx-auto ">
            <img
              src={conceptimg}
              className="lg:w-[30rem] lg:h-[30rem] sm:w-80 sm:h-80 object-cover rounded"
              alt="conceptimg"
            />
            <div className="flex flex-col">
              <h3 className="lg:text-3xl xs:text-xl font-semibold py-2 lg:pb-10">
                A New Era In Healthcare
              </h3>
              <p className="lg:w-[30rem] sm:w-80 text-mediumGray sm:text-sm lg:text-base">
                The concept of Twin Health, a virtual representation crafted
                from vast data points and AI algorithms, envisioned as the
                future of healthcare, holds the promise of ground breaking
                advancements in patient care. By harnessing patient twinning,
                our vision is to expedite individuals' return to normalcy and,
                ideally, prevent illnesses proactively. While it may sound
                ambitious, the transformative potential of this technology lies
                in its data-driven approach.
              </p>
            </div>
          </div>

          {/************ Real Time Data ****************/}

          <div className="flex flex-row-reverse sm:flex-row-reverse xxs:flex-col xl:gap-20 md:gap-10 sm:gap-5 mx-auto">
            <img
              src={realtimeimg}
              className="lg:w-[30rem] lg:h-[30rem] sm:w-80 sm:h-80 object-cover rounded"
              alt="realtimeimg"
            />
            <div>
              <h3 className="lg:text-3xl xs:text-xl font-semibold py-2 lg:pb-10">
                Real Time Data
              </h3>
              <p className="lg:w-[30rem] sm:w-80 text-mediumGray sm:text-sm lg:text-base">
                The Twin Health is a composite model derived from a person's
                comprehensive medical history and digital health records,
                rigorously updated with real-time data from medical examinations
                and wearable sensors. This amalgamation of information undergoes
                continuous analysis by AI algorithms, culminating in simulations
                predicting the individual's future health trajectory. These
                insights equip healthcare providers and patients with actionable
                information for informed decision-making.
              </p>
            </div>
          </div>

          {/************ Efficency ****************/}

          <div className="flex sm:flex-row xxs:flex-col xl:gap-20 md:gap-10 sm:gap-5 mx-auto">
            <img
              src={efficencyimg}
              className="lg:w-[30rem] lg:h-[30rem] sm:w-80 sm:h-80 object-cover rounded"
              alt="efficencyimg"
            />
            <div>
              <h3 className="lg:text-3xl xs:text-xl font-semibold py-2 lg:pb-10">
                Efficency
              </h3>
              <p className="lg:w-[30rem] sm:w-80 text-mediumGray sm:text-sm lg:text-base">
                However, the efficacy of Twin Health hinges on its integration
                within a network of digital twins, be it physicians or medical
                devices. This interconnected ecosystem ensures tailored and
                automated configurations to optimize patient care, minimizing
                discrepancies and maximizing efficiency. The advantages for
                patients are profound - continuous monitoring of health data,
                comprehensible presentation of insights derived from
                evaluations, and empowerment to proactively manage health
                through lifestyle adjustments or timely interventions.
              </p>
            </div>
          </div>

          {/************ Serious Medical Situations ****************/}

          <div className="flex flex-row-reverse sm:flex-row-reverse xxs:flex-col xl:gap-20 md:gap-10 sm:gap-5 mx-auto">
            <img
              src={seriousimg}
              className="lg:w-[30rem] lg:h-[30rem] sm:w-80 sm:h-80 object-cover rounded"
              alt="seriousimg"
            />
            <div>
              <h3 className="lg:text-3xl xs:text-xl font-semibold py-2 lg:pb-10">
                Serious Medical Situations
              </h3>
              <p className="lg:w-[30rem] sm:w-80 text-mediumGray sm:text-sm lg:text-base">
                In critical situations, such as emergencies, Twin Health acts as
                a vigilant ally, enabling swift responses by alerting relevant
                parties, transmitting vital data, and facilitating immediate
                medical support. Furthermore, for caregivers and healthcare
                professionals, patient twinning provides a holistic view of a
                patient's health status, facilitating precise diagnoses,
                treatment planning, and remote interventions supported by
                advanced technologies under expert supervision
              </p>
            </div>
          </div>

          {/************* Associated With Twin Health Logo *************/}

          <div className="flex items-center mx-auto gap-4">
            <p className="">In Associated With</p>
            <Link to="https://ind.twinhealth.com/" target="_blank">
              <img src={twinHealthLogo} className="w-16" alt="twinHealthLogo" />
            </Link>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default WhatWeDo;
