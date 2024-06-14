const Radio = () => {
  return (
    <div className="component-preview-card text-center">
      <div className="component-preview-card-title">Radio</div>
      <div style={{ marginTop: 20 }}>
        <div className="radio">
          <div>
            <label className="radio-label">
              <input type="radio" name="radio" defaultChecked={true} />
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
  );
};

export default Radio;
