import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css'
import logoSvg from './../images/phc_logo.svg'

function Header({ loaded, showMenu, setShowMenu, currentActive, setCurrentActive, contactPos }) {

  const scrollToTop = () => window.scrollTo(0, 0);
  const scrollToTopSmooth = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  const scrollToContact = () => window.scrollTo({ top: contactPos, left: 0, behavior: 'smooth'})
  const hideMenu = () => setTimeout(() => setShowMenu(false), 0);

  return (
    <header className={loaded ? 'loaded' : null}>
      <div className='headerContent'>
        <Link to='/' className='logo-link' onClick={() => {
          setTimeout(() => setCurrentActive("home"), 10)
          currentActive === "home" ? scrollToTopSmooth() : scrollToTop()
          hideMenu() 
        }}>
          <img src={logoSvg} alt="logo" className={loaded ? 'header-logo' : 'header-logo loading'} />
        </Link>

        {loaded && <div className={showMenu ? 'hamburger-menu show' : 'hamburger-menu'} onClick={() => setShowMenu(!showMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>}

        {loaded && <nav className={loaded ? 'loaded' : 'loading'}>
          <NavLink to='/' onClick={() => {
            setTimeout(() => setCurrentActive("home"), 10)
            currentActive === "home" ? scrollToTopSmooth() : scrollToTop()
            hideMenu()
          }}>Home</NavLink>

          <NavLink to='/about' onClick={() => {
            setTimeout(() => setCurrentActive("about"), 10)
            currentActive === "about" ? scrollToTopSmooth() : scrollToTop()
            hideMenu()
          }}>About</NavLink>

          <NavLink to='/services' onClick={() => {
            setTimeout(() => setCurrentActive("services"), 10)
            currentActive === "services" ? scrollToTopSmooth() : scrollToTop()
            hideMenu()
          }}>Services</NavLink>

          <NavLink to='/products' onClick={() => {
            setTimeout(() => setCurrentActive("products"), 10)
            currentActive === "products" ? scrollToTopSmooth() : scrollToTop()
            hideMenu()
          }}>Products to sell</NavLink>

          <NavLink to='/grants' onClick={() => {
            setTimeout(() => setCurrentActive("grants"), 10)
            currentActive === "grants" ? scrollToTopSmooth() : scrollToTop()
            hideMenu()
          }}>Grants</NavLink>
          
          <button className='contact-button' onClick={() => {
            hideMenu()
            scrollToContact()
          }}>Contact / Side effects / Mellékhatás</button>
        </nav>}
      </div>
    </header>
  )
}

export default Header