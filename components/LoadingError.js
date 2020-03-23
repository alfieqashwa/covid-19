import React from "react";

export const Loading = ({ text, children }) => (
  <>
    <center className="bg-gray-900 border border-gray-800 rounded shadow m-auto ">
      <div className="flex flex-columns items-center">
        <center className="rounded p-6 bg-indigo-800 m-auto">{children}</center>
      </div>
      <div className="flex-1 text-center md:text-center">
        <h5 className="font-bold uppercase text-gray-100 text-2xl font-bold my-2">
          {text && text}
        </h5>
      </div>
    </center>
    <hr className="border-b-2 border-gray-600 my-12 mx-4" />
  </>
);

export const Error = ({ text, children }) => (
  <>
    <center className="bg-gray-900 border border-gray-800 rounded shadow m-auto ">
      <div className="flex flex-columns items-center">
        <center className="rounded p-6 bg-red-700 m-auto">{children}</center>
      </div>
      <div className="flex-1 text-center md:text-center">
        <h5 className="font-bold uppercase text-gray-100 text-2xl font-bold my-2">
          {text && text}
        </h5>
      </div>
    </center>
    <hr className="border-b-2 border-gray-600 my-12 mx-4" />
  </>
);
