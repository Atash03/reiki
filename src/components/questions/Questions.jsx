import React from 'react';
import './questions.css';

const Questions = ({ imgUrl, question }) => {
  return (
    <div className='reiki__questions'>
      <div className='reiki__questions-heading'>
        <div></div>
        <img src={imgUrl} alt='qImage' />
      </div>
      <div className='reiki__questions-question'>
        {question}
      </div>
    </div>
  )
}

export default Questions;