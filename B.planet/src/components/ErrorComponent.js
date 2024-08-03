import "../css/login.css";
import login from "../assets/login.png";
import Topbar from "./Topbar";
import {useState} from "react";
import {Link} from "react-router-dom";
import userdata from "../store/userdata.json";
import {Navigate} from "react-router-dom";

function LoginContent()
{
    //for password
    const [isPassword,setIsPassword] = useState(false);
    const handleChange = () => {
        setIsPassword(!isPassword);
    };

    //for storing users input
    const [userData , setUserData] = useState({
        profilePic : "",
        name : "",
        email : "",
        password : "",
        role : "",
        number : "",
        address : "",
        state : "",
        zipcode : ""
    });
    let name,value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({...userData , [name]:value});
    };

    //for comparing the user's input with the data stored in data.json
    const [goToHome , setGoToHome] = useState(false);
    const[goTosignin , setGoTosignin] = useState(false);
    const [goToError , setGoToError] = useState(false);
    if (goToHome)
    {
        return <Navigate to = "/contact" />;
    }
    if (goTosignin)
    {
        return <Navigate to = "/signin"/>;
    }
    if (goToError)
    {
        return <Navigate to = "/sessionexpired" />;
    }
    const handleLogin = (e) => {
        e.preventDefault();
        userdata.map(data => {
            if((data.email === userData.email)&&(data.password === userData.password))
            {
                const user = userdata.find((user) => (user.email === userData.email)&&(user.password === userData.password));
                if(user) {
                    const loginData = {
                        email : user.email,
                        password : user.password,
                        name : user.name,
                        role : user.role,
                        address : user.address,
                        profilePic : user.profilePic,
                        number : user.number,
                        state : user.state,
                        zipcode : user.zipcode
                    };
                    localStorage.setItem ("signin",JSON.stringify(loginData));
                    setUserData(loginData);
                }
                if(data.role === "Admin User")
                {
                    return (setGoToHome(true));
                }
                else
                {
                    return (setGoTosignin(true));
                }
            }
            else
            {
                return(setGoToError(true));
            }
            //return null;
        })
    };

    return(
        <>
            <Topbar />
            <div className="grid">
                <div className = "item1">
                    <img src = {login}  alt = "login"/>
                </div>
                <div className="item2">
                    <h2>Login</h2>
                    <h6 style = {{color : "red"}}>Invalid Credentials!! Try Again</h6>
                    <br/>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email" className="logininput">Email</label>
                        <br/>
                        <input type = "text" id = "email" name = "email" placeholder = "abc@gmail.com" className="logininput1" value = {userData.email} onChange={handleInput} required />
                        <br /><br />
                        <label htmlFor="password">
                            <span className="logininput">Password</span>
                            <span className="input4">Forgot password?</span>
                        </label>
                        <input type = {isPassword ? "text":"password"} id = "password" name = "password" placeholder = "**************" className="logininput1" value = {userData.password} onChange={handleInput} required />
                        <button onClick={handleChange} className="eye">{isPassword?<i className="fa-solid fa-eye-slash"></i>:<i className="fa-solid fa-eye"></i>}</button>
                        <br /><br />
                        <button className="login align" type = "submit" >Log-in</button>
                        <br />
                        <div> 
                            <span className="input2">Don't have an account yet?  </span>
                            <span><Link to = "/signin" className = "input3">Sign up for free</Link></span>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default LoginContent;