import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import BankApp from "./BankApp/BankApp";


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <h1>LOGIN</h1>
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
                            <a className="App-link" href="/BankApp">
                                BankApp
                            </a>
                        </header>
                    </div>
                    <div style={{ color: 'white' }}>Alguma coisa</div>
                </Route>
                <Route path="/BankApp">
                    <div style={{ color: 'white' }}>Outra coisa</div>
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
                            <a className="App-link" href="/BankApp">
                                BankApp
                            </a>
                        </header>
                    </div>
                    <BankApp/>
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
                            <a className="App-link" href="/BankApp">
                                BankApp
                            </a>
                        </header>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;