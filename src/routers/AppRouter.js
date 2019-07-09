
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';

import Dashboard from '../components/Dashboard';
import ItemList from '../components/Item';
import ItemDetail from '../components/ItemDetail';
import NavbarGlobal from '../components/Nav';


import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Login from '../components/Login'; 

export const history = createHistory();

const AppRouter = () => (
  <Router history={history} >
    <NavbarGlobal />
    <Switch>
      <PrivateRoute path="/" exact component={Dashboard} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/events/instant" exact component={ItemList} />
      <PrivateRoute path="/events/instant/:id" component={ItemDetail} />
      <PublicRoute path={"/login"} component={Login} />
    </Switch>
  </Router>
)

export default AppRouter;


