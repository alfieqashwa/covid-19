import React, { Fragment, useContext } from "react";
import Select from "react-select";
import chroma from "chroma-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";

import { CovidContext } from "../utils/Context";

import { Loading, Error } from "./LoadingError";
import { CasesTimeline, DeathsTimeline, RecoveredTimeline } from "./Timeline";
import { colourOptions, countriesOptions } from "../utils/data";

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

export default function TimelineCountry() {
  const {
    query,
    setQuery,
    dataHistoricalCountry: data,
    loadingHistoricalCountry: loading,
    errorHistoricalCountry: error,
    refetchHistoriclaCountry: refetch,
  } = useContext(CovidContext);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const {
    // standardizedCountryName,
    timeline: { cases, deaths, recovered },
  } = data;
  return (
    <Fragment>
      <Select
        closeMenuOnSelect={false}
        defaultValue={[countriesOptions[0]]}
        options={[countriesOptions]}
        styles={colourStyles}
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
