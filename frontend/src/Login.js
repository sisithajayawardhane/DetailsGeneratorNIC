import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import Axios from 'axios';

export default function Login(){

    const navigate = useNavigate();
    const [usernameLog,setUsernameLog] = useState("");
    const [passwordLog,setPasswordLog] = useState("");

    const login = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8070/user/login",
        {   username:usernameLog,
            password:passwordLog
        }).then(()=>{
            alert("Login Succes!"); 
            navigate("/details");

        }).catch((err)=>{
            alert(err);
        })
    };
    return(
        <div>
            <form className="second">
                <h1>Login</h1>
                <label>Username:</label>
                <input type="text" placeholder="Username" onChange={(e)=>{
                    setUsernameLog(e.target.value);
                }}></input><br/>
                <label>Password:</label>
                <input type="password" placeholder="Password" onChange={(e)=>{
                    setPasswordLog(e.target.value);
                }}></input><br/>
                <button onClick={login}>Login</button>
                
            </form>
            
        </div>
    )
}