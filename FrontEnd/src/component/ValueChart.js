import "../css/ValueChart.css";
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

const ValueChart = ({data}) =>{
    // 차트 데이터 변수 생성
    const [chartData, setChartData] = useState('');

    // 데이터가 갱신되면 차트 데이터 재설정
    useEffect(() => {
      ChartData();
    },[data]);

    // 데이터 호출에 오류 발생 시 공백 데이터로 대체
    const blankData = [
        {
            date : 0,
            money: 0
        }
    ];

    // 호출 데이터를 차트 데이터로 가공
    const ChartData = () => {
      try {
        const dataTemp = data.length === 0 ?
          blankData.map((dt) => {
            return {
              xAxis: dt.date,
              "예상 수익(원)": dt.money,
            };
          }) :
          data.map((dt) => {
            return {
              xAxis: dt.date,
              "예상 수익(원)": dt.money,
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
        <article className="ValueChart">
        <ComposedChart
          width={700}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
          className="showChart"
        >
          <CartesianGrid stroke="lightgray" />
          <XAxis dataKey="xAxis" interval={parseInt(chartData.length/30)} angle={-45} textAnchor="end" height={80} fontSize={13}/>
          <YAxis yAxisId="left" label={{value: "예상 수익(원)", offset: 10, angle: 0, position: "top", fontSize: "12px"}} tickFormatter={formatYAxis}/>
          {/* <YAxis yAxisId="right" label={{value: "누적 예상 수익(원)", offset: 10, angle: 0, position: "top", fontSize: "10px"}} orientation="right"/> */}
          <Tooltip/>
          <Legend />
          {/* <Bar yAxisId="right" dataKey="money" barSize={20} fill="#413ea0" /> */}
          <Line yAxisId="left" type="monotone" dataKey="예상 수익(원)" stroke="red" />
        </ComposedChart>
        </article>
    );
}

export default ValueChart;