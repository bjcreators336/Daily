import React from "react";
import Buttons from './Buttons'
export default function Navbar(props) {
  return (
    <>
      <div className="Navbar" style={{ border: "1px solid #222529"}}>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    {props.aboutText}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    {props.linkText}
                  </a>
                </li>
              </ul>
              <div className="buttons">
                <Buttons/>
              </div>
            
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
                <label className="form-check-label" htmlFor="switchCheckDefault"> {props.type} </label>
              </div>
            </div>
            </div>
        </nav>
      </div>
    </>
  );
};