import React from 'react';
import {Switch, Route, Link, useRouteMatch} from "react-router-dom";

const RouteSideBarLab = () => {
    const {url} = useRouteMatch();

    return (
            <div style={{ display: "flex" }}>
                <div style={{ padding: "10px", width: "40%", background: "#f0f0f0" }} >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li><Link to={`${url}/c`}>A</Link></li>
                        <li><Link to={`${url}/a`}>B</Link></li>
                        <li><Link to={`${url}/b`}>C</Link></li>
                    </ul>

                    <Switch>
                        {routes.map((route, index) => (
                            <Route key={index} path={url+route.path} exact={route.exact} children={<route.sidebar />}/>
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route key={index} path={url+route.path} exact={route.exact} children={<route.main />} /> ))}
                    </Switch>
                </div>
            </div>
    );
}
export default RouteSideBarLab;

const routes = [
    {
        path: "/a",
        exact: true,
        sidebar: () => <div>intro A</div>,
        main: () => <h2>Component A!</h2>
    },
    {
        path: "/b",
        sidebar: () => <div>intro B</div>,
        main: () => <h2>Component B!</h2>
    },
    {
        path: "/c",
        sidebar: () => <div>intro C</div>,
        main: () => <h2>Component C!</h2>
    }
];
