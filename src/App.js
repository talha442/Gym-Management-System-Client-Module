import './App.css';
import React from 'react';
import { Equipment } from './Components/Equipment';
import { Client } from './Components/Client';
import { Navigation } from './Components/Navigation';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Register/> */}
        <Navigation />
        {/* <Login/> */}
      </div>
      <div>
        <Switch>
          {/* <Route exact path="/login" component={Login}></Route> */}
          <Route exact path="/navigation" component={Navigation}></Route>
          {/* <Route path="/register" component={Register}></Route> */}
          <Route exact path="/equipment" component={Equipment} />
          <Route exact path="/Client" component={Client} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;