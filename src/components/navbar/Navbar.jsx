import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Logo from '../../assets/logo.svg';
import './navbar.css';


const Menu = () =>(
  <>
    <p><a href='#presenter'>Read</a></p>
    <p><a href='#resources'>Listen</a></p>
    <p><a href='#quote'>Talk</a></p>
    <p><a href='#features'>Transform</a></p>
  </>
)

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='reiki__navbar'>
      <div className='reiki__navbar-links'>
        <div className='reiki__navbar-links_logo'>
          <img src={Logo} alt='logo' className='reiki-svg'/>
        </div>
        <div className='reiki__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='reiki__navbar-sign'>
        <p>Know Reiki</p>
        <button type='button'>Consult with Reiki</button>
      </div>
      <div className='reiki__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuLine size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='reiki__navbar-menu_container scale-up-center'>
            <div className='reiki__navbar-menu_container-links'>
              <Menu />
              <div className='reiki__navbar-menu_container-links-sign'>
                <p>Know Reiki</p>
                <button type='button'>Consult with Reiki</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;