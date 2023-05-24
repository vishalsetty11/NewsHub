import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="container" data-bs-theme="dark">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">
            © NewsHub 2022 Company, Inc
          </p>

          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            target="_self"
          >
            <img
              src="/apple-touch-icon.png"
              alt="NewsHub Favicon"
              className="bi"
              width="50"
              height="50"
            >
              {/* <use xlink:href="#bootstrap"></use> */}
            </img>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted" target="_self">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://newsapi.org/"
                className="nav-link px-2 text-muted"
                target="_blank"
              >
                API
              </a>
            </li>
            <li className="nav-item">
              <a
                href="About.js"
                className="nav-link px-2 text-muted"
                target="_blank"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="Contact.js"
                className="nav-link px-2 text-muted"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer