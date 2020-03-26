import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => (
  <>
    <center className="bg-gray-900 border border-gray-800 rounded shadow m-auto ">
      <div className="flex flex-columns items-center">
        <center className="rounded p-6 bg-indigo-800 m-auto">
          <FontAwesomeIcon icon={faSyncAlt} size="6x" inverse spin />
        </center>
      </div>
      <div className="flex-1 text-center md:text-center">
        <h5 className="font-bold uppercase text-gray-100 text-2xl font-bold my-2">
          Loading...
        </h5>
      </div>
    </center>
    <hr className="border-b-2 border-gray-600 my-12 mx-4" />
  </>
);

export const Error = () => (
  <>
    <center className="bg-gray-900 border border-gray-800 rounded shadow m-auto ">
      <div className="flex flex-columns items-center">
        <center className="rounded p-6 bg-red-700 m-auto">
          <FontAwesomeIcon icon={faAllergies} size="6x" inverse spin />
        </center>
      </div>
      <div className="flex-1 text-center md:text-center">
        <h5 className="font-bold uppercase text-gray-100 text-2xl font-bold my-2">
          Error!!
        </h5>
      </div>
    </center>
    <hr className="border-b-2 border-gray-600 my-12 mx-4" />
  </>
);
