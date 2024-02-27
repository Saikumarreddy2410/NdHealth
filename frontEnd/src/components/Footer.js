import Logo from "../Images/healthcare-logo-02.png";
import LinkedInPNG from "../Images/Logos/Linkedin.png";
import facebookPNG from "../Images/Logos/Facebook.png";
import instagramPNG from "../Images/Logos/instagram.png";
import twitterPNG from "../Images/Logos/twitter.png";
import whatsappPNG from "../Images/Logos/whatsapp.png";
import twinHealthLogo from "../Images/Twin+Health-Logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavLinks = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="sm:flex lg:gap-16 md:gap-5 sm:gap-3 xs:hidden sm:block">
      <li className="hover:text-Orange">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="relative">
        <button
          className="border-none hover:text-Orange"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          Programs
        </button>
        {/************** Drop Down *****************/}
        {showDropDown && (
          <div className="absolute rounded bg-mediumBlue z-10 text-sm">
            <ul className="flex flex-col ">
              <li
                className="hover:text-Orange"
                onClick={() => setShowDropDown(!showDropDown)}
              >
                <NavLink to="/programs/diabetes">Diabetes</NavLink>
              </li>
              <li
                className="hover:text-Orange"
                onClick={() => setShowDropDown(!showDropDown)}
              >
                <NavLink to="/programs/dyslipedimia">Dyslipedimia</NavLink>
              </li>
              <li
                className="hover:text-Orange"
                onClick={() => setShowDropDown(!showDropDown)}
              >
                <NavLink to="/programs/pcod">PCOD</NavLink>
              </li>
            </ul>
          </div>
        )}
      </li>
      <li className="hover:text-Orange">
        <NavLink to="/whatwedo">What we do</NavLink>
      </li>
      <li className="hover:text-Orange">
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>
    </div>
  );
};

const Footer = () => {
  return (
    <section className="bg-mediumBlue py-2 text-white flex justify-between items-center xs:px-3 xxs:px-2">
      <div className="flex flex-col gap-3">
        <img
          src={Logo}
          alt="logo"
          className="hover:scale-105 ease-out duration-500 md:w-44 xs:w-36 xxs:w-28"
        />

        {/*********** Social Media lInks **************/}

        <div className="flex md:gap-4 xxs:gap-2 xs:pl-3 ">
          <img
            src={LinkedInPNG}
            className="lg:w-5 xxs:w-4 cursor-pointer"
            alt="LinkedInPNG"
          />
          <img
            src={twitterPNG}
            className="lg:w-5 xxs:w-4 cursor-pointer"
            alt="twitterPNG"
          />
          <img
            src={facebookPNG}
            className="lg:w-5 xxs:w-4 cursor-pointer"
            alt="facebookPNG"
          />
          <img
            src={instagramPNG}
            className="lg:w-5 xxs:w-4 cursor-pointer"
            alt="instagramPNG"
          />
          <img
            src={whatsappPNG}
            className="lg:w-5 xxs:w-4 cursor-pointer"
            alt="whatsappPNG"
          />
        </div>
      </div>

      <div className="flex flex-col gap-7 items-center xs:text-sm xxs:text-[11px] lg:text-base">
        <ul className="hidden sm:block">
          <NavLinks />
        </ul>
        <p className="text-base xs:text-sm xxs:text-[11px]">
          &copy; ndhealth.in All Rights Reserved.
        </p>
      </div>

      {/************** Association **************/}

      <div className="flex items-center lg:gap-4 sm:gap-2 text-white">
        <p className="md:text-sm sm:text-xs xxs:hidden sm:block">
          In Association With
        </p>
        <Link to="https://ind.twinhealth.com/" target="_blank">
          <img
            src={twinHealthLogo}
            className="md:w-16 xs:w-12 w-10"
            alt="twinHealthLogo"
          />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
