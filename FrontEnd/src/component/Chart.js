import "../css/Chart.css";
import React, {useEffect, useState} from "react";
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

  // 입력 받는 Data가 변할 시 ChartData함수 발동
  useEffect(() => {
    ChartData();
  },[data])

  // 받아온 Data가 없으면 공백 데이터를 출력하고 있으면 해당 데이터를 Chart형태에 맞춰서 출력
  const ChartData = () => {
    try {
      const dataTemp = data.length === 0 ?
        blankData.map((dt) => {
          return {
            xAxis: dt.date,
            "발전량(MW)": dt.value,
            "누적발전량(MW)": dt.total
          };
        }) :
        data.map((dt) => {
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
  };

  // Y축 scale 가시성을 위해서 3자리마다 "," 생성
  const formatYAxis = (tickItem) => tickItem.toLocaleString();

  return (
    <div className="chart-container">
      {/* 차트 그래프 생성 */}
        <ComposedChart
          width={800}
          height={450}
          data={chartData}
          margin={{
            top: 30,
            left: 5,
            right: 15
          }}
          className="chart"
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="xAxis" interval={parseInt(data.length/30)} angle={-45} textAnchor="end" height={80} fontSize={13}/>
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