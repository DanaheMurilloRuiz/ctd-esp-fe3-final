
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams(); 
  const [dentist, setDentist] = useState([]);
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
    <div className={state.theme === "light" ? "light-mode" : "dark-mode"}>
      <h1>Detail of Dentist {dentist.id}</h1>
      <p><strong>Name:</strong> {dentist.name}</p>
      <p><strong>Email:</strong> {dentist.email}</p>
      <p><strong>Phone:</strong> {dentist.phone}</p>
      <p><strong>Website:</strong> {dentist.website}</p>
    </div>
  );
};

export default Detail;
