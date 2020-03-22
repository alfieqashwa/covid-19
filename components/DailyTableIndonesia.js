import React from "react";
import useAxios from "axios-hooks";

import { BASE_URL } from "../utils/BaseUrl";

export default () => {
  // const [{ data, loading, error }, refetch] = useAxios(
  //   `${BASE_URL}/historical/`
  // );

  // if (loading) return <p>Loaiindg...</p>;
  // if (error) return <p>ERRORSS...</p>;

  return (
    <div className="w-full md:w-1/2 p-3">
      <div className="bg-gray-900 border border-gray-800 rounded shadow">
        <div className="border-b border-gray-800 p-3">
          <h5 className="font-bold uppercase text-gray-600">
            Daily Historical
          </h5>
        </div>
        <div className="text-gray-400 p-5"></div>
      </div>
    </div>
  );
};
