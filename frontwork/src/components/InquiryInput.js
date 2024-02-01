import React, { useState }  from 'react';
import '../static/css/InquiryInput.css';
import emailjs from 'emailjs-com';

const InquiryInput = () => {
   const [InputData, setInputData] = useState({
        inputModel: '',
        inputName: '',
        emailId:'',
        emailDomain: '',
        inputNumber1: '',
        inputNumber2: '',
        inputNumber3: '',
        localAddress: '',
        inputAsk: '',
        inputCheck: false,
    });

        //  입력값 변경 
    const handleChange = (e) => {
        // 이벤트 객체에서 필요한 값들을 추출
        const { id, value, type, checked } = e.target;
  
        // setFormData를 사용하여 상태 업데이트
        setInputData((prevData) => ({
        ...prevData,
        [id]: type === 'checkbox' ? checked : value,
        }));

    console.log(e.target);
    };
  
    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();


        //이름에 특수문자 포함 못하게 
        const regex1 = /^[a-zA-Z가-힣]*$/;
        const isNameValid = regex1.test(InputData.inputName);

        const regex2 = /^[a-zA-Z]*$/;
        const isEmailValid = regex2.test(InputData.emailId);
        
        const regex3 = /^[a-zA-Z.]*$/;
        const isDomainValid = regex3.test(InputData.emailDomain);

        // 성함이 유효하지 않으면 경고 메시지 출력
        if (!isNameValid) {
            alert('이름에는 특수문자를 사용할 수 없습니다.');
            return;
        }

        //이메일 아이디에 특수문자 포함했을때
        if(!isEmailValid){
            alert('이메일에는 특수문자를 사용할 수 없습니다.')
            return;
        }
        //이메일 도메인 특수문자 포함했을때 (.은 입력가능)
        if(!isDomainValid){
            alert('이메일 도메인 형식을 확인해주세요.')
            return;
        }
    
        // 개인정보 수집 이용동의 안했을때 알림 
        if(!InputData.inputCheck){
            alert('개인정보 수집 및 이용동의 후 제출해주세요');
            return;
        }
    
        // 저장된 상태 출력 (실제로 서버에 전송하거나 다른 로직으로 대체)
        console.log('Form Data:',InputData);

        // EmailJS로 이메일 전송
        emailjs
        .send(
            'service_xdktqu9', // EmailJS에서 생성한 서비스 ID
            'template_1nfbjye', // EmailJS에서 생성한 템플릿 ID
            InputData,
            'qmT2G7bE_9SeWMpQ-' // EmailJS에서 생성한 사용자 PublicKey
        )
        .then(
        (result) => {
            console.log('Email sent successfully:', result.text);
        },
        (error) => {
            console.error('Failed to send email:', error.text);
        }
        );
    };

    // 이메일 직접입력
    const handlecustomEmailDomain = (e)=>{
        const { value } = e.target;
        console.log(value);
        setInputData((prevData) => ({
          ...prevData,
     
          emailDomain: value === 'userinput' ? '': value,
        }));
    };

  return (
    <div className= "inquiryInput">
        <h1>문의 등록</h1>
        
        <section id = "inquirySection">
            <form id = "inquiryForm"  onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            모델선택
                            <span className="red_span">*</span>
                        </td>
                        <td colSpan="3">
                                        {/* 옵션이 길어지면 css  InputModel에 width 늘려주세요*/}
                            <select id= "inputModel" required onChange={handleChange}>
                                <option value=""disabled selected hidden>모델을 선택하세요</option>
                                <option value="fromKorea">국산 PEAKDVQ XL G11.7(570Wp)</option>
                                <option value="fromUSA">미국산 AmeriSolar AS-qm120-HC(580Wp)</option>
                            </select>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            성함
                            <span className="red_span">*</span>
                        </td>
                        <td>
                            <input  type='text' 
                                    id= "inputName"
                                    maxLength="20" 
                                    required 
                                    onChange={handleChange}
                                    align = "middle"
                                    title="특수문자, 숫자는 입력이 불가능합니다."
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            이메일
                            <span  className="red_span">*</span>
                        </td>
                        <td colSpan="3">
                            <input  type="text" 
                                    id= "emailId"
                                    maxLength="20"
                                    placeholder="이메일 아이디" 
                                    required 
                                    title="특수문자는 입력이 불가능합니다."
                                    onChange={handleChange}
                            />
                            <span>&nbsp;@&nbsp;&nbsp;</span>
                        
                            <input  type="text" 
                                    id= "emailDomain"
                                    maxLength="20"
                                    placeholder="이메일도메인" 
                                    required 
                                    onChange={(e)=>{
                                        handleChange(e);
                                        handlecustomEmailDomain(e);
                                    }}
                                    value={InputData.emailDomain}
                                    readOnly={
                                        InputData.emailDomain==='naver.com'||InputData.emailDomain==='gmail.com'||InputData.emailDomain==='hanmail.net'
                                        ||InputData.emailDomain==='korea.com'||InputData.emailDomain==='nate.com'||InputData.emailDomain==='yahoo.com'
                                    }
                            />
                  
                            <span>&nbsp;&nbsp;</span>

                            <select id="selectDomain" 
                                    title="이메일 도메인 주소 선택"
                                    value={InputData.emailDomain}
                                    onChange={(e)=>{
                                        handleChange(e);
                                        handlecustomEmailDomain(e);
                                    }}
                            >
                                <option value=""disabled selected hidden>-선택-</option>
                                <option value="userinput">직접입력</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="korea.com">korea.com</option>
                                <option value="nate.com">nate.com</option>
                                <option value="yahoo.com">yahoo.com</option>
                                
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            연락처
                            <span className="red_span">*</span>
                        </td>
                        <td colSpan="3">
                            <input type='tel'  pattern="[0-9]*" id = "inputNumber1" maxLength="3" placeholder='010' required onChange={handleChange}/>
                            <span>&nbsp;-&nbsp;&nbsp;</span>
                            <input type='tel'  pattern="[0-9]*" id = "inputNumber2" maxLength="4" placeholder='1234' required onChange={handleChange}/>
                            <span>&nbsp;-&nbsp;&nbsp;</span>
                            <input type='tel'  pattern="[0-9]*" id = "inputNumber3" maxLength="4" placeholder='5678' required onChange={handleChange}/>
                        </td>
                    </tr>

                    <tr>
                        <td>발전소설치주소<span className="red_span">*</span></td>
                        <td>
                            <select name = "LocalAddress" id = "localAddress" required  onChange={handleChange}>
                                    <option value=""disabled selected hidden>지역을 선택하세요</option>
                                    <option value="seoul" >서울특별시</option>
                                    <option value="daejeon">대전광역시</option>
                                    <option value="daegu">대구광역시</option>
                                    <option value="busan">부산광역시</option>
                                    <option value="gwangju">광주광역시</option>
                                    <option value="incheon">인천광역시</option>
                                    <option value="ulsan">울산광역시</option>
                                    <option value="sejong">세종특별자치시</option>
                                    <option value="gyeonggi">경기도</option>
                                    <option value="gangwon">강원도</option>
                                    <option value="north-chungcheong">충청북도</option>
                                    <option value="south-chungcheong">충청남도</option>
                                    <option value="north-gyeongsang">경상북도</option>
                                    <option value="south-gyeongsang">경상남도</option>
                                    <option value="north-jeolla">전라북도</option>
                                    <option value="south-jeolla">전라남도</option>
                                    <option value="jeju">제주특별자치도</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>문의 상세 내용</td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <textarea type='text' id = "inputAsk"  onChange={handleChange} placeholder='문의하실 내용을 입력해주세요.'/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td></td>
                        <td></td>
                        <td colSpan="2">
                            개인정보 수집 및 이용 동의(필수)
                            <span className="red_span">&nbsp;*&nbsp;&nbsp;</span>
                            <input type='checkbox' id = "inputCheck"  onChange={handleChange} checked={InputData.inputCheck}/>
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td colSpan="2">
                            <button id="inquiry_Btn" type='submit'>제출</button>
                        </td>
                    </tr>
                </table>
            </form>

        </section>
      
    </div>
  );
};

export default InquiryInput;
