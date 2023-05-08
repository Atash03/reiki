import React from 'react';
import { BiComment } from "react-icons/bi";
import './quote.css';

import quoteImg from '../../assets/quote.jpg';

function Quote() {
  return (
    <div className='reiki__quote section__padding'>
      <div className='reiki__quote-content'>
        <BiComment size={45} />
        <p>Thanks to this life coach, I have a clear roadmap for achieving my goals and creating the life I want. I'm so grateful for their support and guidance.</p>
        <button type='button'>Register now</button>
      </div>
      <div className='reiki__quote-image'>
        <img src={quoteImg} alt="quote" />
      </div>
    </div>
  )
}

export default Quote;