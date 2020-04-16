import React from "react";
import CountUp from "react-countup";
import { cfr } from "../utils/formatNum";
import { Loading, Error } from "./LoadingError";

export default function ListTimeline({ data, loading, error, refetch }) {
  if (loading) return <Loading />;
  if (error) return <Error />;

  const IND = data["Indonesia"];

  return (
    <div className="w-full p-3">
      <div className="bg-gray-900 border border-gray-800 rounded shadow">
        <table className="text-left w-full">
          <thead className="bg-gray-900 border-gray-800 rounded shadow flex text-gray-600 w-full p-2 md:py-4 md:px-8">
            <tr className="flex w-full">
              <th className="py-1 w-1/5 text-sm sm:text-base">
                <button
                  onClick={refetch}
                  className="bg-gray-900 border border-gray-800 rounded shadow text-indigo-700 font-bold px-2 py-1 hover:border-gray-600 hover:text-indigo-500"
                >
                  Tanggal
                </button>
              </th>
              <th className="text-yellow-600 py-2 w-1/5 xl:px-1 text-sm sm:text-base text-right">
                Kasus
              </th>
              <th className="text-red-700 py-2 w-1/5 xl:px-3 text-sm sm:text-base text-right">
                Wafat
              </th>
              <th className="text-green-600 py-2 px-1 xl:pr-4 w-1/5  text-sm sm:text-base text-right">
                Pulih
              </th>
              <th className="text-orange-600 py-2 w-1/5 xl:px-1 text-sm sm:text-base text-right">
                CFR
              </th>
            </tr>
          </thead>
          <tbody className="bg-grey-900 flex w-full flex-col items-center justify-between overflow-y-scroll scrolling-touch p-2 md:py-4 md:px-8 h-72">
            {IND.reverse().map((c, i) => (
              <tr
                key={i}
                className="flex w-full mb-10 px-1 border-b border-gray-800"
              >
                <td className="flex text-gray-600 w-1/5 pb-12 text-xs sm:text-base font-bold truncate">
                  {c.date}
                </td>
                <td className="text-yellow-600 w-1/5 text-xs sm:text-base text-right">
                  <CountUp
                    start={0}
                    end={c.confirmed}
                    delay={3}
                    separator=","
                  />
                </td>
                <td className="text-red-700 w-1/5 text-xs sm:text-base text-right">
                  <CountUp start={0} end={c.deaths} delay={2} separator="," />
                </td>
                <td className="text-green-600 w-1/5 text-xs text-right sm:text-base">
                  <CountUp
                    start={0}
                    end={c.recovered}
                    delay={2.5}
                    separator=","
                  />
                </td>
                <td className="text-orange-500 w-1/5 text-xs sm:text-base text-right">
                  <CountUp
                    start={0}
                    end={cfr(c.deaths, c.confirmed)}
                    delay={3}
                    decimals={2}
                    decimal=","
                  />
                  <span className="ml-1">%</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
