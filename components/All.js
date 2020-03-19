import useAxios from "axios-hooks";
import { BASE_URL } from "./BaseUrl";

export default () => {
  const [{ data, loading, error }, refetch] = useAxios(`${BASE_URL}/all`);

  if (loading) return <p>Loading... </p>;
  if (error) return <p>ERROR!</p>;

  const { cases, deaths, recovered, updated } = data;
  return (
    <div className="flex flex-wrap mb-2">
      <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
        <div className="bg-red-600 border rounded shadow p-2">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pl-1 pr-4">
              <i className="fa fa-wallet fa-2x fa-fw fa-inverse" />
            </div>
            <div className="flex-1 text-center">
              <h5 className="text-white text-3xl font-bold">Total Kasus</h5>
              <h3 className="text-white text-4xl">
                {cases}
                <span className="text-green-400">
                  <i className="fas fa-caret-down" />
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
        <div className="bg-black-600 border rounded shadow p-2">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pl-1 pr-4">
              <i className="fas fa-users fa-2x fa-fw fa-inverse" />
            </div>
            <div className="flex-1 text-center">
              <h5 className="text-white text-3xl font-bold">Total Kematian</h5>
              <h3 className="text-white text-4xl">
                {deaths}
                <span className="text-blue-400">
                  <i className="fas fa-caret-up" />
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
        <div className="bg-green-600 border rounded shadow p-2">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pl-1 pr-4">
              <i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i>
            </div>
            <div className="flex-1 text-center">
              <h5 className="text-white text-3xl font-bold">Total Pulih</h5>
              <h3 className="text-white text-4xl">
                {recovered}
                <span className="text-orange-400">
                  <i className="fas fa-caret-up"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
        <button
          onClick={refetch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          RELOAD
        </button>
      </div>
    </div>
  );
};
