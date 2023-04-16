import React from 'react';
import './Button.css';
import {IoMdArrowRoundBack} from 'react-icons/io';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <>
      <Link to='/'><IoMdArrowRoundBack size={35} className='icon'/></Link>
    </>
  );
};

export default Button;
