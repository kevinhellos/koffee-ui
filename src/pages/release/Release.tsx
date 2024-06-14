const Release = () => {
    return (
      <>
        <div className="workarea">
          <h1 style={{ fontWeight: 500 }} className="text-center">Release</h1>
          <p className="hero-sub-text text-center">
            All previous, upcoming releases and patches of Koffee UI will be documented here.
          </p>

          <div
            style={{
                marginLeft: "auto",
                marginRight:"auto",
                display: "block",
                width: "500px"
            }}
          >

                <div className="bar bar-default" style={{padding: "10px 15px"}}>
                    <div style={{marginTop: "10px"}}>
                        <span className="chip chip-default">v 1.0</span>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <small>(coming soon)</small>
                    </div>
                    <p>
                        Available for downloads via npm
                    </p>
                </div>

                <div className="bar bar-default" style={{padding: "10px 15px", marginTop: "15px"}}>
                    <div style={{marginTop: "10px"}}>
                        <span className="chip chip-black">v 0.5.1</span>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <small>Released on June 14 2024</small>
                    </div>
                    <p>
                        Components added: card, dialog, radio
                    </p>
                </div>

                <div className="bar bar-default" style={{padding: "10px 15px", marginTop: "15px"}}>
                    <div style={{marginTop: "10px"}}>
                        <span className="chip chip-black">v 0.5</span>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <small>Released on June 14 2024</small>
                    </div>
                    <p>
                        Components added: buttton, chip, bar, input, popper
                    </p>
                </div>

          </div>

        </div>
      </>
    );
  };
  
  export default Release;
  