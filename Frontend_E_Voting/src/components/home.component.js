import React,{ Component } from "react";
import background from "../images/img.jpg"
import Nav from "./nav.component";

export default class Home extends Component{
    render() {
        return (
          <div className="App">
        <Nav/> 
      
     <div className="auth-wrapper">
      <div className="auth-inner">
           
          <h2>Secure Online Voting Platform </h2>
          </div>
          </div>
             </div>
        );
      }
    }