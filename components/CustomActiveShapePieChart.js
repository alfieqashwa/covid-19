import React, { PureComponent } from "react";
import useAxios from "axios-hooks";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import { BASE_URL } from "./BaseUrl";

export default function Example() {
  const [{ data, loading, error }, refetch] = useAxios(`${BASE_URL}/all`);
  //  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";

  if (loading) return <p>Loading... </p>;
  if (error) return <p>ERROR... </p>;

  console.log(data);
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
}
