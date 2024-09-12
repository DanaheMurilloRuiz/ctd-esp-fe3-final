import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

import Home from './Routes/Home'
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

import { ContextProvider } from './Components/utils/global.context';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dentista/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>

          <Footer />
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
