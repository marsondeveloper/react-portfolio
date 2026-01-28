import { useState } from 'react';
import Nav from '../nav/Nav'
import './Header.css'
import { FaXing } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";



const Header = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)

    const toogleMenu = () => {
        setisMenuOpen(!isMenuOpen)
    }

  return (
      <header className="header">
          <div className="container">
              <div className="header-wrapper">
                 <a href="" className="logo">Marlen</a>
                      <Nav/>
                  <div className="nav-menu-btn" onClick={toogleMenu}>
                      {isMenuOpen ? <FaXing/> : <FaBarsStaggered/>}
                      {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg> */}
                  </div>
              </div>
          </div>
      </header>
  )
}

export default Header
