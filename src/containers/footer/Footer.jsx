import React from 'react';
import Logo from "../../assets/footer.svg";
import './footer.css';

import { Social } from "../../components/index";

function Footer() {
  return (
    <div className='reiki__footer section__padding'>
      <div className='reiki__footer-content'>
        <img src={Logo} alt="logo" />
        <div className='reiki__footer-content_container'>
            <a href='#links'>About Us</a>
            <a href='#links'>Success Stories</a>
            <a href='#links'>Amazon Shop</a>
            <a href='#links'>FAQs</a>
            <a href='#links'>Terms and Conditions</a>
            <a href='#links'>Privacy</a>
        </div>
        <hr />
        <div className='reiki__footer-content_footer'>
          <p>© 2023 Life Coach Reiki. All rights reserved.</p>
          <Social />
        </div>
      </div>
    </div>
  )
}

export default Footer;