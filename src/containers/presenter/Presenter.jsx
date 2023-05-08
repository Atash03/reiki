import React from 'react';
import './presenter.css';
import Photo from '../../assets/presenter.jpg';

function Presenter() {
  return (
    <div className='reiki__presenter'>
      <div className='reiki__presenter-content section__padding'>
        <span>Presenter</span>
        <h1>Meet Reiki</h1>
        <p>Reiki is a best-selling parenting author and speaker, and creator of this LifeCoach course</p>
        <button type='button'>Read About Reiki</button>
      </div>
      <div className='reiki__presenter-image'>
        <img src={Photo} alt='presenter' />
      </div>
    </div>
  )
}

export default Presenter;