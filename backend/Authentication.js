const router = require("express").Router();
let User = require("./User.js");

//Register user route

router.route("/register").post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    

    const newUser = new User({
        username,
        password
    });
    
    newUser.save().then(()=>{
        res.json("User added");
    }).catch((err)=>{
        console.log(err);
    });
});

module.exports = router;