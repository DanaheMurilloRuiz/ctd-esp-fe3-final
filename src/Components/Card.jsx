import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ odontologist }) => {
  const { dispatch, state } = useContext(ContextGlobal);

  const addToFavorites = () => {
    const currentFavs = JSON.parse(localStorage.getItem('favs')) || [];

    const isFavAlready = currentFavs.some(fav => fav.id === odontologist.id);
    if (isFavAlready) {
      window.alert(`${odontologist.name} ya está en favoritos`);
    } else {
      const updatedFavs = [...currentFavs, odontologist];
      localStorage.setItem('favs', JSON.stringify(updatedFavs));
      dispatch({ type: "ADD_FAV", payload: odontologist });

      window.alert(`${odontologist.name} se agregó a favoritos`);
    }
  };

  return (
    <div className="card">
      <img className='icon-doctor' style={styles.icondoctor} src="../../public/images/doctor.jpg" alt="Logo" />
      <Link to={`/dentista/${odontologist.id}`}> <h2>{odontologist.name}</h2> </Link>
      
      <p>{odontologist.username}</p>
      <button onClick={addToFavorites} className="favButton" style={styles.btnfav}>⭐</button>
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
