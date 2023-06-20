import Layout from '../layout/Layout';
import './Home.css';
import ForwardIcon from '@mui/icons-material/Forward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import { HashLink as Link } from 'react-router-hash-link';

function Home({ loaded, showContact, setShowContact, showMenu, setShowMenu, currentActive, setCurrentActive }) {
  setTimeout(() => setCurrentActive("home"), 10)

  return (
    <Layout loaded={loaded} showContact={showContact} setShowContact={setShowContact} showMenu={showMenu} setShowMenu={setShowMenu} currentActive={currentActive} setCurrentActive={setCurrentActive} >

      {<div className='swiper-container'>
        <div className='swiper-filter'></div>

        <h1 className='home title'>
          Commercialisation of Orphan Drugs, Oncological, Urological and Hospital Products in Hungary
        </h1>

        <Swiper
          modules={[Autoplay]}
          autoplay={true}
          loop={true}
        >
          <SwiperSlide><img src={require('./../images/swiper/swiper1.jpeg')} alt="swiper1" /></SwiperSlide>
          <SwiperSlide><img src={require('./../images/swiper/swiper2.jpeg')} alt="swiper2" /></SwiperSlide>
          <SwiperSlide><img src={require('./../images/swiper/swiper3.jpeg')} alt="swiper3" /></SwiperSlide>
          <SwiperSlide><img src={require('./../images/swiper/swiper4.jpeg')} alt="swiper4" /></SwiperSlide>
          <SwiperSlide><img src={require('./../images/swiper/swiper5.jpeg')} alt="swiper5" /></SwiperSlide>
          <SwiperSlide><img src={require('./../images/swiper/swiper6.jpeg')} alt="swiper6" /></SwiperSlide>
          <SwiperSlide><img src={require('./../images/swiper/swiper7.jpeg')} alt="swiper7" /></SwiperSlide>
        </Swiper>
      </div>}

      <div className='home-welcome'>
        <h3 className='welcome-title'>Welcome to Pharmacenter!</h3>

        <p className='home text'>
          We are committed to contribute the missing insights, local mosaics, bits and pieces needed to bring your Orphan Drugs, Oncological, Urological and Hospital medicinal products successfully to patients in our country based on the knowledge and experience we gained in over 20 years of successful work. Our team helps to overcome launch barriers to market entry and works with all relevant stakeholders to make your product a success.
        </p>

        <Link to='/about' onClick={() => window.scrollTo(0, 0)}>
          <button className='home welcome-button'>Learn more about us!</button>
        </Link>
      </div>

      <div className='cards'>
        <div className='card dark'>
          <img src={require('./../images/icons/icon_territorial.png')} alt="icon_territorial" />

          <h3 className='home card-title'>
            Commercialization in Hungary
          </h3>

          <p className='home card-text'>
            We are open to in license orphan drugs, oncological, urological and hospital products or we are ready to act as a Hungarian Representative Office for pharmaceutical companies as well.
          </p>

          <Link to='/services/#sales'>
            <button className='home card-button'>
              <p className='home card-button-text'>Read more</p>
              <div className='home card-button-arrow dark'> <ForwardIcon /> </div>
            </button>
          </Link>
        </div>

        <div className='card light'>
          <img src={require('./../images/icons/icon_packaging.png')} alt="icon_packahing" />

          <h3 className='home card-title'>
            Orphan Drug Packaging & Serialization
          </h3>

          <p className='home card-text'>
            No batch is too small for us. We package in a modern, high security warehouse also under cool chain conditions and ensure full regulatory compliance.
          </p>

          <Link to='/services/#packaging'>
            <button className='home card-button'>
              <p className='home card-button-text'>Read more</p>
              <div className='home card-button-arrow light'> <ForwardIcon /> </div>
            </button>
          </Link>
        </div>

        <div className='card light'>
          <img src={require('./../images/icons/icon_sales.png')} alt="icon_sales" />


          <h3 className='home card-title'>
            Products for out-license
          </h3>

          <p className='home card-text'>
            EU-CTD dossiers available for finished niche oncology and anticancer products for out-licensing.
          </p>

          <Link to='/products' onClick={() => window.scrollTo(0, 0)}>
            <button className='home card-button'>
              <p className='home card-button-text'>Read more</p>
              <div className='home card-button-arrow light'> <ForwardIcon /> </div>
            </button>
          </Link>
        </div>

        <div className='card dark'>
          <img src={require('./../images/icons/icon_testimonals.png')} alt="icon_testimonals" />

          <h3 className='home card-title'>
            Testimonials
          </h3>

          <p className='home card-text'>
            Several partners of ours have wrote their experiences about our company, you can read some of these testimonals here.
          </p>

          <Link to='/about/#testimonals'>
            <button className='home card-button'>
              <p className='home card-button-text'>Read more</p>
              <div className='home card-button-arrow dark'> <ForwardIcon /> </div>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home