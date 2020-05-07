import { useState, useContext } from "react";
import Select from "react-select";
import chroma from "chroma-js";
import { CovidContext } from "../utils/Context";

import { colourOptions, countriesOptions } from "../utils/data";

export default () => {
  console.log(currentTarget.value);
  return (
    // <Select
    //   closeMenuOnSelect={false}
    //   defaultValue={[countriesOptions[0]]}
    //   isMulti
    //   options={countriesOptions}
    //   styles={colourStyles}
    //   onChange={setQuery.toLowerCase()}
    // />

    <Select
      defaultValue={[countriesOptions[2], countriesOptions[3]]}
      isMulti
      name="colors"
      options={countriesOptions}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};
