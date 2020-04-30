import React, { Fragment, useState, useContext } from "react";
import CountUp from "react-countup";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
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
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { cfr } from "../utils/formatNum";

import { countriesOptions } from "../utils/data";
import { CovidContext } from "../utils/Context";
import { GraphTimeline } from "./Timeline";
import { Loading, Error } from "./LoadingError";

export default () => {
  const {
    dataHistoricalCountry: dataHistory,
    loadingHistoricalCountry: loadingHistory,
    errorHistoricalCountry: errorHistory,
    refetchHistoricalCountry: refetchHistory,
    options,
    setOptions,
    dataCountry,
    loadingCountry,
    errorCountry,
    refetchCountry,
  } = useContext(CovidContext);

  if (loadingHistory || loadingCountry) return <Loading />;
  if (errorHistory || errorCountry) return <Error />;

  const casesChart = dataHistory.map(c => c.timeline.cases);
  const deathsChart = dataHistory.map(c => c.timeline.deaths);
  const recoveredChart = dataHistory.map(c => c.timeline.recovered);

  function onChange(selectedOptions) {
    const selectedCountries = selectedOptions.map(o => o.value);
    selectedOptions.length > 1 && setOptions(selectedCountries);
  }
  const flag = dataCountry.map(c => c.countryInfo.flag);
  const country = dataCountry.map(c => c.country);
  const cases = dataCountry.map(c => c.cases);
  const deaths = dataCountry.map(c => c.deaths);
  const recovered = dataCountry.map(c => c.recovered);
  const active = dataCountry.map(c => c.active);
  const todayCases = dataCountry.map(c => c.todayCases);
  const todayDeaths = dataCountry.map(c => c.todayDeaths);
  const tests = dataCountry.map(c => c.tests);

  console.log(JSON.stringify(country, null, 2));
  return (
    <Fragment>
      <Select
        options={countriesOptions}
        isMulti
        onChange={onChange}
        className="mx-3"
      />
      <GraphTimeline
        cases={[
          { name: options[0], data: casesChart[0] },
          { name: options[1], data: casesChart[1] },
        ]}
        deaths={[
          { name: options[0], data: deathsChart[0] },
          { name: options[1], data: deathsChart[1] },
        ]}
        recovered={[
          { name: options[0], data: recoveredChart[0] },
          { name: options[1], data: recoveredChart[1] },
        ]}
        all={[
          { name: `[K]. ${options[0].slice(0, 3)}`, data: casesChart[0] },
          { name: `[K]. ${options[1].slice(0, 3)}`, data: casesChart[1] },
          { name: `[M]. ${options[0].slice(0, 3)}`, data: deathsChart[0] },
          { name: `[M]. ${options[1].slice(0, 3)}`, data: deathsChart[1] },
          { name: `[P]. ${options[0].slice(0, 3)}`, data: recoveredChart[0] },
          { name: `[P]. ${options[1].slice(0, 3)}`, data: recoveredChart[1] },
        ]}
        yellow={["#ecc94b", "#dd6b20"]}
        red={["#fc8181", "#c53030"]}
        green={["#68d391", "#276749"]}
        allColors={[
          "#ecc94b",
          "#dd6b20",
          "#fc8181",
          "#c53030",
          "#68d391",
          "#276749",
        ]}
        onClick={refetchHistory}
      />

      {/* 1st Country */}
      <div className="flex flex-wrap">
        <Globe content={country[0]} />
        <Cases content={cases[0]} />
        <Deaths content={deaths[0]} />
        <Recovered content={recovered[0]} />
        <Active content={active[0]} />
        <Tested content={tests[0]} />
        <FatalityRate content={cfr(deaths[0], cases[0])} />
        <TodayCases content={todayCases[0]} />
        <TodayDeaths content={todayDeaths[0]} />
      </div>
      <hr className="border-b-2 border-gray-600 my-10 mx-4" />
      {/* <hr className="border-b-2 border-gray-600 mt-8 mx-4" /> */}

      {/* 2nd Country */}
      <div className="flex flex-wrap">
        <Globe content={country[1]} />
        <Cases content={cases[1]} />
        <Deaths content={deaths[1]} />
        <Recovered content={recovered[1]} />
        <Active content={active[1]} />
        <Tested content={tests[1]} />
        <FatalityRate content={cfr(deaths[1], cases[1])} />
        <TodayCases content={todayCases[1]} />
        <TodayDeaths content={todayDeaths[1]} />
        <hr className="border-b-2 border-gray-600 mt-8 mx-4" />
      </div>
    </Fragment>
  );
};

const Globe = ({ content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded px-4 py-3 bg-teal-600">
            <FontAwesomeIcon icon={faGlobeAsia} size="2x" inverse spin />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">negara</h5>
          <h3 className="font-bold text-3xl uppercase text-teal-600">
            {content}
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Cases
const Cases = ({ content }) => (
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
const Deaths = ({ content }) => (
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
const Recovered = ({ content }) => (
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
const Active = ({ content }) => (
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
const TodayCases = ({ content }) => (
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
const TodayDeaths = ({ content }) => (
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

// Test
const Tested = ({ content }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className="rounded px-4 py-3 bg-teal-600">
            <FontAwesomeIcon icon={faVial} size="2x" inverse />
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h5 className="font-bold uppercase text-gray-400">Populasi Test</h5>
          <h3 className="font-bold text-3xl text-teal-600">
            <CountUp start={0} end={content} delay={1} separator="," />
          </h3>
        </div>
      </div>
    </div>
  </div>
);

// Case Fatality Rate
const FatalityRate = ({ content }) => (
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
