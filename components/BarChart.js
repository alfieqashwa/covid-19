import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { CovidContext } from "../utils/Context";

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
  const { dataHis } = useContext(CovidContext);
  console.log(JSON.stringify(dataHis));

  return (
    <div className="w-full md:w-1/2 p-3">
      {/* Graph Card */}
      <div className="bg-gray-900 border border-gray-800 rounded shadow">
        <div className="border-b border-gray-800 p-3">
          <h5 className="font-bold uppercase text-gray-600">
            Work In Progress
          </h5>
        </div>
        <div className="p-5">
          <div>
            <Bar data={data} options={options} plugins={plugins} />
          </div>
          {/* <script>
                                new Chart(document.getElementById("chartjs-7"), {
                                    "type": "bar",
                                    "data": {
                                        "labels": ["January", "February", "March", "April"],
                                        "datasets": [{
                                            "label": "Page Impressions",
                                            "data": [10, 20, 30, 40],
                                            "borderColor": "rgb(255, 99, 132)",
                                            "backgroundColor": "rgba(255, 99, 132, 0.2)"
                                        }, {
                                            "label": "Adsense Clicks",
                                            "data": [5, 15, 10, 30],
                                            "type": "line",
                                            "fill": false,
                                            "borderColor": "rgb(54, 162, 235)"
                                        }]
                                    },
                                    "options": {
                                        "scales": {
                                            "yAxes": [{
                                                "ticks": {
                                                    "beginAtZero": true
                                                }
                                            }]
                                        }
                                    }
                                });
                            </script> */}
        </div>
      </div>
      {/* Graph Card */}
    </div>
  );
}

export default BarChart;
