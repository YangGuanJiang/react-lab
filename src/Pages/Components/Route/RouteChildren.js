import React from 'react';
import {useParams} from "react-router-dom";

function RouteChildren () {
    let { param } = useParams();

    return (
        <div>
            <p>{param}</p>
        </div>
    );
}
export default RouteChildren
