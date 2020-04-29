import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ColumnChart, AreaChart, PieChart } from "react-chartkick";
import "chart.js";
import CountUp from "react-countup";
import { cfr } from "../utils/formatNum";

export const GraphTimeline = ({
  onClick,
  cases,
  deaths,
  recovered,
  all,
  yellow,
  red,
  green,
}) => (
  <div className="w-full p-3 my-6">
    <Tabs className="bg-gray-900 border border-gray-800 rounded shadow">
      <TabList className="flex justify-around border-b border-gray-800 py-4 px-2">
        <Tab className="text-xs tracking-widest ms:text-base font-bold capitalize border-2 border-yellow-700 rounded shadow text-yellow-600 px-3 py-1 hover:border-yellow-500 hover:text-yellow-500">
          K
        </Tab>
        <Tab className="text-xs tracking-widest ms:text-base font-bold capitalize border-2 border-red-700 rounded shadow text-red-600 px-3 py-1 hover:border-red-500 hover:text-red-500">
          m
        </Tab>
        <Tab className="text-xs tracking-widest ms:text-base font-bold capitalize border-2 border-green-700 rounded shadow text-green-600 px-3 py-1 hover:border-green-600 hover:text-green-500">
          p
        </Tab>
        <Tab className="text-xs tracking-widest ms:text-base font-bold capitalize border-2 border-indigo-700 rounded shadow text-indigo-600 px-3 py-1 hover:border-indigo-600 hover:text-indigo-500">
          A
        </Tab>
        <button
          type="button"
          onClick={onClick}
          className="mx-1 text-xs tracking-widest ms:text-base font-bold capitalize border-2 border-teal-700 rounded shadow text-teal-600 px-3 py-1 hover:border-teal-600 hover:text-teal-500"
        >
          Load
        </button>
      </TabList>
      <div className="p-5">
        <TabPanel>
          <ColumnChart
            data={cases}
            colors={yellow}
            xtitle="Tanggal"
            ytitle="Jumlah"
            thousands=","
          />
        </TabPanel>
        <TabPanel>
          <ColumnChart
            data={deaths}
            colors={red}
            xtitle="Tanggal"
            ytitle="Jumlah"
            thousands=","
          />
        </TabPanel>
        <TabPanel>
          <ColumnChart
            data={recovered}
            colors={green}
            xtitle="Tanggal"
            ytitle="Jumlah"
            thousands=","
          />
        </TabPanel>
        <TabPanel>
          <ColumnChart
            data={all}
            colors={["#d69e2e", "#c53030", "#38a169"]}
            xtitle="Tanggal"
            ytitle="Jumlah"
            thousands=","
          />
        </TabPanel>
      </div>
    </Tabs>
  </div>
);

export const ListTimeline = ({ country, onClick }) => (
  <div className="w-full p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow">
      <table className="text-left w-full">
        <thead className="bg-gray-900 border-gray-800 rounded shadow flex text-gray-600 w-full p-2 md:py-4 md:px-8">
          <tr className="flex w-full">
            <th className="py-1 w-1/5 text-sm sm:text-base">
              <button
                onClick={onClick}
                className="bg-gray-900 border-2 border-gray-800 rounded shadow text-indigo-700 font-bold px-2 py-1 hover:border-gray-600 hover:text-indigo-500"
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
          {country.reverse().map((c, i) => (
            <tr
              key={i}
              className="flex w-full mb-10 px-1 border-b border-gray-800"
            >
              <td className="flex text-gray-600 w-1/5 pb-12 text-xs sm:text-base font-bold truncate">
                {c.date}
              </td>
              <td className="text-yellow-600 w-1/5 text-xs sm:text-base text-right">
                <CountUp start={0} end={c.confirmed} delay={3} separator="," />
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
