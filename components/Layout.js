import React from "react";
import axios from "axios";
import { makeUseAxios } from "axios-hooks";

import { BASE_URL } from "../utils/BaseUrl";
import { CovidContext } from "../utils/Context";
import Nav from "./Nav";
import Footer from "./Footer";

const myUseAxios = makeUseAxios({
  axios: axios.create({ baseURL: BASE_URL })
});

export default ({ children }) => {
  const [
    { data: dataAll, loading: loadingAll, error: errorAll },
    refetchAll
  ] = myUseAxios("/all");
  const [
    { data: dataID, loading: loadingID, error: errorID },
    refetchID
  ] = myUseAxios("/countries/indonesia");
  const [
    { data: dataCountries, loading: loadingCountries, error: errorCountries },
    refetchCountries
  ] = myUseAxios("/countries?sort=cases");

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
              loadingID,
              errorID,
              refetchID,
              dataCountries,
              loadingCountries,
              errorCountries,
              refetchCountries
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
};
