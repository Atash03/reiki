import React from 'react';
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import linkedln from "../../assets/linkedln.svg";
import github from "../../assets/github.svg";
import './social.css';

function Social() {
  return (
    <div className='reiki__social'>
      <img src={twitter} alt="twitter" />
      <img src={linkedln} alt="linkedln" />
      <img src={facebook} alt="facebook" />
      <img src={github} alt="github" />
    </div>
  )
}

export default Social;