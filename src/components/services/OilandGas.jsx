import { Construction, OilandGass } from "assets/image";
import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OilandGas = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate("/")}>
          <ArrowLeft className={classNames("h-5 w-5 text-primary")} /> Back
        </div>
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
          <div className="relative mt-10 md:mt-0">
            <div className="overflow-hidden aspect-w-3 aspect-h-4 ">
              <img
                className="object-cover object-top origin-top"
                src={OilandGass}
                alt="OilandGass"
              />
            </div>
          </div>

          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Oil and Gas
            </h2>

            <h6 className="text-base font-bold leading-tight text-black sm:text-lg lg:text-xl mt-5">
              Drilling Services
            </h6>

            <ul className="list-disc list-inside text-gray-600 my-4">
              <li>Drilling Fluid</li>
              <li>Production Chemicals</li>
              <li>Waste Management Control and Equipment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OilandGas;
