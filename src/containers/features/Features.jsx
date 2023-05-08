import React from 'react';
import './features.css';

import feature1 from "../../assets/feature1.svg";
import feature2 from "../../assets/feature2.svg";
import { Feature } from "../../components";

function Features() {
  return (
    <div className='reiki__features section__padding'>
      <div className='reiki__features-container'>
        <Feature imgUrl={feature1} title="Gain clarity, focus, and confidence in your abilities" text="Our experienced coaches work with you to identify and overcome limiting beliefs, create a roadmap for success, and provide ongoing support and guidance. " />
        <div className='reiki__features-container_edited'>
          <Feature imgUrl={feature2} title="Create the life you want" text="Don't let fear or self-doubt hold you back any longer. Our life coaching services can help you gain the clarity and direction you need to create the life you want. " />
        </div>
      </div>
    </div>
  )
}

export default Features;