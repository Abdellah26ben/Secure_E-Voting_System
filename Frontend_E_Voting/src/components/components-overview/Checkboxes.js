import React from "react";
import { Col, FormCheckbox } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
const Checkboxes = () => (
  <Col sm="12" md="4" className="mb-3">
    <strong className="text-muted d-block mb-2">Checkboxes</strong>
    <fieldset>
      <FormCheckbox>Default</FormCheckbox>
      <FormCheckbox defaultChecked>Checked</FormCheckbox>
      <FormCheckbox disabled>Disabled</FormCheckbox>
      <FormCheckbox disabled defaultChecked>
        Disabled Checked
      </FormCheckbox>
    </fieldset>
  </Col>
);

export default Checkboxes;
