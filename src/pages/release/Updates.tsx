import { Link } from "react-router-dom";

const Updates = () => {

  const containerStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "400px",
  };

  return (
    <>
      <div className="workarea">
        <h1 style={{ fontWeight: 500 }} className="text-center">
          Updates
        </h1>
        <p className="hero-sub-text text-center">
            Component updates/ bug fixes and enhancements.
        </p>

        <div className="tab mx-auto">
            <Link to="/release">Releases</Link>
            <Link className="active" to="/updates">Updates</Link>
        </div>

        <div style={containerStyle}>

        <div className="bar bar-default shadow" style={{ padding: "10px 15px", marginTop: "15px" }}>
            <div style={{ marginTop: "10px" }}>
              <span className="chip chip-default chip-sm">Fix</span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <small>Released on June 17 2024</small>
            </div>
            <p>Fix table component for a more rounded border radius</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Updates;
