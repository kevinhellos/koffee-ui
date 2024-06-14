const FileUpload = () => {
    return (
        <div className="component-preview-card text-center">
        <div className="component-preview-card-title">File upload</div>
          <div style={{ marginTop: 55 }}>

            <div className="file mx-auto">
              <label 
                htmlFor="file"
                className="file-prompt"
                >
                  Upload file
              </label>
              <input type="file" name="file" id="file"/>
            </div>

          </div>
      </div>
    );
}
 
export default FileUpload;