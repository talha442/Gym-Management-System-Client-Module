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
        <Login/>
        {/* <Register/> */}
      </div>
      <div>
        <Switch>
          <Route exact path="/navigation" component={Navigation}></Route>
          <Route exact path="/equipment" component={Equipment} />
          <Route exact path="/Client" component={Client} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;