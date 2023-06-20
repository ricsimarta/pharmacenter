import React from 'react';
import Layout from '../layout/Layout';
import './Services.css'

function Services({ loaded, showContact, setShowContact, showMenu, setShowMenu, currentActive, setCurrentActive }) {
  setTimeout(() => setCurrentActive("services"), 10)

  return (
    <Layout loaded={loaded} showContact={showContact} setShowContact={setShowContact} showMenu={showMenu} setShowMenu={setShowMenu} currentActive={currentActive} setCurrentActive={setCurrentActive}>
      <section id="sales" className='services section1'>
        <h1 className='services title'>Marketing & Sales Services in Hungary</h1>

        <div className='services inline'>
          <p className="services text">
            We <strong>represent</strong> your company and your products in Hungary.
          </p>

          <p className="services text">
            We are open to <strong>inlincense</strong> generic pharmaceuticals.
          </p>
        </div>

        <div className="services inline2">
          <p className="services text">
            We do the <strong>market research</strong>, development of <strong>market access</strong> & <strong>pricing strategy plan</strong> organise the named patient import if necessary and the marketing & sales work for:
          </p>

        </div>
        <ul className="services list list1">
          <li>Orphan drugs</li>
          <li>Oncology products</li>
          <li>Urology products</li>
          <li>Hospital products</li>
        </ul>

      </section>

      <section id="packaging" className='services section2'>
        <h1 className='services title'>Small Scale Packaging & Serialization</h1>

        <div>
          <p className='services text'>
            We provide <strong>packaging, EU batch release and storage solutions</strong> and work with all kinds of pharmaceutical products <strong>including the ones requiring cold chain storage and cold chain packaging.</strong> Our company has been successfully audited by major pharmaceutical industry players and we have all relevant certificates like GMP and Manufacturing Certificate in place.
          </p>

          <p className='services text'>
            Pharmacenter is well positioned to work <strong>with small niche and orphan drug batches and oncology products</strong> and cooperates for shipments with wholesalers throughout the CEE region and Western Europe.
          </p>

          <ul className='services list list2'>
            <li>
              <strong>Warehousing services</strong> at high security warehouse close to Budapest Airport
            </li>

            <li>
              <strong>Secondary</strong> <em>(cold chain)</em> <strong>packaging</strong> and <strong>labelling</strong> services for pharmaceutical RX and OTC products including hormones, antibiotics and cytotoxics as well as medical devices for all EU markets
            </li>

            <li>
              <strong>EU batch release</strong> by Qualified Person (QP) & EU import
            </li>

            <li>
              Full <strong>serialization services</strong> according to EU guidelines
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Services