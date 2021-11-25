import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
const CustomSelect = () => (
  <div>
    <InputGroup className="mb-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>Options</InputGroupText>
      </InputGroupAddon>
      <FormSelect>
        <option>Choose</option>
        <option>...</option>
      </FormSelect>
    </InputGroup>

    <InputGroup className="mb-3">
      <FormSelect>
        <option>Choose</option>
        <option>...</option>
      </FormSelect>
      <InputGroupAddon type="append">
        <InputGroupText>Options</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default CustomSelect;
