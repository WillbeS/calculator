import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import storage from '../storage/LocalStorage';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        storage.isUserAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )
    } />
)

export default PrivateRoute;