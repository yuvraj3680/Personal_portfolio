import React from "react";
import hireMe from "../assets/images/hireMe.png";

const Hireme = () => {
  return (
    <section id="hireme" className="py-16 px-4 text-white bg-gray-900">
      <div className="text-center mb-12">
        <h3 className="text-5xl font-bold">
          Let's <span className="text-cyan-600">Build</span> Something Great Together
        </h3>
        <p className="text-gray-400 mt-4 text-lg">Your vision, my expertise.</p>
      </div>

      <div className="bg-gray-800 rounded-3xl p-12 flex flex-col lg:flex-row items-center justify-between">
        
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">
            Why <span className="text-cyan-600">Collaborate</span> with Me?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            With a passion for technology and a knack for problem-solving, I've successfully delivered a variety of projects using the MERN stack. Let me help you turn your ideas into reality.
          </p>
          <ul className="text-gray-300 space-y-4">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                  clipRule="evenodd"
                />
              </svg>
              Expertise in MERN Stack
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                  clipRule="evenodd"
                />
              </svg>
              Proven Track Record
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                  clipRule="evenodd"
                />
              </svg>
              Flexible and Adaptive
            </li>
          </ul>
          <button className="btn-primary mt-10 px-8 py-3 rounded-full hover:bg-cyan-600">
            Get in Touch
          </button>
        </div>

        <img
          src={hireMe}
          alt="Hire Me"
          className="lg:w-0/2 h-auto lg:h-[28rem] mt-12 lg:mt-0 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
