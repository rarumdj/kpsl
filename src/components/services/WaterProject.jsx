import { water_project_p } from "assets/image";
import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const WaterProject = () => {
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
                src={water_project_p}
                alt="energy"
              />
            </div>
          </div>

          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Water Projects
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Water is the lifeblood of society making sustainable water
              management an increasingly important consideration. KPSL has been
              involved in numerous projects to create sustainable engineering
              solutions in Water supply projects, Effluent handling systems,
              Mine service water supply, Storm Water management and Pollution
              containment systems. Project lifecycles, operational factors and
              environmental factors are all integrated to provide sustainable
              solutions that ensure ease of operation. <br /> <br /> KPSL has
              established a unique record in the field of waste water
              purification and sewage system infrastructure, installations for
              the treatment of drinking-water, gas and water pipelines and this
              both for civil and electromechanical engineering aspects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterProject;
