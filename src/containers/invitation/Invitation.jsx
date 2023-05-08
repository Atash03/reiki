import React from 'react';
import imgInv from "../../assets/invitation.jpg";
import './invitation.css';


function Invitation() {
  return (
    <div className='reiki__invitation'>
      <div className='reiki__invitation-content'>
        <h1>Invite your friends</h1>
        <p>We work with you to identify areas for improvement, develop effective communication strategies, and provide ongoing support and guidance.</p>
      </div>
      <div className='reiki__invitation-image'>
        <img src={imgInv} alt="invitation" />
      </div>
      <div className='reiki__invitation-action'>
        <button>Share About The Event</button>
      </div>
    </div>
  )
}

export default Invitation;