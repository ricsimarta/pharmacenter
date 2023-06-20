import React, { useState } from 'react';
import Layout from '../layout/Layout';
import './About.css'


function About({ loaded, showContact, setShowContact, showMenu, setShowMenu, currentActive, setCurrentActive }) {
  const [showTestimonal1, setShowTestimonal1] = useState(false);
  const [showTestimonal2, setShowTestimonal2] = useState(false);
  const [showTestimonal3, setShowTestimonal3] = useState(false);
  const [showTestimonal4, setShowTestimonal4] = useState(false);
  const [showTestimonal5, setShowTestimonal5] = useState(false);

  setTimeout(() => setCurrentActive("about"), 10)

  return (
    <Layout loaded={loaded} showContact={showContact} setShowContact={setShowContact} showMenu={showMenu} setShowMenu={setShowMenu} currentActive={currentActive} setCurrentActive={setCurrentActive} >
      <h1 className='about title'>Our History</h1>
      <p className='about text'>
        We are a small team of doctors and lawyers who initiated Pharmacenter Ltd. as a pure “green-field” start-up around <strong>2003 selling pharmaceutical products mainly in Hungary in the area of oncology, urology and hospital injectables.</strong> Our medical background is in urology, uro-oncology, hospital work. We recruited a team and got going. As of today Pharmacenter develops niche generic pharmaceutical products, mainly in oncology for international markets.
      </p>

      <p className='about text'>
        As early as 2004 Pharmacenter started to <strong>work operationally with rare disease and urological, oncological and hospital products</strong> and gathered a significant amount of experience and knowledge since then.
      </p>

      <p className='about text'>
        During the last 20 years we knitted a <strong>network of consultants, medical doctors, KOLs, pharmacists, reimbursement specialists and SMEs in Hungary.</strong>      
      </p>

      <p className='about text'>
        <strong>We believe that</strong> – based on our knowledge and experience - we are uniquely positioned to bring your rare disease and oncological, urological and hospital Products products to patients and treatment centers in Hungary.
      </p>

      <p className='about text'>
        We are open to inlicense the products or we are ready to act as a Hungarian Representative Office for pharmaceutical companies as well.      
      </p>

      <p className='about text signature'>
        The Pharmacenter Team, Budapest, Hungary 2022
      </p>

      <div className='about work'>
        <h3 className='about subtitle'>
          Work with us!
        </h3>

        <ul className='about work-list'>
          <li>We represent your company in Hungary.</li>
          <li>We like to keep things simple, straightforward and cost efficient.</li>
          <li>Use our one-stop-shop single interface to minimize risk.</li>
          <li>We have a proven track record</li>
        </ul>
      </div>

      <p id="testimonals" className="about text testimonals">
        If you're still not sure, <strong>see here some of our tesimonals from industry partners.</strong>
      </p>

      <div className='business testimonals-container'>
        <div className='testimonal' onClick={() => setShowTestimonal1(true)}>
          <img src={require('./../images/testimonal-logos/logo_PTC.png')} alt="logo" className='testimonal-image' />
        </div>

        <div className='testimonal' onClick={() => setShowTestimonal2(true)}>
          <img src={require('./../images/testimonal-logos/logo_dr_pfleger.png')} alt="logo" className='testimonal-image' />
        </div>

        <div className='testimonal' onClick={() => setShowTestimonal3(true)}>
          <img src={require('./../images/testimonal-logos/logo_tecnimede.png')} alt="logo" className='testimonal-image' />
        </div>

        <div className='testimonal' onClick={() => setShowTestimonal4(true)}>
          <img src={require('./../images/testimonal-logos/logo_hospira.png')} alt="logo" className='testimonal-image' />
        </div>

        <div className='testimonal' onClick={() => setShowTestimonal5(true)}>
          <img src={require('./../images/testimonal-logos/logo_shire.png')} alt="logo" className='testimonal-image' />
        </div>

        <div className='testimonal-full'>
        {showTestimonal1 &&
          <>
            <div className='fullscreen' onClick={() => setShowTestimonal1(false)}></div>
            <div className='testimonal-full-image image1'>
              <img src={require('./../images/testimonals/testimonal_ptc.png')} alt="logo" className='testimonal-image' />
            </div>
          </>}

          {showTestimonal2 &&
          <>
            <div className='fullscreen' onClick={() => setShowTestimonal2(false)}></div>
            <div className='testimonal-full-image image2'>
              <img src={require('./../images/testimonals/testimonal_dr_pfleger.png')} alt="logo" className='testimonal-image' />
            </div>
          </>}

          {showTestimonal3 &&
          <>
            <div className='fullscreen' onClick={() => setShowTestimonal3(false)}></div>
            <div className='testimonal-full-image image3'>
              <img src={require('./../images/testimonals/testimonal_tecnimede.png')} alt="logo" className='testimonal-image' />
            </div>
          </>}

          {showTestimonal4 &&
          <>
            <div className='fullscreen' onClick={() => setShowTestimonal4(false)}></div>
            <div className='testimonal-full-image image4'>
              <img src={require('./../images/testimonals/testimonal_hospira.png')} alt="logo" className='testimonal-image' />
            </div>
          </>}

          {showTestimonal5 &&
          <>
            <div className='fullscreen' onClick={() => setShowTestimonal5(false)}></div>
            <div className='testimonal-full-image image5'>
              <img src={require('./../images/testimonals/testimonal_shire.png')} alt="logo" className='testimonal-image' />
            </div>
          </>}
        </div>
      </div>
    </Layout>
  )
}

export default About