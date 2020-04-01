import React, { useContext, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import {
  Cases,
  Deaths,
  Recovered,
  Active,
  TodayCases,
  TodayDeaths,
  // Critical,
  ReadOnline
} from "./ReusableComponent";

import { CovidContext } from "../utils/Context";
import { formatNum } from "../utils/formatNum";
import { Loading, Error } from "./LoadingError";
import LastUpdated from "./LastUpdated";
import TimelineIndonesia from "./TimelineIndonesia";

export default () => {
  const { dataID, loadingID, errorID, refetchID } = useContext(CovidContext);

  if (loadingID) return <Loading />;
  if (errorID) return <Error />;

  const {
    country,
    cases,
    deaths,
    recovered,
    active,
    todayCases,
    todayDeaths
    // casesPerOneMillion
  } = dataID;

  return (
    <Fragment>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded px-4 py-3 bg-teal-600">
                  <FontAwesomeIcon icon={faGlobeAsia} size="2x" inverse spin />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-400">Negara</h5>
                <h3 className="font-bold text-3xl uppercase text-teal-600">
                  {country}
                  <span className="text-green-500">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <Cases content={formatNum(cases)} />
        <Deaths content={formatNum(deaths)} />
        <Recovered content={formatNum(recovered)} />
        <Active content={formatNum(active)} />
        <TodayCases content={formatNum(todayCases)} />
        <TodayDeaths content={formatNum(todayDeaths)} />
        <ReadOnline />
        {/* START Last Update */}
        <LastUpdated onClick={refetchID} />
      </div>
      <hr className="border-b-2 border-gray-600 my-8 mx-4" />
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        {/* START GRAPH */}
        <TimelineIndonesia />
      </div>
      <hr className="border-b-2 border-gray-600 my-8 mx-4" />
    </Fragment>
  );
};
