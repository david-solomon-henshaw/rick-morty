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

  const filterAlive = () => {
    let api = `https://rickandmortyapi.com/api/character/?status=alive`;
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

  const filterDead = () => {
    let api = `https://rickandmortyapi.com/api/character/?status=dead`;
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

  const filterUnknown = () => {
    let api = `https://rickandmortyapi.com/api/character/?status=unknown`;
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

  const filterFemale = () => {
    let api = `https://rickandmortyapi.com/api/character/?gender=female`;
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

  const filterMale = () => {
    let api = `https://rickandmortyapi.com/api/character/?gender=male`;
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
  const filterGenderless = () => {
    let api = `https://rickandmortyapi.com/api/character/?gender=genderless`;
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
  const filterUnknownGender = () => {
    let api = `https://rickandmortyapi.com/api/character/?gender=unknown`;
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

  const filterHuman = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=human`;
    axios.get(api)
    .then((res) => {
      const results = res.data.results;
      console.log(results)
      setPageCountCharacters(res.data.info.pages);
      setCharacters(results);
    })
    .catch((error) => {
      console.log(error);
    });
  };


  const filterAnimal = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=animal`;
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

  const filterHumanoid = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=humanoid`;
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

  const filterMythological = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=mythological`;
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

  const filterUnknownSpecies = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=unknown`;
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

  const filterDiseases = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=disease`;
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

  const filterRobot = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=robot`;
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

  const filterCronenberg = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=cronenberg`;
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

  const filterPlanet = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=planet`;
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

  const filterPoopybutthole = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=poopybutthole`;
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

  const filterAlien = () => {
    let api = `https://rickandmortyapi.com/api/character/?species=alien`;
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

  

  // const filterAlien = () => {
  //   let api = `https://rickandmortyapi.com/api/character/?species=alien`;
  //   axios
  //   .get(api)
  //   .then((res) => {
  //     const results = res.data.results;
  //     setPageCountCharacters(res.data.info.pages);
  //     setCharacters(results);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // };


  const getNext = (nextPageNumber) => {
    let page = nextPageNumber.selected + 1;
    let apiGetMore = `https://rickandmortyapi.com/api/character?page=${page}`;

    axios
      .get(apiGetMore)
      .then((res) => {
        const moreResults = res.data.results;
        setCharacters(moreResults);
        console.log(res.data.info, "info");
        console.log(moreResults);
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
            <Characters
              getNext={getNext}
              setpageCountCharacters={setPageCountCharacters}
              pageCountCharacters={pageCountCharacters}
              nextPage={getNext}
              characterArray={characterArray}
              filterAlive={filterAlive}
              filterDead={filterDead}
              filterUnknown={filterUnknown}
              filterMale={filterMale}
              filterGenderless={filterGenderless}
              filterUnknownGender={filterUnknownGender}
              filterFemale={filterFemale}
              filterAlien={filterAlien}
              filterAnimal={filterAnimal}
              filterCronenberg={filterCronenberg}
              filterDiesease={filterDiseases}
              filterHuman={filterHuman}
              filterHumanoid={filterHumanoid}
              filterMythological={filterMythological}
              filterPlanet={filterPlanet}
              filterPoopybuthole={filterPoopybutthole}
              filterRobot={filterRobot}
              filterSpeciesUnknown={filterUnknownSpecies}
              


            />
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
