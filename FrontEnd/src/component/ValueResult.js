import '../css/ValueResult.css';
import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ValueChart from './ValueChart';
import axios from 'axios';
import Moment from 'moment';

const ValueResult = () => {
    
    // ValueInput으로 돌아가서 다시 계산하기
    const btnClick = ()=>{
        window.location.href="/valueinput"
    }

    const location = useLocation();
    const nav = useNavigate();
    const formData = location.state && location.state.formData;
    const [chartData, setChartData] = useState(null);
    
    //지역
    const selectLocal = formData && formData.selectLocal;

    //패널
    const selectPanel = formData && formData.selectPanel;

    //면적
    const inputArea = formData && formData.inputArea;

    //시작일
    const [firstDate, setFirstDate] = useState(null);

    //종료일
    const [secondDate, setSecondDate] = useState(null);

    //제주의 smp
    const [jejuData, setJejuData] = useState(null);

    //육지의 smp
    const [landData, setlandData] = useState(null);

    //입력 기간의 예측 발전량
    const [powerData, setpowerData] = useState(null);

    //지역별 연도별 설비용량
    const [capacityData, setCapacityData] = useState(null);

    //패널선택 세부명칭
    const [panelLabel, setPanelLabel] = useState(null);

    //패널의 출력
    const [wat, setWat] = useState(null);

    //설치 할 수 있는 어레이의 개수
    const [amount, setAmount] = useState(null);

    //흑자 전환 시기
    const [changeCost, setChangeCost] = useState(null);

    //흑자 전환 시기의 예상 수익
    const [sum, setSum] = useState(null);

    //초기 투자 비용
    const [InitaialCost, setInitaialCost] = useState(null);
    

    let LocalLabel; // 지역선택 세부명칭
    let PanelLabel; //패널선택 세부명칭
    let totalMw;    // 설비용량
    let PanelSize;  // 패널 사이즈
    let PanelCost;  // 패널 개당 가격
    let PanelMw; // 패널의 와트 피크
    
    // url(/result 만을 입력해서 접속 못하게) null 값으로 접속 못하게 처리
    useEffect(()=>{
        if (!formData) {
            // formData가 없을 때 처리
            alert("입력페이지에서 수익계산을 위한 값들을 입력해주세요.")
            nav("/valueinput");
        }else {
            // formData가 존재하고 formData.startDate가 존재하는 경우에만 처리
            if (formData.startDate) {
                // formData.startDate와 formData.endDate를 Moment를 사용하여 변환하여 저장
                setFirstDate(Moment(formData.startDate).format("YYYY-MM-DD"));
                setSecondDate(Moment(formData.endDate).format("YYYY-MM-DD"));
            }
        }

        //패널 선택 세부명, 그에 따른 필요면적, 가격 및 Wat, Amount 설정
        if(selectPanel ==="fromKorea"){
            PanelLabel = '한국 HANWHA Q.PEAK DUO XL G11.7 (570Wp)';
            PanelSize = 67.81;
            PanelCost = 5274840;
            PanelMw = 570;

            //패널라벨 세부명칭 설정
            setPanelLabel(PanelLabel);
            //초기 투자 비용 계산식
            setInitaialCost(Math.floor(inputArea/PanelSize)*PanelCost);
            //패널의 출력 계산식
            setWat(PanelMw*0.217);
            //패널의 개수 계산식
            setAmount(Math.floor(inputArea/PanelSize));
            
            
        } else if(selectPanel==="fromUSA"){
            PanelLabel = '미국 AMERISOLAR AS-8M120-HC (580Wp)';
            PanelSize = 87.527;
            PanelCost = 5964750;
            PanelMw = 580;

            setPanelLabel(PanelLabel);
            setInitaialCost(Math.floor(inputArea/PanelSize)*PanelCost);
            setWat(PanelMw*0.2138);
            setAmount(Math.floor(inputArea/PanelSize));
        }
        else if(selectPanel==="fromChina"){
            PanelLabel = '중국 JINKO SOLAR PANEL 58W N-TYPE (580Wp)';
            PanelSize = 78.91;
            PanelCost = 2358900;
            PanelMw = 580;

            setPanelLabel(PanelLabel);
            setInitaialCost(Math.floor(inputArea/PanelSize)*PanelCost);
            setWat(PanelMw*0.2245);
            setAmount(Math.floor(inputArea/PanelSize));
        }

        //Wat와 Amount가 설정되면 데이터 호출 실행
        if( wat !== null && amount !== null) {
            const ResultCost = async () => {
                try {
                    const res = await axios.post(`http://10.10.21.64:8080/findcapacity/${selectLocal}`, null, {
                        params: {
                            amount: amount,
                            panel: wat,
                            startDate: Moment(formData.startDate).format("YYYY-MM-DD"),
                            endDate: Moment(formData.endDate).format("YYYY-MM-DD")
                        }
                    });
                    setChartData(res.data);

                    //예상 수익이 null값일 때 실행
                    if (sum === null) {
                        //Sum에 예상 수익을 설정하기 위한 변수 설정
                        let resultCost = 0;
                        //흑자 값들 중 첫 번째를 뽑아서 흑자 전환 시기로 설정하기 위한 공백 리스트 생성
                        let changeDate = new Array();

                        //예상 수익과 흑자 전환 시점부터의 날짜 삽입
                        for (let i = 0; i < res.data.length; i++) {
                            resultCost = resultCost + res.data[i].money;
                            if (resultCost > InitaialCost) {
                                changeDate.push(i);
                            };
                        };
                        setSum(resultCost);
                        setChangeCost(res.data[changeDate[0]].date);
                    };
                }
                catch {
                    console.log("Error: ValueResult-Result");
                }
            }
            ResultCost();
        }
    },[formData, nav, wat, amount, sum]);
    
    //지역선택 세부명, 설비 용량
    if(selectLocal === "서울"){
        LocalLabel = '서울특별시';
        totalMw = 13.23;
    }else if(selectLocal === "대전"){
        LocalLabel = '대전광역시';
        totalMw = 11.57;
    }else if(selectLocal === "대구"){
        LocalLabel = '대구광역시';
        totalMw = 39.61;
    }else if(selectLocal === "부산"){
        LocalLabel = '부산광역시';
        totalMw = 50.27;
    }else if(selectLocal === "광주"){
        LocalLabel = '광주광역시';
        totalMw = 38.32;
    }else if(selectLocal === "인천"){
        LocalLabel = '인천광역시';
        totalMw = 25.63;
    }else if(selectLocal === "울산"){
        LocalLabel = '울산광역시';
        totalMw = 13.25;
    }else if(selectLocal === "세종"){
        LocalLabel = '세종특별자치시';
        totalMw = 12.67;
    }else if(selectLocal === "경기"){
        LocalLabel = '경기도';
        totalMw = 115.44;
    }else if(selectLocal === "강원"){
        LocalLabel = '강원도';
        totalMw = 176.16;
    }else if(selectLocal === "충북"){
        LocalLabel = '충청북도';
        totalMw = 101.51;
    }else if(selectLocal === "충남"){
        LocalLabel = '충청남도';
        totalMw = 300.69;
    }else if(selectLocal === "경북"){
        LocalLabel = '경상북도';
        totalMw = 270.59;
    }else if(selectLocal === "경남"){
        LocalLabel = '경상남도';
        totalMw = 178.00;
    }else if(selectLocal === "전북"){
        LocalLabel = '전라북도';
        totalMw = 149.27;
    }else if(selectLocal === "전남"){
        LocalLabel = '전라남도';
        totalMw = 650.54;
    }else if(selectLocal === "제주"){
        LocalLabel = '제주특별자치도';
        totalMw = 132.46;
    }

    // 숫자 포맷팅 (초기 투자비용 출력시 원 단위(,) 출력)
    const formatNumber = (number) => {
        return new Intl.NumberFormat('ko-KR').format(number);
    };

    // formData를 이용하여 결과를 표시
    return (
        <article className='ValueResultPages'>
            <div className='ValueResultPagesIn'>
                <div id = "ValueResultTitle">
                    <span>발전 수익 계산 결과</span>
                </div>

                <section className='ValueResult'>

                    <div className='ValueChartBox'>
                        <ValueChart data = {chartData}/>
                    </div>
                
                    <table className='ValueResultTable'>
                        <h3 className='fontLine'>입력한 값</h3>
                        <br/>
                        <tr>
                            <td>설치 예정 지역 :</td>
                            <td> {LocalLabel}</td>
                            <td>선택한 모듈 :</td>
                            <td> {panelLabel}</td>
                        </tr>

                        <tr>
                            <td>설치 장소 면적 :</td>
                            <td> {inputArea}&nbsp;(m²)</td>
                            <td>선택한 기간 : </td>
                            <td> {firstDate} ~ {secondDate} </td>
                        </tr>
                    </table>

                    <table className='ResultCostTable'>
                        <h3 className='fontLine'>예상 결과</h3><br/>
                        <tr>
                            <td>설치 가능 개수 : </td>
                            <td> 어레이 <span className='fontColor'>{amount}&nbsp;</span>&nbsp;(개)</td>
                            <td>설치비용 :</td>
                            <td><span className='fontColor'>{formatNumber(InitaialCost)}&nbsp;</span>&nbsp;(원)</td>
                        </tr>

                        <tr>
                            <td>예상 수익 :</td>
                            <td><span className='fontColor'>{formatNumber(sum)}</span>&nbsp;&nbsp;(원)</td>
                        </tr>

                        <tr>
                            <td>흑자 전환 시기 :</td>
                            <td>{changeCost || "흑자 전환 불가"}</td>
                        </tr>
                    </table>
                        
                    <button onClick={btnClick} id='btnClickInput'>다시 계산하기</button>

                </section>
            </div>
        </article>
    );
};

export default ValueResult;
