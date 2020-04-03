import React, { useContext, Fragment } from "react";

import { Globe, Cases, Deaths, Recovered, Active } from "./ReusableComponent";
import TimelineWorld from "./TimelineWorld";

import { CovidContext } from "../utils/Context";
import { formatNum } from "../utils/formatNum";
import LastUpdated from "./LastUpdated";
import DoughnutChart from "./DoughnutChart";
import ListCountries from "./ListCountries";
import { Loading, Error } from "./LoadingError";

export default function World() {
  const {
    dataAll: data,
    loadingAll: loading,
    errorAll: error,
    refetchAll: refetch
  } = useContext(CovidContext);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { cases, deaths, recovered } = data;
  const active = cases - (deaths + recovered);

  return (
    <Fragment>
      <div className="flex flex-wrap">
        <Globe title="Total Data" content="The World" />
        <Cases title="Total Kasus" content={formatNum(cases)} />
        <Deaths title="Total Meninggal" content={formatNum(deaths)} />
        <Recovered title="Total Pulih" content={formatNum(recovered)} />
        <Active title="Terinfeksi" content={formatNum(active)} />
        {/* START LAST UPDATED */}
        <LastUpdated onClick={refetch} />
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
