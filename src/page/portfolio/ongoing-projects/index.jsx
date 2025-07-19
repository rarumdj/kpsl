import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OngoingProjects = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate("/")}>
          <ArrowLeft className={classNames("h-5 w-5 text-primary")} /> Back
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12 lg:mt-24">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            Ongoing Projects
          </h2>
        </div>

        <div className="grid-cols-1 mt-12 lg:mt-24 gap-y-12 gap-x-6 grid md:grid-cols-3 gap-4 w-full text-white">
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_1 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_2 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_3 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_4 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_5 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_6 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_1 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_2 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_3 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_5 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_6 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_8 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_9 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_10 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_11 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_12 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_14 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_15 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_16 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_17 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_18 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_19 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_20 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_start_21 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Bayelsa State New Commissioners Quarters
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
