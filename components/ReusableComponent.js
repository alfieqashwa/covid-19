import React from "react";
import moment from "moment";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faHospitalAlt,
  faProcedures,
  faHeartbeat,
  faSkullCrossbones,
  faAllergies,
  faAmbulance,
  faBook,
  faArrowLeft,
  faSyncAlt,
  faPercent,
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
            <CountUp start={0} end={content} delay={4} separator="," />
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
            <CountUp start={0} end={content} delay={3.5} separator="," />
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
            <CountUp start={0} end={content} delay={3} separator="," />
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
            <FontAwesomeIcon icon={faAllergies} size="2x" inverse />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">Terinfeksi</h5>
          <h3 className="font-bold text-3xl text-purple-600">
            <CountUp start={0} end={content} delay={2.5} separator="," />
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Today Cases
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
            <CountUp start={0} end={content} delay={2} separator="," />
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Today Deaths
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
            <CountUp start={0} end={content} delay={1.5} separator="," />
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Critical
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
            <CountUp start={0} end={content} delay={1.5} separator="," />
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Last Updated
export const LastUpdated = ({ updated, onClick }) => {
  const lastUpdated = moment(updated).startOf("hour").fromNow();

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
      <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <button onClick={onClick}>
              <div className="rounded px-4 py-3 bg-indigo-700 hover:bg-indigo-800">
                <FontAwesomeIcon icon={faSyncAlt} size="2x" inverse spin />
              </div>
            </button>
          </div>

          <div className="flex-1 text-right md:text-center">
            <h5 className="font-bold uppercase text-gray-400">Last Updated</h5>

            <h3 className="font-bold text-3xl text-indigo-700">
              {lastUpdated}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// Case Fatality Rate
export const FatalityRate = ({ content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded px-4 py-3 bg-orange-600">
            <FontAwesomeIcon icon={faSkullCrossbones} size="2x" inverse />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">
            Case Fatality Rate
          </h5>
          <h3 className="font-bold text-3xl text-orange-600">
            <CountUp
              start={0}
              end={content}
              delay={5}
              decimals={2}
              decimal=","
            />
            <span className="text-orange-600 ml-1">
              <FontAwesomeIcon icon={faPercent} className="text-xl" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Read Online PDF
const url =
  "https://www.alibabacloud.com/zh/universal-service/pdf_reader?spm=a3c0i.14138300.8102420620.dreadnow.cc76647f5DEr0S&cdnorigin=pdf-intl&pdf=Read%20Online-Handbook%20of%20COVID-19%20Prevention%20and%20Treatment-Indonesian.pdf";
export const ReadOnline = () => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink pr-4 focus:outline-none"
        >
          <div className="rounded px-4 py-3 bg-pink-600 hover:bg-pink-800">
            <FontAwesomeIcon icon={faBook} size="2x" inverse />
          </div>
        </a>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-pink-600 text-xl mr-3"
            />
            <span>Read Online</span>
          </h5>
          <div className="text-pink-600 font-semibold">
            <span className="text-base sm:text-xl text-pink-600 font-bold tracking-widest">
              Panduan COVID-19
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
