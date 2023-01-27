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

//Login user route

router.route("/login").post(async (req, res) => {
    try {
        // Find the user by username
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Compare the provided password with the plain text password in the user document
        if (req.body.password !== user.password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Send a success message to the client
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;