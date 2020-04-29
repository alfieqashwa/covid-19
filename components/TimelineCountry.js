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

  const cases = data.map(c => c.timeline.cases);
  const deaths = data.map(c => c.timeline.deaths);
  const recovered = data.map(c => c.timeline.recovered);

  function onChange(selectedOptions) {
    const selectedCountries = selectedOptions.map(o => o.value);
    if (selectedOptions.length > 1) return setOptions(selectedCountries);
  }

  return (
    <Fragment>
      <Select options={countriesOptions} isMulti={true} onChange={onChange} />
      <GraphTimeline
        cases={[
          { name: options[0], data: cases[0] },
          { name: options[1], data: cases[1] },
        ]}
        deaths={[
          { name: options[0], data: deaths[0] },
          { name: options[1], data: deaths[1] },
        ]}
        recovered={[
          { name: options[0], data: recovered[0] },
          { name: options[1], data: recovered[1] },
        ]}
        yellow={["#d69e2e", "#dd6b20"]}
        red={["#e53e3e", "#f56565"]}
        green={["#48bb78", "#2f855a"]}
        onClick={refetch}
      />
    </Fragment>
  );
};
