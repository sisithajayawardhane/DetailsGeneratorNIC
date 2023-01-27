const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root1",
    password: "1234",
    database: "userDB",
});



//register route
app.post("/register", (req,res) => {

    const username = req.body.username;
    const password = req.body.password;
    
    
    db.query(
        "INSERT INTO user (username, password) VALUES (?,?)",
        [username,password],
        (err,result) => {
            alert(err) ;
        }
    );
});

app.listen(3001, ()=>{
    console.log("running server");
});