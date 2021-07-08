import React from 'react'
import {Switch, Route } from 'react-router-dom'
import routes from './routes';
/**
 * Handles the page displayed based on the path using react-router
 * @returns JSX
 */
function App() {
  return (
    <Switch>
      {routes.map((route,i)=> <Route key={i} path={route.path} component={route.component} />)}
    </Switch>
  );
}

export default App;
