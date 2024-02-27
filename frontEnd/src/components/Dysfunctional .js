import { Link } from "react-router-dom";
import post1 from "../Images/Home/post_1[1]-03.png";
import precise from "../Images/Home/precise_img.webp";
import { FaCheckCircle } from "react-icons/fa";
import { scrollToTop } from "./utils/constant";

const Dysfunctional = () => {
  return (
    <section className="flex flex-col xxs:px-2">
      <div className="flex flex-col xl:gap-24 xxs:gap-10 xs:items-center">
        <h2 className="text-4xl md:text-3xl sm:text-2xl xxs:text-base font-semibold max-w-[50rem] text-center mx-auto text-mediumBlue">
          Dysfunctional Metabolism - The Core Culprit Behind Chronic Metabolic
          Disease!
        </h2>

        <div className="lg:flex lg:justify-between xl:gap-20 lg:gap-5 lg:mx-5 xl:mx-auto">
          <img
            src={post1}
            className="w-[35rem] rounded"
            alt="Goobye-to-Diabetics-Img"
          />
          <div className="flex flex-col gap-5 xs:gap-3 items-start xs:px-5 max-w-[35rem] rounded">
            <p className="xs:text-sm sm:text-base">
              <span className="sm:text-xl font-georgia">
                <strong className="xxs:text-base sm:text-xl">
                  The underlying issue behind chronic metabolic diseases:
                </strong>
              </span>
              <br />
              Stems from a dysfunctional metabolism, triggered by external
              factors such as nutrition, sleep, activity, and stress disrupting
              essential chemical processes vital for life. This disruption
              cascades into detrimental effects across the body's systems,
              leading to organ damage and the development of multiple chronic
              metabolic conditions.
            </p>
            <p className="xs:text-sm sm:text-base">
              <span className="sm:text-xl font-georgia">
                <strong className="xxs:text-base sm:text-xl">
                  Addressing this root cause is key:
                </strong>
              </span>
              <br />
              To reversing chronic metabolic diseases. The Whole-Body Digital
              Twin provides targeted guidance to enhance the external factors
              contributing to metabolic damage, including nutrition, sleep,
              activity, and stress. By improving these factors, the body's
              chemical processes return to optimal function, reducing negative
              downstream effects, reversing organ damage, and metabolic
              disorders.
            </p>
            <p className="xs:text-sm sm:text-base">
              <span className="sm:text-xl font-georgia">
                <strong className="xxs:text-base sm:text-xl">
                  Recognizing the uniqueness:
                </strong>
              </span>
              <br /> Each individual's metabolism is crucial. Medical research
              highlights the variability in how metabolisms function, posing
              challenges in tailoring treatments effectively. The Whole-Body
              Digital Twin offers precise guidance customized to each member's
              distinct metabolism, ensuring personalized support for improved
              health outcomes
            </p>

            <Link to={"/contactus"}>
              <button
                onClick={scrollToTop}
                className="sm:py-3 sm:px-10 xxs:py-1 xxs:px-4 styleButton"
              >
                Know More
              </button>
            </Link>
          </div>
        </div>

        {/************ Benefits of choosing Twin Section ***********************/}

        <div className="lg:flex lg:justify-between xl:gap-20 lg:gap-5 lg:mx-5 xl:mx-auto pb-10">
          <div className=" flex flex-col gap-5 relative">
            <h2 className="text-4xl md:text-3xl sm:text-2xl xxs:text-xl text-mediumBlue font-semibold pattern pl-8">
              Benefits of choosing Twin
            </h2>
            <p className="flex items-center gap-5 xxs:text-sm sm:text-base pt-5">
              <span className="text-darkGreen">
                <FaCheckCircle />
              </span>
              Reduce costly medications including insulin
            </p>
            <p className="flex items-center gap-5 xxs:text-sm sm:text-base">
              <span className="text-darkGreen">
                <FaCheckCircle />
              </span>
              Increase energy, improve mood, and decrease symptoms
            </p>
            <p className="flex items-center gap-5 xxs:text-sm sm:text-base">
              <span className="text-darkGreen">
                <FaCheckCircle />
              </span>
              your metabolism to help normalize your blood sugar
            </p>
            <p className="flex items-center gap-5 xxs:text-sm sm:text-base">
              <span className="text-darkGreen">
                <FaCheckCircle />
              </span>
              Real Time Data
            </p>

            <p className="flex items-center gap-5 xxs:text-sm sm:text-base">
              <span className="text-darkGreen">
                <FaCheckCircle />
              </span>
              Proven Results
            </p>
          </div>
          <div className="max-w-96 rounded">
            <img src={precise} className="" alt="preciseImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dysfunctional;
