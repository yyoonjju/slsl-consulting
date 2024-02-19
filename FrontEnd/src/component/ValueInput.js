import '../css/ValueInput.css';
import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import MapsvgPath from './MapsvgPath';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import ValueInfo from './ValueInfo';

const ValueInput = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // select 박스에서 옵션 누른 위치
    const[selectedLocation, setSelectedLocation] = useState('');

    //시작 일자
    const handleStartDateChange = (date) => {
      setStartDate(date);

      setValueData((prevData) => ({
        ...prevData,
        startDate:date,
    }));

      if (date > endDate && endDate !== null) {
        setEndDate(null);
        alert("종료 일자가 시작 일자보다 앞에 올 수 없습니다.");
      };
    };
  
    //종료 일자
    const handleEndDateChange = (date) => {
      setEndDate(date);

      setValueData((prevData) => ({
        ...prevData,
        endDate:date,
    }));
    };

    // input 태그에서 지역 선택했을때
    const handleLocationChange = (e) =>{
        setSelectedLocation(e.target.value);

        setValueData((prevData) => ({
            ...prevData,
            selectLocal:e.target.value,
        }));
    };

    // 지도에서 지역 눌렀을때
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
       
        setValueData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    
    
    // selectPanel 값에 따라 면적의 최소값을 반환하는 함수
    const getMinArea = (value) => {
        const panelInfo = {
            fromKorea: 68,
            fromUSA: 88,
            fromChina: 79,
        };

        return panelInfo[ValueData.selectPanel] || 0;
    };

    // selectPanel 값에 따라 패널의 이름을 반환하는 함수
    const getAreaName = (value) => {
        const panelInfo = {
            fromKorea: "한국 Q.PEAK DUO XL G11.7(570Wp)",
            fromUSA: "미국 AmeriSolar AS-qm120-HC(580Wp)",
            fromChina: "중국 SOLAR PANEL JINKO 58W N-TYPE(580Wp)",
        };

        return panelInfo[ValueData.selectPanel] || 0;
    };
    
    const handleAreaBlur = (e) => {

        const MinAreaValue = getMinArea();
        const ThisArea = ValueData.inputArea;
        const ThisPanel = getAreaName();

        if (e.target.name === 'inputArea') {
        
            //입력된 면적이  소수점, 문자를 입력 못하게
            if (!/^\d+$/.test(e.target.value)) {
                e.target.value = '';
                alert("면적은 문자, 특수문자,  소수점을 제외한\n숫자만 입력이 가능합니다.");
                return;
            }
            // 면적에 입력된 숫자가 선택된 모듈보다 작은 크기의 면적일때
            if(ThisArea < MinAreaValue){
                alert(`${ThisPanel} 제품의 면적은
${MinAreaValue}보다 큰 숫자여야 합니다.`);
                return;
            }
        }
    };

    // DatePicker의 input박스 수정
    const CustomInputStart = forwardRef(({value, onClick}, ref) => (
        <button type="button" className="customInput" onClick={onClick} ref={ref}>
            {value || "시작 일자"}
        </button>
    ));

    const CustomInputEnd = forwardRef(({value, onClick}, ref) => (
        <button type="button" className="customInput" onClick={onClick} ref={ref}>
            {value || "종료 일자"}
        </button>
    ));

    const navigate =  useNavigate();
    // 폼 제출 핸들러
    const ClickSubmit = (e) =>{
        e.preventDefault();
        console.log('submit ValueData', ValueData);

        // ValueResult 컴포넌트로 폼 데이터를 전달
        navigate('/valueresult',{state:{formData:ValueData}});
    };

    return (
        
        <article className= "ValueInput">

            <section className='ValueInputPagesIn'>
            
                <div id = "ValueInputTitle">
                    <span>발전수익 계산</span>
                </div>

                <div className= "ValueInputForm">
                
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
                                            >
                                            <option value=""disabled selected hidden>지역을 선택하세요.</option>
                                            <option value="서울" selected={selectedLocation === '서울'}>서울특별시</option>
                                            <option value="대전" selected={selectedLocation === '대전'}>대전광역시</option>
                                            <option value="대구" selected={selectedLocation === '대구'}>대구광역시</option>
                                            <option value="부산" selected={selectedLocation === '부산'}>부산광역시</option>
                                            <option value="광주" selected={selectedLocation === '광주'}>광주광역시</option>
                                            <option value="인천" selected={selectedLocation === '인천'}>인천광역시</option>
                                            <option value="울산" selected={selectedLocation === '울산'}>울산광역시</option>
                                            <option value="세종" selected={selectedLocation=== '세종'}>세종특별자치시</option>
                                            <option value="경기" selected={selectedLocation === '경기'}>경기도</option>
                                            <option value="강원" selected={selectedLocation === '강원'}>강원도</option>
                                            <option value="충북" selected={selectedLocation === '충북'}>충청북도</option>
                                            <option value="충남" selected={selectedLocation === '충남'}>충청남도</option>
                                            <option value="경북" selected={selectedLocation === '경북'}>경상북도</option>
                                            <option value="경남" selected={selectedLocation=== '경남'}>경상남도</option>
                                            <option value="전북" selected={selectedLocation === '전북'}>전라북도</option>
                                            <option value="전남" selected={selectedLocation === '전남'}>전라남도</option>
                                            <option value="제주" selected={selectedLocation === '제주'}>제주특별자치도</option>
                                        </select>
                                    </td>
                                </tr>
                            
                                <tr id='selectPanel_Box'>
                                    <td>모듈 선택</td>
                                    <td colSpan="3">
                                        <select name = "selectPanel" id = "selectPanel" required onChange={ClickChange}>
                                            <option value=""disabled selected hidden>모듈을 선택하세요.</option>
                                            <option value="fromKorea">한국 Q.PEAK DUO XL G11.7(570Wp)</option>
                                            <option value="fromUSA">미국 AmeriSolar AS-qm120-HC(580Wp)</option>
                                            <option value="fromChina">중국 SOLAR PANEL JINKO 58W N-TYPE(580Wp)</option>
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
                                                placeholder='면적을 입력하세요'
                                                onChange={ClickChange}
                                                onBlur={handleAreaBlur}/>
                                    </td>
                                </tr>

                                <tr id = "inputDate_Box">
                                    <td>기간</td>
                                    <td>
                                        <DatePicker
                                        selected={startDate}
                                        onChange={handleStartDateChange}
                                        selectsStart
                                        customInput={<CustomInputStart/>}
                                        showYearDropdown
                                        showMonthDropdown
                                        dropdownMode="select"
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={new Date('2020-01-01')}
                                        maxDate={new Date('2033-12-31')}
                                        dateFormat="yyyyMMdd"
                                        placeholderText='시작 일자'
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
                                        customInput={<CustomInputEnd/>}
                                        showYearDropdown
                                        showMonthDropdown
                                        dropdownMode="select"
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        maxDate={new Date('2033-12-31')}
                                        dateFormat="yyyyMMdd"
                                        placeholderText='종료 일자'
                                        required
                                        name = 'endDate'
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td></td><td></td>
                                    <td colSpan="2">
                                        <button id="right_inputBtn" type='submit'>계산하기</button>
                                    </td>
                                </tr>
                            </table>
                        </form>

                    </section>       
                </div>

                <ValueInfo/>
            </section>
        </article>

    );
};

export default ValueInput;