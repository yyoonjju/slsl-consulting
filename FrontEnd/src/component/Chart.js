import "../css/Chart.css";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function Chart({data}) {
  const blankData = [
    {
      time: 0,
      loc_power: 0,
      loc_total: 0
    }
  ];

  return (
    <div className="chart-container">
      <div>
        <ComposedChart
          width={700}
          height={400}
          data={data === null ? blankData : data.slice(0,24)}
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
      </div>

      <div>
          <ComposedChart
          width={700}
          height={400}
          data={data === null ? blankData : data.slice(24,48)}
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
      </div>
    </div>
  );
}

export default Chart;