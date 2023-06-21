import { Construction, procurement_p } from "assets/image";
import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProcurementService = () => {
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
                src={procurement_p}
                alt="energy"
              />
            </div>
          </div>

          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Procurement Service
            </h2>

            <h6 className="text-base font-bold leading-tight text-black sm:text-lg lg:text-xl mt-5">
              Procurement Rental & Services
            </h6>

            <ul className="list-disc list-inside text-gray-600 my-4">
              <li>Hydraulic Power Unit</li>
              <li>Hydraulic power tong</li>
              <li>PPE & Safety Equipments</li>
              <li>Fishing and wireline services</li>
              <li>Mud Extraction Services</li>
              <li>WinCatt System</li>
              <li>Rigs</li>
              <li>Blow out Preventers(BOP)</li>
              <li>Accumulator Units</li>
              <li>Choke Manifolds</li>
              <li>Jars</li>
              <li>Pup Joints</li>
              <li>Drill Pipes</li>
              <li>Tubings</li>
              <li>Valves</li>
              <li>Lubricator and Side Doors</li>
              <li>Well Head and Maintenance equipments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcurementService;
