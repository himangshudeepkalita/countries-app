import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            <span className="logo-main">
              COUNTRY <span className="logo-highlight">Explorer</span>
            </span>
          </NavLink>

          <nav className="navbar-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/countries" className="nav-link">
              Countries
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
