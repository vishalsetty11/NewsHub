import React, { Component } from 'react'


export class Navbar extends Component {
  render(props) {
    let {mainTitle, subTitle1}=this.props;
      return (
        <nav className="navbar navbar-expand-lg  bg-dark " data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="/apple-touch-icon.png"
                alt=" "
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              <span style={{ margin: "1rem" }}>{mainTitle}</span>
            </a>

            <button
              className="navbar-toggler active"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    rel="noreferrer"
                    aria-current="page"
                    href="https://textutils-reactjs.vercel.app/about"
                    target="_blank"
                  >
                    {subTitle1}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
  }
}

export default Navbar