import { Construction } from "assets/image";
import classNames from "classnames";
import { ArrowLeft } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate("/")}>
          <ArrowLeft className={classNames("h-5 w-5 text-primary")} /> Back
        </div>
        <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
          <div class="relative mt-10 md:mt-0">
            <div class="overflow-hidden aspect-w-3 aspect-h-4 ">
              <img
                class="object-cover object-top origin-top scale-150"
                src={Construction}
                alt=""
              />
            </div>
          </div>

          <div class="flex flex-col items-start xl:px-16">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Construction/Civil Engineering Services
            </h2>
            <p class="mt-4 text-base leading-relaxed text-gray-600">
              This business unit undertakes a broad range of heavy civil,
              infrastructure, and road construction for both public and private
              clients, operating in Nigeria. The business unit has an
              established footprint and is recognised as one of the leading
              Nigerian firms in construction and water projects structures. The
              unit has a large, competent and multi-skilled workforce that
              allows flexibility in the selection of contracts and an ability to
              easily adjust to the changing needs of the markets
            </p>
          </div>
        </div>

        <div class="max-w-2xl mx-auto text-center mt-12 lg:mt-24">
          <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            Major and Minor Constructions
          </h2>
        </div>

        <div class="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
          <div class="md:px-4 lg:px-10">
            <img
              class="-rotate-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg"
              alt=""
            />
            <h3 class="mt-8 text-xl font-semibold leading-tight text-black">
              Road Construction
            </h3>
          </div>

          <div class="md:px-4 lg:px-10">
            <img
              class="rotate-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg"
              alt=""
            />
            <h3 class="mt-8 text-xl font-semibold leading-tight text-black">
              Infrastructure Development
            </h3>
          </div>

          <div class="md:px-4 lg:px-10">
            <img
              class="-rotate-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
              alt=""
            />
            <h3 class="mt-8 text-xl font-semibold leading-tight text-black">
              Excavation and Miscellaneous Concrete Works
            </h3>
          </div>

          <div class="md:px-4 lg:px-10">
            <img
              class="-rotate-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
              alt=""
            />
            <h3 class="mt-8 text-xl font-semibold leading-tight text-black">
              Drainages (Repair and Maintaince)
            </h3>
          </div>

          <div class="md:px-4 lg:px-10">
            <img
              class="-rotate-1"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
              alt=""
            />
            <h3 class="mt-8 text-xl font-semibold leading-tight text-black">
              Foundation Pilling
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
