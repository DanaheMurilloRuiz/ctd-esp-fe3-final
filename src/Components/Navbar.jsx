import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";
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
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contact</Link>
        <Link to="/favs">Favs</Link>        
      </div>
      
      <button className="button" onClick={toggleTheme}>
        {state.theme === "light" ? "🌘" : "🔆"}
      </button>
    </nav>
  );
};

export default Navbar;
