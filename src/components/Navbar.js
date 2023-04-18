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

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

               <li><Link to='/'     className='nav-link'
                         onClick={closeMobileMenu}>Ana Sayfa</Link></li>
               <li><Link to='/döviz'className='nav-link' 
                         onClick={closeMobileMenu}>Döviz</Link></li>
               <li><Link to='/altin' className='nav-link' 
                         onClick={closeMobileMenu}>Altın</Link></li>
               <li><Link to='/kripto' className='nav-link' 
                         onClick={closeMobileMenu}>Kripto Para</Link></li>

            </ul>

            <div className='hamburger'onClick={clickHandler}>
              {click ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
        </div>
    </div>
  )
}

export default Navbar;
