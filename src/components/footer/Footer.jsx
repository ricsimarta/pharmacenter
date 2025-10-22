import './Footer.css'

function Header({loaded}) {
  const date = new Date().getFullYear();

  return (
    <footer className={loaded ? 'loaded' : null}>
      <p className='footer text'>
        Pharmacenter Ltd© {date}
      </p>
    </footer>
  )
}

export default Header