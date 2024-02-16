import React, { useEffect, useState } from 'react';
import FaqList from './FaqList';
import '../css/FAQ.css';

function FAQ() {
    return(
        <article className='faq'>
            <section className='faqImg'>
                <div className='faqTitle'>
                    <h1 className='faqTitleMain active'>SLSL에 대해서 궁금하신가요?</h1>
                </div>

                <div className='faqTitle'>
                    <p className='faqTitleSub active'>자주 묻는 질문을 확인해보세요!</p>
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