import React from 'react';
import FaqItem from './FaqItem';

  // FaqItem의 JSX 구조에 값을 집어넣는 js 코드

const FaqList = () => {

  const faqs = [
    {
      question: (<>정부 보조금을 받으면<br/>사업비가 얼마나 축소되나요?</>),
      answer: (
        <>
          보조금이 없을 때와 비교하여 투자비 회수기간이 약 5년 축소될 수 있어요.
          <br />
          (정부 지원금 + 지자체 보조금 = 설치비 최대 85% 지원 가능)
        </>
      ),
    },
    {
      question: (<>어레이, 모듈이 정확히 뭔가요?</>),
      answer: (
        <>
          어레이란 태양전지가 모여 만들어진 하나의 판(모듈)을<br />여러장 연결한 태양광 설비를 말합니다.
          
        </>
      ),
    },
    {
      question: (<>설치는 지붕이나 주차장 등<br/>다양한 곳에 하고 싶은데 다 할 수 있나요?</>),
      answer: (
        <>
          공장지붕, 건물지붕, 축사지붕, 주차장 등<br />
          모든 곳에 설치 가능하니 걱정하지 않으셔도 됩니다.
        </>
      ),
    },
    {
      question: (<>태양광 패널의 설치 각도나 방향은<br/>어떻게 해야하나요?</>),
      answer: (
        <>
          한국에서 설치 경사각도는 태양광선과 90도로 하고 방향은 설치하고자
          <br />
          하는 위치에서 나침반을 사용하여 정남향 방향으로 설치하면 됩니다.
        </>
      ),
    },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;
