import axios from "axios";
import { Redirect } from "react-router-dom";

function Test() {
    axios('http://localhost:3000/success').catch(function (error) {
        if (error.response) {
            return (
                <>
                <Redirect to="/login" />
                </>
            )
        }
    })

    return(
        <>
            <div className="App-header">
                alguma coisa
            </div>
        </>
    )
}

export default Test;