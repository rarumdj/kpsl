import {
  Construction,
  Drainage,
  Excavation,
  Housing,
  RoadConstruct,
  building_p,
  infastructure,
} from "assets/image";
import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Constructions = () => {
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
                src={building_p}
                alt="construction"
              />
            </div>
          </div>

          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Construction/Civil Engineering Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              This business unit undertakes a broad range of heavy civil,
              infrastructure, and road construction for both public and private
              clients, operating in Nigeria. The business unit has an
              established footprint and is recognised as one of the leading
              Nigerian firms in construction and water projects structures. The
              unit has a large, competent and multi-skilled workforce that
              allows flexibility in the selection of contracts and an ability to
              easily adjust to the changing needs of the markets
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12 lg:mt-24">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            Major and Minor Constructions
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
          <div className="md:px-4 lg:px-10">
            <img
              className="object-cover object-top origin-top "
              src={RoadConstruct}
              alt="road"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Road Construction
            </h3>
          </div>

          <div className="md:px-4 lg:px-10">
            <img
              className="object-cover object-top origin-top"
              src={infastructure}
              alt="infrastructure"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Infrastructure Development
            </h3>
          </div>

          <div className="md:px-4 lg:px-10">
            <img
              className="object-cover object-top origin-top "
              src={Excavation}
              alt="excavation"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Excavation and Miscellaneous Concrete Works
            </h3>
          </div>

          <div className="md:px-4 lg:px-10">
            <img
              className="object-cover object-top origin-top "
              src={Drainage}
              alt="drainages"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Drainages (Repair and Maintaince)
            </h3>
          </div>

          <div className="md:px-4 lg:px-10">
            <img
              className="object-cover object-top origin-top "
              src={Housing}
              alt="pilling"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Foundation Pilling
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Constructions;
