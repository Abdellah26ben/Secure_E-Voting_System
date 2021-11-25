import React from "react";
import { Row, Col, Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
const SmallButtons = () => (
  <Row className="mb-3 mt-2">
    <Col>
      <Button size="sm" theme="primary" className="mb-2 mr-1">
        Primary
      </Button>
      <Button size="sm" theme="secondary" className="mb-2 mr-1">
        Secondary
      </Button>
      <Button size="sm" theme="success" className="mb-2 mr-1">
        Success
      </Button>
      <Button size="sm" theme="danger" className="mb-2 mr-1">
        Danger
      </Button>
      <Button size="sm" theme="warning" className="mb-2 mr-1">
        Warning
      </Button>
      <Button size="sm" theme="info" className="mb-2 mr-1">
        Info
      </Button>
      <Button size="sm" theme="dark" className="mb-2 mr-1">
        Dark
      </Button>
      <Button size="sm" theme="white" className="mb-2 mr-1">
        White
      </Button>
    </Col>
  </Row>
);

export default SmallButtons;
