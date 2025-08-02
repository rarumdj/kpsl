import { Logo } from "assets/icons";
import classNames from "classnames";
import { motion } from "framer-motion";
import { CloseCircle, HambergerMenu } from "iconsax-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "hidden",
      },
    },
  };

  // const handleNavClick = () => {
  //   if (pathname !== "/") navigate("/");
  //   setClick(false);

  //   return;
  // };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 flex h-20 justify-center border-b border-secondary bg-white py-4 px-6 lg:py-4 lg:px-16">
      <div className="container flex w-screen flex-row items-center justify-between">
        <div className="z-50 flex w-full justify-between space-x-10 md:w-0 md:justify-start ">
          <NavLink to="/">
            <Logo />
          </NavLink>

          <button className="z-50 block md:hidden" onClick={handleClick}>
            {click ? (
              <CloseCircle className={classNames("h-6 w-6 text-black")} />
            ) : (
              <HambergerMenu className={classNames("h-6 w-6 text-black")} />
            )}
          </button>
          <div className="hidden w-full md:ml-auto md:mr-auto md:flex">
            <nav className="flex flex-row items-center gap-8 space-x-1 whitespace-nowrap text-sm font-medium text-secondary lg:text-base">
              <NavLink className="cursor-pointer hover:text-primary" to="/">
                Home
              </NavLink>
              <a
                className="flex cursor-pointer items-center hover:text-primary"
                href="#about">
                About us
              </a>
              <a className="cursor-pointer hover:text-primary" href="#services">
                Services
              </a>
              <a className="cursor-pointer hover:text-primary" href="#clients">
                Clients
              </a>
              <a className="cursor-pointer hover:text-primary" href="#projects">
                Projects
              </a>
            </nav>
          </div>
        </div>

        <div className="z-50 hidden md:flex">
          <div className="flex flex-row items-center space-x-4 font-medium md:ml-16">
            {/* <NavLink
              className="flex  h-11 items-center justify-center px-3 text-xs font-medium text-gray-30 md:px-6 md:text-base"
              to="https://app.joinsteward.com">
              Sign In
            </NavLink> */}
            <a
              href="#contact"
              className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-center text-xs font-medium text-white md:px-6 md:text-base">
              Contact us
            </a>
          </div>
        </div>

        <motion.nav
          initial={false}
          animate={click ? "open" : "closed"}
          variants={variants}
          className={classNames(
            `absolute inset-0 block h-fit w-full rounded-b-xl bg-white shadow-sm md:hidden`
          )}>
          <div className="container mx-auto mt-25 flex  h-fit flex-col overflow-y-scroll px-6 pb-10 ">
            <div className="w-full space-y-16">
              <nav className="flex flex-col space-y-5 font-normal text-black ">
                <NavLink className="cursor-pointer hover:text-primary" to="/">
                  Home
                </NavLink>
                <a
                  className="flex cursor-pointer items-center hover:text-primary"
                  href="#about">
                  About us
                </a>
                <a
                  className="cursor-pointer hover:text-primary"
                  href="#services">
                  Services
                </a>
                <a
                  className="cursor-pointer hover:text-primary"
                  href="#clients">
                  Clients
                </a>
                <a
                  className="cursor-pointer hover:text-primary"
                  href="#projects">
                  Projects
                </a>

                <div className="!mt-10 space-y-4">
                  <a
                    href="#contact"
                    className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-center text-xs font-medium text-white md:px-6 md:text-base">
                    Contact us
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
