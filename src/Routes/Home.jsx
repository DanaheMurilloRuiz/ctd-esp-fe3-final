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
      <h1>Odontologists</h1>
      <div className="card-grid" style={styles.cardGrid}>
        {state.odontologists.map(odontologist => (
          <Card key={odontologist.id} odontologist={odontologist} />
        ))}
      </div>
    </main>
  );
};

const styles = {
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',  
    gap: '20px',
    padding: '15px',
    justifyItems: 'center'
  },
};

export default Home;
