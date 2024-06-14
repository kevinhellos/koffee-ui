const Pagination = () => {
  return (
    <div className="component-preview-card text-center">
      <div className="component-preview-card-title">Pagination</div>
      <div style={{ marginTop: 60 }}>
        <div className="pagination">
          <button className="btn btn-default">Previous</button>
          <button className="btn btn-black">1</button>
          <button className="btn btn-default">2</button>
          <button className="btn btn-default">3</button>
          <button className="btn btn-default">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
