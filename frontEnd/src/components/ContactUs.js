import { useEffect, useState } from "react";
import patternImg from "../Images/contact.jpg";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import twinHealthLogo from "../Images/1.png";
import FormControl from "./Form/FormControl";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Shimmer from "./utils/Shimmer Comp/Shimmer";

const ContactUs = () => {
  const navigate = useNavigate();
  const [shimmerEffect, setShimmerEffect] = useState(true);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setShimmerEffect(false);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const emailAddress = "healthcare@newdirections.co.in";
  const phoneNumber1 = "+91 89776 17888";
  const phoneNumber2 = "+91 88857 11171";

  const initialValues = {
    username: "",
    tel: "",
    email: "",
    city: "",
    category: "",
    time: "",
    agreetoterms: false,
  };

  const onSubmit = async (values, { resetForm }) => {
    validate(values);
    // try {
    //   const response = await fetch("http://localhost:3001/submit-form", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });

    //   const result = await response.json();

    //   console.log("result", result);

    //   if (result.success) {
    //     // Form submitted successfully, you can handle the success case here
    //     console.log("Form submitted successfully");
    //   } else {
    //     // Handle the case where the form submission failed
    //     console.error("Failed to submit form");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }

    try {
      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Handle success, e.g., show a success message or redirect
      } else {
        console.error("Form submission failed");
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error("Error during form submission", error);
      // Handle error, e.g., show an error message
    }
    console.log(values);
    navigate("/thankyou");
    resetForm();
  };

  const validate = (values) => {
    let errors = {};

    // Username Validation

    if (values.username.trim().length === 0) {
      errors.username = "Username field cannot be blank";
    } else if (
      values.username.trim().length < 4 ||
      values.username.trim().length >= 15
    ) {
      errors.username = "Username within 4 to 15 Characters";
    }

    // Phone Number Validation

    var trimmedPhone = values.tel.startsWith("0")
      ? values.tel.slice(1)
      : values.tel;
    validateCommon(trimmedPhone, 10, /^[6-9]\d{9}$/, "Invalid mobile number");

    function validateCommon(trimmedPhone, maxLength, regex, errorMsgText) {
      if (trimmedPhone.length === 0) {
        errors.tel = "Phone number is required";
      } else if (trimmedPhone.length !== maxLength) {
        errors.tel = `Phone number must be ${maxLength} digits`;
      } else if (!regex.test(trimmedPhone)) {
        errors.tel = errorMsgText;
      } else return;
    }

    // Email Validation
    const EmailValidation = () => {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (values.email.trim() === "") {
        errors.email = "Email is required";
      } else if (!emailPattern.test(values.email.trim())) {
        errors.email = "inValid Email";
      } else return;
    };
    EmailValidation();

    // City Validation

    const cityValidation = () => {
      if (values.city.trim().length === 0) {
        errors.city = "city field cannot be blank";
      } else if (values.city.trim().length <= 2) {
        errors.city = "city must be morethan 2 Characters";
      }
    };
    cityValidation();

    if (values.category === "") {
      errors.category = "required";
    }

    if (values.time === "") {
      errors.time = "required";
    }

    if (!values.agreetoterms) {
      errors.agreetoterms = "required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // console.log("formik values", formik.values);

  return shimmerEffect ? (
    <Shimmer />
  ) : (
    <section className="relative flex flex-col gap-10">
      <div className=" w-full">
        <img src={patternImg} className="relative w-full" alt="patternImg" />
      </div>

      {/*************************    Main Section    *******************************/}

      <div className="flex lg:justify-around lg:flex-row xxs:flex-col xxs:gap-10 items-center pb-10">
        <div className="xs:w-[30rem] relative flex flex-col gap-10">
          <h2 className="md:text-3xl xxs:text-xl xxs:leading-10 xxs:text-center sm:text-start md:leading-[3rem]">
            <span className="bg-Orange rounded p-1 mr-2 text-white font-semibold">
              Get in touch
            </span>
            With us to discover the amazing Possible Ways to Recreate yourself
          </h2>

          <Link to={`mailto:${emailAddress}`}>
            <div className="flex items-center gap-5">
              <p className="w-10 h-10 border border-lightGray rounded-full flex items-center justify-center bg-lightGray">
                <MdOutlineMailOutline size={22} />
              </p>
              <p> {emailAddress}</p>
            </div>
          </Link>

          <div className="flex items-center gap-5">
            <p className="w-10 h-10 border border-lightGray rounded-full flex items-center justify-center bg-lightGray">
              <FiPhone size={22} />
            </p>
            <div>
              <Link to={`tel:${phoneNumber1}`}>
                <p> {phoneNumber1}</p>
              </Link>
              <Link to={`tel:${phoneNumber2}`}>
                <p> {phoneNumber2}</p>
              </Link>
            </div>
          </div>
        </div>

        {/******************  Form Section ************************/}
        <div>
          <div className="border-2 border-lightGray xs:p-10 bg-white rounded-2xl xxs:w-[21rem] xs:w-[30rem]">
            <h1 className="xs:pb-5 xxs:py-3 text-center xs:text-3xl xxs:text-xl font-semibold">
              Contact Us
            </h1>
            <form
              action="http://localhost:3000/contact-form.php"
              method="POST"
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-center gap-5"
            >
              {/*******   Username  *********/}

              <div>
                <label htmlFor="username" className="xxs:text-sm xs:text-base">
                  Full Name:
                </label>
                <br />
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="focus:outline-none xs:w-96 xxs:w-72 border border-lightGray p-2 rounded"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  placeholder="Full Name*"
                />
                {formik.errors.username ? (
                  <p className="text-error">{formik.errors.username}</p>
                ) : null}
              </div>

              {/************   Mobile No  ***************/}

              <div>
                <label htmlFor="tel" className="xxs:text-sm xs:text-base">
                  Phone No
                </label>
                <br />
                <input
                  className="focus:outline-none xs:w-96 xxs:w-72 border border-lightGray p-2 rounded"
                  type="tel"
                  id="tel"
                  name="tel"
                  onChange={formik.handleChange}
                  value={formik.values.tel}
                  placeholder="Enter your Mobile Number"
                />
                {formik.errors.tel ? (
                  <p className="text-error">{formik.errors.tel}</p>
                ) : null}
              </div>

              {/************   Email  ***************/}

              <div>
                <label htmlFor="email" className="xxs:text-sm xs:text-base">
                  Email
                </label>
                <br />
                <input
                  className="focus:outline-none xs:w-96 xxs:w-72 border border-lightGray p-2 rounded"
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="Enter your Email"
                />
                {formik.errors.email ? (
                  <p className="text-error">{formik.errors.email}</p>
                ) : null}
              </div>

              {/*******   City Name  *********/}

              <div>
                <label htmlFor="city" className="xxs:text-sm xs:text-base">
                  City
                </label>
                <br />
                <input
                  className="focus:outline-none xs:w-96 xxs:w-72 border border-lightGray p-2 rounded"
                  type="text"
                  id="city"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  placeholder="Enter your city"
                />
                {formik.errors.city ? (
                  <p className="text-error">{formik.errors.city}</p>
                ) : null}
              </div>

              {/* Select Dieseas */}

              <div>
                <label htmlFor="category" className="xxs:text-sm xs:text-base">
                  Select Catogery:
                </label>
                <br />
                <select
                  id="category"
                  name="category"
                  className="focus:outline-none xs:w-96 xxs:w-72 p-2 border border-lightGray rounded"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                >
                  <option value="">Select</option>
                  <option value="diabetes">Diabetes</option>
                  <option value="dyslipedimia">Dyslipedimia</option>
                  <option value="pcod">PCOD</option>
                </select>
                {formik.errors.category ? (
                  <p className="text-error">{formik.errors.category}</p>
                ) : null}
              </div>

              {/************* Language and Schedule Slot  **********************/}

              {/*******   Language  *********/}

              {/* <FormControl
                  control="select"
                  label="Select language"
                  name="language"
                  options={[
                    {
                      value: "select",
                      label: "Select",
                    },
                    {
                      value: "telugu",
                      label: "Telugu",
                    },
                    {
                      value: "hindi",
                      label: "Hindi",
                    },
                    {
                      value: "english",
                      label: "English",
                    },
                  ]}
                /> */}
              {/*******   Schedule  *********/}

              <div>
                <label htmlFor="time" className="mr-2 xxs:text-sm xs:text-base">
                  Select time slot:
                </label>
                <br />
                <select
                  id="time"
                  name="time"
                  onChange={formik.handleChange}
                  value={formik.values.time}
                  className="focus:outline-none xs:w-96 xxs:w-72 p-2 border border-lightGray rounded"
                >
                  <option value="">Select</option>
                  <option value="9am-1pm">9 AM - 1 PM</option>
                  <option value="1pm-5pm">1 PM - 5 PM</option>
                  <option value="5pm-9pm">5 PM - 9 PM</option>
                </select>
                {formik.errors.time ? (
                  <p className="text-error">{formik.errors.time}</p>
                ) : null}
              </div>

              {/************** Confirm Checkbox *******************/}

              <div className="pt-5 xxs:px-5">
                <input
                  className="xxs:text-sm"
                  type="checkbox"
                  id="agreetoterms"
                  name="agreetoterms"
                  checked={formik.values.agreetoterms}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="agreetoterms"
                  className="pl-3 xxs:text-sm xs:text-base"
                >
                  I agree to be contacted by ND Health via Call, SMS, WhatsApp &
                  Email
                </label>
                {formik.errors.agreetoterms ? (
                  <p className="text-error">{formik.errors.agreetoterms}</p>
                ) : null}
              </div>

              {/************** Submit Button *******************/}

              <button
                type="submit"
                disabled={!formik.isValid}
                className="styleButton px-10 py-3 mt-5"
              >
                Submit
              </button>

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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
