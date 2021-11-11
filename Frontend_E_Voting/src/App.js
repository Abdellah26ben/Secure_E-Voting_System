import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Registre from './components/registre.component';
import {BrowserRouter, Switch , Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
    
    
      <div className="App">
        
      <Nav/>
     <div className="auth-wrapper">
      <div className="auth-inner">
        
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  exact path='/login' component={Login} />
        <Route exact path='/registre' component={Registre} />
        </Switch>
        
      </div>
      </div>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
