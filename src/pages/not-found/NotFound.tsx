import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="workarea text-center">
        <h1 style={{ fontWeight: 500 }}>
          Page not found
        </h1>
        <p className="hero-sub-text" style={{marginBottom: "30px"}}>
            The page you've requsted could not be found
        </p>
        <Link to="/" className="btn btn-default">
            Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
