import React, { useEffect, useState, useRef } from 'react';
import '../css/Product.css'


function Product() {

    const spanRefs1 = useRef('');
    const spanRefs2 = useRef('');
    const spanRefs3 = useRef('');
    const [isActive, setActive] = useState('');

    useEffect(() => {

        const spans1 = document.querySelectorAll('.detailMove1 span');
        const spans2 = document.querySelectorAll('.detailMove2 span');
        const spans3 = document.querySelectorAll('.detailMove3 span');

        spanRefs1.current = Array.from(spans1);
        spanRefs2.current = Array.from(spans2);
        spanRefs3.current = Array.from(spans3);

        const spanCount1 = spanRefs1.current.length;
        const spanCount2 = spanRefs2.current.length;
        const spanCount3 = spanRefs2.current.length;

        let index1 = 0;
        let index2 = 0;
        let index3 = 0;

        const colorInterval1 = setInterval(() => {
            spanRefs1.current.forEach(span => {
                span.style.color = 'black';
            });

            for (let i = spanCount1 - 1; i >= spanCount1 - index1; i--) {
                spanRefs1.current[i].style.color = 'white';
            }

            index1 = (index1 + 1) % (spanCount1 + 1);

        }, 300);

        const colorInterval2 = setInterval(() => {
            spanRefs2.current.forEach(span => {
                span.style.color = 'black';
            });

            for (let i = spanCount2 - 1; i >= spanCount2 - index2; i--) {
                spanRefs2.current[i].style.color = 'white';
            }

            index2 = (index2 + 1) % (spanCount2 + 1);

        }, 300);

        const colorInterval3= setInterval(() => {
            spanRefs3.current.forEach(span => {
                span.style.color = 'black';
            });

            for (let i = spanCount3 - 1; i >= spanCount3 - index3; i--) {
                spanRefs3.current[i].style.color = 'white';
            }

            index3 = (index3 + 1) % (spanCount3 + 1);

        }, 300);

        return () => {
            clearInterval(colorInterval1);
            clearInterval(colorInterval2);
            clearInterval(colorInterval3);
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
                <img src='./images/Product.jpg' className='productPhoto'/>
                <div className='productTitle'>
                    <p className='productTitleType'>
                        <h1 className={`productTitle1 ${isActive ? '' : 'active'}`}>태양광 모듈을 설치할 계획인가요?</h1>
                    </p>
                    <p className='productTitleType'>
                        <span className={`productTitle2 ${isActive ? '' : 'active'}`}>SLSL 제품을 확인해 보세요!</span>
                    </p>
                </div>
            </section>
            <section className='productKind'>
                <section className='productExplain'>
                    <div className='Cover1'>
                        {/* coverBox는 cellName를 아래로 밀어내려고 만든 div임 */}
                        <div className='coverBox'/>
                        <h1 className='cellName'> <span className='cellNameSmall'>한국 HANWHA</span><br/>Q.PEAK DUO XL G11.7</h1>
                        <div className='detailMoveAll'>
                            <div className='detailMoveBox'/>
                            <div className="detailMove1">
                                <span className="leftMove1">{'<'}</span>
                                <span className="leftMove1">{'<'}</span>
                                <span className="leftMove1">{'<'}</span>
                            </div>
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
                        <h1 className='cellName'><span className='cellNameSmall'>미국 AMERISOLAR</span><br/>AS-8M120-HC</h1>
                        <div className='detailMoveAll'>
                            <div className='detailMoveBox'/>
                            <div className="detailMove2">
                                <span className="leftMove2">{'<'}</span>
                                <span className="leftMove2">{'<'}</span>
                                <span className="leftMove2">{'<'}</span>
                            </div>
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
                        <h1 className='cellName'><span className='cellNameSmall'>중국 JINKO</span><br/>SOLAR PANEL 58W N-TYPE</h1>
                        <div className='detailMoveAll'>
                            <div className='detailMoveBox'/>
                            <div className="detailMove3">
                                <span className="leftMove3">{'<'}</span>
                                <span className="leftMove3">{'<'}</span>
                                <span className="leftMove3">{'<'}</span>
                            </div>
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