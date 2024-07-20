"use client";

import React from "react";

const NavButton = ({ text }) => {
  return (
    <button className="text_button font-jost bg-white text-gray-700">
      <span className="span-mother">
        {text.split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </span>
      <span className="span-mother2">
        {text.split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </span>
    </button>
  );
};

export default NavButton;
