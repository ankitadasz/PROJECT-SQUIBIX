import "../css/topbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Topbar()
{
    return(
        <>
            <div className="topbar">
                <span></span>
                <span className="sitename"><h1>B.planet</h1></span>
                <span><Link to = "/contact" className="contact">Contact us</Link></span>
            </div>
        </>
    )
}

export default Topbar;