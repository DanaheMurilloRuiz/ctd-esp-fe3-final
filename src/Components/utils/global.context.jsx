// src/Components/utils/global.context.jsx

import { createContext, useReducer } from "react";
import { initialState, reducer } from '../../Reducers/Reducer'; 

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
