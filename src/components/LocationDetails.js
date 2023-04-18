import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const LocationDetails = () => {
    const [character, setLocations] = useState('')
    const [residents, setResidents] = useState('')
 
     const {id}= useParams()
   
 
 
 
 
 
     const getCharacter = () => {
       axios
         .get(`https://rickandmortyapi.com/api/location/${id}`)
         .then((res) => {
           const results = res.data
           setLocations(results);
           setResidents(results.residents)
           console.log(res.data)
 
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
     <div className="card-body">
       <h5 className="card-title">{character.name}</h5>
     </div>
     <ul className="list-group list-group-flush">
     
     </ul>
   
   </div>
 
 
         
   }
 
     
     </div>
   )
 }
export default LocationDetails