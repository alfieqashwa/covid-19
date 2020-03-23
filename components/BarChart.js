import React from "react";
import useAxios from "axios-hooks";
import moment from "moment";
import { Bar } from "react-chartjs-2";

import { MATHDRO_URL } from "../utils/BaseUrl";

const data = {
  labels: ["Januari", "Februari", "Maret", "April"],
  datasets: [
    {
      label: "W.I.P-1",
      type: "bar",
      data: [10, 20, 30, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.2)"
      // pointBorderColor: "#EC932F",
      // pointBackgroundColor: "#EC932F",
      // pointHoverBackgroundColor: "#EC932F",
      // pointHoverBorderColor: "#EC932F",
      // yAxisID: "y-axis-2"
    },
    {
      label: "W.I.P-2",
      type: "line",
      data: [5, 15, 10, 30],
      fill: false,
      borderColor: "rgb(54, 162, 235)"
    }
  ]
};

const options = {
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const plugins = [
  {
    afterDraw: (chartInstance, easing) => {
      const ctx = chartInstance.chart.ctx;
      ctx.fillText("This text drawn by a plugin", 100, 100);
    }
  }
];

function BarChart() {
  const [
    { data: dataDaily, loading: loadingDaily, error: errorDaily },
    refetchDaily
  ] = useAxios(`${MATHDRO_URL}/daily`);

  if (loadingDaily) return <p>Loadingg...</p>;
  if (errorDaily) return <p>ERROR...</p>;

  const tanggal = dataDaily.map(x => moment(x.reportDate).format("MM Do YYYY"));
  const mainlandChina = dataDaily.map(x => x.mainlandChina);
  // console.log(JSON.stringify(mainlandChina, null, 2));
  return (
    <div className="w-full md:w-1/2 p-3">
      <div className="bg-gray-900 border border-gray-800 rounded shadow">
        <div className="border-b border-gray-800 p-3">
          <h5 className="font-bold uppercase text-gray-600">
            Work In Progress
          </h5>
        </div>
        <div className="p-5">
          <div>
            <Bar
              data={{
                labels: ["Januari", "Februari", "Maret", "April"],
                datasets: [
                  {
                    label: "Dummy Data-1",
                    type: "bar",
                    data: [500, 600, 700, 800],
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.2)"
                  },
                  {
                    label: "Dummy Data-2",
                    type: "line",
                    data: [170, 390, 470, 570, 700],
                    fill: false,
                    borderColor: "rgb(54, 162, 235)"
                  }
                ]
              }}
              options={options}
              plugins={plugins}
            />
          </div>
        </div>
        {/* TODOS */}
        {/* <div>
          {dataDaily.map(x => (
            <pre>
              {moment(x.reportDate).format("MMM Do YY")}: MainlandChina{" "}
              {x.mainlandChina}
            </pre>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default BarChart;
