import { Facebook, Linkedin, Twitter, WhiteLogo } from "assets/icons";
import { CallOutgoing, Location, Message2 } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    link: "/",
    title: "Oil and Gas",
  },
  {
    link: "/",
    title: "Equipment Leasing",
  },
  {
    link: "/",
    title: "Procurement Service",
  },
  {
    link: "/",
    title: "Construction/Civil Engineering",
  },
  {
    link: "/",
    title: "Water Projects",
  },
  {
    link: "/",
    title: "Energy and Power",
  },
  {
    link: "/",
    title: "General Contract",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary" id="contact">
      <div className="container mx-auto flex flex-col py-16 px-6 sm:px-0 lg:py-20 lg:px-16 xl:px-5">
        <div className="grid border-b border-secondary md:grid-cols-3 md:gap-4 md:pb-10">
          <div className="max-w-[18rem]">
            <WhiteLogo className="mb-10" />

            <div className="flex items-center gap-3">
              <Twitter /> <Linkedin /> <Facebook />
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-3 text-sm font-semibold text-white">Contact</h2>
            <nav className="mb-10 list-none space-y-2 text-sm font-normal">
              <li className="flex items-center text-white">
                <Message2 className="h-5 w-5 mr-2" /> sendinfo.kpsl@gmail.com
              </li>
              <li className="flex items-center text-white">
                <CallOutgoing className="h-5 w-5 mr-2" /> +234 9027707264, +234
                8059387259
              </li>
              <li className="flex items-center text-white">
                <Location className="h-5 w-5 mr-2" />{" "}
                <span>
                  KPSL No 4 Bori Road Off Aba Road Port Harcourt, Rivers State
                  Nigeria.
                </span>
              </li>
            </nav>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-white">Services</h2>
            <nav className="mb-10 list-none space-y-2 text-sm font-normal">
              {services.map(({ title, link }, index) => (
                <li key={index}>
                  <Link className="text-white hover:text-secondary" to={link}>
                    {title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        </div>
        <div className="w-full pt-10">
          <div className="text-sm text-gray-25 ">
            © 2023 KPLS Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
