import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="px-3 navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item me-5">
          <NavLink to="/login" className="nav-link" >Login</NavLink>
        </li>
       
      </ul>
    </div>
  </nav>
  )
}
