import Header from './../header/Header';
import Contact from './../contact/Contact';
import Footer from './../footer/Footer';

import { useState } from 'react'

function Layout({ children, loaded, showContact, setShowContact, showMenu, setShowMenu, currentActive, setCurrentActive }) {
  const [contactPos, setContactPos] = useState(0)

  return (
    <>
      <main className={loaded ? "loaded" : ""}>
        <Header loaded={loaded} showMenu={showMenu} setShowMenu={setShowMenu} currentActive={currentActive} setCurrentActive={setCurrentActive} contactPos={contactPos}/>
        {loaded && 
          <div className='content'>
            {children}
            <Contact showContact={showContact} setShowContact={setShowContact} contactPos={contactPos} setContactPos={setContactPos} currentActive={currentActive}/>
          </div>
        }
        </main>
      <Footer loaded={loaded}/>
    </>
  )
}

export default Layout