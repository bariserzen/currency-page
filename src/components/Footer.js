import React from 'react';
import './Footer.css';
import {FaFacebook,FaTwitter,FaInstagram,FaEnvelope} from 'react-icons/fa';

const Footer = () => {


  return (
    <div className='footer'>
        <div className='container'>


          <div className='col-1'>
          <h1 className='header' >Ne <span>Ne Kadar?</span></h1>
          </div>

          <div className='col-1'>
          
          <h1 style={{color:'#ADFF2F'}}>Sosyal Medya</h1>
            <span className='line'></span>
            <h1><FaFacebook size={18}/></h1>
            <h1><FaTwitter size={18}/></h1>
            <h1><FaInstagram size={18}/></h1>
            <h1><FaEnvelope size={18}/></h1>
          </div>

          <div className='col-1'>
          
            <h1 style={{color:'#ADFF2F'}}>Hakkımızda</h1>
            <span className='line'></span>
            <h1>Genel Bakış</h1>
            <h1>Duyurular</h1>
            <h1>Raporlar</h1>
            <h1>Hizmetler</h1>
          </div>

          <div className='col-1'>
          
            <h1 style={{color:'#ADFF2F'}}>Destek</h1>
            <span className='line'></span>
            <h1>İletişim</h1>
            <h1>Mesaj</h1>
            <h1>Güvenlik</h1>
            <h1>SSS</h1>
          </div>

        </div>
    </div>
  );
};

export default Footer;
