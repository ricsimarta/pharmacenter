import React from 'react';
import Layout from '../layout/Layout';
import './Products.css'

function Products({ loaded, showContact, setShowContact, showMenu, setShowMenu, currentActive, setCurrentActive }) {
  setTimeout(() => setCurrentActive("products"), 10)

  return (
    <Layout loaded={loaded} showContact={showContact} setShowContact={setShowContact} showMenu={showMenu} setShowMenu={setShowMenu} currentActive={currentActive} setCurrentActive={setCurrentActive} >
      <h1 className='products title'>Generic Product Portfolio for Out-Licensing</h1>

      <div className='products'>
        <p className="products text">
          EU-CTD dossiers available for finished niche oncology, anticancer products:
        </p>

        <h2 className='products subtitle'>Megestrol Acetate 160 mg Tablets</h2>
        <ul className='products list list1'>
          <li>with EU BE study</li>
          <li>Our originator comparator is Megestat® (Germany) from BMS (Bristol Meyers Squibb)</li>
          <li>Pack Sizes on offer are: 30’s tablets pack; 100’s tablets pack.</li>
        </ul>

        <h2 className='products subtitle'>Hydroxyurea 500 mg Capsules</h2>
        <ul className='products list list2'>
          <li>with EU BE study</li>
          <li>Our originator comparator is Hydrea® from BMS (Bristol Meyers Squibb)</li>
          <li>Pack Sizes on offer are: 100’s capsules glass bottle</li>
        </ul>

        <h2 className='products subtitle'>Calcium Folinate Injection</h2>
        <ul className='products list list3'>
          <li>10ml (100mg) single vial</li>
          <li>50 ml (500 mg) single vial</li>
        </ul>

        <h2 className='products subtitle'>Temozolomide Capsules</h2>
        <ul className='products list list4'>
          <li>with EU BE study</li>
          <li>Temozolomide Capsule 5 mg (5’s pack)</li>
          <li>Temozolomide Capsule 20 mg (5’s pack)</li>
          <li>Temozolomide Capsule 100 mg (5’s pack)</li>
          <li>Temozolomide Capsule 140 mg (5’s pack)</li>
          <li>Temozolomide Capsule 180 mg (5’s pack)</li>
          <li>Temozolomide Capsule 250 mg (5’s pack)</li>
        </ul>

        <p className="products text">
          All products can be used in <strong>zone I and zone II</strong>, except for <em>Megestrol Acetate 160mg</em> which can be used in <strong>zone I, II, III, IVa and IVb</strong>, and the rights are for sale for <strong>all over the world</strong> except US and Canada.
        </p>

        <p className="products text">
          In case of any question or business inquiries with the above, please do not hesitate to contact us via e-mail.
        </p>
      </div>
    </Layout>
  )
}

export default Products