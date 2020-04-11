import React, { Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";

import { CovidContext } from "../utils/Context";

import { Loading, Error } from "./LoadingError";
import Timeline from "./Timeline";
import ListTimeline from "./ListTimeline";

export default function TimelineIndonesia() {
  const {
    dataHistoricalID: data,
    loadingHistoricalID: loading,
    errorHistoricalID: error,
    refetchHistoricalID: refetch,
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

  const {
    // standardizedCountryName,
    timeline: { cases, deaths, recovered },
  } = data;
  return (
    <Fragment>
      <Timeline
        onClick={refetch}
        cases={[{ name: "Kasus", data: cases }]}
        deaths={[{ name: "Meninggal", data: deaths }]}
        recovered={[{ name: "Pulih", data: recovered }]}
        all={[
          { name: "Kasus", data: cases },
          { name: "Meninggal", data: deaths },
          { name: "Pulih", data: recovered },
        ]}
      />
      <ListTimeline />
    </Fragment>
  );
}
