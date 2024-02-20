import React from 'react';
import '../css/ValueInfo.css';
const ValueInfo=()=>{
    
    return(
        <article className='ValueInfo'>
            {/* 입력창 입력방법 설명 */}
            <section className='howtoInput_head'>
                <div className='howtoInput_title'>
                    <h2>태양광 에너지 발전수익 및 설치비용을 예측하는 방법</h2>
                    <div>모듈에 따른 <span>태양광 에너지 발전수익</span>과 <span>설치 예상 비용</span>을 보려면 아래의 간단한 단계를 따라 해 보세요.</div>
                </div>
                
                <ol className='howtoInput_ol'>
                    <li>
                        <div>지도에서 설치할 지역을 선택하거나 지역 선택 박스에서 설치할 지역을 선택해 주세요.</div>
                    </li>

                    <li>
                        <div>
                           모듈 선택 박스에서 설치할 모듈을 선택해 주세요.
                        </div>
                    </li>

                    <div className='howtoInput_text'>

                    한국 제품은 12개의 모듈로 구성된 어레이를 미국, 중국 제품은 15개의 모듈로 구성된 어레이를 기본값으로 제공합니다.
                    </div>

                    <li>
                        <div>
                            설치할 장소의 면적을 소수점을 제외하고 입력해 주세요.
                        </div>
                    </li>

                    <div className='howtoInput_text'>                   
                        <li>→ 한국 모듈 제품의 최소 면적 (68m²)</li>
                        <li>→ 미국 모듈 제품의 최소 면적 (88m²)</li>
                        <li>→ 중국 모듈 제품의 최소 면적 (79m²)</li>
                    </div>

                    <li><div>기간 선택 박스에서 완공 후 조회하고자 하는 시작 일자와 종료 일자를 선택해 주세요.</div></li>

                    <li><div>계산하기 버튼을 누르면 결과를 확인할 수 있습니다.</div></li>
                </ol>
            </section>

            {/* 어레이 설명 */}
            <section className='arrayInfoFooter'>
                <div id = "arrayTitle">
                    <h2>여기서 <span>'어레이'</span>란?</h2>
                    <div>어레이란 셀이 모여 만들어진 하나의 모듈을 여러 장 연결한 태양광 설비를 말합니다.</div>
                </div>

                <div id='arrayInfobox'>
                    <div className='arrayImage'>
                        <picture>
                            <div id="arrayImg"/>
                        </picture>
                    </div>

                    <div className='arrayInfo'>
                        
                        <ul>
                            <li>한국 모듈 제품은 <span>12</span>개가 <span>1</span>개의 <span>어레이</span></li>
                            <li>미국 모듈 제품은 <span>15</span>개가 <span>1</span>개의 <span>어레이</span></li>
                            <li>중국 모듈 제품은 <span>15</span>개가 <span>1</span>개의 <span>어레이</span></li>
                            <li>하나의 세트로 이해해주세요.</li>
                        </ul>

                        <button id ='arrayInfoBtn'onClick={()=>window.location.href="/product"}>
                            SLSL 제품 정보 보러가기
                        </button>
                    </div>
                </div>
            </section>
        </article>

    );
};

export default ValueInfo;
