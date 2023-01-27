import React from "react";
import './App.css';

export default function Register(){
    return(
        <div>
            <form >
                <h1>Registration</h1>
                <label>Username:</label>
                <input type="text" placeholder="Username"></input><br/>
                <label>Password:</label>
                <input type="text" placeholder="Password"></input><br/>
                <button>Register</button>
                
            </form>
            
        </div>
    )
}