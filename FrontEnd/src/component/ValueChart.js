import "../css/ValueChart.css";
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

const ValueChart = ({data}) =>{
    const blankData = [
        {
            date : 0,
            money: 0
        }
    ];

    return (
        <article className="ValueChart">
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
          className="showChart"
        >
          <CartesianGrid stroke="lightgray" />
          <XAxis dataKey="date"/>
          <YAxis yAxisId="left" label={{value: "예상 수익(원)", offset: 10, angle: 0, position: "top", fontSize: "10px"}}/>
          {/* <YAxis yAxisId="right" label={{value: "누적예상수익(원)", offset: 10, angle: 0, position: "top", fontSize: "10px"}} orientation="right"/> */}
          <Tooltip/>
          <Legend />
          {/* <Bar yAxisId="right" dataKey="money" barSize={20} fill="#413ea0" /> */}
          <Line yAxisId="left" type="monotone" dataKey="money" stroke="red" />
        </ComposedChart>
        </article>
    );
}

export default ValueChart;