import React from 'react';
import {Link, Route} from "react-router-dom";

const RouteSubLink = (props) => {
    const Links = props.routes.map((route,index) => {
        return (!route.routes) ? (<li key={index}><Link  to={props.url+route.path}>{route.path}</Link></li>)
            : (<RouteSubLink key={index} routes={route.routes} url={props.url+route.path} />)
    })

    return (
        Links
    );

}
export default RouteSubLink;
