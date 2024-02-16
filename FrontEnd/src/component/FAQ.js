import React, { useEffect, useState } from 'react';
import FaqList from './FaqList';
import '../css/FAQ.css';

function FAQ() {

    const [qnaUP , setQnAUP] = useState(false);
    const [faqUP , setFaqUP] = useState(false);

    useEffect(() => {
        setQnAUP(true);
        setFaqUP(true);
    })

    return(
        <article className='QnA'>
            <div className='qnaIn'>
                <h1 className='faqTitle'>FAQ</h1>
            <div className='qnabox'>
                <div className='QnAPhoto'>
                    <div className={`QnAPhotoBox ${qnaUP ? 'active' : ''}`}>
                        
                        <div className='QnAImg'>
                            <div className='QnATitle'>
                                <h1>태양광 시작하려니 막막하신가요?</h1>
                                <p>SLSL에서 시작하면 쉬워져요!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq">
                    <div className={`faqText ${faqUP ? 'active' : ''}`}>
                        {/* FaqItem, FaqList에서 받은 값을 아래 코드에 구현 */}
                        <FaqList/>
                    </div>
                </div>
            </div>
            </div>
        </article>
    )
}

export default FAQ;