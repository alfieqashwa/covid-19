import React, { useContext } from "react";
import { CovidContext } from "../utils/Context";
import { formatNum } from "../utils/formatNum";

export default () => {
  const {
    dataCountries,
    loadingCountries,
    errorCountries,
    refetchCountries
  } = useContext(CovidContext);

  if (loadingCountries) return <p>Loading COun</p>;
  if (errorCountries) return <p>ERRORR</p>;

  return (
    <div class="w-full p-3">
      <div class="bg-gray-900 border border-gray-800 rounded shadow">
        {/* border-b border-gray-800 p-3 */}
        <table className="text-left w-full">
          <thead className="bg-gray-900 border-gray-800 rounded shadow flex text-gray-600 w-full p-3">
            <tr className="flex w-full">
              <th className="p-2 w-1/5 text-sm sm:text-base">Negara</th>
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
          <tbody className="bg-grey-900 flex flex-col items-center justify-between overflow-y-scroll w-full h-64 p-3">
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
