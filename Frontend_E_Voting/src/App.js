import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import BlogOverview from "./views/BlogOverview";
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Registre from './components/registre.component';
import Dashboard from './components/dashboard.component';
import {BrowserRouter   ,Switch  , Route, Redirect} from "react-router-dom";
import routes from "./routes";
import withTracker from "./withTracker";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <BrowserRouter>
    
    
    
      
        
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  exact path='/login' component={Login} />
        <Route exact path='/registre' component={Registre} />
        <Route exact path='/dashboard' component={Dashboard}  />
        </Switch>
        
      
    </BrowserRouter>
   
  );
}

export default App;


  
