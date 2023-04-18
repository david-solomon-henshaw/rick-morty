import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterDetails from "./components/CharacterDetails";
import LocationDetails from "./components/LocationDetails";

function App() {
  const [characterArray, setCharacters] = useState([]);

  // current page number 
  const [pageNumber, setPageNumber] = useState(1);

  //For Total pages to Be used with react paginate
  const [pageCountCharacters, setPageCountCharacters] = useState(0);

  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;

  const getNext = (nextPageNumber) => {
    
    let page = nextPageNumber.selected + 1
    let apiGetMore = `https://rickandmortyapi.com/api/character?page=${page}`;

    
      axios.get(apiGetMore)
      .then((res) => {
        const moreResults = res.data.results;
        setCharacters(moreResults)
        console.log(res.data.info, 'info')
        console.log(moreResults)
      
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCharacters = () => {
    axios
      .get(api)
      .then((res) => {
        const results = res.data.results;
        setPageCountCharacters(res.data.info.pages);
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
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Characters getNext={getNext} setpageCountCharacters={setPageCountCharacters} pageCountCharacters={pageCountCharacters} nextPage={getNext} characterArray={characterArray} />
          }
        />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/location/:id" element={<LocationDetails />} />
      
        </Routes>
    </div>
  );
}

export default App;
