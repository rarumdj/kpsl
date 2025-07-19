import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="pb-32 container mx-auto" id="projects">
      <div className="mx-auto text-center space-y-3 mb-6 max-w-xl">
        <h1 className="text-2xl md:text-4xl text-primary font-duplicate-san font-bold">
          Portfolio
        </h1>
        <p className="text-primary">
          Previous project and In Progress projects
        </p>
      </div>
      <div class="mx-auto flex flex-wrap">
        <div className="grid md:grid-cols-3 gap-4 w-full mt-10 text-white">
          <div
            onClick={() => navigate("/completed-projects")}
            className="flex flex-col rounded-md overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_3 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-lg mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Completed Projects
                    <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-2">
                      &gt;
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/* <div
            onClick={() => navigate("/ongoing-projects")}
            className="flex flex-col  items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_2 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-lg mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Ongoing Projects &gt;
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          {/*  */}
          <div
            onClick={() => navigate("/incoming-projects")}
            className="flex flex-col rounded-md overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-kpsl_hotel_1 bg-center bg-cover min-h-[300px] relative group cursor-pointer">
            <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start">
              <div className="p-4">
                <div className="text-lg mt-2">
                  <span className="text-white p-2 font-bold rounded-l">
                    Incoming Projects
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
      {/*  */}
    </section>
  );
};

export default Portfolio;
