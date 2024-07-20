"use client";

import React from "react";

const Benefits = ({ scrollToSection }) => {
  const handleClick = (path) => {
    scrollToSection(path);
  };

  return (
    <div className="flex flex-col items-center pt-40 space-y-8">
      <h1 className="text-6xl font-jost font-bold">WITH A REVERENT WEBSITE</h1>
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 pt-4">
        <div className="transform rotate-6 bg-blue-200 text-center py-2 px-4 rounded-full shadow-lg">
          Trending UI Design
        </div>
        <div className="transform -rotate-6 bg-purple-200 text-center py-2 px-4 rounded-full shadow-lg">
          Free SEO
        </div>
        <div className="transform rotate-3 bg-blue-400 text-center py-2 px-4 rounded-full shadow-lg">
          Built In Cybersecurity
        </div>
        <div className="transform -rotate-3 bg-purple-300 text-center py-2 px-4 rounded-full shadow-lg">
          Zero Bugs
        </div>
        <div className="transform rotate-12 bg-blue-300 text-center py-2 px-4 rounded-full shadow-lg">
          Conversion Boost
        </div>
        <div className="transform -rotate-12 bg-blue-400 text-center py-2 px-4 rounded-full shadow-lg">
          Visitor Tracking
        </div>
        <div className="transform rotate-6 bg-blue-200 text-center py-2 px-4 rounded-full shadow-lg">
          Improved User Trust
        </div>
      </div>
      <div className="pt-4">
        <button
          onClick={() => handleClick("form")}
          className="bg-blue-500 text-lg hover:bg-blue-600 text-white py-3 px-6 rounded-full"
        >
          I WANT IT
        </button>
      </div>
    </div>
  );
};

export default Benefits;
