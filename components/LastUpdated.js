import React, { useContext } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import { CovidContext } from "../utils/Context";

function LastUpdated({ onClick }) {
  const { dataAll } = useContext(CovidContext);
  const { updated } = dataAll;
  const lastUpdated = moment(updated)
    .startOf("hour")
    .fromNow();

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
      <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <button onClick={onClick}>
              <div className="rounded px-4 py-3 bg-indigo-700 hover:bg-indigo-800">
                <FontAwesomeIcon icon={faSyncAlt} size="2x" inverse spin />
              </div>
            </button>
          </div>

          <div className="flex-1 text-right md:text-center">
            <h5 className="font-bold uppercase text-gray-400">Last Updated</h5>

            <h3 className="font-bold text-2xl text-indigo-700">
              {lastUpdated}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastUpdated;
