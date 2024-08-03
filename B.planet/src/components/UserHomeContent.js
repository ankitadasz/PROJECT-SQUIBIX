import "../css/home.css";
import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/Hero image 1.png";
import image2 from "../assets/hero image 2.png";
import imagedata from "../store/imagedata.json";

function handleDescription(item)
{
    let useArray = imagedata.filter((user) => {
        return (user.item1.id===item);
    });
    console.log(useArray);
}
function UserHomeContent()
{
    // const [goToProfile , setGoToProfile] = useState(false);
    // if(goToProfile)
    // {
    //     return <Navigate to = "/profile" />;
    // }
    // onClick={()=>setGoToProfile(true)}
    const[userProfile , setUserProfile] = useState({
        name : "",
        email : "",
        password : "",
        role : "",
        number : "",
        address : "",
        state : "",
        zipcode : ""
    });
    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem("signin")) || {     
            profilePic : "",   
            name : "",
            email : "",
            password : "",
            role : "",
            number : "",
            address : "",
            state : "",
            zipcode : ""
        };
        setUserProfile(storedProfile);
    },[]);

    // const [heading , setHeading] = useState("");
    // setHeading("As Interesting as a plant");

    return(
        <>
        <div className="grid-box">
            <div className="gridbox-item1">
                <h1 className="homepage">B.planet</h1>
            </div>

            <div className="gridbox-item2">
                <Link to = "/contact" className="contact">Contact us</Link>
                <Link to = "/profile" ><img src = {userProfile.profilePic} className = "profile" alt = "dp"/></Link>
                <br /><br /><br />
            </div>
            <br />
            <div className="gridbox-item3">
                <p className="heading1">'As Interesting</p>
                <p className="heading2">as a plant'</p>
                {/* <input type = "text" id = "heading" name = "heading" value = {heading} className="heading" readonly /> */}
            </div>
            <div className="gridbox-item4">
                <img src = {image1} alt = "image1" className="image1"/>
                <img src = {image2} alt = "image1" className="image1"/>
            </div>
        </div>
        <div className = "div">
            <br /><br />
            <h2>Featured Product</h2>
            <br />
            <table className="table">
                <tbody>
                    {imagedata.map((item) => (   
                                       
                        <tr className="tr">
                            <td className="td" onClick={() => handleDescription(item.item1.id)}><img src = {item.item1.pic} alt = "pic" />{item.item1.title}</td>
                            <td className="td"><img src = {item.item2.pic} alt = "pic" />{item.item2.title}</td>
                            <td className="td"><img src = {item.item3.pic} alt = "pic" />{item.item3.title}</td>
                            <td className="td"><img src = {item.item4.pic} alt = "pic" />{item.item4.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default UserHomeContent;