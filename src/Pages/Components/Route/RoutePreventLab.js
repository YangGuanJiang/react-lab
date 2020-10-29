import React from "react";
import {Switch, useRouteMatch} from "react-router-dom";
import {Link, Route} from "react-router-dom";
import BlockingForm from "./BlockingForm"


const RoutePreventLab = (props) => {
    let {url, path} = useRouteMatch();

    return (
        <div>
            <Link to={`${url}`}>Form</Link> -->
            <Link to={`${url}/transition`}>Transition</Link>
            <Switch>
                <Route path={`${path}`} exact children={<BlockingForm />} />
                <Route path={`${path}/transition`} children={<p>other page</p>} />
            </Switch>
        </div>
    )
}
export default RoutePreventLab
