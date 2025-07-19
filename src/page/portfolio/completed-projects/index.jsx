import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const CompletedProjects = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-gray-50 sm:py-16 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate("/")}>
          <ArrowLeft className={classNames("h-5 w-5 text-primary")} /> Back
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            Completed Projects
          </h2>
        </div>

        <div>
          <div class="mx-auto flex flex-wrap">
            <div className="grid md:grid-cols-3 gap-4 w-full mt-10 text-white">
              <div
                onClick={() =>
                  navigate(
                    "/completed-projects/bayelsa-state-new-commissioners-quarters"
                  )
                }
                className="flex flex-col rounded-md overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_3 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
                <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
                  <div className="p-4">
                    <div className="text-lg mt-2">
                      <span className="text-white font-bold rounded-l">
                        Bayelsa State New Commissioners Quarters &gt;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                onClick={() => null}
                className="flex flex-col rounded-md overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-kpsl_coza_thumb bg-center bg-cover min-h-[300px] relative group cursor-pointer">
                <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
                  <div className="p-4">
                    <div className="text-lg mt-2">
                      <span className="text-white font-bold rounded-l">
                        COZA Ilorin New Auditorium &gt;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
