import {Prompt} from "react-router-dom";
import React, {useState} from "react";

function BlockingForm() {
    let [isBlocking, setIsBlocking] = useState(false);

    return (
        <form onSubmit={event => {
            event.preventDefault();
            event.target.reset();
            setIsBlocking(false);}}>
            <Prompt when={isBlocking} message={location =>
                    `Are you sure to ${location.pathname}` }/>
            <p>Blocking? {isBlocking ? "Yes" : "No"}</p>
            <p><input size="50" placeholder="type to block"
                      onChange={event => {setIsBlocking(event.target.value.length > 0);}}/></p>
            <p><button>Submit to stop blocking</button></p>
        </form>
    );
}
export default BlockingForm
