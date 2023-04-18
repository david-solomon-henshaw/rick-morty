import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";


const Locations = () => {
  const [locationsArray, setLocations] = useState([]);
   // current page number 
   const [pageNumber, setPageNumber] = useState(1);

   //For Total pages to Be used with react paginate
   const [pageCountLocations, setPageCountLocations] = useState(0);
 


   const getNextLocation = (nextPageNumber) => {
    
    let page = nextPageNumber.selected + 1
    let apiGetMore = `https://rickandmortyapi.com/api/location?page=${page}`;

    
      axios.get(apiGetMore)
      .then((res) => {
        const moreResults = res.data.results;
        setLocations(moreResults)
        console.log(res.data.info, 'info')
        console.log(moreResults)
      
      })
      .catch((error) => {
        console.log(error);
      });
  };






  const getlocations = () => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((res) => {
        const results = res.data.results;
       //console.log(results)
        setLocations(results);
        setPageCountLocations(res.data.info.pages)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getlocations();
  }, []);


  return (
    <div>Locations
    
    
    
    <div className="">
    {locationsArray.length > 0 ? (
        <>
          {locationsArray.map((data) => (
            
            <ul className="list-group"
              key={data.id}
              style={{ width: "18rem" }}
            >
            <h1 className="list-group-item">{data.name}</h1>
            <li className="list-group-item">
            
            <Link
                        to={`/location/${data.id}`}
                        className="btn btn-success"
                      >
                        {" "}
                        Details {" "}
                      </Link>
            
            </li>
            </ul>
          ))}
        </>
      ) : (
        <p>false</p>
      )}
    </div>
    
    
    
    <ReactPaginate
    breakLabel={"..."}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    nextLabel={"next"}
    onPageChange={getNextLocation}
    pageCount={pageCountLocations}
    pageRangeDisplayed={5}
    pageLinkClassName={"page-link"}
    pageClassName={"page-item"}
    containerClassName={"pagination justify-content-center mt-3"}
    previousClassName={"page-item"}
    previousLinkClassName={"page-link"}
    activeClassName={"active"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    disabledLinkClassName={"disabled"}
    disabledClassName={"disabled"}
  />

    

    
    
    
    </div>
  )
}

export default Locations

