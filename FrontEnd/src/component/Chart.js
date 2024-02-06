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
  // Data를 가져오는 속도가 느릴 경우를 대비해서 빈 데이터 생성
  const blankData = [
    {
      time: 0,
      loc_power: 0,
      loc_total: 0
    }
  ];

  const formatYAxis = (tickItem) => tickItem.toLocaleString();

  return (
    <div className="chart-container">
      {/* 첫 번째 날짜에 대한 차트 그래프 생성 */}
      <div>
        <ComposedChart
          width={800}
          height={400}
          // 첫 번째 날짜만 잘라서 표시
          data={data === null ? blankData : data}
          margin={{
            top: 30,
            left: 5,
            right: 5
          }}
          className="chart1"
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="time" interval={1}/>
          <YAxis yAxisId="left" label={{value: "발전량(Mw)", offset: 10, angle: 0, position: "top", fontSize: "10px"}} tickFormatter={formatYAxis}/>
          <YAxis yAxisId="right" label={{value: "누적발전량(Mw)", offset: 10, angle: 0, position: "top", fontSize: "10px"}} tickFormatter={formatYAxis} orientation="right"/>
          <Tooltip />
          <Legend />
          <Bar yAxisId="right" dataKey="loc_total" barSize={20} fill="#413ea0" />
          <Line yAxisId="left" type="monotone" dataKey="loc_power" stroke="#ff7300" />
        </ComposedChart>
      </div>

      {/* 두 번째 날짜에 대한 차트 그래프 생성 */}
      {/* <div>
          <ComposedChart
          width={700}
          height={500}
          // 두 번째 날짜만 잘라서 표시
          data={data === null ? blankData : data.slice(24,48)}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
          className="chart2"
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
      </div> */}
    </div>
  );
}

export default Chart;