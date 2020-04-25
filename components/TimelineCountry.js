import React, { Fragment, useContext } from "react";
import Select from "react-select";

import { CovidContext } from "../utils/Context";
import { GraphTimeline } from "./Timeline";
import { Loading, Error } from "./LoadingError";

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
  const countries = [...new Set(data.map(c => c.country))];
  const cases = data.map(c => c.timeline.cases);
  const deaths = data.map(c => c.timeline.deaths);
  const recovered = data.map(c => c.timeline.recovered);
  const options = countries.map(countries => ({
    value: countries,
    label: countries,
  }));

  const onChange = selectedOptions => {
    const value = selectedOptions.map(o => o.value);
    console.log(JSON.stringify(value.join(), null, 2));
  };

  return (
    <Fragment>
      <Select isMulti options={options} onChange={onChange} />
      <GraphTimeline
        cases={[
          { name: countries[0], data: cases[0] },
          { name: countries[1], data: cases[1] },
        ]}
        // deaths={[
        //   { name: countries[0], data: deaths[0] },
        //   { name: countries[1], data: deaths[1] },
        // ]}
        // recovered={[
        //   { name: countries[0], data: recovered[0] },
        //   { name: countries[1], data: recovered[1] },
        // ]}
        yellow={["#d69e2e", "#dd6b20"]}
        red={["#e53e3e", "#f56565"]}
        green={["#48bb78", "#2f855a"]}
      />
    </Fragment>
  );
};
