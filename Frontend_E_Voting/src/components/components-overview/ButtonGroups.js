import React from "react";
import { ButtonGroup, Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
const ButtonGroups = () => (
  <ButtonGroup className="mb-3">
    <Button theme="primary">Fizz</Button>
    <Button theme="white">Buzz</Button>
    <Button theme="white">Foo</Button>
    <Button theme="white">Bar</Button>
  </ButtonGroup>
);

export default ButtonGroups;
