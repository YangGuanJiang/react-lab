import React, {useState} from 'react';
import {useRouteMatch, Switch, Route} from "react-router-dom";
import RouteCustomLink from "../Components/Route/RouteCustomLink";
import RouteNestLab from "../Components/Route/RouteNestLab";
import RoutePreventLab from "../Components/Route/RoutePreventLab";



const RouteLab = (props) => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <p>Route</p><RouteCustomLink to="/" label="back">Back</RouteCustomLink>
            <RouteCustomLink to={`${path}/nest`} label="RouteNestLab" />
            <RouteCustomLink to={`${path}/prevent`} label="RoutePreventLab" />
            <Switch>
                {/*do not set 'exact = true' on url chain when using NESTED url*/}
                <Route path={`${path}/nest`} ><RouteNestLab /></Route>
                <Route path={`${path}/prevent`} ><RoutePreventLab /></Route>
            </Switch>
        </div>

    )
}
export default RouteLab
