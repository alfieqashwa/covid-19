import React from "react";
import useAxios from "axios-hooks";
import { LineChart } from "react-chartkick";
import "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";
import { Loading, Error } from "./LoadingError";
import { BASE_URL } from "../utils/BaseUrl";

const Timeline = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    `${BASE_URL}/historical/indonesia`
  );

  if (loading)
    return (
      <Loading text="Loading...">
        <FontAwesomeIcon icon={faSyncAlt} size="6x" inverse spin />
      </Loading>
    );

  if (error)
    return (
      <Error text="Error !!">
        <FontAwesomeIcon icon={faAllergies} size="6x" inverse spin />
      </Error>
    );

  const {
    timeline: { cases, deaths, recovered }
  } = data;
  console.log(JSON.stringify(cases, null, 2));
  return (
    <div className="w-full p-3">
      {/* Graph Card */}
      <div className="bg-gray-900 border border-gray-800 rounded shadow">
        <div className="border-b border-gray-800 p-3">
          <h5 className="font-bold uppercase text-gray-600">
            Daily Historical
          </h5>
        </div>
        <div className="p-5">
          <LineChart
            data={[
              { name: "Kasus", data: cases },
              { name: "Meninggal", data: deaths },
              { name: "Pulih", data: recovered }
            ]}
            colors={["#d69e2e", "#c53030", "#38a169"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
