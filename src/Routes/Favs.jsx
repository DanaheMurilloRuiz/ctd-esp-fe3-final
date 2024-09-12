import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const removeFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FAV", payload: id });
  };

  return (
    <div  style={{ backgroundColor: state.theme === 'light' ? '#fff' : '#333', color: state.theme === 'light' ? '#000' : '#fff' }}>
      <h1>Favorites</h1>
      <div className="card-grid">
        {state.favorites.map(fav => (
          <Card
            key={fav.id}
            odontologist={fav}
            removeFromFavorites={() => removeFromFavorites(fav.id)}
            showLink={false}
            isFavoritePage={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
