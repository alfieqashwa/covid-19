import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ColumnChart, AreaChart } from "react-chartkick";
import "chart.js";

const Timeline = ({ onClick, cases, deaths, recovered, all }) => (
  <div className="w-full p-3 my-6">
    <Tabs className="bg-gray-900 border border-gray-800 rounded shadow">
      <TabList className="flex justify-left border-b border-gray-800 py-4 pl-3 pr-2">
        <Tab className="mr-1 text-xs tracking-widest ms:text-base font-bold capitalize border border-yellow-700 rounded shadow text-yellow-600 px-2 py-1 hover:border-yellow-500 hover:text-yellow-500">
          Kasus
        </Tab>
        <Tab className="mx-1 text-xs tracking-widest ms:text-base font-bold capitalize border border-red-700 rounded shadow text-red-600 px-2 py-1 hover:border-red-500 hover:text-red-500">
          meninggal
        </Tab>
        <Tab className="mx-1 text-xs tracking-widest ms:text-base font-bold capitalize border border-green-700 rounded shadow text-green-600 px-2 py-1 hover:border-green-600 hover:text-green-500">
          pulih
        </Tab>
        <Tab className="mx-1 text-xs tracking-widest ms:text-base font-bold capitalize border border-indigo-700 rounded shadow text-indigo-600 px-2 py-1 hover:border-indigo-600 hover:text-indigo-500">
          All
        </Tab>
        <button
          type="button"
          onClick={onClick}
          className="mx-1 text-xs tracking-widest ms:text-base font-bold capitalize border border-teal-700 rounded shadow text-teal-600 px-2 py-1 hover:border-teal-600 hover:text-teal-500"
        >
          Load
        </button>
      </TabList>
      <div className="p-5">
        <TabPanel>
          <ColumnChart
            data={cases}
            colors={["#d69e2e"]}
            xtitle="Tanggal"
            ytitle="Jumlah"
          />
        </TabPanel>
        <TabPanel>
          <ColumnChart
            data={deaths}
            colors={["#c53030"]}
            xtitle="Tanggal"
            ytitle="Jumlah"
          />
        </TabPanel>
        <TabPanel>
          <ColumnChart
            data={recovered}
            colors={["#38a169"]}
            xtitle="Tanggal"
            ytitle="Jumlah"
          />
        </TabPanel>
        <TabPanel>
          <ColumnChart
            data={all}
            colors={["#d69e2e", "#c53030", "#38a169"]}
            xtitle="Tanggal"
            ytitle="Jumlah"
          />
        </TabPanel>
      </div>
    </Tabs>
  </div>
);

export default Timeline;
