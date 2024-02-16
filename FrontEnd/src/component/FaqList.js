import React from 'react';
import FaqItem from './FaqItem';

  // FaqItem의 JSX 구조에 값을 집어넣는 js 코드

const FaqList = () => {

  const faqs = [
    {
      question: (<>정부 보조금과 지자체 보조금을 받으면<br/>투자비 회수기간이 얼마나 축소되나요?</>),
      answer: (
        <>
          보조금이 없을 때와 비교하여 투자비 회수기간이<br/>약 5년 축소될 수 있습니다.<br/>
          <span className="subAnswer">(정부 보조금 + 지자체 보조금 = 설치비 최대 85% 지원 가능)</span>
        </>
      )
    },
    {
      question: (<>셀, 모듈, 어레이가 정확히 뭔가요?</>),
      answer: (
        <>
          <p className="answerHeight">
            태양전지의 기본 단위는 '셀'<br/>
            셀이 모여있는 전지판 '모듈'<br/>
            구조물을 위해 모듈을 구성한 '어레이'<br/>
          </p>
          <a href="/valueinput" className="subLink">
            발전수익 및 설치비용 예측 페이지 하단 참조
          </a>
        </>
      )
    },
    {
      question: (<>지붕이나 주차장 등 다양한 공간에서<br/>태양광 모듈을 설치하고 싶은데 가능한가요?</>),
      answer: (
        <>
          태양광 모듈은 공장지붕, 건물지붕, 축사지붕, 주차장 등<br/>
          다양한 공간에서 설치 가능합니다.
        </>
      )
    },
    {
      question: (<>태양광 모듈의 경사각도와 방향은<br/>어떻게 설정하나요?</>),
      answer: (
        <>
          한국에서 설치 경사각도는 태양광선과 90°로 하고<br/>방향은 설치하고자
          하는 위치에서 나침반을 사용하여<br/>정남향으로 설치하면 됩니다.
        </>
      )
    }
  ];

  return (
    <div className="faqText">
      <table>
        <tr>
          {faqs.slice(0,2).map((faq, index) => (
            <td key={index}>
              <FaqItem question={faq.question} answer={faq.answer} />
            </td>
          ))}
        </tr>

        <tr>
          {faqs.slice(2,4).map((faq, index) => (
            <td key={index}>
              <FaqItem question={faq.question} answer={faq.answer} />
            </td>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default FaqList;
