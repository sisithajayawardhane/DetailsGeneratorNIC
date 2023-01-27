import React, {useState} from "react"; 
import './App.css';
import Axios from 'axios';

export default function Register(){

    const [usernameReg,setUsernameReg] = useState("");
    const [passwordReg,setPasswordReg] = useState("");

    const register = () => {
        Axios.post("http//localhost:3001/register",
        {   username:usernameReg,
            password:passwordReg
        }).then((response)=>{
            console.log(response);
        });
    };
    return(
        <div>
            <form >
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
                
            </form>
            
        </div>
    )
}