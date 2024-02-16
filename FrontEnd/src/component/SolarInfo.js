import React from 'react';

// SolarInfo의 JSX 구조는 Main에서 값을 받음
// Main에서 받은 값을 JSX 구조에 넣고 Main으로 보냄. 결과적으로 Main의 SolarInfo에 나오게 됨

const SolarInfo = ({ fontUp1, fontUp2, fontUp3,Route, Button }) => {
  return (
    <div className="explain">
      <p className='fontCover'>
        <span className="fontUp1">{fontUp1}</span>
      </p>
      <p className='fontCover'>
        <span className="fontUp3">{fontUp3}</span>
      </p>
      <p className='fontCover'>
        <span className="fontUp2">{fontUp2}</span>
      </p>
      <a href={`/${Route}`} className="fontShow">{Button}</a>
    </div>
  );
};

export default SolarInfo;
