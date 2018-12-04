import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../core/routes/PrivateRoute';

import HomePage from './components/pages/HomePage';
import LoginPage from './moduls/users/LoginPage';
import RegisterPage from './moduls/users/RegisterPage';
import LogoutPage from './moduls/users/LogoutPage';
import CreateItem from './moduls/items/crud/CreateItem';


const Routes = (props) => (
    <Switch>
        <PrivateRoute path='/' exact component={HomePage} />
        <PrivateRoute path='/item/create' exact component={CreateItem} />
        <PrivateRoute path='/item/edit/:id' exact component={EditItem} />
        
        <Route path='/register' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/logout' exact component={LogoutPage} />
    </Switch>
);

export default Routes;