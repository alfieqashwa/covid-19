import React, { Fragment } from "react";
import useAxios from "axios-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";
import { Loading, Error } from "./LoadingError";
import { CasesTimeline, DeathsTimeline } from "./Timeline";
import { BASE_URL } from "../utils/BaseUrl";

export default function TimelineIndonesia() {
  const [{ data, loading, error }, refetch] = useAxios(
    `${BASE_URL}/v2/historical/indonesia`
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
    timeline: { cases, deaths }
  } = data;
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
}
