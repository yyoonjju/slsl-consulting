import React, { useEffect, useState } from 'react';

function Product() {

    const [QnAUP , setQnAUP] = useState(false);
    const [FaqUP , setFaqUP] = useState(false);

    useEffect(() => {
        setQnAUP(true);
        setFaqUP(true);
    })

    return(
        <div className='QnA'>
            <div className='QnAPhoto'>
                <div className={`QnAPhotoBox ${QnAUP ? 'active' : ''}`}>
                    <div className='QnATitle'>
                        <h1>태양광 시작하려니<br/>막막하신가요?</h1>
                        <p>SLSL에서 시작하면 쉬워져요!</p><br/><br/>
                    </div>
                    <div className='imgCover'>
                        <div className='QnAImg'/>
                    </div>
                </div>
            </div>
            <div className="faq">
                <div className={`faqText ${FaqUP ? 'active' : ''}`}>
                    <div className='text'>
                        <h1 className='FaqQ'>Q</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <strong>정부 보조금을 받으면<br/>사업비가 얼마나 축소되나요?</strong>
                    </div><br/>
                    보조금이 없을 때와 비교하여 투자비 회수기간이 약 5년 축소될 수 있어요.<br/>
                    (정부 지원금 + 지자체 보조금 = 설치비 최대 85% 지원 가능)<br/><br/><br/>
                    <div className='text'>
                        <h1 className='FaqQ'>Q</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <strong>발전사업으로 RE100 실적도<br/>인정받을 수 있을까요?</strong>
                    </div><br/>
                    네. 'RE100 실적 인증'과 '온실가스 감축 실적 인증' 모두 가능해요.<br/> 다만 수익은 약 40% 감소할 수 있어요.<br/><br/><br/>
                    <div className='text'>
                        <h1 className='FaqQ'>Q</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <strong>설치는 지붕이나 주차장 등<br/>다양한 곳에 하고 싶은데 다 할 수 있나요?</strong>
                    </div><br/>
                    공장지붕, 건물지붕, 축사지붕, 주차장 등 모든 곳에 설치 가능하니<br/> 걱정하지 않으셔도 됩니다.<br/><br/><br/>
                    <div className='text'>
                        <h1 className='FaqQ'>Q</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <strong>태양광 패널의 설치 각도나<br/>방향은 어떻게 해야하나요?</strong>
                    </div><br/>
                    한국에서 설치 경사각도는 태양광선과 90도로 하고 방향은 설치하고자<br/> 하는 위치에서 나침반을 사용하여 정남향 방향으로 설치하면 됩니다.
                </div>
            </div>
        </div>
    )
}

export default Product;