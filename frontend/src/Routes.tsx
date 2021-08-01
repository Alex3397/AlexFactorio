import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from "./Test";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Test />
                </Route>
                <Route path="/">
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                Edit <code>src/App.tsx</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="/login"
                            >
                                Sing In
                            </a>
                        </header>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;