import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cozaVideo from "assets/image/coza/coza_ilorin.mp4";
import { ArrowLeft } from "iconsax-react";
import classNames from "classnames";

const bgClasses = [
  "bg-coza_ilorin_31",
  "bg-coza_ilorin_32",
  "bg-coza_ilorin_35",
  "bg-coza_ilorin_34",
  "bg-coza_ilorin_33",
  "bg-coza_ilorin_30",
  "bg-coza_ilorin_23",
  "bg-coza_ilorin_22",
  "bg-coza_ilorin_21",
  "bg-coza_ilorin_20",
  "bg-coza_ilorin_19",
  "bg-coza_ilorin_28",
  "bg-coza_ilorin_27",
  "bg-coza_ilorin_29",
  "bg-coza_ilorin_26",
  "bg-coza_ilorin_25",
  "bg-coza_ilorin_24",
  "bg-coza_ilorin_18",
  "bg-coza_ilorin_17",
  "bg-coza_ilorin_16",
  "bg-coza_ilorin_15",
  "bg-coza_ilorin_14",
  "bg-coza_ilorin_13",
  "bg-coza_ilorin_12",
  "bg-coza_ilorin_11",
  "bg-coza_ilorin_10",
  "bg-coza_ilorin_9",
  "bg-coza_ilorin_8",
  "bg-coza_ilorin_7",
  "bg-coza_ilorin_6",
  "bg-coza_ilorin_5",
  "bg-coza_ilorin_4",
  "bg-coza_ilorin_3",
  "bg-coza_ilorin_2",
  "bg-coza_ilorin_1",
];

const COZAAuditoriumProject = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate("/completed-projects")}>
          <ArrowLeft className={classNames("h-5 w-5 text-primary")} /> Back
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            COZA Ilorin New Auditorium
          </h2>
        </div>
        <div className="grid-cols-1 mt-12 gap-y-12 gap-x-6 grid md:grid-cols-3 gap-4 w-full text-white">
          {/* Video Thumbnail Card */}
          <div
            className="flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 bg-black bg-center bg-cover min-h-[300px] relative cursor-pointer overflow-hidden animate-pulse transition duration-300 ease-out hover:scale-102 hover:-translate-y-2 rounded-md"
            onClick={() => setShowModal(true)}>
            {/* Animated Thumbnail (use a frame from the video or a placeholder) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
              <button
                className="bg-white/80 rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
                aria-label="Play video">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-primary">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                  />
                </svg>
              </button>
            </div>
            <video
              src={cozaVideo}
              className="w-full h-full object-cover blur-sm scale-105"
              muted
              loop
              playsInline
              preload="metadata"
              tabIndex={-1}
              style={{ pointerEvents: "none" }}
            />
          </div>
          {/* Image Cards */}
          {bgClasses.map((bg, idx) => (
            <div
              key={bg}
              className={`flex flex-col items-center w-full max-w-full space-y-3 p-4 pb-8 ${bg} bg-center bg-cover min-h-[300px] relative transition duration-300 ease-out hover:scale-102 hover:-translate-y-2 rounded-md`}>
              <div className="h-fit w-full absolute bottom-0 bg-primary/70 flex items-start"></div>
            </div>
          ))}
        </div>
        {/* Modal for Video Playback */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative w-full max-w-2xl mx-auto">
              <button
                className="absolute top-2 right-2 z-10 bg-white/80 rounded-full p-2 hover:bg-white"
                onClick={() => setShowModal(false)}
                aria-label="Close video">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-primary">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <video
                src={cozaVideo}
                className="w-full rounded-lg shadow-lg"
                controls
                controlsList="nodownload noremoteplayback"
                autoPlay
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                style={{ background: "black" }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default COZAAuditoriumProject;
