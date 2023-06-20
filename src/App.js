import { Routes, Route, HashRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Products from './components/products/Products';
import Grants from './components/grants/Grants';

import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currentActive, setCurrentActive] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2500)
  }, []);  

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home loaded={loaded} showContact={showContact} setShowContact={setShowContact} showMenu={showMenu} setShowMenu={setShowMenu} currentActive={currentActive} setCurrentActive={setCurrentActive} />} />

        <Route path='/about' element={<About loaded={loaded} showContact={showContact} setShowContact={setShowContact} showMenu={showMenu} setShowMenu={setShowMenu} currentActive={currentActive} setCurrentActive={setCurrentActive} />}  />

        <Route path='/services' element={<Services loaded={loaded} showContact={showContact} setShowContact={setShowContact} showMenu={showMenu} setShowMenu={setShowMenu} currentActive={currentActive} setCurrentActive={setCurrentActive} />}/>

        <Route path='/products' element={<Products loaded={loaded} showContact={showContact} setShowContact={setShowContact} showMenu={showMenu} setShowMenu={setShowMenu} currentActive={currentActive} setCurrentActive={setCurrentActive} />} />

        <Route path='/grants' element={<Grants loaded={loaded} showContact={showContact} setShowContact={setShowContact} showMenu={showMenu} setShowMenu={setShowMenu} currentActive={currentActive} setCurrentActive={setCurrentActive} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
