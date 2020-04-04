import React, { Fragment, useContext, useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";

import { CovidContext } from "../utils/Context";

import { Loading, Error } from "./LoadingError";
import { CasesTimeline, DeathsTimeline, RecoveredTimeline } from "./Timeline";
import { colourOptions, countriesOptions } from "../utils/data";

export default function Countries() {
  const [value, setValue] = useState([]);
  const {
    queries,
    setQueries,
    dataHistoricalCountry: data,
    loadingHistoricalCountry: loading,
    errorHistoricalCountry: error,
    refetchHistoriclaCountry: refetch,
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

  const onChange = selectedOptions => {
    const value = selectedOptions.map(x => x.value);
    setValue(selectedOptions);
  };

  console.log(JSON.stringify(value, null, 2));
  return (
    <Fragment>
      <Select
        closeMenuOnSelect={false}
        defaultValue={countriesOptions[0]}
        options={countriesOptions}
        isMulti
        onChange={onChange}
      />
      <CasesTimeline
        onClick={refetch}
        data={[{ name: "Kasus", data: cases }]}
      />
      <DeathsTimeline
        onClick={refetch}
        data={[{ name: "Meninggal", data: deaths }]}
      />
      <RecoveredTimeline
        onClick={refetch}
        data={[{ name: "Pulih", data: recovered }]}
      />
    </Fragment>
  );
}
