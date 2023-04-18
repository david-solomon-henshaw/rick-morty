import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success text-emphasis-success">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" >
            <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png" style={{width: "100px"}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" >
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/episodes' className="nav-link active" aria-current="page" >
                  Episodes
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/locations' className="nav-link active" aria-current="page">Locations</Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
