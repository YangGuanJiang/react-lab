import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const RoutePrivateRoute = ({children , isAuth,  ...rest}) => {

    return (
        isAuth ? <Route {...rest} render={(location) => children} /> :
        <Route {...rest} render={
            ({location}) => (<Redirect to={{pathname: "/login", state: {from: location}}}/>)}/>
    )
}

export default RoutePrivateRoute;
