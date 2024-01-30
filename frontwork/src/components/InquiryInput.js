import React from 'react';
import '../static/css/InquiryInput.css';

const InquiryInput = () => {
    return(
        
        <div class = "InquiryInput">
       
       <h1>문의 등록</h1>
            <section id = "InquirySection">
            
                <article id = "InquiryForm">
                    <div>
                        <div className='subjectTitle'>SLSL에 문의하기! 연락처와 함께 문의를 남겨주세요. 영업일 기준 3일 이내에 답변 드리겠습니다.</div>
                        <select  id= "InputModel" required>
                            <option value="fromKorea">국산 태양광 어쩌구 모델</option>
                            <option value="fromChina">중국산 태양광 저쩌구 모델</option>
                        </select>
                    </div>

                    <div>
                        <div className='subjectTitle'>성함</div>
                        <input type='text' id= "InputName" placeholder='고객님의 성함을 작성해주세요.' required />
                    </div>

                    <div>
                        <div className='subjectTitle'>이메일 주소</div>
                        <input type="email" id= "InputEmail"/>
                    </div>

                    <div>
                        <div className='subjectTitle'>휴대폰 번호(연락처)</div>
                        <input type='text' id = "InputNumber" placeholder='상세내용을 안내 받으실 연락처를 작성해주세요.' required />
                    </div>

                    <div>
                        <div className='subjectTitle'> 발전소 설치 주소</div>
                        <input type="text" id = "InputAddress" />
                    </div>

                    <div>
                        <div className='subjectTitle'>문의 상세 내용 (선택 사항)</div>
                        <textarea type='text' id = "InputAsk" placeholder='문의하실 내용을 입력해주세요.'/>
                    </div>

                    <div>
                        <div className='subjectTitle'>개인정보 수집 및 이용동의(필수)</div>
                        <input type='checkbox'  id = "InputConsent"/>
                    </div>

                    <div id = "inquiry_BtnBox">
                        <button id="inquiry_Btn">제출</button>
                    </div>
                    
                </article>

              
            </section>

            <div>test 하단 푸터 자리입니다</div>
        </div>
    )
};

export default InquiryInput;