import { useRef } from "react";

const Dialog = () => {

  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="component-preview-card text-center">
      <div className="component-preview-card-title">
        Dialog{""}
        <span
          style={{ marginTop: 10 }}
          className="block chip chip-default mx-auto"
        >
          Requires Javascript
        </span>
      </div>
      <div style={{ marginTop: 30 }}>
        <dialog ref={dialogRef}>
          <div className="dialog-title">Dialog</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus provident 
            nobis quisquam tenetur odit omnis vero officia odio dicta?
          </p>
          <button
            type="button"
            className="btn btn-black float-right"
            onClick={() => {
              dialogRef?.current?.close();
            }}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-default float-right"
            onClick={() => {
              dialogRef?.current?.close();
            }}
          >
            Close
          </button>
        </dialog>

        <button
          type="button"
          className="btn btn-black"
          onClick={() => {
            dialogRef?.current?.showModal();
          }}
        >
          Show dialog
        </button>
      </div>
    </div>
  );
};

export default Dialog;
