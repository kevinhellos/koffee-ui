const Release = () => {

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
          Release
        </h1>
        <p className="hero-sub-text text-center">
          All previous, upcoming releases and patches of Koffee UI will be
          documented here.
        </p>

        <div style={containerStyle}>

          <div className="bar bar-default" style={{ padding: "10px 15px", marginTop: "15px" }}>
            <div style={{ marginTop: "15px" }}>
              <span className="chip chip-default">Future update</span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <small>Coming soon</small>
            </div>
            <p><code>koffee.js</code></p>
          </div>

          <div className="bar bar-default" style={{ padding: "10px 15px", marginTop: "15px" }}>
            <div style={{ marginTop: "15px" }}>
              <span className="chip chip-black">v 0.5.2</span>
            </div>
            <div style={{ marginTop: "20px" }}>
              <span className="chip chip-default chip-sm">Latest</span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <small>Released on June 15 2024</small>
            </div>
            <p>Components added: responsive container, <a href="/utilities" className="link">utilities classes</a></p>
          </div>

          <div
            className="bar bar-default"
            style={{ padding: "10px 15px", marginTop: "15px" }}
          >
            <div style={{ marginTop: "10px" }}>
              <span className="chip chip-black">v 0.5.1</span>
            </div>
            <div style={{ marginTop: "20px" }}>
              <span className="chip chip-danger chip-sm">Deprecated</span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <small>Released on June 14 2024</small>
            </div>
            <p>Components added: card, dialog, radio, file input, pagination, table</p>
          </div>

          <div
            className="bar bar-default"
            style={{ padding: "10px 15px", marginTop: "15px" }}
          >
            <div style={{ marginTop: "10px" }}>
              <span className="chip chip-black">v 0.5</span>
            </div>
            <div style={{ marginTop: "20px" }}>
              <span className="chip chip-danger chip-sm">Deprecated</span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <small>Released on June 14 2024</small>
            </div>
            <p>Components added: buttton, chip, bar, input, popper</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Release;
