import '../css/ValueInput.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import MapsvgPath from './MapsvgPath';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const ValueInput = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // select 박스에서 옵션 누른 위치
    const[selectedLocation, setSelectedLocation] = useState('');

    const handleStartDateChange = (date) => {
      setStartDate(date);
      setValueData((prevData) => ({
        ...prevData,
        startDate:date,
    }));
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
      setValueData((prevData) => ({
        ...prevData,
        endDate:date,
    }));
    };

    const handleLocationChange = (e) =>{
        setSelectedLocation(e.target.value);
        setValueData((prevData) => ({
            ...prevData,
            selectLocal:e.target.value,
        }));
    };

    const ClickPath = (locationId)=>{
        // setInputLocation(locationId);
        console.log(locationId);
        
        // 지도에서 누른 위치 
        setSelectedLocation(locationId);
        setValueData((prevData) => ({
            ...prevData,
            selectLocal:locationId,
        }));
        if(locationId==='Mapsvg'){
            setSelectedLocation("");
        }
    };

    // 폼데이터로 Result에 넘길 값 
    const [ValueData, setValueData] = useState({
        selectLocal:'',
        selectPanel:'',
        inputArea:'',
        startDate:'',
        endDate:'',
    });

    //입력값 변경 (날짜, 지역은 따로 받음)
    const ClickChange = (e) => {
        console.log(e.target);

        setValueData((prevData) => ({
            ...prevData,
            [e.target.name] : e.target.value,
        }));
    };

    const navigate =  useNavigate();
    // 폼 제출 핸들러
    const ClickSubmit = (e) =>{
        e.preventDefault();
        console.log('submit ValueData', ValueData);

        // ValueResult 컴포넌트로 폼 데이터를 전달
          navigate('/ValueResult',{state:{formData:ValueData}});
    };

    return (
        <article className= "ValueInputPages">
            <div id = "ValueInputTitle">
                <h1>발전수익 계산</h1>
            </div>

            <div className= "ValueInput">
            
            <section>
                <MapsvgPath selectedLocation={selectedLocation} onClick={ClickPath}/>
            </section>
            
            <section id = "inputSection">
                <form id = "inputForm" onSubmit={ClickSubmit}>
                    <table id = "inputFormTable">

                        <tr id = "selectLocation">
                            <td>지역 선택</td>
                            <td>
                                <select onChange={handleLocationChange} 
                                        name = "selectLocal" 
                                        id = "selectLocal" 
                                        required
                                        onChangeRaw={(e)=>{
                                            handleLocationChange(e);
                                            ClickChange(e);
                                        }}>
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
                            <td>모듈 선택</td>
                            <td colSpan="3">
                                <select name = "selectPanel" id = "selectPanel" required onChange={ClickChange}>
                                    <option value=""disabled selected hidden>모듈을 선택하세요.</option>
                                    <option value="fromKorea">국산 PEAKDVQ XL G11.7(570Wp)</option>
                                    <option value="fromUSA">미국산 AmeriSolar AS-qm120-HC(580Wp)</option>
                                </select>
                            </td>
                        </tr>
                 

                        <tr id='inputArea_Box'>
                            <td>면적(m²)</td>
                            <td colSpan="2">
                                <input  pattern="[0-9]+"  
                                        id = "inputArea"
                                        name = "inputArea"
                                        required
                                        placeholder='단위를 입력하세요'
                                        onChange={ClickChange}/> 
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
                                required
                                name = 'startDate'
                                />
                                
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
                                    required
                                    name = 'endDate'
                                    />
                            </td>
                        </tr>
                 
                        <tr >
                            <td></td><td></td>
                            <td colSpan="2">
                                <button id="right_inputBtn" type='submit'>계산하기</button>
                            </td>
                            
                        </tr>
                    </table>
                </form>
            </section>
        </div>
        </article>

    );
};

export default ValueInput;