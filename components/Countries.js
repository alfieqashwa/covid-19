import useAxios from "axios-hooks";
import { BASE_URL } from "./BaseUrl";
import { formatNum } from "../utils/formatNum";

export default () => {
  const [{ data, loading, error }, refetch] = useAxios(`${BASE_URL}/countries`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR!</p>;

  return (
    <>
      <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
        <button
          onClick={refetch}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-teal-700 rounded"
        >
          RELOAD COUNTRIES
        </button>
      </div>
      <div className="flex flex-wrap mb-2">
        {data.map((c, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pt-3 px-3 mb-4"
          >
            <div className="bg-gray-900 border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4">
                  <i className="fa fa-wallet fa-2x fa-fw fa-inverse" />
                </div>
                <div className="flex-1 text-left">
                  <h5 className="text-purple-300 text-2xl font-bold">
                    {formatNum(c.country)}
                  </h5>
                  <h3 className="text-white text-1xl">
                    Kasus: {formatNum(c.cases)}
                  </h3>
                  <h3 className="text-white text-1xl">
                    Kritis: {formatNum(c.critical)}
                  </h3>
                  <h3 className="text-white text-1xl">
                    Meninggal: {formatNum(c.deaths)}
                  </h3>
                  <h3 className="text-white text-1xl">
                    Pulih: {formatNum(c.recovered)}
                  </h3>
                  <h3 className="text-white text-1xl">
                    Kasus Hari ini: {formatNum(c.todayCases)}
                  </h3>
                  <h3 className="text-white text-1xl">
                    Meninggal Hari ini: {formatNum(c.todayDeaths)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
