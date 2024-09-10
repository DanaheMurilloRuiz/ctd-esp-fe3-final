import React from "react";
import { Link } from 'react-router-dom';


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
{/* <button onClick={addFav} className="favButton">Add fav</button> */}
  return (
    <div className="card">
    <h3>{name}</h3>
    <p>{username}</p>
    <Link to={`/dentist/${id}`}>Ver Detalle</Link>
    <button onClick={addFav} className="favButton">Add fav</button> 
  </div>
);
};

export default Card;