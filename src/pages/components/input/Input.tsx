const Input = () => {
  return (
    <div className="component-preview-card text-center">
      <div className="component-preview-card-title">Input</div>
      <div style={{ marginTop: 15 }}>
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
  );
};

export default Input;
