import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import '../Styles/Footer.css';

const Footer = () => {
  const { state } = useContext(ContextGlobal); // Accede al contexto para obtener el estado del tema

  // Define los estilos basados en el tema
  const footerStyles = {
    backgroundColor: state.theme === 'light' ? '#fff' : '#333',
    color: state.theme === 'light' ? '#000' : '#fff',
  };

  return (
    <footer style={footerStyles}>
      <div className="footer-bar"> Hecho con 🤍 y ☕ por Danahe Murillo y Daniel Mera</div>
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
