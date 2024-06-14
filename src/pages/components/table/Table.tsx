const Table = () => {
  return (
    <div className="component-preview-card text-center">
      <div className="component-preview-card-title">Table</div>
      <div style={{ marginTop: 25 }}>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>Alan Filler</td>
            <td>alan_filler@gmail.com</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>john_doe@gmail.com</td>
          </tr>
          <tr>
            <td>Lucy Chen</td>
            <td>lucy_chen@gmail.com</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table;
