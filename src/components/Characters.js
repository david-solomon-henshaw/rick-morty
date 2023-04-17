const Characters = ({characterArray}) => {

 
  return (
    <div>
      <h1>Characters</h1>

  {
    characterArray.length > 0 ? (<>
        {characterArray.map((data) => 
            <div key={data.id} className="card text-center" style={{width: "18rem"}}>
            <img src={data.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <a href="#" className="btn btn-success"> View Profile </a>
            </div>
          </div>
        )}
        </>
    
    ): <p>false</p>
  }

    </div>
  );
};

export default Characters;
