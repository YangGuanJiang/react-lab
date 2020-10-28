import React from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";

const RouteLogin = (props) => {
    const location = useLocation();
    const history = useHistory();

    const {from} = location.state || {from: {pathname: '/'}};

    return (
        <div>
            <p>Hit login to view {from.pathname}</p>
            <button onClick={() => props.login(from, history, props._this)}>login</button>
            <Link to="/" >back</Link>
        </div>
    )
}
export default RouteLogin

