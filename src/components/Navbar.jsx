import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand text-white">
              <h4>React Movie App</h4>
            </Link>
            <div className="d-flex text-white align-items-center">
              
                <h5 className="mb-0 text-capitalize">
                  Name
                </h5>
            
                <button className="ms-2 btn btn-outline-light">
                  Login
                </button>
              
                <button className="ms-2 btn btn-outline-light">
                  Logout
                </button>
             
                <button className="ms-2 btn btn-outline-light">
                  Register
                </button>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;