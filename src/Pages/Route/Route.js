import React from 'react';
import {useRouteMatch, Switch, Route} from "react-router-dom";
import RouteCustomLink from "../Components/Route/RouteCustomLink";
import RouteNestLab from "../Components/Route/RouteNestLab";
import RoutePreventLab from "../Components/Route/RoutePreventLab";
import RouteRecursiveLab from "../Components/Route/RouteRecursiveLab";
import RouteSideBarLab from "../Components/Route/RouteSideBarLab";
import RouteConfigLab, {routes} from "../Components/Route/RouteConfigLab";
import RouteQueryLab from "../Components/Route/RouteQueryLab";
import RouteTransitLab from "../Components/Route/RouteTransitLab";


const RouteLab = (props) => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <p>Route</p><RouteCustomLink to="/" label="Back" />
            <RouteCustomLink to={`${url}/query`} label="QueryLab" />
            <RouteCustomLink to={`${url}/nest`} label="NestLab" />
            <RouteCustomLink to={`${url}/prevent`} label="PreventLab" />
            <RouteCustomLink to={`${url}/recursive`} label="RecursiveLab" />
            <RouteCustomLink to={`${url}/sidebar`} label="SideBarLab" />
            <RouteCustomLink to={`${url}/transition`} label="TransitLab" />
            <RouteCustomLink to={`${url}/config`} label="ConfigLab" />
            <Switch>
                {/*do not set 'exact = true' on url chain when using NESTED url*/}
                <Route path={`${path}/query`} ><RouteQueryLab /></Route>
                <Route path={`${path}/nest`} ><RouteNestLab /></Route>
                <Route path={`${path}/prevent`} ><RoutePreventLab /></Route>
                <Route path={`${path}/recursive`} ><RouteRecursiveLab /></Route>
                <Route path={`${path}/sidebar`} ><RouteSideBarLab /></Route>
                <Route path={`${path}/sidebar`} ><RouteTransitLab /></Route>
                <Route path={`${path}/config`} ><RouteConfigLab routes={routes} /></Route>
            </Switch>
        </div>

    )
}
export default RouteLab
