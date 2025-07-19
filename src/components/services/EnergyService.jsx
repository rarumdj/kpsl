import { Renewable } from "assets/image";
import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const EnergyService = () => {
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
                src={Renewable}
                alt="energy"
              />
            </div>
          </div>

          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Energy and Power
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Our company has also delved into providing exceptional services in
              the innovative technology in diversification of energy and power
              known as sustainable and renewable energy.
            </p>

            <ul className="list-disc list-inside text-gray-600 my-4">
              <li>Solar Energy</li>
              <li>Wind Energy</li>
              <li>Hydroelectric Power</li>
              <li>Geothermal Energy</li>
              <li>Biomass Energy</li>
            </ul>

            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Renewable energy refers to energy that is generated from natural
              resources that replenish themselves over time, such as sunlight,
              wind, rain, tides, and geothermal heat. Unlike fossil fuels, which
              are finite and non-renewable. <br />
              <br />
              Renewable energy is becoming increasingly important as the world
              seeks to diversify to greenhouse gas emissions and mitigate the
              effects of climate change. In addition to being cleaner and more
              sustainable than fossil fuels, renewable energy sources have the
              potential to create new jobs and stimulate economic growth.
              Overall, renewable energy is at this time very important all over
              the world as a sustainable source of power for generations to
              come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyService;
