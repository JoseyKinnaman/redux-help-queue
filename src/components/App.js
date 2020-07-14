import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Signin from './Signin'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return ( 
    <div class="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <TicketControl/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;