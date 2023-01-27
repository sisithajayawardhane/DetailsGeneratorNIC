const express = require("express");
const mysql = require('mysql');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userDB"
});

app.listen(3001, ()=>{
    console.log("running server");
})
