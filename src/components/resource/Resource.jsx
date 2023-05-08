import React from 'react';
import './resource.css';

const Resource = ({ imgUrl, title, text }) => {
  return (
    <div className='reiki__resource'>
      <div className="reiki__resource-content">
        <img src={imgUrl} alt='resource' />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Resource;