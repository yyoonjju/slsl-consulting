import React from 'react';
import '../css/ValueInfo.css';
const ValueInfo=()=>{
    
    return(
        <article className='ValueInfo'>
            {/* 입력창 입력방법 설명 */}
            <section className='howtoInput_head'>
                <div className='howtoInput_title'>
                    <h2>태양광 에너지 발전수익 및 모듈 비용을 예측하는 방법</h2>
                    <div>모듈에 따른 <span>태양광 에너지 발전수익</span>과 <span>예상비용</span>을 보려면 아래의 간단한 단계를 따라해보세요.</div>
                </div>
                
                <ol className='howtoInput_ol'>
                    <li>
                        <div>지도에서 설치하실 지역을 선택하시거나 지역 선택 박스에서 설치하실 지역을 선택해주세요.</div>
                    </li>

                    <li>
                        <div>
                           모듈 선택 박스에서 한국 모듈제품과 미국 모듈제품 중 선택해주세요.
                        </div>
                    </li>

                    <div className='howtoInput_text'>
                        SLSL은 한국 모듈제품은 12개로 구성된 어레이를 미국 모듈제품은 15개로 구성된 어레이를 기본값으로 제공합니다.
                    </div>

                    <li>
                        <div>
                            설치하실 장소의 면적을 입력해주세요.
                        </div>
                    </li>

                    <div className='howtoInput_text'>                   
                        <li>→ 한국 모듈 제품의 최소 면적 (67.81m²)</li>
                        <li>→ 미국 모듈 제품의 최소 면적 (87.527m²)</li>
                    </div>

                    <li><div>기간선택 박스에서 완공 후 조회하고자 하는 시작일자와 종료일자를 선택해주세요.</div></li>

                    <li><div>계산하기 버튼을 누르면 결과를 확인하실 수 있습니다.</div></li>
                </ol>
            </section>

            {/* 어레이 설명 */}
            <section className='arrayInfoFooter'>
                <div id = "arrayTitle">
                    <h2>여기서 <span>'어레이'</span>란?</h2>
                    <div>어레이란 태양전지가 모여 만들어진 하나의 판(모듈)을 여러장 연결한 태양광 설비를 말합니다.</div>
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
                            <li>하나의 세트로 이해해주세요.</li>
                        </ul>

                        <button id ='arrayInfoBtn'onClick={()=>window.open("/product")}>
                            SLSL 제품정보 보러가기
                        </button>
                    </div>
                </div>
            </section>
        </article>

    );
};

export default ValueInfo;
