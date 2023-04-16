import React, {useState} from 'react';
import './Navbar.css';
import {FaBars,FaTimes,} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

const [click,setClick] = useState(false);

const clickHandler = () => {
  setClick(!click);
}

const closeMobileMenu = () => setClick(false);

  return (
    <div className='navbar'>
        <div className='container'>
            <Link to='/' className='title' onClick={closeMobileMenu}>
            <h1>Ne <span>Ne Kadar ?</span></h1>
            </Link>

            <div className={click ? 'nav-menu active' : 'nav-menu'}>
               <Link to='/döviz' > <p className='head' onClick={closeMobileMenu}>Döviz</p></Link>
               <Link to='/altin'><p className='head' onClick={closeMobileMenu}>Altın</p></Link>
               <Link to='/kripto'><p className='head' onClick={closeMobileMenu}>Kripto Paralar</p></Link> 
            </div>

            <div className='hamburger'onClick={clickHandler}>
              {click ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
        </div>
    </div>
  )
}

export default Navbar;
