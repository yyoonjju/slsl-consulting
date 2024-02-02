import React, {useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import '../css/Table.css';
// bootstrap의 고유 css인데 막 특별한 기능은 없으니까 쓸거면 쓰고
// import 'bootstrap/dist/css/bootstrap.min.css';

function Tb({data}) {
    const blankData = [
        {
            "time": 0,
            "loc_power": 0,
            "loc_total": 0
        }
    ];

    useEffect(() => {
        
    },[data]);

    return (
        <Table striped bordered hover className="table">
            <div className="test">
                <div>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th colspan="2">firstDate</th>
                        </tr>
                        <tr>
                            <th>시간</th>
                            <th>발전량(Mw)</th>
                            <th>누적발전량(Mw)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {((data === null || data === undefined) ? blankData : data.slice(0,24)).map((row, index) => (
                            <tr key={index}>
                                <td className="td-test">{row.time}</td>
                                <td>{row.loc_power}</td>
                                <td>{row.loc_total}</td>
                            </tr>
                        ))}
                    </tbody>
                </div>

                <div>
                    <thead>
                        <tr>
                            <th colspan="2">secondDate</th>
                        </tr>
                        <tr>
                            <th>발전량(Mw)</th>
                            <th>누적발전량(Mw)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {((data === null || data === undefined) ? blankData : data.slice(24,48)).map((row, index) => (
                            <tr key={index}>
                                <td>{row.loc_power}</td>
                                <td>{row.loc_total}</td>
                            </tr>
                        ))}
                    </tbody>
                </div>
            </div>
        </Table>
    );
}
export default Tb;