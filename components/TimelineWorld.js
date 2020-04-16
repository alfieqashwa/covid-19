import React, { useContext } from "react";
import { Loading, Error } from "./LoadingError";

import { CovidContext } from "../utils/Context";
import { GraphTimeline } from "./Timeline";

export default function TimelineWorld() {
  const {
    dataHistoricalAll: data,
    loadingHistoricalAll: loading,
    errorHistoricalAll: error,
    refetchHistoricalAll: refetch,
  } = useContext(CovidContext);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { cases, deaths, recovered } = data;
  return (
    <GraphTimeline
      onClick={refetch}
      cases={[{ name: "Kasus", data: cases }]}
      deaths={[{ name: "Meninggal", data: deaths }]}
      recovered={[{ name: "Pulih", data: recovered }]}
      all={[
        { name: "Kasus", data: cases },
        { name: "Meninggal", data: deaths },
        { name: "Pulih", data: recovered },
      ]}
      yellow={["#d69e2e"]}
      red={["#c53030"]}
      green={["#38a169"]}
    />
  );
}
