import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
const CustomFileUpload = () => (
  <div className="custom-file mb-3">
    <input type="file" className="custom-file-input" id="customFile2" />
    <label className="custom-file-label" htmlFor="customFile2">
      Choose file...
    </label>
  </div>
);

export default CustomFileUpload;
