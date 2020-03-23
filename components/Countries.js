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
      <Loading text="Countries Loading ...">
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
    <div className="w-full p-3">
      <div className="bg-gray-900 border border-gray-800 rounded shadow">
        {/* border-b border-gray-800 p-3 */}
        <table className="text-left w-full">
          <thead className="bg-gray-900 border-gray-800 rounded shadow flex text-gray-600 w-full p-1 md:p-3">
            <tr className="flex w-full">
              <th className="p-2 w-1/5 text-sm sm:text-base">
                <button
                  className=" bg-gray-900 border border-gray-800 rounded shadow text-indigo-800 font-bold p-1 "
                  onClick={refetchCountries}
                >
                  Negara
                </button>
              </th>
              <th className="p-2 w-1/5  text-sm sm:text-base text-right">
                Kasus
              </th>
              <th className="p-2 w-1/5  text-sm sm:text-base text-right">
                Kritis
              </th>
              <th className="p-2 w-1/5  text-sm sm:text-base text-right">
                Wafat
              </th>
              <th className="p-2 w-1/5  text-sm sm:text-base text-right">
                Pulih
              </th>
            </tr>
          </thead>
          <tbody className="bg-grey-900 flex flex-col items-center justify-between overflow-y-auto h-64 w-full p-1 md:p-3">
            {dataCountries.map((c, i) => (
              <tr className="flex w-full text-gray-500" key={i}>
                <td className="p-2 w-1/5 text-xs sm:text-base">{c.country}</td>
                <td className="p-2 w-1/5 text-xs sm:text-base text-right">
                  {formatNum(c.cases)}
                </td>
                <td className="p-2 w-1/5 text-xs sm:text-base text-right">
                  {formatNum(c.critical)}
                </td>
                <td className="p-2 w-1/5 text-xs sm:text-base text-right">
                  {formatNum(c.deaths)}
                </td>
                <td className="p-2 w-1/5 text-xs sm:text-base text-right">
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
