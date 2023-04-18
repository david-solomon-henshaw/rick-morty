import { Link } from "react-router-dom";

import ReactPaginate from 'react-paginate'
const Characters = ({ filterHuman, filterAlien, filterHumanoid, filterPoopybuthole, filterMythological, filterSpeciesUnknown, filterAnimal, filterDiesease, filterRobot, filterCronenberg, filterPlanet,filterMale,filterGenderless,filterUnknownGender,filterFemale,filterAlive ,filterUnknown ,filterDead , characterArray, pageCountCharacters, setpageCountCharacters, getNext}) => {
   

  return (
    <div className="container">
      <h1>Characters</h1>


      <div class="accordion" id="accordionExample">
  <div class="accordion-iterm">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Status
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <button onClick={filterAlive} className="btn btn-outline-success">Alive Filter</button>
      <button onClick={filterDead} className="btn btn-outline-danger">Dead Filter</button>
      <button onClick={filterUnknown} className="btn btn-outline-warning">Unknown</button>
      </div>
    </div>
  </div>
  <div class="accordion-iterm">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <button onClick={filterHuman} className="btn btn-outline-success">Human</button>
      <button onClick={filterDiesease} className="btn btn-outline-danger">Disease</button>
      <button onClick={filterAlien} className="btn btn-outline-warning">Alien</button>
      <button onClick={filterHumanoid} className="btn btn-outline-warning">Humanoid</button>
      <button onClick={filterPlanet} className="btn btn-outline-warning">Planet</button>
      <button onClick={filterPoopybuthole} className="btn btn-outline-warning">Poopybuthole</button>
      <button onClick={filterCronenberg} className="btn btn-outline-warning">Cronenberg</button>
      <button onClick={filterSpeciesUnknown} className="btn btn-outline-warning">Unknown</button>
      <button onClick={filterRobot} className="btn btn-outline-warning">Robot</button>
      <button onClick={filterMythological} className="btn btn-outline-warning">Mythological</button>
      <button onClick={filterAnimal} className="btn btn-outline-warning">Animal</button>

      </div>
    </div>
  </div>
  <div class="accordion-iterm">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Gender
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      
      <button onClick={filterMale} className="btn btn-outline-success">Male</button>
      <button onClick={filterFemale} className="btn btn-outline-danger">Female</button>
      <button onClick={filterGenderless} className="btn btn-outline-warning">Genderless</button>
      <button onClick={filterUnknownGender} className="btn btn-outline-warning">Unknown </button>

      </div>
    </div>
  </div>
</div>





      <div className="container">
        <div className="row justify-content-center">
          {characterArray.length > 0 ? (
            <>
              {characterArray.map((data) => (
                <div className="col-md-4 col-sm-6 col-12 col" key={data.id}>
                  <div
                    className="card "
                    style={{ maxWidth: "18rem" }}
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
        breakClassName={"page-iterm"}
        breakLinkClassName={"page-link"}
        nextLabel={"next"}
        onPageChange={getNext}
        pageCount={pageCountCharacters}
        pageRangeDisplayed={1}
        pageLinkClassName={"page-link"}
        pageClassName={"page-iterm"}
        containerClassName={"pagination justify-content-center mt-3"}
        previousClassName={"page-iterm"}
        previousLinkClassName={"page-link"}
        activeClassName={"active"}
        nextClassName={"page-iterm"}
        nextLinkClassName={"page-link"}
        disabledLinkClassName={"disabled"}
        disabledClassName={"disabled"}
        marginPagesDisplayed={1}
      />
    </div>
  );
};

export default Characters;
