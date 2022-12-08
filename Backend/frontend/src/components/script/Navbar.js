import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" style={{borderBottom:'1px solid white'}}>
          <div className="container">
            <a className="navbar-brand text-light" href="#" style={{fontSize:'25px'}}>BookCRUD</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon " style={{color:'white'}}></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <Link className="nav-item nav-link active text-light" to='/'>
                    HOME
                  </Link>
                  <Link className="nav-item nav-link active text-light" to='/books'>
                    Books
                  </Link>
                  <Link className="nav-item nav-link active text-light" to='/addBooks'>
                    Add
                  </Link>
              </ul>



            </div>
          </div>
        </nav>
    </div>
);
}
export default Navbar;
