import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbarIsOpen, setNavbarIsOpen] = useState<boolean>(false);

    return (
        <nav className={`topnav ${navbarIsOpen ? "responsive" : ""}`}>
          <Link className="nav-brand" to="/">
            koffee ui 
          </Link>

          {/* 
            Use a div instead of an a tag to fix:
            @react-refresh:267 Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
          */}
          <div className="nav-link">
            <div className="popper">
            <span>Explore</span>
            <div className="popper-content" style={{padding: "3px 5px"}}>
              <a href="/explore/components" className="text-left hover-link">
                Components
              </a>
              <a href="/explore/utilities" className="text-left">
                <span className="hover-link">Utilities</span>
                <span className="chip chip-black chip-sm">new</span>
              </a>
            </div>
            </div>
          </div>

          <Link className="nav-link" to="/release">
            Release
            <span className="chip chip-black chip-sm">new</span>
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>

          <a 
            onClick={() => setNavbarIsOpen(!navbarIsOpen)}
            className="btn btn-plain icon">
            {navbarIsOpen ? (
              <>
                <i className="fas fa-xmark" style={{marginRight: 5}}></i>
                <span className="btn-font">Close</span>
              </>
            ):(
              <>
                <i className="fas fa-bars" style={{marginRight: 5}}></i>
                <span className="btn-font">Menu</span>
              </>
            )}
          </a>
          
        </nav>
    );
}
 
export default Navbar;