import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Employee Directory
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" 
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sortbyname"
              className={window.location.pathname === "/allalpha" ? "nav-link active" : "nav-link"}
            >
              Sort By Name
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sortbyage"
              className={window.location.pathname === "/sortbyage" ? "nav-link active" : "nav-link"}
            >
              Sort By Age
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/over50"
              className={window.location.pathname === "/over50" ? "nav-link active" : "nav-link"}
            >
              over 50
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
