import React from "react";
import useAxios from "axios-hooks";
import { ColumnChart } from "react-chartkick";
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
    standardizedCountryName,
    timeline: { cases, deaths, recovered }
  } = data;
  console.log(JSON.stringify(cases, null, 2));
  return (
    <>
      <div className="w-full p-3">
        <div className="bg-gray-900 border border-gray-800 rounded shadow">
          <div className="border-b border-gray-800 p-3">
            <h5 className="font-bold capitalize text-gray-600">Kasus</h5>
          </div>
          <div className="p-5">
            <ColumnChart
              data={[{ name: "Kasus", data: cases }]}
              colors={["#d69e2e"]}
              xtitle="Tanggal"
              ytitle="Jumlah"
            />
          </div>
        </div>
      </div>
      <div className="w-full p-3">
        <div className="bg-gray-900 border border-gray-800 rounded shadow">
          <div className="border-b border-gray-800 p-3">
            <h5 className="font-bold capitalize text-gray-600">Meninggal</h5>
          </div>
          <div className="p-5">
            <ColumnChart
              data={[{ name: "Meninggal", data: deaths }]}
              colors={["#c53030"]}
              xtitle="Tanggal"
              ytitle="Jumlah"
            />
          </div>
        </div>
      </div>
      <div className="w-full p-3">
        <div className="bg-gray-900 border border-gray-800 rounded shadow">
          <div className="border-b border-gray-800 p-3">
            <h5 className="font-bold capitalize text-gray-600">Pulih</h5>
          </div>
          <div className="p-5">
            <ColumnChart
              data={[{ name: "Pulih", data: recovered }]}
              colors={["#38a169"]}
              xtitle="Tanggal"
              ytitle="Jumlah"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
