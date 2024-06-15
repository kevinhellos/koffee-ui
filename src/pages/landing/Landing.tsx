import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="hero">
        <span className="chip chip-default">BETA version 0.5.2</span>
        <h1 className="hero-main-text">Minimalist class based UI library</h1>
        <p className="hero-sub-text">
          Lightweight UI framework designed to streamline development of modern web interfaces. <br />
          Pre made styleable components built with standard HTML <br />
        </p>
        <div className="hero-cta">
          <Link to="/components" className="btn btn-black btn-font">
            Browse components
          </Link>
          <a className="btn btn-default btn-font" href="https://github.com/kevinhellos/koffee-ui">
            <i className="fab fa-github" style={{marginRight:"5px"}} />
            Github
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
