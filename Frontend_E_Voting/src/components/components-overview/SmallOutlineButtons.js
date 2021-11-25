import React from "react";
import { Row, Col, Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
const SmallOutlineButtons = () => (
  <Row>
    <Col>
      <Button outline size="sm" theme="primary" className="mb-2 mr-1">
        Primary
      </Button>
      <Button outline size="sm" theme="secondary" className="mb-2 mr-1">
        Secondary
      </Button>
      <Button outline size="sm" theme="success" className="mb-2 mr-1">
        Success
      </Button>
      <Button outline size="sm" theme="danger" className="mb-2 mr-1">
        Danger
      </Button>
      <Button outline size="sm" theme="warning" className="mb-2 mr-1">
        Warning
      </Button>
      <Button outline size="sm" theme="info" className="mb-2 mr-1">
        Info
      </Button>
      <Button outline size="sm" theme="dark" className="mb-2 mr-1">
        Dark
      </Button>
      <Button outline size="sm" theme="light" className="mb-2 mr-1">
        Light
      </Button>
    </Col>
  </Row>
);

export default SmallOutlineButtons;
