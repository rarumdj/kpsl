import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const bgClasses = ["bg-trace_1", "bg-trace_2", "bg-trace_3", "bg-trace_4"];

const DurumiAbujaProject = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-gray-50 sm:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate("/upcoming-projects")}>
          <ArrowLeft className={classNames("h-5 w-5 text-primary")} /> Back
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12">
          <h2 className="text-2xl font-bold leading-tight text-gray-800 md:text-4xl">
            80 units of 6bedroom terrace Located at DURUMI ABUJA
          </h2>
          {/* <p className="text-base leading-relaxed">
            Comprising 40units of 5bedroom duplexes located at New Yenagoa City,
            Bayelsa State
          </p> */}
        </div>

        <div className="grid-cols-1 mt-12 gap-y-12 gap-x-6 grid md:grid-cols-3 gap-4 w-full text-white">
          {bgClasses.map((bg, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 ${bg} bg-center bg-cover min-h-[300px] relative transition duration-300 ease-out hover:scale-102 hover:-translate-y-2 rounded-md`}>
              <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DurumiAbujaProject;
