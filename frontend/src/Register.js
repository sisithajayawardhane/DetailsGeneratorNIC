import React, {useState} from "react"; 
import {Link} from "react-router-dom";
import './App.css';
import Axios from 'axios';

export default function Register(){

    const [usernameReg,setUsernameReg] = useState("");
    const [passwordReg,setPasswordReg] = useState("");

    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8070/user/register",
        {   username:usernameReg,
            password:passwordReg
        }).then(()=>{
            alert("User registered!"); 
        }).catch((err)=>{
            alert(err);
        })
    };
    return(
        <div>
            <form className="first" >
                <h1>Registration</h1>
                <label>Username:</label>
                <input type="text" placeholder="Username" onChange={(e)=>{
                    setUsernameReg(e.target.value);
                }}></input><br/>
                <label>Password:</label>
                <input type="password" placeholder="Password" onChange={(e)=>{
                    setPasswordReg(e.target.value);
                }}></input><br/>
                <button onClick={register}>Register</button>
                <button><Link to="/login">Go to Login page</Link></button>

                
            </form>
            
        </div>
    )
}