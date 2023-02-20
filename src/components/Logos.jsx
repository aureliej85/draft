import React from 'react';
import "./logos.scss";

function Logos() {

    const logosTab = ["ca.png", "arcelor.png", "allianz.png", "ca.png", "arcelor.png", "allianz.png"];

  return (
    <div className='logosDiv'>
        {logosTab.map((logosImg, index) => <div key={index}><img src={logosImg} alt=""/></div>)}
    </div>
  )
}

export default Logos