// import axios from "axios";
// import React, { useState, useEffect } from "react";


// const Locations = () => {
//   const [locationsArray, setLocations] = useState([]);

//   const getlocations = () => {
//     axios
//       .get("https://rickandmortyapi.com/api/location")
//       .then((res) => {
//         const results = res.data.results;
//         console.log(results)
//         setLocations(results);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     getlocations();
//   }, []);


//   return (
//     <div>Locations
    
    
    
//     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
//     {locationsArray.length > 0 ? (
//         <>
//           {Array.map((data) => (
            
//             <div
//               key={data.id}
//               className="card text-center col-sm"
//               style={{ width: "18rem" }}
//             >
//               <img src={data.image} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">{data.name}</h5>
//                 <a href="#" className="btn btn-success">
//                   {" "}
//                   View Profile{" "}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </>
//       ) : (
//         <p>false</p>
//       )}
//     </div>
    
    
    
    
    
    
    
//     </div>
//   )
// }

// export default Locations



import React from 'react'

const Locations = () => {
  return (
    <div>Locations</div>
  )
}

export default Locations