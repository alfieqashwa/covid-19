import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";
import { CovidContext } from "../utils/Context";
import { formatNum } from "../utils/formatNum";
import { Loading, Error } from "./LoadingError";

export default () => {
  const {
    dataCountries,
    loadingCountries,
    errorCountries,
    refetchCountries
  } = useContext(CovidContext);

  if (loadingCountries)
    return (
      <Loading>
        <FontAwesomeIcon icon={faSyncAlt} size="6x" inverse spin />
      </Loading>
    );

  if (errorCountries)
    return (
      <Error text="Error !!">
        <FontAwesomeIcon icon={faAllergies} size="6x" inverse spin />
      </Error>
    );

  return (
    <div className="w-full mt-6 p-3">
      <div className="bg-gray-900 border border-gray-800 rounded shadow">
        {/* border-b border-gray-800 p-3 */}
        <table className="text-left w-full">
          <thead className="bg-gray-900 border-gray-800 rounded shadow flex text-gray-600 w-full p-1 md:p-3">
            <tr className="flex w-full">
              <th className="py-1 w-1/5 text-sm sm:text-base">
                <button
                  className="bg-gray-900 border border-gray-800 rounded shadow text-indigo-700 font-bold p-1 "
                  onClick={refetchCountries}
                >
                  Negara
                </button>
              </th>
              <th className="text-yellow-600 py-2 w-1/5  text-sm sm:text-base text-right">
                Kasus
              </th>
              <th className="text-orange-500 py-2 w-1/5  text-sm sm:text-base text-right">
                Kritis
              </th>
              <th className="text-red-700 py-2 w-1/5  text-sm sm:text-base text-right">
                Wafat
              </th>
              <th className="text-green-600 py-2 p-1 w-1/5  text-sm sm:text-base text-right">
                Pulih
              </th>
            </tr>
          </thead>
          <tbody className="bg-grey-900 flex w-full flex-col items-center justify-between overflow-y-auto p-1 md:p-3 h-64">
            {dataCountries.map((c, i) => (
              <tr
                className="flex w-full my-4 px-1 border-b border-gray-800"
                key={i}
              >
                <td className="text-gray-600 w-1/5 pb-12 text-xs sm:text-base font-bold truncate">
                  {c.country}
                </td>
                <td className="text-yellow-600 w-1/5 text-xs sm:text-base text-right">
                  {formatNum(c.cases)}
                </td>
                <td className="text-orange-500 w-1/5 text-xs sm:text-base text-right">
                  {formatNum(c.critical)}
                </td>
                <td className="text-red-700 w-1/5 text-xs sm:text-base text-right">
                  {formatNum(c.deaths)}
                </td>
                <td className="text-green-600 w-1/5 text-xs text-right sm:text-base">
                  {formatNum(c.recovered)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
