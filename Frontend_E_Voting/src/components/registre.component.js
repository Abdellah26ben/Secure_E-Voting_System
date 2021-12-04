import React,{ Component , useState, useEffect } from "react";
import { Link, NavLink,useHistory } from "react-router-dom";
import Nav from "./nav.component";
import "../App.css"



function Registre() {

    const [username, setUsername] = useState('');
    
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const styleRed = {color : 'red'};
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
          window.location.replace('http://localhost:3000/voter_dashboard');
        } else {
          setLoading(false);
        }
      }, []);



      async function registre()
        
        {
            console.warn(username,email,first_name,last_name,password)
            let item = {username,email,first_name,last_name,password}



            fetch('http://127.0.0.1:8000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept":'application/json'
            },
            body: JSON.stringify(item)
            })

            .then(res => res.json())
            .then(data => {
                if (data.token) {
                localStorage.clear();
                localStorage.setItem('token', data.token);
                localStorage.setItem("user",JSON.stringify(data.user));
                window.location.replace('http://localhost:3000/voter_dashboard');
                } else {
                    setUsername('');
                    setFirstName('');
                    setLastName('');  
                    setEmail('');
                    setPassword('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
  };



        
    
    
    
        return (
            
            <div className="App">
        <Nav/>
      
     <div className="auth-wrapper">
      <div className="auth-inner">

      
            
            <form>
                
                <h3>Register</h3>
                {errors ===true && 
                
                
                <h2 style={styleRed}></h2>
                
            }
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter your Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                
                    
                    />

                </div>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" 
                     value={first_name}
                     onChange={e => setFirstName(e.target.value)}
                     required
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                     value={last_name}
                     onChange={e => setLastName(e.target.value)}
                     required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     required
                    />
                </div>

                <button  type='button' onClick={registre} className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
            </div>
              </div>
             </div>
    
              
                          
          
        );
      };
      export default Registre