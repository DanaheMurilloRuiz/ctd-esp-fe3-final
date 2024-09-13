import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams(); 
  const [dentist, setDentist] = useState(null);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchDentistDetail = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentistDetail();
  }, [id]);

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    <div 
      style={{
        backgroundColor: state.theme === 'light' ? '#fff' : '#333', 
        color: state.theme === 'light' ? '#000' : '#fff',
        padding: '20px'
      }}
    >
      <h1>Detail of Dentist {dentist.id}</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>{dentist.name}</td>
            <td style={styles.td}>{dentist.email}</td>
            <td style={styles.td}>{dentist.phone}</td>
            <td style={styles.td}>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left'
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  }
};

export default Detail;
