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
        <div
          style={{ ...cardStyle, ...(selected === 0 && cardSelect) }}
          onClick={() => setSelected(0)}
        >
          
          {selected === 0 && <div className="select">select</div>}
          <span color="black">Here </span>
        </div>
  
        <div
         
          style={{ ...cardStyle, ...(selected === 1 && cardSelect) }}
          onClick={() => setSelected(1)}
        >
          
          {selected === 1 && <div className="select">select</div>}
          <span>Now</span>
        </div>
  
        <div
          style={{ ...cardStyle, ...(selected === 2 && cardSelect) }}
          onClick={() => setSelected(2)}
        >
          
          {selected === 2 && <div className="select">select</div>}
          <span>Group</span>
        </div>
        <FormGroup className="mb-0">
            <Button theme="accent" type="submit">
              Submit Vote
            </Button>
          </FormGroup>
  
      </div>
     
    );
  }