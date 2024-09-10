import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import '../Styles/Navbar.css';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`navbar ${state.theme === "light" ? "light" : "dark"}`}>
      <div>
        <img className='icon-logo' src="../../public/images/DH.png" alt="Logo" />
      </div>
      <div className="right">
        <Link to="/home" className="link">Home</Link>
        <Link to="/contacto" className="link">Contact</Link>
        <Link to="/favs" className="link">Favs</Link>

        <button className="button" onClick={toggleTheme}>
          {state.theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
