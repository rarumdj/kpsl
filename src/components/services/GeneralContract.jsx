import { Construction, Housing } from "assets/image";
import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const GeneralContract = () => {
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
                src={Housing}
                alt="energy"
              />
            </div>
          </div>

          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              General Contracts
            </h2>
            <h6 className="text-base font-bold leading-tight text-black sm:text-lg lg:text-xl mt-5">
              Housing and Building Work
            </h6>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Buildings take a special place within KPSL, as well as mastering
              the architectural aspects, building projects also require the
              in-depth expertise of special technologies, finishing techniques
              and materials. A separate division within KPSL PROCUREMENT
              supports end customers, clients, architects, subcontractors and
              suppliers in a a proactive and customer-oriented way to come to an
              optimal result with integrity, considering the wishes, ambitions
              and budgetary limitations of all parties concerned.
            </p>

            <h6 className="text-base font-bold leading-tight text-black sm:text-lg lg:text-xl mt-5">
              Project Management
            </h6>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              KPSL also offers a wide range of project management services which
              include but not limited to construction project planning &
              management, contract management, construction project supervisions
              and site inspections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralContract;
