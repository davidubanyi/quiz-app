import React from 'react'
import {Switch, Route } from 'react-router-dom'
import routes from './routes';
import './App.css';

function App() {
  return (
    <Switch>
      {routes.map((route,i)=> <Route key={i} path={route.path} component={route.component} />)}
    </Switch>
  );
}

export default App;
