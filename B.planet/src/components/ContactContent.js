import React from "react" ;
import "../css/contact.css";

function ContactContent()
{
    return (
        <>
            <h1 className="sitename">B.planet</h1>
            <h1 className = "heading1">Contact us</h1>
            <div className="grid-container1">
                <div className="i1">
                    <p className="h1">Stay Updated</p>
                    Need to get in touch with us ?
                    <br /><br />
                    <a href = "https://www.facebook.com/" target = "_blank" className="link">Facebook</a>
                    <br />
                    <a href = "https://www.instagram.com/" target = "_blank" className="link">Instagram</a>
                </div>
                <div className="i2">
                    <input type = "text" id = "name" placeholder = "Enter your name" className="ci"/>
                    <br /><br />
                    <input type = "text" id = "email" placeholder = "Enter your mail " className="ci" />
                    <br /><br />
                    <textarea id ="comment" rows = "3" placeholder="Enter a comment" className="ci"></textarea>
                    <br /><br />
                    <button className="submit">Submit</button>
                </div>
            </div>
        </>
    )
}

export default ContactContent;