import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const KPSLHotelProject = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-gray-50 sm:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate("/upcoming-projects")}>
          <ArrowLeft className={classNames("h-5 w-5 text-primary")} /> Back
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12 ">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            KPSL Hotel
          </h2>
        </div>

        <div className="grid-cols-1 mt-12 gap-y-12 gap-x-6 grid md:grid-cols-3 gap-4 w-full text-white">
          {/*  */}
          <div className="flex flex-col rounded-md overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-kpsl_hotel_1 bg-center bg-cover min-h-[300px] relative group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 hover:-translate-y-2">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    KPSL Hotel (Side view)
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col rounded-md overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-kpsl_hotel_2 bg-center bg-cover min-h-[300px] relative group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 hover:-translate-y-2">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    KPSL Hotel (Aerial view)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col rounded-md overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-kpsl_hotel_3 bg-center bg-cover min-h-[300px] relative group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 hover:-translate-y-2">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-sm mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    KPSL Hotel (Entrance view)
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

export default KPSLHotelProject;
