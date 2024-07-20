"use client";

import React from "react";

const Timeline = ({ scrollToSection }) => {
  const handleClick = (path) => {
    scrollToSection(path);
  };

  return (
    <div className="flex flex-col" id="timeline">
      <div className="flex flex-row items-center w-full">
        <div className="w-1/3">
          <div className="w-1/2 text-3xl font-jost text-center ml-auto">
            Hop on a quick <span className="text-blue-600">2 minute</span> call
            with us
          </div>
        </div>
        <div className="h-3 rounded-2xl mx-4 w-1/3 bg-blue-200"></div>
        <div className="w-1/3">
          <div className="w-1/2 text-3xl font-jost text-center mr-auto">
            See Your Website for <span className="text-blue-600">Free</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between my-6 w-full">
        <div className="w-1/2 pr-6">
          <div className="bg-opacity-0 h-32 w-3 mx-auto rounded-2xl"></div>
        </div>
        <div className="w-1/2 pl-6">
          <div className="bg-blue-200 h-32 w-3 pl-3 mx-auto rounded-2xl"></div>
        </div>
      </div>

      <div className="flex flex-row items-center w-full">
        <div className="w-1/3">
          <div className="w-1/2 text-3xl font-jost text-center ml-auto">
            Watch as Your{" "}
            <span className="text-blue-600">Online Revenue Skyrockets</span>
          </div>
        </div>
        <div className="h-3 rounded-2xl mx-4 w-1/3 bg-blue-200"></div>
        <div className="w-1/3">
          <div className="w-1/2 text-3xl font-jost text-center mr-auto">
            Pay <span className="text-blue-600">Only</span> if You Want It
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mt-6 w-full">
        <div className="w-1/2 pr-6">
          <div className="bg-blue-200 h-32 w-3 pl-3 mx-auto rounded-2xl"></div>
        </div>
        <div className="w-1/2 pl-6">
          <div className="bg-opacity-0 h-32 w-3 mx-auto rounded-2xl"></div>
        </div>
      </div>

      <div className="flex flex-row items-center w-full">
        <div className="h-3 rounded-2xl ml-auto w-1/6 bg-blue-200"></div>
        <div className="w-1/3">
          <button
            style={{ "--clr": "#1e6dff" }}
            onClick={() => handleClick("form")}
            className="ml-8 button mt-4 pl-4 pr-8 py-4"
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
            <span className="text-xl ml-2">CONTACT</span>
          </button>
        </div>

        <div className="w-1/4 opacity-0"></div>
      </div>
    </div>
  );
};

export default Timeline;
