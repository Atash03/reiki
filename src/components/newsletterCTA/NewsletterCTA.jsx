import React from 'react';
import './newsletterCTA.css'

function NewsletterCTA() {
  return (
    <div className='reiki__newsletter'>
      <div className='reiki__newsletter-inner'>
        <h1>
        Contact us today to schedule a session and start living the life you want.
        </h1>
        <div className='reiki__newsletter-inner_form'>
          <div className='reiki__newsletter-inner_form-content'>
            <input type='text' placeholder='Enter your email' />
            <button type='button'>Sign Up</button>
          </div>
          <p>We care about your data in our <a href='#bla'>privacy policy</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default NewsletterCTA;
