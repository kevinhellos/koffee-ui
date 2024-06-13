const Components = () => {
  return (
    <>
      <div className="workarea">
        <h1 style={{ fontWeight: 500 }} className="text-center">Components</h1>
        <div className="text-center">
          <span className="chip chip-default">
            This page is still currently being updated
          </span>
        </div>
        {/* <p className="hero-sub-text text-center">
          A collection of reusable UI components to speed up your development
        </p> */}

        <div className="component-preview">

          <div className="component-preview-card text-center">
            <div>Button</div>
            <button className="btn btn-plain" style={{ marginTop: 70 }}>Plain</button>
            <button className="btn btn-default">Default</button>
            <button className="btn btn-black">Black</button>
          </div>

          <div className="component-preview-card text-center">
            <div>Chip</div>
            <div style={{ marginTop: 70 }}>
              <span className="chip chip-default">Default</span>
              <span className="chip chip-danger">Danger</span>
              <span className="chip chip-black">Black</span>
            </div>
          </div>

          <div className="component-preview-card text-center">
            <div>Bar</div>
            <div style={{ marginTop: 20 }}>
              <div className="bar bar-default">
                This is a default bar
              </div>
              <div className="bar bar-danger">
                This is a danger bar
              </div>
              <div className="bar bar-black">
                This is a black bar
              </div>
            </div>
          </div>

          <div className="component-preview-card text-center">
            <div>Input</div>
            <div style={{ marginTop: 20 }}>
              <input
                type="text"
                className="input input-default"
                placeholder="Default"
                defaultValue={"Default"}
              />
              <input
                type="text"
                className="input input-danger"
                placeholder="Danger"
                defaultValue={"Danger"}
              />
              <input
                type="text"
                className="input input-clear"
                placeholder="Clear"
                value={"Clear"}
              />
            </div>
          </div>

          <div className="component-preview-card text-center">
            <div>Popper</div>
            <div style={{ marginTop: 50 }}>
              <div className="popper">
                <span>Hover mouse here</span>
                <div className="popper-content">
                <p>Hello World!</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Components;
