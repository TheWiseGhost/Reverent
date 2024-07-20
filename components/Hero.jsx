"use client";

import React from "react";
import NavButton from "@/components/NavButton";

const Hero = ({ scrollToSection }) => {
  // const bigText = "THE WEB DEV AGENCY REDEFINING REAL ESTATE ONLINE";
  const handleClick = (path) => {
    scrollToSection(path);
  };

  return (
    <div className="min-h-screen bg-white text-black mb-0">
      <header className="flex justify-between items-center mx-16 pt-6">
        <h1 className="text-2xl font-bold">REVERENT</h1>
        <nav className="space-x-8 flex flex-row">
          <NavButton text="HOME" />
          <NavButton text="ABOUT" />
          <NavButton text="SERVICE" />
          <div onClick={() => handleClick("form")}>
            <NavButton text="CONTACT" />
          </div>
        </nav>
        <button
          style={{ "--clr": "#1e6dff" }}
          onClick={() => handleClick("form")}
          className="button font-jost py-3 px-4"
          href="#"
        >
          <span className="button__icon-wrapper">
            <svg
              width="10"
              className="button__icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>

            <svg
              className="button__icon-svg  button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </span>
          Contact Us
        </button>
      </header>

      <div className="flex flex-col md:flex-row mt-6 mx-16">
        <div className="md:w-4/5">
          <h1
            style={{ fontSize: "5.4rem" }}
            className="pl-12 font-jost font-semibold leading-snug"
          >
            THE WEB DEV <br /> <span className="text-blue-500">AGENCY</span>{" "}
            REDEFINING REAL ESTATE ONLINE
          </h1>
        </div>
        <div className="md:w-1/5 p-4 flex flex-col justify-start items-start">
          <div className="flex flex-col items-center">
            <div className="transform -rotate-90 text-gray-800 mt-8 mb-16">
              <p className="text-5xl font-mon font-bold">100M</p>
              <p className="text-gray-600 text-xl uppercase text-start">
                Revenue <br /> Generated
              </p>
            </div>
            <div className="transform -rotate-90 text-gray-800 mt-4">
              <p className="text-5xl font-mon font-bold">400+</p>
              <p className="text-gray-600 text-xl uppercase text-start">
                Projects <br /> Complete
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-4 flex flex-col items-center md:items-start">
          <button
            style={{ "--clr": "#1e6dff" }}
            onClick={() => handleClick("form")}
            className="mx-24 button mt-4 pl-4 pr-8 py-4"
          >
            <span className="button__icon-wrapper">
              <svg
                width="10"
                className="button__icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                ></path>
              </svg>

              <svg
                className="button__icon-svg  button__icon-svg--copy"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                ></path>
              </svg>
            </span>
            <span className="text-xl ml-2">CONTACT</span>
          </button>
          <div className="bg-gradient-to-r from-purple-500 to-purple-400 text-center w-4/5 px-12 py-6 mt-12 mr-12 rounded-3xl ml-12">
            <p className="text-slate-100 text-2xl mb-4">Average</p>
            <h3 className="text-5xl text-white font-bold mb-4">5x</h3>
            <p className="text-slate-100 text-xl">Return on Investment</p>
          </div>
          <div className="mx-auto pt-8">
            <button onClick={handleClick("timeline")} className="arrow_button">
              <p>Unsure?</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-3 mx-auto h-96 rounded-2xl bg-blue-200 mt-8"></div>
        </div>
        <div className="md:w-3/5 mr-12 mt-6 p-4 flex justify-center items-center">
          <div className="bg-gradient-to-r font-mon font-bold from-purple-400 rounded-3xl w-full h-fit to-blue-500 pt-6 border-b-4 border-blue-700 text-center">
            <h3 className="text-white pt-6 text-6xl wide font-bold">ZERO</h3>
            <p className="text-white bit-wide pt-8 text-2xl">UPFRONT COST</p>
            <img
              src="ExampleWebsite.png"
              alt="Brooks&Spencer"
              className="mt-4 rounded-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
