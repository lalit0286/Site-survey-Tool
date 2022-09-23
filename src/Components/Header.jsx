import React from "react";
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <NavLink className="nav-link active mx-5" aria-current="page" to="/Home" style={{textDecoration:'none', color:'white'}}>Site Survey By Freespace</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active mx-5" aria-current="page" to="/Home">Home</NavLink>
        </li>
        <li className="nav-item mx-5">
          <NavLink className="nav-link" to="/View">View</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Header;
