import React from 'react';
import Table from 'react-bootstrap/Table';
import '../static/css/Table.css';
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
    return (
        <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>시간</th>
            <th>발전량(Mw)</th>
            <th>누적발전량(Mw)</th>
          </tr>
        </thead>
        <tbody>
            {(data === null ? blankData : data).map((row, index) => (
                <tr key={index}>
                    <td>{row.time}</td>
                    <td>{row.loc_power}</td>
                    <td>{row.loc_total}</td>
                </tr>
            ))}
        </tbody>
      </Table>
    );
}
export default Tb;