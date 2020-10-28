import React from "react";
import {Link} from "react-router-dom";

const Home = (props) => {

    return (
        <div>
            <ul>
                <li><Link to="/route">route</Link></li>
                <li><Link to="/hooks" >hooks</Link></li>
                <li><Link to="/dummy">dummy</Link></li>
            </ul>
        </div>
    )
}
export default Home
