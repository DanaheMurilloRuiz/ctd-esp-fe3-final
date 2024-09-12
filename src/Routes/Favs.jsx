import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const removeFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FAV", payload: id });
  };

  return (
    <div>
      <h1>Favorites</h1>
      <div className="card-grid">
        {state.favorites.map(fav => (
          <div key={fav.id}>
            <h2>{fav.name}</h2>
            <button onClick={() => removeFromFavorites(fav.id)}>Remove from Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
