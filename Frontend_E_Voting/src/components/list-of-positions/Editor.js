import React,{ Component, useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
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

class Child extends React.Component {
  
  // Constructor 
  constructor(props) {
      super(props);
      
      this.state = {
          items: [],
          DataisLoaded: false,
          showing:false
      };
  }
 
 
  componentDidMount() {

    let CurrentElection = JSON.parse(localStorage.getItem('currentElection'));
    console.warn(CurrentElection);

      fetch(
"http://127.0.0.1:8000/api/auth/positions/"+CurrentElection)
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }

  handleInput = (e) => {
    
    console.log(e.target.value);
    localStorage.setItem("currentPosition",JSON.stringify(e.target.value));
    this.props.history.push("/list-of-candidates");
}    
  render() {
    const { DataisLoaded, items } = this.state;
    
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;
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


              {
                items.map((item) => ( 
                
                    
          
                  <tr>
                <td></td>
                <td>{item['fields'].election_position_name}</td>
                <td>10</td>
                <td><button type='button' onClick={e => this.handleInput(e, "value")} value = {item.pk}  className="btn btn-primary btn-block">Check here</button>
</td>
                
               
              
              </tr>
      
    

                     
                   
                ))
            }



              
             
            </tbody>
          </table>
        </CardBody>
      </Card>
    </Col>
  </Row>
     );
    }
    
}

    export default withRouter(Child)