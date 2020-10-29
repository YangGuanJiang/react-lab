import React, {useState} from 'react';
import {useRouteMatch, Switch, Route} from "react-router-dom";
import RouteParam from "./RouteParam";
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
                <Route path={`${path}/:param`} ><RouteParam /></Route>
            </Switch>
        </div>

    )
}
export default RouteNestLab
