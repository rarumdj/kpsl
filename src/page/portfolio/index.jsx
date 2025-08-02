import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="pb-32 pt-20 container mx-auto md:px-0 px-4" id="projects">
      <div className="mx-auto text-center space-y-4 mb-12 max-w-3xl ">
        <h1 className="text-3xl md:text-5xl text-primary font-duplicate-san font-bold">
          Our Project Portfolio
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore our diverse portfolio showcasing completed infrastructure
          projects, ongoing developments, and upcoming ventures that demonstrate
          our expertise across construction, energy, and engineering sectors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full mt-12">
        <div
          onClick={() => navigate("/completed-projects")}
          className="flex flex-col rounded-lg overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-by_project_3 bg-center bg-cover min-h-[350px] relative group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 hover:-translate-y-2 hover:shadow-lg">
          <div className="h-fit w-full absolute bottom-0 bg-gradient-to-t from-primary/90 to-primary/50 flex items-start">
            <div className="p-6 w-full">
              <div className="text-xl font-bold mb-2">
                <span className="text-white">
                  Completed Projects
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-2">
                    &gt;
                  </span>
                </span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Discover our successfully delivered infrastructure projects,
                including residential complexes, commercial buildings, and
                industrial facilities that showcase our construction excellence.
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/upcoming-projects")}
          className="flex flex-col rounded-lg overflow-hidden items-center w-full max-w-full space-y-3 p-4 pb-8 bg-kpsl_hotel_1 bg-center bg-cover min-h-[350px] relative group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 hover:-translate-y-2">
          <div className="h-fit w-full absolute bottom-0 bg-gradient-to-t from-primary/90 to-primary/50 flex items-start">
            <div className="p-6 w-full">
              <div className="text-xl font-bold mb-2">
                <span className="text-white">
                  Upcoming Projects
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-2">
                    &gt;
                  </span>
                </span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Get a glimpse of our future developments and planned
                infrastructure projects that will further demonstrate our
                commitment to excellence and innovation in construction and
                engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
