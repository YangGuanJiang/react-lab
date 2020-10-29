import React from "react";
import {Link, useLocation, useRouteMatch} from "react-router-dom";


export default function RouteQueryLab() {
    let query = new URLSearchParams(useLocation().search);
    console.log(useLocation().search,query.get("name"),query.get("id"));
    const {url} = useRouteMatch();

    return (
        <div>
            <ul>
                <li><Link to={`${url}/account?name=netflix&id=2`}>Netflix</Link></li>
                <li><Link to={`${url}/account?name=zillow-group`}>Zillow Group</Link></li>
                <li><Link to={`${url}/account?name=yahoo`}>Yahoo</Link></li>
                <li><Link to={`${url}/account?name=modus-create`}>Modus Create</Link></li>
            </ul>

            {query.get("name") ? (<h3>The <code>name</code> in the query string is &quot;{query.get("name")}&quot;</h3>)
                : (<h3>There is no name in the query string</h3>)}
        </div>
    );
}

