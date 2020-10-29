import React from 'react';
import {useRouteMatch, Switch, Route, Redirect} from "react-router-dom";
import RouteParam from "./RouteParam";



const RouteRecursiveLab = (props) => {
    let {path} = useRouteMatch();


    return (
        <Switch>
            <Route path={`${path}/:param`}>
                <RouteParam />
            </Route>
            <Route path={`${path}`}>
                <Redirect to={`${path}/0`} />
            </Route>
        </Switch>
    )
}
export default RouteRecursiveLab;
