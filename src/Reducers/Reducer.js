// src/reducer.js

export const initialState = {
    odontologists: [],   
    favorites: [],       
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
            return {
                ...state,
                favorites: [...state.favorites, action.payload]  
            };

        case "REMOVE_FAV":
            return {
                ...state,
                favorites: state.favorites.filter(fav => fav.id !== action.payload)  
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
