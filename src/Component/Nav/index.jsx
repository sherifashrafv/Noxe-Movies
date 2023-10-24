import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
export default function Nav({ userData, logout }) {
  return (
    <nav className={`navbar navbar-dark navbar-expand-lg bgNavbar`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Noxe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userData ? (
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `nav-link active` : "nav-link "
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  "
                  aria-current="page"
                  to="/movies"
                >
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  "
                  aria-current="page"
                  to="/Tvshows"
                >
                  Tvshows
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  "
                  aria-current="page"
                  to="/People"
                >
                  People
                </NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="d-flex align-items-center ">
              <i className="fab fa-facebook ms-2"></i>
              <i className="fab fa-spotify ms-2"></i>
              <i className="fab fa-instagram ms-2"></i>
              <i className="fab fa-youtube ms-2"></i>
            </div>
            {userData ? (
              <li className="nav-item d-flex  align-items-center">
                <p className="mb-0 px-2">Welcome : {userData.first_name}</p>
                <Link onClick={logout} className="nav-link">
                  LogOut
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/Register"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/Login">
                    LogIn
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
