import React from 'react';
import {Link, useHistory} from "react-router-dom";

const Dummy = (props) => {
    const history = useHistory();


    return (
        <div>
            <p>Can't Match any route</p>
            <Link to={`/`} >Back</Link>
            <button onClick={() => history.goBack()}>Home</button>
        </div>

    )
}
export default Dummy
