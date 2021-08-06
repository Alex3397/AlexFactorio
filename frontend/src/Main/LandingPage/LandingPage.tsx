import { Link } from "react-router-dom"
import logo from './logo.svg';


const LandingPage = () => {
    return (
        <>
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
        </>
    )
}

export default LandingPage