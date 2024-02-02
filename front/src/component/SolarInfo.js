import React from 'react';

const SolarInfo = ({ fontUp1, fontUp2, Route, Button }) => {
  return (
    <div className="explain">
      <p>
        <span className="fontUp1">{fontUp1}</span>
      </p>
      <p>
        <span className="fontUp2">{fontUp2}</span>
      </p>
      <a href={`/${Route}`} className="fontShow1">{Button}</a>
    </div>
  );
};

export default SolarInfo;
