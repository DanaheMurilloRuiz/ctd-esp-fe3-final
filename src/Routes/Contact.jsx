import React from 'react';
import Form from '../Components/Form';
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';


const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div style={{ backgroundColor: state.theme === 'light' ? '#fff' : '#333', color: state.theme === 'light' ? '#000' : '#fff' }}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
