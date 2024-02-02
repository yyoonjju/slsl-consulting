import '../static/css/ValueInput.css';

// import MapTest2 from "../components/MapTest2";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import MapsvgPath from './MapsvgPath';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const ValueInput = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // select 박스에서 옵션 누른 위치
    const[selectedLocation, setSelectedLocation] = useState('');

    const handleStartDateChange = (date) => {
      setStartDate(date);
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
    };

    const handleLocationChange = (e) =>{
        setSelectedLocation(e.target.value);
    };

    const ClickPath = (locationId)=>{
        // setInputLocation(locationId);
        console.log(locationId);
        
        // 지도에서 누른 위치 
        setSelectedLocation(locationId);
        if(locationId==='Mapsvg'){
            setSelectedLocation("");
        }
    };

    return (
        <article className= "ValueInputPages">
            <Header/>

            <div className= "ValueInput">
            
            <section>
                <MapsvgPath selectedLocation={selectedLocation} onClick={ClickPath}/>
                
            </section>
            
            <section id = "inputSection">
                <form id = "inputForm">
                    <table id = "inputFormTable">

                        <tr id = "selectLocation">
                            <td>지역 선택</td>
                            <td>
                                <select onChange={handleLocationChange} name = "selectLocal" id = "selectLocal" required>
                                    <option value=""disabled selected hidden>지역을 선택하세요.</option>
                                    <option value="seoul" selected={selectedLocation === 'seoul'}>서울특별시</option>
                                    <option value="daejeon" selected={selectedLocation === 'daejeon'}>대전광역시</option>
                                    <option value="daegu" selected={selectedLocation === 'daegu'}>대구광역시</option>
                                    <option value="busan" selected={selectedLocation === 'busan'}>부산광역시</option>
                                    <option value="gwangju" selected={selectedLocation === 'gwangju'}>광주광역시</option>
                                    <option value="incheon" selected={selectedLocation === 'incheon'}>인천광역시</option>
                                    <option value="ulsan" selected={selectedLocation === 'ulsan'}>울산광역시</option>
                                    <option value="sejong" selected={selectedLocation=== 'sejong'}>세종특별자치시</option>
                                    <option value="gyeonggi" selected={selectedLocation === 'gyeonggi'}>경기도</option>
                                    <option value="gangwon" selected={selectedLocation === 'gangwon'}>강원도</option>
                                    <option value="north-chungcheong" selected={selectedLocation === 'north-chungcheong'}>충청북도</option>
                                    <option value="south-chungcheong" selected={selectedLocation === 'south-chungcheong'}>충청남도</option>
                                    <option value="north-gyeongsang" selected={selectedLocation === 'north-gyeongsang'}>경상북도</option>
                                    <option value="south-gyeongsang" selected={selectedLocation=== 'south-gyeongsang'}>경상남도</option>
                                    <option value="north-jeolla" selected={selectedLocation === 'north-jeolla'}>전라북도</option>
                                    <option value="south-jeolla" selected={selectedLocation === 'south-jeolla'}>전라남도</option>
                                    <option value="jeju" selected={selectedLocation === 'jeju'}>제주특별자치도</option>
                                </select>
                            </td>
                        </tr>
                    

                        <tr id='selectPanel_Box'>
                            <td>패널 선택</td>
                            <td colSpan="3">
                                <select name = "selectPanel" id = "selectPanel" required>
                                    <option value=""disabled selected hidden>패널을 선택하세요.</option>
                                    <option value="fromKorea">국산 PEAKDVQ XL G11.7(570Wp)</option>
                                    <option value="fromUSA">미국산 AmeriSolar AS-qm120-HC(580Wp)</option>
                                </select>
                            </td>
                        </tr>
                 

                        <tr id='inputArea_Box'>
                            <td>면적</td>
                            <td colSpan="2">
                                <input  pattern="[0-9]+"  
                                        id = "inputArea" 
                                        required
                                        placeholder='단위를 입력하세요'/> 
                                <span>&nbsp;&nbsp;(m²)</span>
                            </td>
                
                        
                        </tr>
           

                        <tr id = "inputDate_Box">
                            <td>기간</td>
                            <td>
                                <DatePicker
                                selected={startDate}
                                onChange={handleStartDateChange}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="yyyyMMdd"
                                placeholderText='시작일자'
                                required/ 
                                >
                                
                            </td>
                            <td>
                                <span>&nbsp;~&nbsp;&nbsp;</span>
                            </td>
                            <td>
                                <DatePicker
                                    selected={endDate}
                                    onChange={handleEndDateChange}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    dateFormat="yyyyMMdd"
                                    placeholderText='종료일자'
                                    required/>
                            </td>
                        </tr>
                 
                        <tr >
                            <td></td><td></td>
                            <td colSpan="2">
                                <button id="right_inputBtn">계산하기</button>
                            </td>
                            
                        </tr>
                    </table>
                </form>
            </section>
        </div>

            <Footer/>
        </article>

    );
};

export default ValueInput;