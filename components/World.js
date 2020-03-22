import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faGlobeAmericas,
  faHospitalAlt,
  faProcedures,
  faHeartbeat,
  faAllergies
} from "@fortawesome/free-solid-svg-icons";

import { CovidContext } from "../utils/Context";
import { formatNum } from "../utils/formatNum";
import LastUpdated from "./LastUpdated";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

export default () => {
  const { dataAll, loadingAll, errorAll, refetchAll } = useContext(
    CovidContext
  );

  if (loadingAll)
    return (
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
        <hr className="border-b-2 border-gray-600 my-8 mx-4" />
      </>
    );

  if (errorAll)
    return (
      <>
        <center className="bg-gray-900 border border-gray-800 rounded shadow m-auto ">
          <div className="flex flex-columns items-center">
            <center className="rounded p-6 bg-yellow-700 m-auto">
              <FontAwesomeIcon icon={faAllergies} size="6x" inverse spin />
            </center>
          </div>
          <div className="flex-1 text-center md:text-center">
            <h5 className="font-bold uppercase text-gray-100 text-2xl font-bold my-2">
              Error !!
            </h5>
          </div>
        </center>
        <hr className="border-b-2 border-gray-600 my-8 mx-4" />
      </>
    );

  const { cases, deaths, recovered } = dataAll;

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded p-3 bg-teal-600">
                  <FontAwesomeIcon
                    icon={faGlobeAmericas}
                    size="2x"
                    inverse
                    spin
                  />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-400">
                  Total Data
                </h5>
                <h3 className="font-bold text-3xl uppercase text-gray-600">
                  The World
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

        {/* START LAST UPDATED */}
        <LastUpdated onClick={refetchAll} />
      </div>
      <hr className="border-b-2 border-gray-600 my-8 mx-4" />
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        {/* GRAPH */}
        <BarChart />
        <DoughnutChart cases={cases} deaths={deaths} recovered={recovered} />
        <LineChart />
      </div>
    </>
  );
};
