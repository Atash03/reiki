import React from 'react';
import './resources.css';

import { item1, item2, item3 } from "../../assets/index";
import { Resource } from "../../components";


function Resources() {
  return (
    <div className='reiki__resources section__padding'>
      <div className='reiki__resources-title'>
        <h1>Checkout Our Free Resources</h1>
      </div>
      <div className='reiki__resources-container'>
        <Resource imgUrl={item1} title='Watch' text='Lorem ipsum dolor sit amet in sollicitudin turpis euismod fusce platea dui nulla.' />
        <Resource imgUrl={item2} title='Read' text='Lorem ipsum dolor sit amet in sollicitudin turpis euismod fusce platea dui nulla.' />
        <Resource imgUrl={item3} title='Listen' text='Lorem ipsum dolor sit amet in sollicitudin turpis euismod fusce platea dui nulla.' />
      </div>
    </div>
  )
}

export default Resources;