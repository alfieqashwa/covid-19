import React, { Fragment, useContext } from "react";
import { CovidContext } from "../utils/Context";

import { Loading, Error } from "./LoadingError";
import { GraphTimeline } from "./Timeline";

export default () => {
  const {
    dataHistoricalCountry: data,
    loadingHistoricalCountry: loading,
    errorHistoricalCountry: error,
    refetchHistoricalCountry: refetch,
    country,
    setCountry,
  } = useContext(CovidContext);

  if (loading) return <Loading />;

  if (error) return <Error />;

  const {
    // standardizedCountryName,
    // timeline: { cases, deaths, recovered },
  } = data;

  const countries = data.map(c => c.country);
  const cases = data.map(c => c.timeline.cases);
  const deaths = data.map(c => c.timeline.deaths);
  const recovered = data.map(c => c.timeline.recovered);
  return (
    <Fragment>
      <GraphTimeline
        cases={[
          { name: countries[0], data: cases[0] },
          { name: countries[1], data: cases[1] },
        ]}
        deaths={[
          { name: countries[0], data: deaths[0] },
          { name: countries[1], data: deaths[1] },
        ]}
        recovered={[
          { name: countries[0], data: recovered[0] },
          { name: countries[1], data: recovered[1] },
        ]}
        yellow={["#d69e2e", "#dd6b20"]}
        red={["#e53e3e", "#f56565"]}
        green={["#48bb78", "#2f855a"]}
      />
    </Fragment>
  );
};
