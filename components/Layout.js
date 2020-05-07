import { useState } from "react";
import axios from "axios";
import useAxios, { makeUseAxios } from "axios-hooks";

import { BASE_URL, POMBER_URL } from "../utils/BaseUrl";
import { CovidContext } from "../utils/Context";
import Nav from "./Nav";
import Footer from "./Footer";

const useAxiosNovel = makeUseAxios({
  axios: axios.create({ baseURL: BASE_URL }),
});

export default function Layout({ children }) {
  // const [country, setCountry] = useState("indonesia, malaysia");
  const [options, setOptions] = useState(["Malaysia", "Indonesia"]);

  const [
    { data: dataAll, loading: loadingAll, error: errorAll },
    refetchAll,
  ] = useAxiosNovel("/v2/all");

  const [
    {
      data: dataHistoricalAll,
      loading: loadingHistoricalAll,
      error: errorHistoricalAll,
    },
    refetchHistoricalAll,
  ] = useAxiosNovel("/v2/historical/all");

  const [
    { data: dataID, loading: loadingID, error: errorID },
    refetchID,
  ] = useAxiosNovel("/v2/countries/indonesia");

  const [
    {
      data: dataHistoricalID,
      loading: loadingHistoricalID,
      error: errorHistoricalID,
    },
    refetchHistoricalID,
  ] = useAxiosNovel("/v2/historical/indonesia");

  const [
    { data: dataCountries, loading: loadingCountries, error: errorCountries },
    refetchCountries,
  ] = useAxiosNovel("/v2/countries?sort=cases");

  const [
    { data: dataCountry, loading: loadingCountry, error: errorCountry },
    refetchCountry,
  ] = useAxiosNovel(`/v2/countries/${options}`);

  const [
    {
      data: dataHistoricalCountry,
      loading: loadingHistoricalCountry,
      error: errorHistoricalCountry,
    },
    refetchHistoricalCountry,
  ] = useAxiosNovel(`/v2/historical/${options}`);

  const [
    { data: dataPomber, loading: loadingPomber, error: errorPomber },
    refetchPomber,
  ] = useAxios(POMBER_URL);
  return (
    <div className="bg-black-alt font-sans leading-normal tracking-normal">
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
          dataCountry,
          loadingCountry,
          errorCountry,
          refetchCountry,
          dataHistoricalCountry,
          loadingHistoricalCountry,
          errorHistoricalCountry,
          refetchHistoricalCountry,
          options,
          setOptions,
          dataPomber,
          loadingPomber,
          errorPomber,
          refetchPomber,
        }}
      >
        <Nav />
        {/* Container */}
        <div className="container w-full mx-auto pt-20">
          <div className="w-full px-1 md:px-0 md:mt-8 mb-12 text-gray-800 leading-normal">
            {children}
          </div>
          <Footer />
        </div>
      </CovidContext.Provider>
    </div>
  );
}
