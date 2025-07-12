import React from "react";
import Link from "next/link";
import { withRouter, useRouter } from "next/router";
import useAxios from "axios-hooks";
import { ColumnChart } from "react-chartkick";
import "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faAllergies } from "@fortawesome/free-solid-svg-icons";
import { Loading, Error } from "./LoadingError";
import { BASE_URL } from "../utils/BaseUrl";

const Timeline = ({ router }) => {
  const [{ data, loading, error }, refetch] = useAxios(
    `${BASE_URL}/countries/indonesia`
  );

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
    timeline: { cases, deaths },
  } = data;

  const {
    query: { tab },
  } = router;

  const isTabOne = tab === "1" || tab == null;
  const isTabTwo = tab === "2";

  return (
    <div className="w-full p-3">
      <div className="bg-gray-900 border border-gray-800 rounded shadow">
        <NavGraph isTabOne={isTabOne} isTabTwo={isTabTwo} />
        {isTabOne && (
          <div className="p-5">
            <ColumnChart
              data={[{ name: "Kasus", data: cases }]}
              colors={["#d69e2e"]}
              xtitle="Tanggal"
              ytitle="Jumlah"
            />
          </div>
        )}
        {isTabTwo && (
          <div className="p-5">
            <ColumnChart
              data={[{ name: "Meninggal", data: deaths }]}
              colors={["#c53030"]}
              xtitle="Tanggal"
              ytitle="Jumlah"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Timeline);

function NavGraph({ isTabOne, isTabTwo }) {
  const router = useRouter();
  return (
    <div className="border-b border-gray-800 p-3">
      <ul className="flex">
        <li selected={isTabOne} className="-mb-px mr-1">
          <Link href={{ query: { tab: "1" } }}>
            <a
              className={` inline-block  ${
                router.query.tab === "1" &&
                "border-l border-t border-r rounded-t border-gray-600 text-yellow-600"
              } py-2 px-4 font-bold capitalize text-gray-600 `}
            >
              Kasus
            </a>
          </Link>
        </li>
        <li selected={isTabTwo} className="mr-1">
          <Link href={{ query: { tab: "2" } }}>
            <a
              className={` inline-block ${
                router.query.tab === "2" &&
                "border-l border-t border-r rounded-t border-gray-600 text-red-600"
              } py-2 px-4 font-bold capitalize text-gray-600 `}
            >
              Meninggal
            </a>
          </Link>
        </li>
        <li className="justify-end mr-1">
          <button>Refetch</button>
        </li>
      </ul>
    </div>
  );
}
