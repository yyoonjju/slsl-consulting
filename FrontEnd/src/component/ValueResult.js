import '../css/ValueResult.css';
import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ValueChart from './ValueChart';
import axios from 'axios';
import Moment from 'moment';

const ValueResult = () => {
    const location = useLocation();
    const nav = useNavigate();
    const formData = location.state && location.state.formData;
    const [chartData, setChartData] = useState(null);
    console.log(formData);

    //지역
    const selectLocal = formData && formData.selectLocal;

    //패널
    const selectPanel = formData && formData.selectPanel;

    //면적
    const inputArea = formData && formData.inputArea;

    //시작일
    const startDate = formData && formData.startDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    
    //종료일
    const endDate = formData && formData.endDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    
    // const [firstDate, setFirstDate] = useState(Moment(formData.startDate).format("YYYY-MM-DD"));
    // const [secondDate, setSecondDate] = useState(Moment(formData.endDate).format("YYYY-MM-DD"));
    const [firstDate, setFirstDate] = useState(null);
    const [secondDate, setSecondDate] = useState(null);

    let LocalLabel; //지역선택 세부명칭
    let PanelLabel; //패널선택 세부명칭
    let totalMw;    // 설비용량 
    let PanelSize;  // 패널 사이즈 
    let PanelCost;  // 패널 개당 가격

        // url 통해서 null 값으로 접속 못하게 처리 
    useEffect(()=>{
        if (!formData) {
            // formData가 없을 때 처리
            alert("입력페이지에서 수익계산을 위한 값들을 입력해주세요.")
            nav("/ValueInput");
        }else {
            
            // formData가 존재하고 startDate가 존재하는 경우에만 처리
            if (formData.startDate) {
                // formData.startDate와 formData.endDate를 Moment를 사용하여 변환하여 저장
                setFirstDate(Moment(formData.startDate).format("YYYY-MM-DD"));
                setSecondDate(Moment(formData.endDate).format("YYYY-MM-DD"));
            }
        }

        const fetchData = async() => {
            try {
                const res = await axios.get(`http://10.10.21.64:8080/pay`, {
                    params: {
                        firstDate: Moment(formData.startDate).format("YYYY-MM-DD"),
                        secondDate: Moment(formData.endDate).format("YYYY-MM-DD")
                    }
                });
                setChartData(res.data);
            } 
            catch (error) {
                console.error('Error fetching chart data:', error);
            }
            };
            fetchData();
    },[formData, nav]);

    //지역선택 세부명, , 설비 용량
    if(selectLocal === "seoul"){
        LocalLabel = '서울특별시';
        totalMw = 13.23;
    }else if(selectLocal === "daejeon"){
        LocalLabel = '대전광역시';
        totalMw = 11.57;
    }else if(selectLocal === "daegu"){
        LocalLabel = '대구광역시';
        totalMw = 39.61;
    }else if(selectLocal === "busan"){
        LocalLabel = '부산광역시';
        totalMw = 50.27;
    }else if(selectLocal === "gwangju"){
        LocalLabel = '광주광역시';
        totalMw = 38.32;
    }else if(selectLocal === "incheon"){
        LocalLabel = '인천광역시';
        totalMw = 25.63;
    }else if(selectLocal === "ulsan"){
        LocalLabel = '울산광역시';
        totalMw = 13.25;
    }else if(selectLocal === "sejong"){
        LocalLabel = '세종특별자치시';
        totalMw = 12.67;
    }else if(selectLocal === "gyeonggi"){
        LocalLabel = '경기도';
        totalMw = 115.44;
    }else if(selectLocal === "gangwon"){
        LocalLabel = '강원도';
        totalMw = 176.16;
    }else if(selectLocal === "north-chungcheong"){
        LocalLabel = '충청북도';
        totalMw = 101.51;
    }else if(selectLocal === "south-chungcheong"){
        LocalLabel = '충청남도';
        totalMw = 300.69;
    }else if(selectLocal === "north-gyeongsang"){
        LocalLabel = '경상북도';
        totalMw = 270.59;
    }else if(selectLocal === "south-gyeongsang"){
        LocalLabel = '경상남도';
        totalMw = 178.00;
    }else if(selectLocal === "north-jeolla"){
        LocalLabel = '전라북도';
        totalMw = 149.27;
    }else if(selectLocal === "south-jeolla"){
        LocalLabel = '전라남도';
        totalMw = 650.54;
    }else if(selectLocal === "jeju"){
        LocalLabel = '제주특별자치도';
        totalMw = 132.46;
    }

    // 패널 선택 세부명, 그에따른 필요면적, 가격
    if(selectPanel ==="fromKorea"){
        PanelLabel = '국산 PEAKDVQ XL G11.7(570Wp)';
        PanelSize = 67.81;
        PanelCost = 5274840;
    } else if(selectPanel==="fromUSA"){
        PanelLabel = '미국산 AmeriSolar AS-qm120-HC(580Wp)';
        PanelSize = 87.527;
        PanelCost = 5964750;
    }



    //초기 투자 비용 
    const amount = Math.floor(inputArea/PanelSize);
    const InitaialCost = Math.floor(inputArea/PanelSize)*PanelCost;

    // 숫자 포맷팅 함수
    const formatNumber = (number) => {
        return new Intl.NumberFormat('ko-KR').format(number);
    };

    console.log(chartData);

    const btnClick = ()=>{
        window.location.href="/ValueInput"
    }
    // formData를 이용하여 결과를 표시
    return (
        <article className='ValueResultPages'>
            <div id = "ValueResultTitle">
                <h1>발전수익 계산</h1>
            </div>

            <section className='ValueResult'>

                <div>
                    <ValueChart data = {chartData}/>
                </div>

               
                <table className='ValueResultTable'>
                <h3 className='fontLine'>입력하신값</h3>
                <br/>
                    <tr>
                        <td>설치 예정 지역 :</td>
                        <td> {LocalLabel}</td>
                        <td>선택 하신 패널 :</td>
                        <td> {PanelLabel}</td>
                    </tr>

                    <tr>
                        <td>설치 장소 면적 :</td>
                        <td> {inputArea}&nbsp;(m²)</td>
                        <td>설치 예상 기간 : </td>
                        <td> {firstDate} ~ {secondDate} </td>
                    </tr>

                </table>

                <table className='ResultCostTable'>
                    <h3 className='fontLine'>예상 결과</h3><br/>
                    <tr>
                        <td>예상 판매 금액 :</td>
                        <td>(원)</td>
                        <td>흑자 전환 시기 :</td>
                        <td>{firstDate} (임시)</td>
                    </tr>

                    <tr>
                        <td>설치 가능 어레이 개수 : </td>
                        <td> <span className='fontColor'>{amount}&nbsp;</span>&nbsp;(개)</td>
                        <td>초기 투자 비용 :</td>
                        <td><span className='fontColor'>{formatNumber(InitaialCost)}&nbsp;</span>&nbsp;(원)</td>
                    </tr>
                </table>
                       
                {/* 다시계산하기 말고 다른걸로 바꿔도 됩니다. */}
                <button onClick={btnClick} id='btnClickInput'>다시 계산하기</button>

            </section>
        </article>
    );
};

export default ValueResult;
