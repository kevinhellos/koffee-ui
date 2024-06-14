import { useRef } from "react";

const Components = () => {

  const dialogRef = useRef<HTMLDialogElement>(null);

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

          {/* Button */}
          <div className="component-preview-card text-center">
            <div>Button</div>
            <button className="btn btn-plain" style={{ marginTop: 70 }}>Plain</button>
            <button className="btn btn-default">Default</button>
            <button className="btn btn-black">Black</button>
          </div>

          {/* Chip */}
          <div className="component-preview-card text-center">
            <div>Chip</div>
            <div style={{ marginTop: 70 }}>
              <span className="chip chip-default">Default</span>
              <span className="chip chip-danger">Danger</span>
              <span className="chip chip-black">Black</span>
            </div>
          </div>

          {/* Bar */}
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

          {/* Input */}
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
                defaultValue={"Clear"}
              />
            </div>
          </div>

          {/* Radio */}
          <div className="component-preview-card text-center">
            <div>Radio</div>
            <div style={{ marginTop: 20 }}>

              <div className="radio">
                <div>
                  <label className="radio-label">
                    <input type="radio" name="radio" defaultChecked={true}/>
                    <span>Option 1</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="radio" />
                    <span>Option 2</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="radio" />
                    <span>Option 3</span>
                  </label>
                </div>
              </div>

            </div>
          </div>

          {/* File upload */}
          <div className="component-preview-card text-center">
            <div>File upload</div>
              <div style={{ marginTop: 70 }}>

                <div className="file mx-auto">
                  <label 
                    htmlFor="file"
                    className="file-prompt"
                    >
                    Choose a file
                  </label>
                  <input type="file" name="file" id="file"/>
                </div>

              </div>
          </div>

          {/* Popper */}
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

          {/* Card */}
          <div className="component-preview-card text-center">
            <div>Card</div>
            <div style={{ marginTop: 10 }}>

              <div className="card">
                <div className="card-title">
                  Card title
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta minus praesentium. 
                <div className="card-action">
                  <button className="btn btn-black float-right">
                    Discard
                  </button>
                  <button className="btn btn-plain float-right">
                    Confirm
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Dialog */}
          <div className="component-preview-card text-center">
            <div >
              Dialog{""}
              <span style={{ marginTop: 10 }} className="block chip chip-default mx-auto">Requires Javascript</span>
            </div>
            <div style={{ marginTop: 35 }}>

              <dialog ref={dialogRef}>
                <div className="dialog-title">
                  Hello there !
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta cumque cum ea hic adipisci ipsam porro laudantium molestias omnis quod!
                </p>
                <button
                  type="button"
                  className="btn btn-black float-right"
                  onClick={() => {
                    dialogRef?.current?.close();
                  }}
                >Close</button>
                <button
                  type="button"
                  className="btn btn-default float-right"
                  onClick={() => {
                    dialogRef?.current?.close();
                  }}
                >Close</button>
              </dialog>

              <button
                type="button"
                className="btn btn-black"
                onClick={() => {
                  dialogRef?.current?.showModal();
                }}
              >Show dialog</button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Components;
