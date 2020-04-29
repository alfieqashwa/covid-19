import React, { Fragment, useContext } from "react";
import { CovidContext } from "../utils/Context";

import { Loading, Error } from "./LoadingError";
import { GraphTimeline, ListTimeline } from "./Timeline";

export default function TimelineIndonesia() {
  const {
    dataHistoricalID: data,
    loadingHistoricalID: loading,
    errorHistoricalID: error,
    refetchHistoricalID: refetch,
    dataPomber,
    loadingPomber,
    errorPomber,
    refetchPomber,
  } = useContext(CovidContext);

  if (loading || loadingPomber) return <Loading />;

  if (error || errorPomber) return <Error />;

  const {
    // standardizedCountryName,
    timeline: { cases, deaths, recovered },
  } = data;

  const indonesia = dataPomber["Indonesia"];
  return (
    <Fragment>
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
        allColors={["#d69e2e", "#c53030", "#38a169"]}
      />
      <ListTimeline country={indonesia} onClick={refetchPomber} />
    </Fragment>
  );
}
