const Card = () => {
  return (
    <div className="component-preview-card text-center">
      <div className="component-preview-card-title">Card</div>
      <div style={{ marginTop: 10 }}>
        <div className="card">
          <div className="card-title">Card title</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          soluta minus praesentium.
          <div className="card-action">
            <button className="btn btn-black float-right">Discard</button>
            <button className="btn btn-plain float-right">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
