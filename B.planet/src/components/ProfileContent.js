import React from "react";
import Topbar from "./Topbar";
import "../css/signin.css";
import { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import profile from "../assets/profile.png";

function ProfileContent()
{
    const [image , setImage] = useState("");
    // const img = localStorage.getItem("image");
    const[isEditing ,setIsEditing] = useState(false);
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
    const handleEdit = () =>
    {
        setIsEditing(true);
    };
    const handleSave = (e) =>
    {
        e.preventDefault();
        if (!userProfile.profilePic){
            userProfile.profilePic = profile;
        }
        localStorage.setItem("signin",JSON.stringify(userProfile));
        setIsEditing(false);
    };
    const handleChange = (e) => {
        const{name,value} = e.target;
        setUserProfile((prevProfile) => ({...prevProfile , [name]:value,}));
    };
    const handleImageChange = (e) =>
    {
        setImage(e.target.files[0]);
        const file = e.target.files[0];
        const reader = new FileReader()
        reader.onloadend = () =>{
            setUserProfile({...userProfile, profilePic : reader.result });
        };
        if(file) {
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <>
            <Topbar />
            {isEditing? (
                <div className="grid-container">
                <form>
                    <div className="grid-item1">
                    <br />
                    <img src = {userProfile.profilePic} className = "image" alt = "dp" />
                    <label htmlFor = "upload" ><i className="fa-solid fa-plus icon"></i></label>
                    <input type = "file" accept = "image/jpeg , image/jpg , image/png" id = "upload" className="display" name = "file" onChange={handleImageChange}/>
                </div>
                <div className="grid-item2">
                    <label htmlFor="name" className= "input">Name</label>
                    <br />
                    <input type = "text" id = "name" placeholder = "Name" className="input1" name = "name" value = {userProfile.name ? userProfile.name : "Na"} onChange={handleChange} required/>
                    <br /><br/>
                    <label htmlFor="Email" className="input">Email</label>
                    <br />
                    <input type = "text" id = "Email" placeholder = "abc@gmail.com" className="input1" name = "email" value = {userProfile.email? userProfile.email : "Na"} onChange={handleChange} required/>
                    <br /><br/>
                    <label htmlFor="password" className="input">Password</label>
                    <br />
                    <input type = "password" id = "password" placeholder = "**********" className="input1" name = "password" value = {userProfile.password? userProfile.password : "Na"} onChange={handleChange} required/>
                    <br /><br/>
                    <label htmlFor = "genre" className = "input">Role</label>
                    <br />
                    <input type = "text" className = "input1" name = "role" value = {userProfile.role? userProfile.role : "Na"} onChange={handleChange} required/> 
                    <br /><br />
                    <label htmlFor="number" className="input">Phone Number</label>
                    <br />
                    <input type = "text" id = "number" placeholder = "0123456789" className="input1" name = "number" value = {userProfile.number? userProfile.number : "Na"} onChange={handleChange} required />
                    <br /><br/>
                    <label htmlFor="address" className="input">Address</label>
                    <br />
                    <input type = "text" id = "address" placeholder = "xyz street...." className="input1" name = "address" value = {userProfile.address? userProfile.address : "Na"} onChange={handleChange} required />
                    <br /><br/>
                    <div className="ok">
                        <span>
                            <label htmlFor="state" className="input grid-item3">State</label>
                            <br />
                            <input type = "text" id = "state" placeholder = "Odisha" className="grid-input1 grid-item3" name = "state" value = {userProfile.state? userProfile.state : "Na"} onChange={handleChange} required />
                            <br /><br/>
                        </span>
                        <span>
                            <label htmlFor="zipcode" className="input grid-item3">Zip Code</label>
                            <br />
                            <input type = "text" id = "zipcode" placeholder = "751024" className="grid-input1 grid-item3" name = "zipcode" value = {userProfile.zipcode? userProfile.zipcode : "Na"} onChange={handleChange} required />
                            <br /><br/>
                        </span>
                    </div>
                    <br/>
                    <button onClick={handleSave} className = "signin" >Save changes</button>
                </div>
                </form>
            </div>
            ):(
            <div className="grid-container">
                <form>
                    <div className="grid-item1">
                    <br />
                    <img src = {userProfile.profilePic} className = "image" alt = "dp" />
                    {/* <img src = {profile} className = "image" alt = "dp" /> */}
                    {/* {image ? <img src = {img} alt = "dp" className="image"/> : <img src= {profile} alt = "pic" className = "image" id = "dp" /> } */}
                    <label htmlFor = "upload" hidden><i className="fa-solid fa-plus icon"></i></label>
                    <input type = "file" accept = "image/jpeg , image/jpg , image/png" id = "upload" className="display" name = "file"  readOnly/>
                </div>
                <div className="grid-item2">
                    <button className="edit" onClick={handleEdit}>Edit  <i className="fa-solid fa-pen"></i></button>
                    <label htmlFor="name" className= "input">Name</label>
                    <br />
                    <input type = "text" id = "name" placeholder = "Name" className="input1" name = "name" value = {userProfile.name ? userProfile.name : "Na"} readOnly required/>
                    <br /><br/>
                    <label htmlFor="Email" className="input">Email</label>
                    <br />
                    <input type = "text" id = "Email" placeholder = "abc@gmail.com" className="input1" name = "email" value = {userProfile.email? userProfile.email : "Na"} readOnly required/>
                    <br /><br/>
                    <label htmlFor="password" className="input">Password</label>
                    <br />
                    <input type = "password" id = "password" placeholder = "**********" className="input1" name = "password" value = {userProfile.password? userProfile.password : "Na"} readOnly required/>
                    <br /><br/>
                    <label htmlFor = "genre" className = "input">Role</label>
                    <br />
                    <input type = "text" className = "input1" name = "role" value = {userProfile.role? userProfile.role : "Na"} required readOnly/> 
                    <br /><br />
                    <label htmlFor="number" className="input">Phone Number</label>
                    <br />
                    <input type = "text" id = "number" placeholder = "0123456789" className="input1" name = "number" value = {userProfile.number? userProfile.number : "Na"}required readOnly />
                    <br /><br/>
                    <label htmlFor="address" className="input">Address</label>
                    <br />
                    <input type = "text" id = "address" placeholder = "xyz street...." className="input1" name = "address" value = {userProfile.address? userProfile.address : "Na"} readOnly required />
                    <br /><br/>
                    <div className="ok">
                        <span>
                            <label htmlFor="state" className="input grid-item3">State</label>
                            <br />
                            <input type = "text" id = "state" placeholder = "Odisha" className="grid-input1 grid-item3" name = "state" value = {userProfile.state? userProfile.state : "Na"} readOnly required />
                            <br /><br/>
                        </span>
                        <span>
                            <label htmlFor="zipcode" className="input grid-item3">Zip Code</label>
                            <br />
                            <input type = "text" id = "zipcode" placeholder = "751024" className="grid-input1 grid-item3" name = "zipcode" value = {userProfile.zipcode? userProfile.zipcode : "Na"} readOnly required />
                            <br /><br/>
                        </span>
                    </div>
                    <br/>
                </div>
                </form>
            </div>)}
        </>
    )
}

export default ProfileContent;