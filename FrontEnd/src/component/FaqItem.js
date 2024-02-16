import React from "react";

function FaqItem({question, answer}) {


    return(
        <section className='qna'>
            <div className='questionList'>
                <div className="questionListCover">
                    <h1 className='qnaQ'>Q</h1>
                    <p className='qnaQuestion'>{question}</p>
                </div>
            </div>

            <div className='answerList'>
                <h1 className='qnaA'>A</h1>
                <p className='qnaAnswer'>{answer}</p>
            </div>
        </section>
    )
}

export default FaqItem;