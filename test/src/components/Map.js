import "../static/css/Map.css";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from "recharts";

function Map({data}) {
  const blankData = [
    {
      time: 0,
      loc_power: 0,
      loc_total: 0
    }
  ];

  return (
    <ComposedChart
      width={500}
      height={400}
      data={data === null ? blankData : data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
      className="chart"
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="time" />
      <YAxis yAxisId="left" label={{value: "발전량(Mw)", offset: 10, angle: 0, position: "top", fontSize: "10px"}}/>
      <YAxis yAxisId="right" label={{value: "누적발전량(Mw)", offset: 10, angle: 0, position: "top", fontSize: "10px"}} orientation="right"/>
      <Tooltip />
      <Legend />
      <Bar yAxisId="right" dataKey="loc_total" barSize={20} fill="#413ea0" />
      <Line yAxisId="left" type="monotone" dataKey="loc_power" stroke="#ff7300" />
    </ComposedChart>
  );
}

export default Map;