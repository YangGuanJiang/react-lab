import React from 'react';
import {Switch, Link, useRouteMatch} from "react-router-dom";
import RouteSubRoute from "./RouteSubRoute";
import RouteSubLink from "./RouteSubLink";

const RouteConfigLab = (props) => {
    const {url} = useRouteMatch();

    return (
        <div>
            <ul>
                <RouteSubLink  routes={props.routes} url={url} />
            </ul>
            <Switch>
                <RouteSubRoute  routes={props.routes} url={url} />
            </Switch>
        </div>
    )
}
export default RouteConfigLab;


function P(props) {
    console.log(props)
    return (
        <div>
            <p>props :</p>
            {Object.keys(props).forEach((key) => {
                console.log(props[key]);
                return <p key={key}>{props[key]}</p>
            })
            }
        </div>
    );
}

export const routes = [
    {
        path: "/parent1",
        component: () => <P props={"myProps"} />
    },
    {
        path: "/parent2",
        component: P,
        routes: [
            {
                path: "/parent2/child1",
                component: P
            },
            {
                path: "/parent2/child2",
                component: P
            }
        ]
    }
];
