import React, { Fragment, useState, useContext } from "react";
import Select from "react-select";

import { countriesOptions } from "../utils/data";
import { CovidContext } from "../utils/Context";
import { GraphTimeline } from "./Timeline";
import { Loading, Error } from "./LoadingError";

export default () => {
  const {
    dataHistoricalCountry: data,
    loadingHistoricalCountry: loading,
    errorHistoricalCountry: error,
    refetchHistoricalCountry: refetch,
    options,
    setOptions,
  } = useContext(CovidContext);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const dataLen = data.length > 1;
  // const countries = dataLen ? data.map(c => c.country) : data.country;
  const cases = dataLen ? data.map(c => c.timeline.cases) : data.timeline.cases;
  const deaths = dataLen
    ? data.map(c => c.timeline.deaths)
    : data.timeline.deaths;
  const recovered = dataLen
    ? data.map(c => c.timeline.recovered)
    : data.timeline.recovered;

  function onChange(selectedOptions) {
    const selectedCountries = selectedOptions.map(o => o.value);
    if (selectedOptions.length > 1) return setOptions(selectedCountries);
    console.log(selectedOptions.length);
  }

  return (
    <Fragment>
      <Select options={countriesOptions} isMulti={true} onChange={onChange} />
      <GraphTimeline
        cases={
          dataLen
            ? [
                { name: options[0], data: cases[0] },
                { name: options[1], data: cases[1] },
              ]
            : [{ name: options, data: cases }]
        }
        deaths={
          dataLen
            ? [
                { name: options[0], data: deaths[0] },
                { name: options[1], data: deaths[1] },
              ]
            : [{ name: options, data: deaths }]
        }
        recovered={
          dataLen
            ? [
                { name: options[0], data: recovered[0] },
                { name: options[1], data: recovered[1] },
              ]
            : [{ name: options, data: recovered }]
        }
        yellow={["#d69e2e", "#dd6b20"]}
        red={["#e53e3e", "#f56565"]}
        green={["#48bb78", "#2f855a"]}
      />
    </Fragment>
  );
};
