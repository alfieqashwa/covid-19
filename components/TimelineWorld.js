import React, { Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";
import { Loading, Error } from "./LoadingError";

import { CovidContext } from "../utils/Context";
import { CasesTimeline, DeathsTimeline } from "./Timeline";

const TimelineWorld = () => {
  const {
    dataHistoricalAll: data,
    loadingHistoricalAll: loading,
    errorHistoricalAll: error,
    refetchHistoricalAll: refetch
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

  const { cases, deaths } = data;
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
    </Fragment>
  );
};

export default TimelineWorld;
