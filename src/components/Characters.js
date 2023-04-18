import { Link } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";
import ReactPaginate from 'react-paginate'
const Characters = ({ characterArray, pageCountCharacters, setpageCountCharacters, getNext}) => {
   


  return (
    <div className="">
      <h1>Characters</h1>
      <div className="">
        <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {characterArray.length > 0 ? (
            <>
              {characterArray.map((data) => (
                <div className="col" key={data.id}>
                  <div
                    className="card text-center"
                    style={{ maxWidth: "15rem" }}
                  >
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
            <p>false</p>
          )}
        </div>
      </div>

      <ReactPaginate
        breakLabel={"..."}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        nextLabel={"next"}
        onPageChange={getNext}
        pageCount={pageCountCharacters}
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
  );
};

export default Characters;
