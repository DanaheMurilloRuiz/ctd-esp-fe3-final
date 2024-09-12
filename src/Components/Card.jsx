import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ odontologist, removeFromFavorites, showLink = true, isFavoritePage = false }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addToFavorites = () => {
    if (!state.favorites.some((fav) => fav.id === odontologist.id)) {
      dispatch({ type: "ADD_FAV", payload: odontologist });
      alert("Se agregó a favoritos");
    } else {
      alert("Ya está en favoritos");
    }
  };

  return (
    <div className="card">
      <img
        className="icon-doctor"
        style={styles.icondoctor}
        src="../../public/images/doctor.jpg"
        alt="Logo"
      />
      {showLink ? (
        <Link to={`/dentista/${odontologist.id}`}>
          <h2>{odontologist.name}</h2>
        </Link>
      ) : (
        <h2>{odontologist.name}</h2>
      )}
      <p>{odontologist.username}</p>
      <button
        onClick={isFavoritePage ? removeFromFavorites : addToFavorites}
        className="favButton"
        style={styles.btnfav}
      >
        {isFavoritePage ? "Eliminar de favoritos" : (state.favorites.some((fav) => fav.id === odontologist.id) ? "⭐" : "✩")}
      </button>
    </div>
  );
};

const styles = {
  icondoctor: {
    width: "180px",
    height: "auto",
  },
  btnfav: {
    margin: "5px",
  },
};

export default Card;
