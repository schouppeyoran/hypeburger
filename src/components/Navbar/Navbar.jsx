import React, { useState } from 'react';
import { images } from '../../constants';
import './navbar.css';
import {GiKnifeFork} from 'react-icons/gi';
import {FaHamburger} from 'react-icons/fa';

const navLinks = [
  {
    title: 'About',
    id: '#about'
  },
  {
    title: 'Menu',
    id: '#featured'
  },
  {
    title: 'Contact',
    id: '#cta'
  },
]

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-backdrop'>
        <img src={images.vector6} alt=""/>
      </div>
      
        <div className='container app__navbar-content'>
          <div className="app__navbar-logo">
            <a href='#'><img src={images.logo} alt="" /></a>
          </div>
          <ul className='app__navbar-links'>
          {navLinks.map((navLink) => (
            <a href={navLink.id} onClick={() => setActiveNav(`${navLink.id}`)} className={activeNav === `${navLink.id}` ? 'active' : ''}><li>{navLink.title}</li></a>
          ))}
        </ul>
        <div className="app__navbar-mobile">
        {toggleMenu
        ? <GiKnifeFork onClick={() => setToggleMenu(false)} />
        : <FaHamburger onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='app__navbar-mobile-links-container scale-up-center'>
            <ul className='app__navbar-mobile-links'>
              {navLinks.map((navLink) => (
                <a href={navLink.id}><li>{navLink.title}</li></a>
              ))}
            </ul>
          </div>
        )}
        </div>
        </div>
      
    </nav>
  )
}

export default Navbar