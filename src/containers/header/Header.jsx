import React from 'react';
import HeaderImg from '../../assets/header.svg';
import './header.css';

function Header() {
  return (
    <div className='reiki__header section__padding'>
      <div className='reiki__header-content'>
        <div className='reiki__header-content_heading'>
            <span>Free Webinar</span>
            <h1>Transform Your Life with the Guidance of a Certified Life Coach</h1>
            <p>Free 90-minute webinar, Reiki will teach you effective and respectful strategies for to improve productivity and well being in your life.</p>
        </div>
        <div className='reiki__header-content_actions'>
          <p>Learn More</p>
          <button>Register</button>
        </div>
        <div className='reiki__header-content_image'>
          <img src={HeaderImg} alt='header' />
        </div>
      </div>
    </div>
  )
}

export default Header;