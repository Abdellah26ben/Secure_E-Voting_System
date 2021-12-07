
import React,{ Component, useState, useEffect } from "react";
import Child from '../../components/list-of-positions/Editor';
import { withRouter } from 'react-router-dom';

import { useHistory } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  CardFooter,
  CardActions,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button,
  Row,
  Badge,
  Col,
} from "shards-react";
import { DropDownList } from "@progress/kendo-react-dropdowns";

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


class App extends React.Component {
  // Constructor 
  constructor(props) {
      super(props);
      this.handleInput = this.handleInput.bind(this);
      this.state = {
          items: [],
          DataisLoaded: false,
          showing:false
      };
  }
 
  // ComponentDidMount is used to
  // execute the code 
  
  componentDidMount() {
      fetch(
"http://127.0.0.1:8000/api/auth/electionlist/")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }

   
  handleInput(e) {
    
    console.log(e.target.value);
    localStorage.setItem("currentElection",JSON.stringify(e.target.value));
    this.props.history.push("/list-of-positions");
}    

  render() {
      const { DataisLoaded, items } = this.state;
      const { showing } = this.state;
      
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
      return (
      <Row>
          <h1> List of Elections </h1>  {
                items.map((item) => ( 
                
                    <Card style={{ maxWidth: "300px" }}>
          <CardHeader>Start time { item.election_start }</CardHeader>
        <CardImg src="https://place-hold.it/300x200" />
        <CardBody>
          <CardTitle>{ item.election_name }</CardTitle>
         
          End time { item.election_end }
       </CardBody>
      <CardFooter>  
 

<button type='button' onClick={e => this.handleInput(e, "value")} value = {item.election_generated_id}  className="btn btn-primary btn-block">Check here</button>
{ showing 
                    ? <Child  CurrentElection= {item.election_name} ></Child>
                    : null
                }
 </CardFooter>
     </Card>

                     
                   
                ))
            }
        
  
          </Row>
     
    );
  }
}

export default withRouter(App);