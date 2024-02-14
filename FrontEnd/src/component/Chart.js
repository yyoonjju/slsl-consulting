import "../css/Chart.css";
import React, {useEffect, useState} from "react";
import Moment from 'moment';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function Chart({data}) {
  const [chartData, setChartData] = useState('');
  // Data를 가져오는 속도가 느릴 경우를 대비해서 빈 데이터 생성
  const blankData = [];
  
  for (var i = 0; i < 30; i++) {
    blankData.push(
      {
        date: i,
        value: 0,
        total: 0
      }
    );
  };

  useEffect(() => {
    ChartData();
  },[data])

  const Title = () => {
    try {
      return data.length === 0 ? "Not Found Data" : "발전량";
    }
    catch {
      console.log("Error: FirstTitle");
    }
  };

  // 데이터 값 시간 -> 일자 변동
  // const SecondTitle = () => {
  //   try {
  //     return data.slice(24,48).length === 0 ?
  //       "Not Found Date" :
  //       data[24].date;
  //   }
  //   catch {
  //     console.log("Error: SecondTitle");
  //   }
  // };

  const ChartData = () => {
    try {
      const dataTemp = data.map((dt) => {
        return {
          xAxis: dt.date,
          "발전량(MW)": dt.value,
          "누적발전량(MW)": dt.total
        };
      });
      setChartData(dataTemp);
    }
    catch {
      console.log("Error: ChartData");
    }
  }

  const formatYAxis = (tickItem) => tickItem.toLocaleString();

  return (
    <div className="chart-container">
      {/* 첫 번째 날짜에 대한 차트 그래프 생성 */}
        <ComposedChart
          width={800}
          height={450}
          data={chartData}
          margin={{
            top: 30,
            left: 5,
            right: 5
          }}
          className="chart"
        >
          {/* <text x="50%" y="3%" textAnchor="middle" fontSize="17" fontWeight="bold" fill="#666">{Title()}</text> */}
          {/* 데이터 값 시간 -> 일자 변동 */}
          {/* <text x="70%" y="3%" textAnchor="middle" fontSize="17"  fontWeight="bold"fill="#666">{SecondTitle()}</text> */}
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="xAxis" interval={parseInt(data.length/30)} angle={-45} textAnchor="end"/>
          <YAxis yAxisId="left" label={{value: "발전량(MW)", offset: 10, angle: 0, position: "top", fontSize: "10px"}} tickFormatter={formatYAxis}/>
          <YAxis yAxisId="right" label={{value: "누적발전량(MW)", offset: 10, angle: 0, position: "top", fontSize: "10px"}} tickFormatter={formatYAxis} orientation="right"/>
          <Tooltip />
          <Legend />
          <Bar yAxisId="right" dataKey="누적발전량(MW)" barSize={20} fill="#413ea0" />
          <Line yAxisId="left" type="monotone" dataKey="발전량(MW)" stroke="#ff7300" />
        </ComposedChart>
    </div>
  );
}

export default Chart;