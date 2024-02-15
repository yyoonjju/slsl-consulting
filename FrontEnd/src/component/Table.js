import React from 'react';
import Table from 'react-bootstrap/Table';
import '../css/Table.css';

function Tb({data}) {
    // Data를 가져오는 속도가 느릴 경우를 대비해서 공백 데이터 생성
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

    // 받아온 Data가 없으면 공백 데이터를 출력하고 있으면 해당 데이터를 Table형태에 맞춰서 출력
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

    return (
        <article>
            <Table striped bordered hover className="table">
                <section className="tableContainer">
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>발전량(Mw)</th>
                            <th>누적발전량(Mw)</th>
                        </tr>
                    </thead>

                    {/* TableData 주입 및 정해진 height에서 벗어나면 scroll을 통해서 전체 데이터 확인 가능 */}
                    <tbody className="scrollableBody">
                        <div>
                            {TableData()}
                        </div>
                    </tbody>
                </section>
            </Table>
        </article>
    );
}
export default Tb;