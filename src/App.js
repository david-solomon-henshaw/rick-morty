import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Locations from './components/Locations';
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [characterArray, setCharacters] = useState([]);

  const getCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        const results = res.data.results;
        console.log(results)
        setCharacters(results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App">
      <header>
     <Navbar />
      </header>
      <Routes>
      <Route path='/' element={<Characters characterArray={characterArray} />} />
      <Route path='/episodes' element={<Episodes />} />
      <Route path='/locations' element={<Locations />} />

      </Routes>
    </div>
  );
}

export default App;
