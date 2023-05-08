import React from 'react';
import './feature.css';

const Feature = ({ imgUrl, title, text }) => {
  return (
    <div className='reiki__feature'>
      <div className='reiki__feature-content'>
        <img src={imgUrl} alt="svg" />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature;