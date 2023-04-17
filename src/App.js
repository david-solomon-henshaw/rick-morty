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
  const [pageNumber, setPageNumber] = useState(1)
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl,setPrevUrl] = useState('')
  
  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}`  
  
  const getNext = () => {
    let page = 1

    if (pageNumber > page) {

      axios.get(nextUrl)
      .then((res) => {
        const moreResults = res.data.results;
        setCharacters( characterArray => characterArray.concat(moreResults))
        console.log(res.data.info, 'info')
        console.log(moreResults)
  
        if (res.data.info.next !== null) {
          setPageNumber( pageNumber + 1)
          setNextUrl(res.data.info.next)
        }
  
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    }


  
  





  const getCharacters = () => {
    axios
      .get(api)
      .then((res) => {
        const results = res.data.results;
       // console.log(res.data.info.next)
        setCharacters(results);

        if (res.data.info.next !== null) {
          setPageNumber( pageNumber + 1)
          setNextUrl(res.data.info.next)
        }


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
      <Route path='/' element={<Characters nextPage={getNext} characterArray={characterArray} />} />
      <Route path='/episodes' element={<Episodes />} />
      <Route path='/locations' element={<Locations />} />

      </Routes>
    </div>
  );
}

export default App;
