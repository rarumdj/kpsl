import React from "react";
import aosLogo from "../../assets/image/clients/aos.jpg";
import bayelsaLogo from "../../assets/image/clients/bayelsa.jpg";
import cozaLogo from "../../assets/image/clients/coza.jpg";
import fhaLogo from "../../assets/image/clients/fha.jpg";
import joenyLogo from "../../assets/image/clients/joeny.jpg";

const TrustedClients = () => {
  const clients = [
    { name: "Joeny", logo: joenyLogo },
    { name: "AOS", logo: aosLogo },
    { name: "Bayelsa", logo: bayelsaLogo },
    { name: "COZA", logo: cozaLogo },
    { name: "FHA", logo: fhaLogo },
  ];

  return (
    <section className="py-16 bg-gray-50" id="clients">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-duplicate-san font-bold text-gray-800 mb-4">
            Trusted by Leading Organizations
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to work with esteemed clients across various sectors,
            delivering exceptional results and building lasting partnerships.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative w-full max-w-[200px] h-24 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-[80%] max-h-[60%] object-contain filter transition-all duration-300"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-5 rounded-lg transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Trusted partners in construction, oil and gas, energy, and infrastructure
            development
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
