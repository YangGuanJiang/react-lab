import React from 'react';
import {useParams, useRouteMatch, Switch, Link, Route} from "react-router-dom";

function RouteParam () {
    let { param } = useParams();
    let { path, url } = useRouteMatch();

    let item = find(parseInt(param));

    return (
        <div>
            <p>{`path: ${path}`}</p>
            <p>{`url: ${url}`}</p>
            <h3>{item.name}’s Friends</h3>

            <ul>
                {item.child.map(id => (
                    <li key={id}>
                        <Link to={`${url}/${id}`} >
                            {find(id).name}</Link>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route path={`${url}/:param`}>
                    <RouteParam />
                </Route>
            </Switch>
        </div>
    );

}
export default RouteParam

function find(id) {
    const _recursion = [
        { id: 0, name: "A", child: [1, 2, 3] },
        { id: 1, name: "B", child: [0, 2, 3] },
        { id: 2, name: "C", child: [0, 1, 3] },
        { id: 3, name: "D", child: [1, 2, 3] }
    ];
    return _recursion.find(p => p.id === id);
}
