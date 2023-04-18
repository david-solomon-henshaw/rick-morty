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
          console.log(res.data)
          setLocation(res.data.location.name)
          console.log(location)

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

    <div class="card" style={{width: "18rem"}}>
 <img src={character.image} className="img-fluid rounded-start" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{character.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> Gender: {character.gender}</li>
      <li class="list-group-item"> Status: {character.status}</li>
      <li class="list-group-item">Species:  {character.species}</li>
      <li class="list-group-item"> Location: {location}</li>

    </ul>
  
  </div>


        
  }

    
    </div>
  )
}

export default CharacterDetails