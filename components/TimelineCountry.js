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
        all={[
          { name: `[K]. ${options[0].slice(0, 3)}`, data: cases[0] },
          { name: `[K]. ${options[1].slice(0, 3)}`, data: cases[1] },
          { name: `[M]. ${options[0].slice(0, 3)}`, data: deaths[0] },
          { name: `[M]. ${options[1].slice(0, 3)}`, data: deaths[1] },
          { name: `[P]. ${options[0].slice(0, 3)}`, data: recovered[0] },
          { name: `[P]. ${options[1].slice(0, 3)}`, data: recovered[1] },
        ]}
        yellow={["#ecc94b", "#dd6b20"]}
        red={["#fc8181", "#c53030"]}
        green={["#68d391", "#276749"]}
        allColors={[
          "#ecc94b",
          "#dd6b20",
          "#fc8181",
          "#c53030",
          "#68d391",
          "#276749",
        ]}
        onClick={refetch}
      />
    </Fragment>
  );
};
