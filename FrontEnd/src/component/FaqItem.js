import React from "react";

function FaqItem({question, answer}) {


    return(
        <div className='text'>
            <div className='questionList'>
                <div className="questionListCover">
                    <h1 className='faqQ'>Q</h1>
                    <strong className='faqQuestion'>{question}</strong>
                </div>
            </div>
            <div className='answerList'>
                <img src="./images/AnswerIcon.png"/>
                <p className='faqAnswer'>{answer}</p>
            </div>
        </div>
    )
}

export default FaqItem;