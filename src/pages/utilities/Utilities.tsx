const Utilities = () => {
  return (
    <>
      <div className="workarea">
        <h1 style={{ fontWeight: 500 }} className="text-center">
          Utilities
        </h1>
        <p className="hero-sub-text text-center">
          Often we need to position components in a specific way to
          achive the desired look and feel, <br />
          without the need for plain CSS. Koffee UI team has created a
          set of utilities classes for that.
        </p>

        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            maxWidth: "800px",
          }}
        >

          <h3 style={{fontWeight: 500, marginTop: 25}}>Border radius</h3>
          <table className="table">
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
            <tr className="text-center">
              <td>.rounded-max</td>
              <td>
                Apply a border radius of 10 rem. Very rounded
              </td>
            </tr>
          </table>

          <h3 style={{fontWeight: 500, marginTop: 50}}>
            Cursor
          </h3>
          <table className="table">
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
            <tr className="text-center">
              <td>.cursor-pointer</td>
              <td>
                Apply a cursor: pointer property
              </td>
            </tr>
            <tr className="text-center">
              <td>.cursor-not-allowed</td>
              <td>
                Apply a cursor: not-allowed property
              </td>
            </tr>
          </table>

          <h3 style={{fontWeight: 500, marginTop: 50}}>
            Positioning
          </h3>
          <table className="table">
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
            <tr className="text-center">
              <td>.float-left</td>
              <td>
                Float an element to the left
              </td>
            </tr>
            <tr className="text-center">
              <td>.float-right</td>
              <td>
                Float an element to the right
              </td>
            </tr>
            <tr className="text-center">
              <td>.text-center</td>
              <td>
                Position a text in the center
              </td>
            </tr>
            <tr className="text-center">
              <td>.text-left</td>
              <td>
                Position a text in the left
              </td>
            </tr>
            <tr className="text-center">
              <td>.text-right</td>
              <td>
                Position a text in the right
              </td>
            </tr>
            <tr className="text-center">
              <td>.mx-auto</td>
              <td>
                Force an item to be centered
              </td>
            </tr>
            <tr className="text-center">
              <td>.flex</td>
              <td>
                Flex components to be in a single 
              </td>
            </tr>
            <tr className="text-center">
              <td>.block</td>
              <td>
                Force components display: block;
              </td>
            </tr>
          </table>

        </div>
      </div>
    </>
  );
};

export default Utilities;
