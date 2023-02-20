import React from 'react'
import Accordeon from '../components/Accordeon';
import Blocs from '../components/Blocs';
import Logos from '../components/Logos'
import "./homepage.scss";

function Homepage() {
  return (
    <div className='homepage'>

      <section className='homepage__section__accordeon'>
        <Accordeon />
      </section>

      <section className='homepage__section__logos'>
        <Logos />
      </section>

      <section className='homepage__section__blocs'>
        <div className='homepage__section__blocs__title'>
          <img src="icon.png" alt="" /> <span>Nos dernières publications</span>
        </div>
        <Blocs />
      </section>
      
    </div>
  )
}

export default Homepage