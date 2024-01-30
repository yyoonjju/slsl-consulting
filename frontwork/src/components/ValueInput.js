import '../static/css/ValueInput.css';
import  MapSelect from "../components/MapSelect";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ValueInput = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    const handleStartDateChange = (date) => {
      setStartDate(date);
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
    };

    return (
        <div class = "ValueInput">
            <MapSelect/>

            <section id = "right_input">

                <table>
                    <tr id='selectPanel_Box'>
                        <td>패널 선택</td>
                        <td>
                            <select name = "selectPanel" id = "selectPanel" required>
                                <option value="fromKorea">국산</option>
                                <option value="fromChina">중국산</option>
                            </select>
                        </td>
                    </tr>
                    <br/>

                    <tr id='inputArea_Box'>
                        <td>면적</td>
                        <td>
                            <input pattern="[0-9]+"  id = "inputArea" required/> 
                        </td>
                        <td> <span>(단위)</span></td>
                    
                    </tr>
                    <br/>

                    <tr id = "inputDate_Box">
                        <td>기간</td>
                        <td>
                            <DatePicker
                            selected={startDate}
                            onChange={handleStartDateChange}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="yyyy/MM/dd"
                            placeholderText='시작일자'
                            required/>
                        </td>
                        <td> <span>&nbsp;&nbsp;&nbsp;~</span></td>
                        <td>
                            <DatePicker
                                selected={endDate}
                                onChange={handleEndDateChange}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                dateFormat="yyyy/MM/dd"
                                placeholderText='종료일자'
                                required/>
                        </td>
                    </tr>
                   
                </table>
                <button id="right_inputBtn">계산하기</button>
              
           
            </section>

            
        </div>
    )
}
export default ValueInput;