import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const LocationDetails = () => {
  const [planet, setPlanet] = useState("");
  const [residents, setResidents] = useState([]);
  const [residentsArray, setResidentsArray] = useState([]);
  //const [numRes, setResNum] = useState(null)
  // let string = ''
  const { id } = useParams();

  const residentsFunc = ( ) => {
        
        for (let num = 0; num < residentsArray.length; num ++) {
            console.log(num)
        // axios.get(String(residentsArray[num]))
        //   .then((info) => {
        //     console.log('Success',info)
        //     setResidents(residents.concat(info.data))
        //     console.log(residents)
        
        //   })
        //   .catch((error) => {console.log(error, "Error")});
        }
        };










  const getplanet = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => {
        const results = res.data;
        setPlanet(results);
        setResidentsArray(res.data.residents);

        residentsFunc()     
        

       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getplanet();
  }, []);

  return (
    <div className="justify-content-center container mt-5  text-center">
      {
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <h5 className="card-title">{planet.dimension}</h5>
          </div>
          <ul className="list-group list-group-flush"></ul>
        </div>
      }

    
    </div>
  );
};
export default LocationDetails;
