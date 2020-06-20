import React from 'react';

import './rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div
        className='white f3 mt6 fw5'
        id='rank'
      >{`${name}, your current entry count is:`}</div>
      <div className='white f1 fw7'>{entries}</div>
    </div>
  );
};

export default Rank;
