import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import logo from './logo.svg';
import './Routes.css';
import BankApp from "./BankApp/BankApp";
import Sidebar from "./Sidebar/Sidebar";


function Routes() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Switch>
                <Route path="/login">
                    <h1>Login</h1>
                    <div >Alguma coisa</div>
                </Route>
                <Route path="/BankApp">
                    <div >Outra coisa</div>
                    <BankApp />
                </Route>
                <Route path="/register">
                    <div >Register</div>
                </Route>
                <Route path="/">
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                Edit <code>src/App.tsx</code> and save to reload.
                            </p>
                            <Link className="App-link" to="/login">
                                Sing In
                            </Link>
                            <Link className="App-link" to="/BankApp">
                                BankApp
                            </Link>
                        </header>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;