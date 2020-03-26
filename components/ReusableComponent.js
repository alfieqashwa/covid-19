import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faGlobeAmericas,
  faHospitalAlt,
  faProcedures,
  faHeartbeat,
  faAllergies,
  faMedkit,
  faAmbulance
} from "@fortawesome/free-solid-svg-icons";

// Globe
export const Globe = ({ title, content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded px-4 py-3 bg-teal-600">
            <FontAwesomeIcon icon={faGlobeAmericas} size="2x" inverse spin />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">{title}</h5>
          <h3 className="font-bold text-3xl uppercase text-teal-600">
            {content}
            <span className="text-green-500">
              <i className="fas fa-caret-up" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Cases
export const Cases = ({ content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded p-3 bg-yellow-600">
            <FontAwesomeIcon icon={faHospitalAlt} size="2x" inverse />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">Total Kasus</h5>
          <h3 className="font-bold text-3xl text-yellow-600">
            {content}
            {/* {formatNum(cases)} */}
            <span className="text-green-500">
              <i className="fas fa-caret-up" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Deaths
export const Deaths = ({ content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded p-3 bg-red-700">
            <FontAwesomeIcon icon={faProcedures} size="2x" inverse />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">Total Meninggal</h5>
          <h3 className="font-bold text-3xl text-red-700">
            {content}
            {/* {formatNum(deaths)} */}
            <span className="text-orange-500">
              <i className="fas fa-exchange-alt" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Recovered
export const Recovered = ({ content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded px-4 py-3 bg-green-600">
            <FontAwesomeIcon icon={faHeartbeat} size="2x" inverse />
          </div>
        </div>

        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">Total Pulih</h5>

          <h3 className="font-bold text-3xl text-green-600">
            {content}
            {/* {formatNum(recovered)} */}
            <span className="text-yellow-600">
              <i className="fas fa-caret-up" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Active
export const Active = ({ content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded px-4 py-3 bg-purple-600">
            <FontAwesomeIcon icon={faMedkit} size="2x" inverse />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">Terinfeksi</h5>
          <h3 className="font-bold text-3xl text-purple-600">
            {content}
            {/* {formatNum(active)} */}
            <span className="text-green-500">
              <i className="fas fa-caret-up" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export const TodayCases = ({ content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded p-3 bg-yellow-700">
            <FontAwesomeIcon icon={faHospitalAlt} size="2x" inverse />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">Kasus Hari ini</h5>
          <h3 className="font-bold text-3xl text-yellow-700">
            {content}
            <span className="text-green-500">
              <i className="fas fa-caret-up" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export const TodayDeaths = ({ content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded p-3 bg-red-800">
            <FontAwesomeIcon icon={faProcedures} size="2x" inverse />
          </div>
        </div>

        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">
            Meninggal Hari ini
          </h5>

          <h3 className="font-bold text-3xl text-red-800">
            {content}
            <span className="text-orange-500">
              <i className="fas fa-exchange-alt" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export const Critical = ({ content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded p-3 bg-pink-600">
            <FontAwesomeIcon icon={faAmbulance} size="2x" inverse />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">Kritis</h5>
          <h3 className="font-bold text-3xl text-pink-600">
            {content}
            <span className="text-green-500">
              <i className="fas fa-caret-up" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
);
