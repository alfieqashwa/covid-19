import axios from "axios";
import { makeUseAxios } from "axios-hooks";
import Link from "next/link";

import Nav from "./Nav";
import { BASE_URL } from "../utils/BaseUrl";
import { CovidContext } from "../utils/Context";

const useAxios = makeUseAxios({
  axios: axios.create({ baseURL: BASE_URL })
});

export default ({ children }) => {
  const [
    { data: dataAll, loading: loadingAll, error: errorAll },
    refetchAll
  ] = useAxios("/all");
  const [
    { data: dataID, loading: loadingID, error: errorID },
    refetchID
  ] = useAxios("/countries/indonesia");

  return (
    <>
      <div className="bg-black-alt font-sans leading-normal tracking-normal">
        <div className="bg-gray-900">
          <Nav />
          {/* Container */}
          <div className="container w-full mx-auto pt-20">
            <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
              <CovidContext.Provider
                value={{
                  dataAll,
                  loadingAll,
                  errorAll,
                  refetchAll,
                  dataID,
                  loadingID,
                  errorID,
                  refetchID
                }}
              >
                {children}
              </CovidContext.Provider>
            </div>
          </div>
        </div>
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
    </>
  );
};
