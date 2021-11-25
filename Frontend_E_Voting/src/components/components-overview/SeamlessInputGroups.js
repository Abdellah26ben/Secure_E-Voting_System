import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Button
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
const SeamlessInputGroups = () => (
  <div>
    <InputGroup seamless className="mb-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">person</i>
        </InputGroupText>
      </InputGroupAddon>
      <FormInput value="design.revision" onChange={() => {}} />
    </InputGroup>

    <InputGroup seamless className="mb-3">
      <FormInput
        type="password"
        value="mySuperSecretPassword"
        onChange={() => {}}
      />
      <InputGroupAddon type="append">
        <InputGroupText>
          <i className="material-icons">lock</i>
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>

    <InputGroup seamless className="mb-3">
      <FormInput placeholder="Recipient's username" />
      <InputGroupAddon type="append">
        <Button theme="white">Button</Button>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default SeamlessInputGroups;
