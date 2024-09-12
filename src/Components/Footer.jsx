import React from 'react';
import '../Styles/Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-bar"></div>
      <div className="footer-content">
        <div className="footer-left">
          <img className='icon-footer' src="../../public/images/DH.png" alt="Logo" />
        </div>
        <div className="footer-right">
          <img className='social-icon' src="../../public/images/ico-facebook.png" alt="Facebook" />
          <img className='social-icon' src="../../public/images/ico-whatsapp.png" alt="Whatsapp" />
          <img className='social-icon' src="../../public/images/ico-instagram.png" alt="Instagram" />
          <img className='social-icon' src="../../public/images/ico-tiktok.png" alt="Tiktok" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
