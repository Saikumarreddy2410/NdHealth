import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/healthcare-logo-02.png";
import twinHealthLogo from "../Images/Twin+Health-Logo.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

const NavLinks = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleOutsideClick = (e) => {
    if (showDropDown && !e.target.closest(".programs")) {
      setShowDropDown(false);
    }
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const closeDropDown = () => {
    setShowDropDown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="sm:flex lg:gap-16 md:gap-10 sm:flex-row sm:gap-5 xs:gap-2 items-center xxs:space-y-10 sm:space-y-0 xxs:text-sm lg:text-base">
      <li className="hover:text-Orange">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="relative">
        <button
          className="border-none hover:text-Orange relative programs"
          onClick={toggleDropDown}
        >
          Programs
        </button>
        {/************** Drop Down *****************/}
        {showDropDown && (
          <div className="absolute sm:top-[3.5rem] xs:w-full sm:w-fit rounded bg-mediumBlue/95 p-3 z-10">
            <ul className="flex flex-col gap-5">
              <li className="hover:text-Orange" onClick={closeDropDown}>
                <NavLink to="/programs/diabetes">Diabetes</NavLink>
              </li>
              <li className="hover:text-Orange" onClick={closeDropDown}>
                <NavLink to="/programs/dyslipedimia">Dyslipedimia</NavLink>
              </li>
              <li className="hover:text-Orange" onClick={closeDropDown}>
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const openSlider = () => {
    setIsOpen(!isOpen);
  };

  const closeSlider = () => {
    setIsOpen(false);
  };

  const handleDropDown = (e) => {
    e.stopPropagation();
    setShowDropDown(!showDropDown);
  };

  const closeDropDown = () => {
    setShowDropDown(false);
    closeSlider();
  };

  // Close the DropDown if user clicks outside of the DropDown

  const handleOutsideClick = (e) => {
    if (isOpen && !e.target.closest(".side-navbar")) {
      closeSlider();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header
      className={`bg-mediumBlue flex justify-between items-center py-3 md:px-5 lg:px-10 xxs:px-2`}
    >
      <NavLink to="/">
        <img
          src={Logo}
          alt="logo"
          className="hover:scale-105 ease-out duration-500 lg:w-44 md:w-40 xs:w-36 xxs:w-28"
        />
      </NavLink>

      <ul className="text-lightWhite xs:text-sm sm:text-base hidden sm:block ">
        <NavLinks />
      </ul>

      {/*************** Mobile Responsive Navbar ********************/}

      {isOpen && (
        <ul className="text-lightWhite lg:hidden md:block absolute md:top-[5.75rem] xs:top-[4.25rem] xxs:top-[3.6rem] bg-darkBlue/80 z-10 right-0 p-5 w-56 h-[calc(100%-4rem)] text-center side-navbar">
          <div>
            <div className="sm:flex lg:gap-16 md:gap-10 sm:flex-row sm:gap-5 xs:gap-2 items-center xxs:space-y-10 sm:space-y-0 text-sm">
              <li className="hover:text-Orange" onClick={closeSlider}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="relative">
                <button
                  className="border-none hover:text-Orange relative"
                  onClick={handleDropDown}
                >
                  Programs
                </button>
                {/************** Drop Down *****************/}
                {showDropDown && (
                  <div className="absolute xs:w-full sm:w-fit rounded bg-mediumBlue/95 p-3 z-10">
                    <ul className="flex flex-col gap-5">
                      <li className="hover:text-Orange" onClick={closeDropDown}>
                        <NavLink to="/programs/diabetes">Diabetes</NavLink>
                      </li>
                      <li className="hover:text-Orange" onClick={closeDropDown}>
                        <NavLink to="/programs/dyslipedimia">
                          Dyslipedimia
                        </NavLink>
                      </li>
                      <li className="hover:text-Orange" onClick={closeDropDown}>
                        <NavLink to="/programs/pcod">PCOD</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="hover:text-Orange" onClick={closeSlider}>
                <NavLink to="/whatwedo">What we do</NavLink>
              </li>
              <li className="hover:text-Orange" onClick={closeSlider}>
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
            </div>
            <div className="absolute bottom-5 flex items-center gap-5 px-0">
              <p className="text-xs gap-1">In Association with</p>
              <img src={twinHealthLogo} className="w-14" alt="twinHealthLogo" />
            </div>
          </div>
        </ul>
      )}

      {/************** Association && Humburger Menu **************/}

      <div className="flex items-center lg:gap-4 xxs:gap-2 text-white">
        <p className="sm:text-xs lg:text-sm hidden sm:block">
          In Association With
        </p>
        <Link to="https://ind.twinhealth.com/" target="_blank">
          <img
            src={twinHealthLogo}
            className="md:w-16 xxs:w-12"
            alt="twinHealthLogo"
          />
        </Link>
        <div className="sm:hidden block">
          {isOpen ? (
            <RxCross2 size={26} onClick={closeSlider} />
          ) : (
            <RxHamburgerMenu size={25} onClick={openSlider} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
