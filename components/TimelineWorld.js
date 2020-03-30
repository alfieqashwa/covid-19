import React, { Fragment } from "react";
import useAxios from "axios-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";
import { Loading, Error } from "./LoadingError";
import { BASE_URL } from "../utils/BaseUrl";
import { CasesTimeline, DeathsTimeline } from "./Timeline";

const TimelineWorld = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    `${BASE_URL}/v2/historical/all`
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
