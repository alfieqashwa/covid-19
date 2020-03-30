import React from "react";
import { ColumnChart, AreaChart } from "react-chartkick";
import "chart.js";

export const CasesTimeline = ({ onClick, data }) => (
  <div className="w-full p-3 mb-6">
    <div className="bg-gray-900 border border-gray-800 rounded shadow">
      <div className="border-b border-gray-800 p-4">
        <button
          className="text-xs ms:text-base font-bold capitalize border border-yellow-700 rounded shadow text-yellow-600 px-2 py-1 hover:border-yellow-500 hover:text-yellow-500"
          onClick={onClick}
        >
          Kasus
        </button>
      </div>
      <div className="p-5">
        <ColumnChart
          data={data}
          colors={["#d69e2e"]}
          xtitle="Tanggal"
          ytitle="Jumlah"
        />
      </div>
    </div>
  </div>
);

export const DeathsTimeline = ({ onClick, data }) => (
  <div className="w-full p-3">
    <div className="bg-gray-900 border border-gray-800 rounded shadow">
      <div className="border-b border-gray-800 p-4">
        <button
          className="text-xs ms:text-base font-bold capitalize border border-red-700 rounded shadow text-red-600 px-2 py-1 hover:border-red-500 hover:text-red-500"
          onClick={onClick}
        >
          meninggal
        </button>
      </div>
      <div className="p-5">
        <ColumnChart
          data={data}
          colors={["#c53030"]}
          xtitle="Tanggal"
          ytitle="Jumlah"
        />
      </div>
    </div>
  </div>
);
