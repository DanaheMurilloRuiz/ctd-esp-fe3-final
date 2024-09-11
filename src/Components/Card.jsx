import React from "react";
import { Link } from 'react-router-dom';
// import '../Styles/Card.css'


const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <div>
        <img className='icon-doctor' style={styles.icondoctor} src="../../public/images/doctor.jpg" alt="Logo" />
      </div>
      <h3>{name}</h3>
      <p>{username}</p>
      <Link to={`/dentista/${id}`}>Ver Detalle</Link>
      <button onClick={addFav} className="favButton" style={styles.btnfav}>⭐</button>
    </div>
  );
};

const styles = {
  icondoctor: {
    width: '180px',
    height: 'auto',
  },
  btnfav: {
    margin: '5px',
  },
}

export default Card;