"use client";

import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <h1 className="text-8xl font-bold font-jost pt-32 text-blue-600">
        "Why Hesitate, It's Free!"
      </h1>
      <p className="mt-6 text-xl text-gray-700">– Common Sense</p>
      <p className="text-5xl font-jost mb-6 pt-40">
        If you’re here, you’re clearly interested.
      </p>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdg1L0fTFhhfhjR2Wbw-QICLGch0fAq5S41m83pQz0HJjTj6A/formResponse"
        className="w-full max-w-md mt-8"
        id="form"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-blue-600 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name:
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border-b-2 border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-800"
              name="entry.1698871816"
              id="grid-name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-blue-600 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email:
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border-b-2 border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-800"
              name="entry.1121097480"
              id="grid-email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-blue-600 text-xs font-bold mb-2"
              htmlFor="grid-date"
            >
              Date:
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border-b-2 border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-800"
              name="entry.1079575656"
              id="grid-date"
              type="date"
              placeholder="Date"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-blue-600 text-xs font-bold mb-2"
              htmlFor="grid-time"
            >
              Time:
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border-b-2 border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-800"
              name="entry.1986578196"
              id="grid-time"
              type="time"
              placeholder="Time"
            />
          </div>
        </div>
        <div className="flex items-center justify-center pt-8 pb-16">
          <button
            className="wipe text-2xl text-white font-alata py-3 px-8 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Lets Do This
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
