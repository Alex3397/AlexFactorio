import './Routes.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BankApp from "./Parallel/BankApp/BankApp";
import Sidebar from "./Sidebar/Sidebar";
import Login from "./Main/Login/Login";
import SignUp from "./Main/SignUp/SignUp";
import LandingPage from "./Main/LandingPage/LandingPage";
import MainPage from './Main/MainPage/MainPage';


function Routes() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/bankapp">
                    <BankApp />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/main">
                    <MainPage />
                </Route>
                <Route path="/">
                    <LandingPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;