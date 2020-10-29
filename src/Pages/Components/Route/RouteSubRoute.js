import React from 'react';
import {Route} from "react-router-dom";

const RouteSubRoute = (props) => {
    const Routes = props.routes.map((route,index) => {
        return (!route.routes) ? (<Route key={index} path={props.url+route.path} render={(props) => <route.component name={route.path}/>}/>)
        : (<RouteSubRoute key={index} routes={route.routes} url={props.url+route.path} />)
    })

    return (
        Routes
    );

}
export default RouteSubRoute;
