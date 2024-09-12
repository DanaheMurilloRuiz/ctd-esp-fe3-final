import React, { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import axios from "axios";
import Card from "../Components/Card";

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: "GET_ODONTO", payload: response.data });
    };
    
    fetchData();
  }, [dispatch]);

  return (
    <main>
      <div style={{ backgroundColor: state.theme === 'light' ? '#fff' : '#333', color: state.theme === 'light' ? '#000' : '#fff' }}>
        <h1>Odontologists</h1>
        <div className="card-grid">
          {state.odontologists.map(odontologist => (
            <Card key={odontologist.id} odontologist={odontologist} />
          ))}
        </div>
      </div>
      
    </main>
  );
};

export default Home;
