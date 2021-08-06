import { Link } from "react-router-dom"
import { DiAndroid } from "react-icons/di";
import "./Login.css";

const Login = () => {
    return (
        <>
            <div id="login">
                <div className="header">
                    <Link className="logo" to="/"><DiAndroid /></Link>
                </div>
                <div className="main">
                    <div className="content">
                        <div className="form-container">
                            <div className="form-header">
                                <h1 className="header-tittle">Sign in to AlexHub</h1>
                            </div>
                            <div className="form-body">
                                <form className="form" action="/login" acceptCharset="UTF-8" method="post">
                                    <label className="form-label" htmlFor="username">
                                        Username or email address
                                    </label>
                                    <input className="form-input" id="username" type="text" name="username" autoComplete="username" autoCorrect="off" autoCapitalize="none" />
                                    <label className="form-label" htmlFor="password">
                                        Password
                                        <Link className="forgot-password" to="/forgot">Forgot Password?</Link>
                                    </label>
                                    <input className="form-input" id="password" type="password" name="password" autoCorrect="off" autoCapitalize="none" />
                                    <input className="form-button" id="button" type="submit" name="commit" value="Sign in"></input>
                                </form>
                            </div>
                        </div>
                        <p className="callout">New to AlexHub? <Link className="callout-link" to="signup">Create an Account</Link>.</p>
                    </div>
                </div>
                <div className="footer">
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <Link className="footer-link" to="/terms">Terms</Link>
                        </li>
                        <li className="footer-list-item">
                            <Link className="footer-link" to="/privacy">Privacy</Link>
                        </li>
                        <li className="footer-list-item">
                            <Link className="footer-link" to="/security">Security</Link>
                        </li>
                        <li className="footer-list-item">
                            <Link className="footer-link" to="/contact">Contact Alex</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Login;