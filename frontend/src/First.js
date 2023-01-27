import React from "react";
import {Link} from "react-router-dom";

export default function First(){
    return(
        <div>
            <h1>Derive Details from NIC</h1>
            <button><Link to="/register">Register</Link></button>
            <button><Link to="/login">Login</Link></button>

        </div>
    )
}