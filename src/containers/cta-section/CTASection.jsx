import React from 'react';
import './ctaSection.css';
import qImage from '../../assets/question.svg';
import qImage1 from '../../assets/question1.svg';

import { CTA, Questions } from "../../components";

function CTASection() {
  return (
    <>
      <div className='reiki__ctaSection section__padding'>
        <div className='reiki__ctaSection-first'>
          <Questions imgUrl={qImage} question='Are you feeling stuck in your career?' />
        </div>
        <div className='reiki__ctaSection-second'>
          <Questions imgUrl={qImage1} question='Struggling to find balance in your personal life?' />
        </div>
      </div>
      <CTA />
    </>
  )
}

export default CTASection;
