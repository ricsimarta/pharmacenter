import React from 'react';

import './Landing.css'
import logoSvg from './../images/phc_logo.svg'

function Landing() {
  return (
    <div className='landing'>
      <img src={logoSvg} alt="phc_logo"/>
    </div>
  )
}

export default Landing