import React from "react";
import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark " data-bs-theme="dark">
      <div className="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="/apple-touch-icon.png"
            alt=" "
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          <span style={{ margin: "1rem" }}>{props.title}</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.subTitle1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.subTitle2}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
