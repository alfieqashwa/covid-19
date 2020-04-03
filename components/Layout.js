import React, { useState } from "react";
import axios from "axios";
import { makeUseAxios } from "axios-hooks";

import { BASE_URL } from "../utils/BaseUrl";
import { CovidContext } from "../utils/Context";
import Nav from "./Nav";
import Footer from "./Footer";

const useAxios = makeUseAxios({
  axios: axios.create({ baseURL: BASE_URL }),
});

export default function Layout({ children }) {
  const [query, setQuery] = useState("cases");

  const [
    { data: dataAll, loading: loadingAll, error: errorAll },
    refetchAll,
  ] = useAxios("/all");

  const [
    {
      data: dataHistoricalAll,
      loading: loadingHistoricalAll,
      error: errorHistoricalAll,
    },
    refetchHistoricalAll,
  ] = useAxios("/v2/historical/all");

  const [
    { data: dataID, loading: loadingID, error: errorID },
    refetchID,
  ] = useAxios("/countries/indonesia");

  const [
    {
      data: dataHistoricalID,
      loading: loadingHistoricalID,
      error: errorHistoricalID,
    },
    refetchHistoricalID,
  ] = useAxios("/v2/historical/indonesia");

  const [
    { data: dataCountries, loading: loadingCountries, error: errorCountries },
    refetchCountries,
  ] = useAxios(`/countries?sort=${query}`);

  return (
    <div className="bg-black-alt font-sans leading-normal tracking-normal">
      <Nav />
      {/* Container */}
      <div className="container w-full mx-auto pt-20">
        <div className="w-full px-1 md:px-0 md:mt-8 mb-12 text-gray-800 leading-normal">
          <CovidContext.Provider
            value={{
              dataAll,
              loadingAll,
              errorAll,
              refetchAll,
              dataID,
              dataHistoricalAll,
              loadingHistoricalAll,
              errorHistoricalAll,
              refetchHistoricalAll,
              loadingID,
              errorID,
              refetchID,
              dataHistoricalID,
              loadingHistoricalID,
              errorHistoricalID,
              refetchHistoricalID,
              dataCountries,
              loadingCountries,
              errorCountries,
              refetchCountries,
              query,
              setQuery,
            }}
          >
            {children}
          </CovidContext.Provider>
        </div>
        <Footer />
      </div>
      <style jsx>
        {`
          .bg-black-alt {
            background: #191919;
          }
          .text-black-alt {
            color: #191919;
          }
          .border-black-alt {
            border-color: #191919;
          }
        `}
      </style>
    </div>
  );
}
