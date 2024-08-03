import React from "react";
import { Link } from "react-router-dom";

function Session()
{
    return (
        <>
            <div style = {{textAlign : "center",marginTop : "45vh"}}>
                <h1>This Session has expired</h1>
                <span>
                    Click
                    <Link to = "/"> here </Link>
                    to refresh
                </span>
            </div>
        </>
    )
}

export default Session;