import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const UpcomingProjects = () => {
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
            Upcoming Projects
          </h2>
        </div>

        <div>
          <div className="mx-auto flex flex-wrap">
            <div className="grid md:grid-cols-3 gap-4 w-full mt-10 text-white">
              <div
                onClick={() =>
                  navigate(
                    "/upcoming-projects/80-units-of-6bedroom-terrace-located-at-durumi-abuja"
                  )
                }
                className="flex flex-col rounded-md overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-trace_1 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
                <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
                  <div className="p-4">
                    <div className="text-lg mt-2">
                      <span className="text-white font-bold rounded-l">
                        80 units of 6bedroom terrace Located at DURUMI ABUJA
                        <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-2">
                          &gt;
                        </span>
                      </span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      80 units of 6bedroom terrace Located at DURUMI ABUJA
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                onClick={() => navigate("/upcoming-projects/kpsl-hotel")}
                className="flex flex-col rounded-md overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-kpsl_hotel_1 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
                <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
                  <div className="p-4">
                    <div className="text-lg mt-2">
                      <span className="text-white font-bold rounded-l">
                        KPSL Hotel
                        <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-2">
                          &gt;
                        </span>
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

export default UpcomingProjects;
