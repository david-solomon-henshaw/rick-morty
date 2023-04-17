import { Link } from "react-router-dom";

const Characters = ({ characterArray, nextPage}) => {
  return (
    <div className="cont">
      <h1>Characters</h1>
      <div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {characterArray.length > 0 ? (
            <>
              {characterArray.map((data) => (
                
                <div
                  key={data.id}
                  className="card text-center col-sm"
                  style={{ width: "18rem" }}
                >
                  <img src={data.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <Link className="btn btn-success">
                      {" "}
                      View Profile{" "}
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>false</p>
          )}
        </div>
      </div>

     <button onClick={nextPage} >Next</button>
    </div>
  );
};

export default Characters;
