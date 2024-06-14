import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbarIsOpen, setNavbarIsOpen] = useState<boolean>(false);

    return (
        <nav className={`topnav ${navbarIsOpen ? "responsive" : ""}`}>
          <Link className="nav-brand" to="/">
            koffee ui 
          </Link>

          <Link className="nav-link" to="/components">
            Components
          </Link>

          <Link className="nav-link" to="/release">
            Release
            <span className="chip chip-black">new</span>
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>

          <a 
            onClick={() => setNavbarIsOpen(!navbarIsOpen)}
            className="btn btn-plain icon">
            {navbarIsOpen ? (
              <i className="fas fa-xmark"></i>
            ):(
              <i className="fas fa-bars" />
            )}
          </a>
          
        </nav>
    );
}
 
export default Navbar;