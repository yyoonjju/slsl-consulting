import React from 'react';
import FaqItem from './FaqItem';

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
      question: (<>발전사업으로 RE100 실적도<br/>인정받을 수 있을까요?'</>),
      answer: (
        <>
          네. 'RE100 실적 인증'과 '온실가스 감축 실적 인증' 모두 가능해요.
          <br />
          다만 수익은 약 40% 감소할 수 있어요.
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
      question: (<>태양광 패널의 설치 각도나 방향은<br/>어떻게 해야하나요?'</>),
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
