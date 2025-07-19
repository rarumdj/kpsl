import classNames from "classnames";
import { ArrowRight, TickCircle } from "iconsax-react";

const Hero = () => {
  return (
    <section className="bg-hero_bg bg-center bg-cover relative lg:h-full 2xl:h-full md:min-h-[700px] min-h-[600px]">
      <div className="container mx-auto flex flex-col px-6 py-16 sm:px-0  md:flex-row lg:px-16 xl:px-5">
        <div className="flex flex-col md:mb-0 md:w-1/2 md:items-start md:pr-16 lg:flex-grow lg:pr-24 xl:my-16">
          <h1 className="mb-4 font-duplicate-san text-4xl font-medium text-white md:text-4xl xl:text-6xl">
            We Prepare For The Future
          </h1>
          <p className="mb-8 leading-relaxed md:text-2xl text-white">
            We provide the best achitechural designs, construction and building
            maintaince services for you.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href="#services"
              className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-3 text-center text-xs font-medium text-white md:h-15 md:px-6 md:text-sm"
              rel="noreferrer">
              Our services
              <ArrowRight className={classNames("h-5 w-5 text-white")} />
            </a>
            <a
              href="#projects"
              className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white px-3 text-center text-xs font-medium text-white md:h-15 md:px-6 md:text-sm">
              View projects
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2"></div>
      </div>
      <div className="min-h-fit w-full absolute -bottom-[10%] md:mr-16 right-0 px-6 max-w-lg">
        <div className="space-y-4 bg-primary p-4 rounded-lg ">
          <div className="flex items-center text-white">
            <TickCircle variant="Bold" className="text-white mr-4" /> Quality
            control system, 100% satisfaction
          </div>
          <div className="flex items-center text-white">
            <TickCircle variant="Bold" className="text-white mr-4" /> Highly
            professional staff, accurate testing process.
          </div>
          <div className="flex items-center text-white">
            <TickCircle variant="Bold" className="text-white mr-4" />{" "}
            Unrivalled workmanship, professional and qualified.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
