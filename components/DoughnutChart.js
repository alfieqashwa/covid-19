import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ cases, deaths, recovered }) {
  const active = cases - (deaths + recovered);
  return (
    // <div className="w-full md:w-1/2 xl:w-1/3 p-3">
    <div className="w-full p-3">
      {/* Graph Card */}
      <div className="bg-gray-900 border border-gray-800 rounded shadow">
        <div className="border-b border-gray-800 p-3">
          <h5 className="font-bold uppercase text-gray-600">Graph</h5>
        </div>
        <div className="p-5">
          <Doughnut
            data={{
              labels: ["Kasus", "Meninggal", "Pulih", "Terinfeksi"],
              datasets: [
                {
                  data: [cases, deaths, recovered, active],
                  backgroundColor: ["#d69e2e", "#c53030", "#38a169", "#805ad5"],
                  hoverBackgroundColor: [
                    "#d69e2e",
                    "#c53030",
                    "#38a169",
                    "#805ad5",
                  ],
                },
              ],
            }}
          />
        </div>
      </div>
      {/* Graph Card */}
    </div>
  );
}
