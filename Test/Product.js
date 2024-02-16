import React, { useEffect, useState } from 'react';
import '../css/Product.css'


function Product() {

    const [isActive, setActive] = useState('');

    useEffect(() => {

        const spans1 = document.querySelectorAll('.detailmove1 span');
        const spans2 = document.querySelectorAll('.detailmove2 span');
        const spans3 = document.querySelectorAll('.detailmove3 span');
        const spanCount = Math.max(spans1.length, spans2.length, spans3.length);
        
        let index = 0;
        let whiteCount = 0;

        // 3개가 다 채워지면 다 검정색

        const colorInterval = setInterval(() => {
            index = (index === spanCount) ? 1 : index + 1;

            spans1.forEach((span, i) => {
                const colorIndex = (index + i - 1) % spanCount + 1;
                span.style.color = colorIndex <= whiteCount ? 'white' : '';
            });

            spans2.forEach((span, i) => {
                const colorIndex = (index + i - 1) % spanCount + 1;
                span.style.color = colorIndex <= whiteCount ? 'white' : '';
            });

            spans3.forEach((span, i) => {
                const colorIndex = (index + i - 1) % spanCount + 1;
                span.style.color = colorIndex <= whiteCount ? 'white' : '';
            });

            if (whiteCount <3) {
                whiteCount ++;
            } else{
                whiteCount = 1;
            }

        }, 400);

        

        return () => {
            clearInterval(colorInterval);
            setActive(true);
        };  
        
    }, []);


    const koreaClick = () => {
        sessionStorage.setItem('Country', 'korea');
        window.location.href="/valueinput";
    };

    const usaClick = () => {
        sessionStorage.setItem('Country', 'usa');
        window.location.href="/valueinput";
    };

    const chinaClick = () => {
        sessionStorage.setItem('Country', 'china');
        window.location.href="/valueinput";
    };

    return(
        <article className='productIntroduce'>
            <section className='productTop'>
                <img src='./images/Photo5.jpg' className='productPhoto'/>
                <div className='productTitle'>
                    <p className='productTitleType'>
                        <h1 className={`productTitle1 ${isActive ? '' : 'active'}`}>태양광 모듈 설치하려 하시나요?</h1>
                    </p>
                    <p className='productTitleType'>
                        <span className={`productTitle2 ${isActive ? '' : 'active'}`}>SLSL 제품을 확인해보세요!</span>
                    </p>
                </div>
            </section>
            <section className='productKind'>
                <section className='productExplain'>
                    <div className='Cover1'>
                        {/* coverBox는 cellName를 아래로 밀어내려고 만든 div임 */}
                        <div className='coverBox'/>
                        <h1 className='cellName'> 한국 HANWHA<br/>Q.PEAK DUO XL G11.7</h1>
                        <div className="detailmove1">
                            <span>{'<'}</span>
                            <span>{'<'}</span>
                            <span>{'<'}</span>
                        </div>
                    </div>
                    <div className='Cover2'>
                        {/* 아래 div는 koreaExplain, koreaDetail가 가운데 위치에 있도록 Cover2에 center를 지정해
                            p태그도 가운데에 오지만 가운데 정렬이 되기에 p태그의 왼쪽 정렬을 위해 div로 한 번 더 감쌈. 
                            그 역할만 하기에 따로 className를 지정하지 않음 */}
                        <div>
                            <h3 className="cellNameIn">Q.PEAK DUO XL G11.7</h3><br/>
                            <div className='cellImgBox'>
                                <img className='cellImg' src='./images/koreacell.png'/>
                            </div>


                            <div className='DetailBox'>
                                <span className="cellDetail">출력</span>
                                <p className="cellExplain">&nbsp;: 570Wp</p>
                            </div>
                            <div className='DetailBox'>
                                <span className="cellDetail">최대 효율</span>
                                <p className="cellExplain">&nbsp;: 21.7%</p>
                            </div>
                            <div className='DetailBox'>
                                <span className="cellDetail">크기</span>
                                <p className="cellExplain">(mm) : 2416 * 1134 * 35 </p>
                            </div>
                            <div className='DetailBox'>
                                <span className="cellDetail">설치비용</span>
                                <p className="cellExplain">&nbsp;: 527만 4840원</p>
                            </div>

                        </div>

                        <button className='cellButton'  onClick={koreaClick}>예상 발전수익과 설치비용 계산하기</button>
                    </div>
                </section>


                <section className='productExplain'>
                    <div className='Cover1'>
                        <div className='coverBox'/>
                        <h1 className='cellName'>미국 AMERISOLAR<br/>AS-8M120-HC</h1>
                        <div className="detailmove2">
                            <span>{'<'}</span>
                            <span>{'<'}</span>
                            <span>{'<'}</span>
                        </div>
                    </div>
                    <div className='Cover2'>
                        <div>
                            <h3 className="cellNameIn">AS-8M120-HC</h3><br/>

                            <div className='cellImgBox'>
                                <img className='cellImg' src='./images/usacell.png'/>
                            </div>

                            <div className='DetailBox'>
                                <span className="cellDetail">출력</span>
                                <p className="cellExplain">&nbsp;: 580Wp</p>
                            </div>
                            <div className='DetailBox'>
                                <span className="cellDetail">최대 효율</span>
                                <p className="cellExplain">&nbsp;: 21.38%</p>
                            </div>
                            <div className='DetailBox'>
                                <span className="cellDetail">크기</span>
                                <p className="cellExplain">(mm) : 2172 * 1303 * 35 </p>
                            </div>
                            <div className='DetailBox'>
                                <span className="cellDetail">설치비용</span>
                                <p className="cellExplain">&nbsp;: 596만 4750원</p>
                            </div>
                        </div>

                        <button className='cellButton'  onClick={usaClick}>예상 발전수익과 설치비용 계산하기</button>
                    </div>
                </section>


                <section className='productExplain'>
                    <div className='Cover1'>
                        <div className='coverBox'/>
                        <h1 className='cellName'>중국 JINKO<br/>SOLAR PANEL 58W N-TYPE</h1>
                        <div className="detailmove3">
                            <span>{'<'}</span>
                            <span>{'<'}</span>
                            <span>{'<'}</span>
                        </div>
                    </div>
                    <div className='Cover2'>
                        <div>
                            <h3 className="cellNameIn">SOLAR PANEL 58W N-TYPE</h3><br/>

                            <div className='cellImgBox'>
                                <img className='cellImg' src='./images/chinacell.png'/>
                            </div>

                            <div className='DetailBox'>
                                <span className="cellDetail">출력</span>
                                <p className="cellExplain">&nbsp;: 580Wp</p>
                            </div>
                            <div className='DetailBox'>
                                <span className="cellDetail">최대 효율</span>
                                <p className="cellExplain">&nbsp;: 22.45%</p>
                            </div>
                            <div className='DetailBox'>
                                <span className="cellDetail">크기</span>
                                <p className="cellExplain">(mm) : 2416 * 1134 * 35 </p>
                            </div>
                            <div className='DetailBox'>
                                <span className="cellDetail">설치비용</span>
                                <p className="cellExplain">&nbsp;: 235만 8900원</p>
                            </div>
                        </div>

                        <button className='cellButton' onClick={chinaClick}>예상 발전수익과 설치비용 계산하기</button>
                    </div>
                </section>
            </section>
        </article>


    )
}

export default Product;