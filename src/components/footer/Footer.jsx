import './Footer.css'

function Header({loaded}) {
  return (
    <footer className={loaded ? 'loaded' : null}>
      <p className='footer text'>
        Pharmacenter Ltd© 2022
      </p>
    </footer>
  )
}

export default Header