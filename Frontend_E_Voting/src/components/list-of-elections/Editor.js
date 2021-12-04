import React from "react";
import { useHistory } from "react-router-dom";
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
  Col,
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
      
      <div class="row">
        <Link
        to="/list-of-positions"  style={{ ...cardStyle, ...(selected === 1 && cardSelect) }}>
          
          {selected === 0 && <div className="select">select</div>}
          <span color="black">Here </span>
        </Link>
  
        <Link
        to="/list-of-positions"  style={{ ...cardStyle, ...(selected === 1 && cardSelect) }}>
          
          {selected === 0 && <div className="select">select</div>}
          <span color="black">Here </span>
        </Link>
  
        <Link
        to="/list-of-positions"  style={{ ...cardStyle, ...(selected === 1 && cardSelect) }}>
          
          {selected === 0 && <div className="select">select</div>}
          <span color="black">Here </span>
        </Link>
        <FormGroup className="mb-0">
            <Button theme="accent" type="submit">
              Select One Election
            </Button>
          </FormGroup>
  
      </div>
     
    );
  }