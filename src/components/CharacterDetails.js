import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CharacterDetails = () => {
  
   const [character, setCharacter] = useState('')
   const [location, setLocation] = useState('')

    const {id}= useParams()
  





    const getCharacter = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
          const results = res.data
          setCharacter(results);
         // console.log(res.data)
          setLocation(res.data.location.name)
         // console.log(location)

        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
     getCharacter();
    }, []);
  


    return (
    <div className='justify-content-center container mt-5  text-center'>
  
    
  {

    <div className="card" style={{width: "18rem"}}>
 <img src={character.image} className="img-fluid rounded-start" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{character.name}</h5>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Gender: {character.gender}</li>
      <li className="list-group-item"> Status: {character.status}</li>
      <li className="list-group-item">Species:  {character.species}</li>
      <li className="list-group-item"> Location: {location}</li>

    </ul>
  
  </div>


        
  }

    
    </div>
  )
}

export default CharacterDetails