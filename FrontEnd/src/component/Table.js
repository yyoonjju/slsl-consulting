import React, {useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import '../css/Table.css';
import Moment from 'moment';

function Tb({data}) {
    // Data를 가져오는 속도가 느릴 경우를 대비해서 빈 데이터 생성
    const blankData = [];

    for (var i = 0; i < 30; i++) {
        blankData.push(
            {
                "date": i,
                "value": 0,
                "total": 0
            }
        );
    };

    // const FirstDate = () => {
    //     try{
    //         return data.slice(0,24).length === 0 ?
    //             "Not Found Date" :
    //             data[0].date;
    //     }
    //     catch {
    //         console.log("Error: FirstDate");
    //     }
    // };

    const TableData = () => {
        try {
            return data.length === 0 ?
                blankData.map((row, index) => (
                    <tr key={index}>
                        <td className="tdDate">{row.date}</td>
                        <td className="tdData1">{row.value}</td>
                        <td className="tdData2">{row.total}</td>
                    </tr>
                )) :
                data.map((row, index) => (
                    <tr key={index}>
                        <td className="tdDate">{row.date}</td>
                        <td className="tdData1">{row.value}</td>
                        <td className="tdData2">{row.total}</td>
                    </tr>
                ));
        }
        catch {
            console.log("Error: TableData");
        }
    };

    // 데이터 값 시간 -> 일자
    // const SecondDate = () => {
    //     try {
    //         return data.slice(24,48).length === 0 ?
    //             "Not Found Date" :
    //             data[24].date;
    //     }
    //     catch {
    //         console.log("Error: SecondDate");
    //     }
    // };

    // 데이터 값 시간 -> 일자
    // const SecondData = () => {
    //     try {
    //         return data.slice(24,48).length === 0 ?
    //             blankData.map((row, index) => (
    //                 <tr key={index}>
    //                     <td className="tdData3">{row.loc_power}</td>
    //                     <td className="tdData4">{row.loc_total}</td>
    //                 </tr>
    //             )) :
    //             data.slice(24,48).map((row, index) => (
    //                 <tr key={index}>
    //                     <td className="tdData3">{row.loc_power}</td>
    //                     <td className="tdData4">{row.loc_total}</td>
    //                 </tr>
    //             ));
    //     }
    //     catch {
    //         console.log("Error: SecondData");
    //     }
    // };

    return (
        <Table striped bordered hover className="table">
            <div  className="tableContainer">
                {/* <div> */}
                    <thead>
                        {/* <tr> */}
                            {/* <th>날짜</th> */}
                            {/* <th colspan="2">{FirstDate()}</th> */}
                            {/* 데이터 값 시간 -> 일자 변동 */}
                            {/* <th colspan="2">{SecondDate()}</th> */}
                        {/* </tr> */}
                        
                        <tr>
                            <th>날짜</th>
                            <th>발전량(Mw)</th>
                            <th>누적발전량(Mw)</th>
                            {/* 데이터 값 시간 -> 일자 변동 */}
                            {/* <th>발전량(Mw)</th>
                            <th>누적발전량(Mw)</th> */}
                        </tr>
                    </thead>
                {/* </div> */}

                {/* <div> */}
                    <tbody className="scrollableBody">
                        <div>
                            {/* 첫 번째 날짜에 대한 데이터만 표시 */}
                            {TableData()}
                        </div>
                        
                        {/* 데이터 값 시간 -> 일자 변동 */}
                        {/* <div className="tableData"> */}
                            {/* 두 번째 날짜에 대한 데이터만 표시 */}
                            {/* {SecondData()} */}
                        {/* </div> */}
                    </tbody>
                {/* </div> */}
            </div>
        </Table>
    );
}
export default Tb;