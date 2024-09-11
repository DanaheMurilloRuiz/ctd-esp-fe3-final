import React, { useEffect, useState, useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDentists();
  }, []);

  const styles = {
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',  
      gap: '20px',
      padding: '15px',
      justifyItems: 'center'
    },
  };

  return (
    <main className={state.theme === "light" ? "light-mode" : "dark-mode"}>
      <h1>Home</h1>
      <div className='cardGrid'  style={styles.cardGrid}>
        {dentists.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
