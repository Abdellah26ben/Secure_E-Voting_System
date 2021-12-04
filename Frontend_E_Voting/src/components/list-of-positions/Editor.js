import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button,
  Row,
  Badge,
  Col
} from "shards-react";
import { Link } from 'react-router-dom'
const cardStyle = {
  width: "12rem",
  height: "12rem",
  background: "gray",
  margin: "5rem",
  borderradius: "10px"
  
};

const cardSelect = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  
};

export default function App() {
  const [selected, setSelected] = React.useState(0);

 

    return (
      
      
    <Row>
    <Col>
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">List Of Positions</h6>
        </CardHeader>
        <CardBody className="p-0 pb-3">
          <table className="table mb-0">
            <thead className="bg-light">
              <tr>
                <th scope="col" className="border-0">
                  #
                </th>
                <th scope="col" className="border-0">
                  Name of Positions
                </th>
                <th scope="col" className="border-0">
                  Total Candidates
                </th>
                <th scope="col" className="border-0">
                  Check here
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>President</td>
                <td>10</td>
                <td><Link to="/list-of-candidates" className="btn btn-primary">Check here</Link></td>
              
              </tr>
              <tr>
                <td>2</td>
                <td>Vice President</td>
                <td>15</td>
                <td><Link to="/list-of-candidates" className="btn btn-primary">Check here</Link></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Asistant</td>
                <td>12</td>
                <td><Link to="/list-of-candidates" className="btn btn-primary">Check here</Link></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Recuriter</td>
                <td>16</td>
                <td><Link to="/list-of-candidates" className="btn btn-primary">Check here</Link></td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </Col>
  </Row>
    );
  }