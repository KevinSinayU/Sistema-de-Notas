import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-brand appTitle">NOTES APP</button>
    </div>
    <div className="menuContainer">
      <div className="menu">
          <Link to='/' className="bi bi-house-door-fill">&nbsp; ALL</Link>
          <Link to='/active' className="bi bi-check-square-fill">&nbsp; ACTIVE</Link>
          <Link to='/archived' className="bi bi-archive-fill">&nbsp; ARCHIVED</Link>
      </div>
      <div className="selectorContainer">
        <div className="dropdown categorySelector">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter Notes
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/" className="dropdown-item" href="#">ALL NOTES</Link></li>
            <li><Link to="/filter/work" className="dropdown-item" href="#">WORK</Link></li>
            <li><Link to="/filter/study" className="dropdown-item" href="#">STUDY</Link></li>
            <li><Link to="/filter/personal" className="dropdown-item" href="#">PERSONAL</Link></li>
            <li><Link to="/filter/social" className="dropdown-item" href="#">SOCIAL</Link></li>
            <li><Link to="/filter/finance" className="dropdown-item" href="#">FINANCE</Link></li>
          </ul>
        </div>
      </div>
      </div>     
    </nav>
  )
}
