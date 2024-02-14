import React from 'react';

function Test() {
    return(
        <article>
            <section className='productExplain'>
                <section className='Cover1'>
                    <h1 className='koreaCellName'>한화 Q.PEAK DUO XL G11.7</h1>
                </section>
                <section className='Cover2'>
                    {/* 아래 div는 koreaExplain, koreaDetail가 가운데 위치에 있도록 Cover2에 center를 지정해
                        p태그도 가운데 정렬이 되지만 p태그의 왼쪽 정렬을 위해 div로 한 번 더 감쌈. 그래서 따로 className를 지정하지 않음 */}
                    <div>
                        <h3 className="koreaCellNameIn">한화 Q.PEAK DUO XL G11.7</h3><br/>

                        <img className='koreaCellImg' src='./images/koreacell.png'/>

                        <p className="koreaExplain"><span className="koreaDetail">출력</span> : 570Wp</p><br/>
                        <p className="koreaExplain"><span className="koreaDetail">최대 효율</span> : 21.7%</p><br/>
                        <p className="koreaExplain"><span className="koreaDetail">크기</span>(mm) : 2416 * 1134 * 35 </p><br/>
                        <p className="koreaExplain"><span className="koreaDetail">최소 설치 비용</span> : 527만 4840원</p>


                    </div>
                </section>
               
                {/* 미국 가격 */}
                {/* <p><span className="usaExplain">최소 설치 비용</span> : 596만 4750원</p> */}
            </section>
        </article>


    )
}

export default Test;