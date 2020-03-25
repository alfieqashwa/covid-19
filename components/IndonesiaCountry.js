import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
  faHospitalAlt,
  faProcedures,
  faHeartbeat,
  faSyncAlt,
  faAmbulance,
  faMedkit,
  faAllergies
} from "@fortawesome/free-solid-svg-icons";

import { CovidContext } from "../utils/Context";
import { formatNum } from "../utils/formatNum";
import { Loading, Error } from "./LoadingError";
import LastUpdated from "./LastUpdated";
import Timeline from "./Timeline";
// import BarChart from "./BarChart";

export default () => {
  const { dataID, loadingID, errorID, refetchID } = useContext(CovidContext);

  if (loadingID)
    return (
      <Loading text="Loading...">
        <FontAwesomeIcon icon={faSyncAlt} size="6x" inverse spin />
      </Loading>
    );

  if (errorID)
    return (
      <Error text="Error !!">
        <FontAwesomeIcon icon={faAllergies} size="6x" inverse spin />
      </Error>
    );

  const {
    country,
    cases,
    deaths,
    recovered,
    active,
    critical,
    todayCases,
    todayDeaths
    // casesPerOneMillion
  } = dataID;

  return (
    <>
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
                <h3 className="font-bold text-3xl uppercase text-gray-600">
                  {country}
                  <span className="text-green-500">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded p-3 bg-yellow-600">
                  <FontAwesomeIcon icon={faHospitalAlt} size="2x" inverse />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-400">
                  Total Kasus
                </h5>
                <h3 className="font-bold text-3xl text-gray-600">
                  {formatNum(cases)}
                  <span className="text-green-500">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded p-3 bg-red-700">
                  <FontAwesomeIcon icon={faProcedures} size="2x" inverse />
                </div>
              </div>

              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-400">
                  Total Meninggal
                </h5>

                <h3 className="font-bold text-3xl text-gray-600">
                  {formatNum(deaths)}
                  <span className="text-orange-500">
                    <i className="fas fa-exchange-alt" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded px-4 py-3 bg-green-600">
                  <FontAwesomeIcon icon={faHeartbeat} size="2x" inverse />
                </div>
              </div>

              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-400">
                  Total Pulih
                </h5>

                <h3 className="font-bold text-3xl text-gray-600">
                  {formatNum(recovered)}
                  <span className="text-yellow-600">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded px-4 py-3 bg-purple-600">
                  <FontAwesomeIcon icon={faMedkit} size="2x" inverse />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-400">
                  Terinfeksi
                </h5>
                <h3 className="font-bold text-3xl text-gray-600">
                  {formatNum(active)}
                  <span className="text-green-500">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded p-3 bg-yellow-800">
                  <FontAwesomeIcon icon={faHospitalAlt} size="2x" inverse />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-400">
                  Kasus Hari ini
                </h5>
                <h3 className="font-bold text-3xl text-gray-600">
                  {formatNum(todayCases)}
                  <span className="text-green-500">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

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

                <h3 className="font-bold text-3xl text-gray-600">
                  {formatNum(todayDeaths)}
                  <span className="text-orange-500">
                    <i className="fas fa-exchange-alt" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

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
                <h3 className="font-bold text-3xl text-gray-600">
                  {formatNum(critical)}
                  <span className="text-green-500">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* START Last Update */}
        <LastUpdated onClick={refetchID} />
      </div>
      <hr className="border-b-2 border-gray-600 my-8 mx-4" />
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        {/* START GRAPH */}
      </div>
      <Timeline />
    </>
  );
};
