import React, {useState} from 'react';
import {Link, useRouteMatch, Switch, Route} from "react-router-dom";
import RouteChildren from "./RouteChildren";
import RouteCustomLink from "./RouteCustomLink";

const RouteNestLab = (props) => {
    let { path, url } = useRouteMatch();
    const [input, setInput] = useState( '');

    function inputChangeHdl(event) {
        setInput(event.target.value);
    }

    return (
        <div>
            <p>RouteNestLab</p><RouteCustomLink to="/route" label="back">Back</RouteCustomLink>
            <div>
                <input type="text" onChange={inputChangeHdl}/>
            </div>
            <RouteCustomLink to={`${url}/${input}`} label="Input">Input</RouteCustomLink>

            <Switch>
                <Route exact path={`${path}`}>
                    <p>Please type</p>
                </Route>
                {/*do not set 'exact = true' on url chain when using NESTED url*/}
                <Route path={`${path}/:param`} ><RouteChildren /></Route>
            </Switch>
        </div>

    )
}
export default RouteNestLab
