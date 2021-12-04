import React,{ Component, useState, useEffect } from "react";
import Nav from "./nav.component"; 
import {useHistory} from 'react-router-dom'


    function Login () {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const history = useHistory();
        const [errors, setErrors] = useState(false);
        const [loading, setLoading] = useState(true);
        const styleRed = {color : 'red'};
        useEffect(() => {
            if (localStorage.getItem('token')) {
              history.push("/voter_dashboard")
            } else {
              setLoading(false);
            }
          }, [])

          
          
        async function login()
        {
            console.warn(username,password)
            let item = {username,password}
            let result = await fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
              "Content-Type": 'application/json',
              "Accept":'application/json'
            },
            body: JSON.stringify(item)
          });
           result = await result.json();
           
           if (result.non_field_errors) {
            
            setUsername('');
            setPassword('');
            localStorage.clear();
            setErrors(true);
          } else {
            localStorage.clear();
            localStorage.setItem("token",JSON.stringify(result.token));
            localStorage.setItem("user",JSON.stringify(result.user));
            
            if((result.user['is_superuser']))
             {
              history.push("/admin_dashboard");
             }
             else {
              history.push("/voter_dashboard");
             }
            
          }
           
           
        }
              

    
    
        return (
            <div className="App">
        <Nav/> 
      
     <div className="auth-wrapper">
      <div className="auth-inner">

                
            <form>
                
            <h3>Sign In</h3>

            {errors === true && <h2 style={styleRed}>Cannot log in with provided credentials</h2>}

            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username"
           value={username}
           onChange={e => setUsername(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password"
           value={password}
           onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type='button' onClick={login}  className="btn btn-primary btn-block">Login In</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
        </div>
        </div>
             </div>
        );
      }
    export default Login