import React from 'react';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light my-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><span></span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <a className="nav-link hov" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hov" href="/">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hov" href="/">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hov" href="/">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
