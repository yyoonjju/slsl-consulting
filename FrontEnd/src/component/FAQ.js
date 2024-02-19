import React, { useEffect, useState } from 'react';
import FaqList from './FaqList';
import '../css/FAQ.css';

function FAQ() {
    return(
        <article className='faq'>
            <section className='faqImg'>
                <img className='faqImgTop' src='./images/FAQ.jpg'/>
                <div className='faqTop'>
                <div className='faqTitle'>
                    <h1 className='faqTitleMain active'>SLSL에 대해서 궁금한가요?</h1>
                </div>

                <div className='faqTitle'>
                    <p className='faqTitleSub active'>자주 묻는 질문을 확인해 보세요!</p>
                </div>
                </div>
            </section>

            <section className="faqList">
                {/* FAQ 내용 */}
                <FaqList/>
            </section>
        </article>
    )
}

export default FAQ;