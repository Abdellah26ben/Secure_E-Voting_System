import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/list-of-candidates/Editor";



import "bootstrap/dist/css/bootstrap.min.css";
import "../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
const ListOfCandidates = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Election Are ready" subtitle="Vote Here" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
        <Editor />
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="3" md="12">
       
      </Col>
    </Row>
  </Container>
);

export default ListOfCandidates;
