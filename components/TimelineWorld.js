import React, { Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";
import { Loading, Error } from "./LoadingError";

import { CovidContext } from "../utils/Context";
import { CasesTimeline, DeathsTimeline, RecoveredTimeline } from "./Timeline";

export default function TimelineWorld() {
  const {
    dataHistoricalAll: data,
    loadingHistoricalAll: loading,
    errorHistoricalAll: error,
    refetchHistoricalAll: refetch,
  } = useContext(CovidContext);

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

  const { cases, deaths, recovered } = data;
  return (
    <Fragment>
      <CasesTimeline
        onClick={refetch}
        data={[{ name: "Kasus", data: cases }]}
      />
      <DeathsTimeline
        onClick={refetch}
        data={[{ name: "Meninggal", data: deaths }]}
      />
      <RecoveredTimeline
        onClick={refetch}
        data={[{ name: "Pulih", data: recovered }]}
      />
    </Fragment>
  );
}
