import React from "react";
import  { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import {NavDropdown} from 'react-bootstrap'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink,
  Button,
} from "shards-react";

const Logout = () => {

 
 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      setLoading(false);
    }
  }, []);

  
  const handleLogout = e => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/api/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace('http://localhost:3000/login');
      });
  };

  
  let currentUser = JSON.parse(localStorage.getItem('user'))['username'];
  console.warn(currentUser);


    return (
      <NavItem >
          
            <NavDropdown title = {currentUser}>
            
            <NavDropdown.Item><input type='button'  className='button' value='Logout' onClick={handleLogout} /></NavDropdown.Item>
            </NavDropdown>
          
      </NavItem>
    );
  }
export default Logout
