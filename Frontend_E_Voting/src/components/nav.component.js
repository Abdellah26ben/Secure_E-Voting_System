import React,{ Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Nav extends Component{
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <div class="container">
    

    
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link class="nav-link" to={'/'} >Home</Link>
        </li>

      </ul>
      

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link  to={'/login'} className="nav-link" >Login</Link>
          </li>
          <li className="nav-item">
          <Link  to={'/registre'} className="nav-link" >Registre</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to={'/dashboard'} >Dashboard</Link>
        </li>
        </ul>
        
        
      </div>
    </div>
    
  </div>
  
</nav>
            
            
          
        );
      }
    }