import React from "react";
import './App.css';

export default function Login(){
    return(
        <div>
            <form >
                <h1>Login</h1>
                <label>Username:</label>
                <input type="text" placeholder="Username"></input><br/>
                <label>Password:</label>
                <input type="text" placeholder="Password"></input><br/>
                <button>Login</button>
                
            </form>
            
        </div>
    )
}