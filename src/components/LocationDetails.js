import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const LocationDetails = () => {
  const [planet, setLocations] = useState("");
  const [residents, setResidents] = useState([]);
  const [residentsArray, setResidentsArray] = useState([]);
  //const [numRes, setResNum] = useState(null)
  // let string = ''
  const { id } = useParams();

  const residentsFunc = (res) => {
    for (let num = 0; num < res; num++) {
      for (var val of residents) {
        console.log(val)
    //     axios
    //       .get(res)
    //       .then((data) => {
    //         setResidentsArray([...residentsArray, res]);
    //       })
    //       .catch((error) => console.log(error, res));
     }
    }
  };










  const getplanet = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => {
        const results = res.data;
        console.log(res);
        setLocations(results);
        setResidents(results.residents);

        residentsFunc(residents.length);

        // setResidents(results.residents)
        // setResNum(residents.length)
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

      <div className="row justify-content-center">
        {residents.length > 0 ? (
          <>
            {residentsArray.map((data) => (
              <div className="col-md-4 col-sm-6 col-12 col" key={data.id}>
                <div className="card " style={{ maxWidth: "18rem" }}>
                  <img src={data.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <Link
                      to={`/character/${data.id}`}
                      className="btn btn-success"
                    >
                      {" "}
                      View Profile{" "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p> </p>
        )}
      </div>
    </div>
  );
};
export default LocationDetails;
