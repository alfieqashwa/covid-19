import React, { useContext, Fragment } from "react";
import { cfr } from "../utils/formatNum";

import {
  Globe,
  Cases,
  Deaths,
  Recovered,
  Active,
  LastUpdated,
  FatalityRate,
} from "./ReusableComponent";
import TimelineWorld from "./TimelineWorld";

import { CovidContext } from "../utils/Context";
import DoughnutChart from "./DoughnutChart";
import ListCountries from "./ListCountries";
import { Loading, Error } from "./LoadingError";

export default function World() {
  const {
    dataAll: data,
    loadingAll: loading,
    errorAll: error,
    refetchAll: refetch,
  } = useContext(CovidContext);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { cases, deaths, recovered, updated } = data;
  const active = cases - (deaths + recovered);

  const CFR = cfr(deaths, cases);

  return (
    <Fragment>
      <div className="flex flex-wrap">
        <Globe title="Total Data" content="The World" />
        <Cases title="Total Kasus" content={cases} />
        <Deaths title="Total Meninggal" content={deaths} />
        <Recovered title="Total Pulih" content={recovered} />
        <Active title="Terinfeksi" content={active} />
        <FatalityRate content={CFR} />
        {/* START LAST UPDATED */}
        <LastUpdated updated={updated} onClick={refetch} />
      </div>
      <hr className="border-b-2 border-gray-600 my-8 mx-4" />
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        {/* GRAPH */}
        {/* <BarChart /> */}
        <DoughnutChart cases={cases} deaths={deaths} recovered={recovered} />
        {/* <LineChart /> */}
        <ListCountries />
        <TimelineWorld />
      </div>
      <hr className="border-b-2 border-gray-600 my-8 mx-4" />
    </Fragment>
  );
}
