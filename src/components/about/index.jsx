import { aboutSafe, aboutt } from "assets/image";
import {
  Alarm,
  Building,
  Car,
  Drop,
  Flash,
  MagicStar,
  OceanProtocol,
  Setting2,
  Wind2,
} from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  // { path: "constructions", element: <Constructions /> },
  // { path: "energy-service", element: <EnergyService /> },
  // { path: "equipment-leasing", element: <EquipmentLeasing /> },
  // { path: "general-contract", element: <GeneralContract /> },
  // { path: "oil-and-gas", element: <OilandGas /> },
  // { path: "procurement", element: <ProcurementService /> },
  // { path: "water-project", element: <WaterProject /> },
  return (
    <section className="pb-32 pt-12" id="about">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-left-bottom rounded"
            src={aboutt}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold text-secondary font-duplicate-san leading-tight mb-5">
              3 Decades <br className="md:block hidden" />
              <span className="text-primary font-duplicate-san">
                {" "}
                of experience!
              </span>
            </h1>

            <p class="leading-relaxed">
              KPSL, a division of Gopolo Nigeria Limited, is a
              fully indigenous and limited liability company based in Nigeria.
              KPSL is an Engineering Procurement Contractor (EPC) company that
              specializes in providing services to the Oil and Gas industry.
              With over three decades of experience, KPSL has established itself
              as a trusted name in the industry, offering a wide range of
              services including procurement, construction, civil engineering,
              labor/manpower supply, consultancy, and general supply. <br />
              <br />
              The company prides itself on its commitment to high-quality
              standards, client satisfaction, and adherence to project
              specifications and requirements.
            </p>
          </div>
        </div>
      </div>

      <div class="px-5 pb-24 pt-16 mx-auto flex flex-col bg-primary">
        <div className="mx-auto text-center space-y-3 mb-10 max-w-xl">
          <h1 className="text-2xl md:text-4xl text-white font-duplicate-san font-bold">
            Vision & Mission
          </h1>
          <p className="text-white">
            Our vision is to be one of the foremost indigenous company not just
            in Nigeria but in Africa.
          </p>
        </div>
        <div class="lg:w-4/5 container mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded-xl"
            src={aboutSafe}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <p class="leading-relaxed text-white">
              KPSL provides an exceptional and meticulous services to our
              clients. We do this by helping our clients achieve their intended
              goals through a team work of an entrepreneur business
              collaboration through world class technology.
            </p>

            <div className="grid md:grid-cols-3 gap-4 w-full mt-10 text-white ">
              <div className="flex flex-col items-center w-full md:max-w-xs space-y-3 p-4 border rounded-md">
                <OceanProtocol size="32" color="#FF8A65" />
                <h2 className="font-bold text-lg">Integrity</h2>
                <p className="md:text-sm text-xs text-center">Our word is our Bond, and we are completely transparent in all our dealings with our clients.</p>
              </div>
              <div className="flex flex-col items-center w-full md:max-w-xs space-y-3 p-4 border rounded-md">
                <Setting2 size="32" color="#FF8A65" />
                <h2 className="font-bold text-lg">Innovation</h2>
                <p className="md:text-sm text-xs text-center">We are open and constantly updated with modern innovations and technologies horizon.</p>
              </div>
              <div className="flex flex-col items-center w-full md:max-w-xs space-y-3 p-4 border rounded-md">
                <MagicStar size="32" color="#FF8A65" />
                <h2 className="font-bold text-lg text-center">Excellence</h2>
                <p className="md:text-sm text-xs">We ensure excellence and outstanding services in all our dealings.</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mx-auto text-center space-y-3 mb-10 mt-25 max-w-xl"
          id="services">
          <h1 className="text-2xl md:text-4xl text-white font-duplicate-san font-bold">
            Our Services
          </h1>
          <p className="text-white">
            We develop comprehensive solution for each project.
          </p>
        </div>
        <div class="lg:w-4/5 container mx-auto flex flex-wrap w-full">
          <div className="grid md:grid-cols-3 gap-4 w-full mt-10 text-white mx-auto">
             {/*  */}
             <div className="flex flex-col items-center w-full max-w-xs space-y-3 p-4 pb-8 mx-auto bg-white rounded-md">
              <div className="bg-construction bg-center bg-cover min-h-[155px] w-full rounded-lg relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-4 bottom-0">
                  <div
                    className="p-2 bg-gray-300 rounded-md flex items-center cursor-pointer"
                    onClick={() => navigate("/constructions")}>
                    <div className="bg-primary p-1 rounded-md mr-2">
                      <Building size="20" color="#FF8A65" />
                    </div>
                    <p className="text-sm leading-none text-primary">
                      Construction/Civil Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center w-full max-w-xs space-y-3 p-4 pb-8 mx-auto bg-white rounded-md">
              <div className="bg-oil_gas bg-center bg-cover min-h-[155px] w-full rounded-lg relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-4 bottom-0">
                  <div
                    className="p-2 bg-gray-300 rounded-md flex items-center cursor-pointer"
                    onClick={() => navigate("/oil-and-gas")}>
                    <div className="bg-primary p-1 rounded-md mr-2">
                      <Drop size="20" color="#FF8A65" />
                    </div>
                    <p className="text-sm leading-none text-primary">
                      Oil and Gas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center w-full max-w-xs space-y-3 p-4 pb-8 mx-auto bg-white rounded-md">
              <div className="bg-equipments bg-center bg-cover min-h-[155px] w-full rounded-lg relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-4 bottom-0">
                  <div
                    className="p-2 bg-gray-300 rounded-md flex items-center cursor-pointer"
                    onClick={() => navigate("/equipment-leasing")}>
                    <div className="bg-primary p-1 rounded-md mr-2">
                      <Car size="20" color="#FF8A65" />
                    </div>
                    <p className="text-sm leading-none text-primary">
                      Equipment Leasing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center w-full max-w-xs space-y-3 p-4 pb-8 mx-auto bg-white rounded-md">
              <div className="bg-procurements border-2 bg-center bg-cover min-h-[155px] w-full rounded-lg relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-4 bottom-0">
                  <div
                    className="p-2 bg-gray-300 rounded-md flex items-center cursor-pointer"
                    onClick={() => navigate("/procurement")}>
                    <div className="bg-primary p-1 rounded-md mr-2">
                      <Alarm size="20" color="#FF8A65" />
                    </div>
                    <p className="text-sm leading-none text-primary">
                      Procurement Service
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
            {/*  */}
            <div className="flex flex-col items-center w-full max-w-xs space-y-3 p-4 pb-8 mx-auto bg-white rounded-md">
              <div className="bg-water_project bg-center bg-cover min-h-[155px] w-full rounded-lg relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-4 bottom-0">
                  <div
                    className="p-2 bg-gray-300 rounded-md flex items-center cursor-pointer"
                    onClick={() => navigate("/water-project")}>
                    <div className="bg-primary p-1 rounded-md mr-2">
                      <Wind2 size="20" color="#FF8A65" />
                    </div>
                    <p className="text-sm leading-none text-primary">
                      Water Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center w-full max-w-xs space-y-3 p-4 pb-8 mx-auto bg-white rounded-md">
              <div className="bg-renewable bg-center bg-cover min-h-[155px] w-full rounded-lg relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-4 bottom-0">
                  <div
                    className="p-2 bg-gray-300 rounded-md flex items-center cursor-pointer"
                    onClick={() => navigate("/energy-service")}>
                    <div className="bg-primary p-1 rounded-md mr-2">
                      <Flash size="20" color="#FF8A65" />
                    </div>
                    <p className="text-sm leading-none text-primary">
                      Energy and Power
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center w-full max-w-xs space-y-3 p-4 pb-8 mx-auto bg-white rounded-md md:col-start-2 md:col-end-3">
              <div className="bg-contract bg-center bg-cover min-h-[155px] w-full rounded-lg relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-4 bottom-0">
                  <div
                    className="p-2 bg-gray-300 rounded-md flex items-center cursor-pointer"
                    onClick={() => navigate("/general-contract")}>
                    <div className="bg-primary p-1 rounded-md mr-2">
                      <Building size="20" color="#FF8A65" />
                    </div>
                    <p className="text-sm leading-none text-primary">
                      General Contracts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
