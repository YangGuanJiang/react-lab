import {HashRouter, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import './App.css';
import React, {Component, useState} from "react";
import Hooks from './Pages/Hooks/Hooks';
import Home from './Pages/Home/Home';
import Dummy from './Pages/Dummy';
import RouteLab from  './Pages/Route/Route'
import RoutePrivateRoute from "./Pages/Components/Route/RoutePrivateRoute";
import RouteLogin from  './Pages/Components/Route/RouteLogin'
import {fakeAuth} from "./Pages/Components/Route/routeServices";

function App() {

    const [isAuth, setAuth] = useState(false);

    function login(from, history, _this) {
        fakeAuth.authenticate().then((res) => {
            setAuth(res);
            history.replace(from);
        })

    }

    return (
        <div>
            <HashRouter>
                <Switch >
                    <Route path="/" exact ><Home isAuth={isAuth} /></Route>
                    <Route path="/login" exact render={() => <RouteLogin login={login}/>}  />
                    <RoutePrivateRoute path="/route" children={<RouteLab />} isAuth={isAuth} />
                    <Route path="/hooks" component={Hooks} exact />
                    <Route path="/dummy" component={Dummy} exact />
                </Switch>
            </HashRouter>
        </div>
    );


}

export default App;
