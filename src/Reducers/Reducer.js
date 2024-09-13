// src/reducer.js

export const initialState = {
    odontologists: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],  
    theme: "light"
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_ODONTO":
            return {
                ...state,
                odontologists: action.payload  
            };

        case "ADD_FAV":
            const updatedFavsAdd = [...state.favorites, action.payload];
            localStorage.setItem('favorites', JSON.stringify(updatedFavsAdd));
            return {
                ...state,
                favorites: updatedFavsAdd
            };

        case "REMOVE_FAV":
            const updatedFavsRemove = state.favorites.filter(fav => fav.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(updatedFavsRemove));  
            return {
                ...state,
                favorites: updatedFavsRemove
            };

        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light"
            };

        default:
            return state;
    }
};
