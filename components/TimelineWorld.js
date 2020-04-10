import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";
import { Loading, Error } from "./LoadingError";

import { CovidContext } from "../utils/Context";
import Timeline from "./Timeline";

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
  );
}
