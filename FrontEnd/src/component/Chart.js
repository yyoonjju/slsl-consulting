import "../css/Chart.css";
import React from "react";
import Moment from 'moment';
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
  const blankData = [];
  
  for (var i = 0; i < 24; i++) {
    blankData.push(
      {
        time: i,
        loc_power: 0,
        loc_total: 0
      }
    );
  };

  const FirstTitle = () => {
    try {
      return data.slice(0,24).length === 0 ?
        "Not Found Date" :
        data[0].date;
    }
    catch {
      console.log("Error: FirstTitle");
    }
  };

  const SecondTitle = () => {
    try {
      return data.slice(24,48).length === 0 ?
        "Not Found Date" :
        data[24].date;
    }
    catch {
      console.log("Error: SecondTitle");
    }
  }

  const ChartData = () => {
    try {
      if (data.slice(0,48).length === 48) {
        return data;
      }
      else if (data.slice(0,48).length === 24) {
        return data.concat(blankData);
      }
      else {
        return blankData.concat(blankData);
      }
    }
    catch {
      console.log("Error: ChartData");
    }
  }

  const formatYAxis = (tickItem) => tickItem.toLocaleString();

  return (
    <div className="chart-container">
      {/* 첫 번째 날짜에 대한 차트 그래프 생성 */}
      <div>
        <ComposedChart
          width={800}
          height={400}
          data={ChartData()}
          margin={{
            top: 30,
            left: 5,
            right: 5
          }}
          className="chart"
        >
          <text x="30%" y="3%" textAnchor="middle" fontSize="17" fontWeight="bold" fill="#666">{FirstTitle()}</text>
          <text x="70%" y="3%" textAnchor="middle" fontSize="17"  fontWeight="bold"fill="#666">{SecondTitle()}</text>
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
    </div>
  );
}

export default Chart;