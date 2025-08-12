import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const bgClasses = [
  "bg-by_project_1",
  "bg-by_project_2",
  "bg-by_project_3",
  "bg-by_finishing_27",
  "bg-by_finishing_28",
  "bg-by_finishing_23",
  "bg-by_finishing_4",
  "bg-by_finishing_17",
  "bg-by_finishing_30",
  "bg-by_finishing_22",
  "bg-by_finishing_18",
  // "bg-by_finishing_26",
  "bg-by_finishing_2",
  "bg-by_finishing_1",
  "bg-by_finishing_12",
  "bg-by_finishing_11",
  "bg-by_finishing_10",
  "bg-by_finishing_9",
  "bg-by_finishing_8",
  "bg-by_finishing_7",
  // "bg-by_finishing_6",
  "bg-by_finishing_5",
  "bg-by_project_4",
  "bg-by_project_5",
  "bg-by_project_6",
  "bg-by_finishing_14",
  "bg-by_finishing_15",
  "bg-by_finishing_16",
  "bg-by_finishing_19",
  "bg-by_finishing_20",
  "bg-by_finishing_21",
  // "bg-by_finishing_13",
  "bg-by_project_start_16",
  "bg-by_project_start_17",
  "bg-by_project_start_18",
  "bg-by_project_start_20",
  "bg-by_project_start_1",
  "bg-by_project_start_2",
  "bg-by_project_start_3",
  "bg-by_project_start_5",
  "bg-by_project_start_6",
  "bg-by_project_start_8",
  "bg-by_project_start_9",
  "bg-by_project_start_10",
  "bg-by_project_start_11",
  "bg-by_project_start_12",
  "bg-by_project_start_14",
  "bg-by_project_start_15",
  "bg-by_project_start_19",
  "bg-by_project_start_21",
  "bg-by_finishing_29",

];

const BayelsaQuatersProject = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-gray-50 sm:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate("/completed-projects")}>
          <ArrowLeft className={classNames("h-5 w-5 text-primary")} /> Back
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12">
          <h2 className="text-2xl font-bold leading-tight text-gray-800 md:text-4xl">
            Bayelsa State New Commissioners Quarters Comprising 40units of
            5bedroom duplexes located at New Yenagoa City, Bayelsa State
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

export default BayelsaQuatersProject;
